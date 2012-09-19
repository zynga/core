/*
==================================================================================================
	Core - JavaScript Foundation
	Copyright 2010-2012 Zynga Inc.
==================================================================================================
*/

(function(global, Object)
{
	/** {Map} Internal cache for holding preloaded data */
	var cache = {};
	
	/**
	 * {Map} Collects asset with the given asset @prefix {String} from the given @section {Map}. 
	 * Optionally works recursively by enabling @recursive {Boolean?false}. Last parameter @entries {Map?} 
	 * is used to fill an existing object instead of a new one.
	 */
	var collect = function(prefix, section, recursive, entries) 
	{
		if (!entries) {
			entries = {};
		}
		
		if (section)
		{
			for (var filename in section) 
			{
				var entry = section[filename];
				var id = prefix + "/" + filename;

				// Quite lightweight check: When there is a profile key, we handle it as an entry
				if (typeof entry.p == "number") {
					entries[id] = entry;
				} else if (recursive) {
					collect(id, entry, recursive, entries);
				}
			}
		}
		
		return entries;
	};

	
	/**
	 * {Integer} Returns the number of frames for the given @data {Array}.
	 */
	var getFrameNumber = function(data) 
	{
		// Data format is [width, height, spriteData, animationData]
		var animationData = data[3];
		
		// Correct entry length for format detection
		if (animationData)
		{
			switch(animationData.length)
			{
				case 1:
					// manually defined layout/frames
					return animationData[0].length;

				case 2:
					// auto calculated frame size (based on columns and rows)
					return animationData[0] * animationData[1];

				case 3:
					// manually defined frame size
					return animationData[2];
			}
		}
		
		return 1;
	};
	
	
	/**
	 * {var} Returns a @key {String} from the given asset @id {String} when its available in cache.
	 */
	var getFromCache = function(id, key)
	{
		var cached = cache[id];
		if (cached && key in cached) {
			return cached[key];
		} else {
			return null;
		}
	};


	/**
	 * Contains information about images (size, format, clipping, ...) and
	 * other assets like CSS files, local data, ...
	 *
	 * Works with data delivered by {jasy.Asset} and extends it with useful
	 * tools to make features like animations and sprites easier to use.
	 *
	 * #require(ext.sugar.Array) 
	 * #require(ext.sugar.Object)
	 * #require(ext.sugar.String)
	 */
	core.Module("core.io.Asset",
	{
		/**
		 * Loads the given @section {String}. Optionally @recursive {Boolean?false} where it traverses
		 * the whole tree. The optional @callback {Function?} is executed
		 * in the given @context {Object?} when all files are loaded. It is called with one
		 * parameter which contains are `Map` of all data (relative asset ID to loaded item).
		 * Optionally caching can be disabled by attaching a random `GET` parameter via
		 * setting @random {Boolean} to `true`.
		 */
		preloadSection: function(section, recursive, callback, context, random) 
		{
			if (jasy.Env.isSet("debug"))
			{
				core.Assert.isType(section, "String");

				if (section == "") {
					throw new Error("Invalid section: " + section);
				}
				
				if (section.endsWith("/")) {
					throw new Error("Sections must not end with a slash!")
				}

				if (recursive != null) {
					core.Assert.isType(recursive, "Boolean");
				}

				if (callback != null) {
					core.Assert.isType(callback, "Function");
				}

				if (context != null) {
					core.Assert.isType(context, "Object");
				}

				if (random != null) {
					core.Assert.isType(random, "Boolean");
				}
			}
			
			// Collect asset entries
			var entries = collect(section, jasy.Asset.resolve(section), recursive);

			// Resolve URIs for assets
			var uris = [];
			var uriToId = {};
			
			for (var id in entries) 
			{
				// Filter loaded assets
				if (!(id in cache))
				{
					var entry = entries[id];
					
					// Don't preload audio/fonts/video
					// - The formats for video/audio is typcially streamed.
					// - Mostly offered files are alternative e.g. aac/mp3, ttf/woff, m4v/webm, etc.
					if (entry.t == "a" || entry.t == "f" || entry.t == "v") {
						continue;
					}
					
					// Check whether entry is type of image and is part of a sprite image
					if (entry.t == "i" && entry.d[2]) 
					{
						id = jasy.Asset.resolveSprite(entry.d[2][0], id);

						// Omit loading sprite multiple times
						if (id in cache) {
							continue;
						}

						var uri = jasy.Asset.toUri(id);
					}
					else
					{
						var uri = jasy.Asset.entryToUri(entry, id);
					}
					
					uris.push(uri);
					uriToId[uri] = id;
					
					// Pre-fill cache to mark as blocked for further calls
					cache[id] = true;
				}
			}
			
			if (uris.length == 0) 
			{
				// Execute user defined callback method
				if (callback) {
					callback.call(context||global, Object.keys(entries));
				}
			}
			else
			{
				if (jasy.Env.isSet("debug")) {
					console.debug("Preloading " + section + " (" + uris.length + " assets)...");	
				}
				
				// Start loading of assets
				core.io.Queue.load(uris, function(data) 
				{
					// Fill cache with actual data
					for (var uri in data) {
						cache[uriToId[uri]] = data[uri];
					}

					// Execute user defined callback method
					if (callback) {
						callback.call(context||global, Object.keys(entries));
					}

				}, this, random);
			}
		},


		/**
		 * Loads the given assets by their @ids {String[]} and executes @callback {Function?}
		 * in the given @context {Object?global}. * Optionally caching can be disabled 
		 * by attaching a random `GET` parameter via setting @random {Boolean} to `true`.
		 */
		load: function(ids, callback, context, random) 
		{
			if (jasy.Env.isSet("debug"))
			{
				core.Assert.isType(ids, "Array");

				if (callback != null) {
					core.Assert.isType(callback, "Function");
				}

				if (context != null) {
					core.Assert.isType(context, "Object");
				}

				if (random != null) {
					core.Assert.isType(random, "Boolean");
				}
			}
			
			var uris = ids.map(jasy.Asset.toUri);
			var urisToIds = uris.zip(ids);

			var helper = callback ? function(data) {
				callback.call(context||global, Object.translate(data, urisToIds));
			} : callback;
			
			core.io.Queue.load(uris, helper, this, random);
		},


		/**
		 * {Array} Returns the dimensions of the given image @id {String} with as `width`, `height`.
		 */
		getImageSize : function(id)
		{
			if (jasy.Env.isSet("debug")) {
				core.Assert.isType(id, "String", "Invalid asset ID (no string): " + id + "!");
			}

			var entry = jasy.Asset.resolve(id);
			if (jasy.Env.isSet("debug")) 
			{
				if (!entry) {
					throw new Error("Could not figure out size of unknown image: " + id);
				}

				if (entry.t != "i") {
					throw new Error("Could not figure out size of non image asset: " + id);
				}
			}
			
			// First two values in data are the size of the image
			return entry.d.slice(0, 2);
		},
		
		
		/**
		 * {Integer} Returns the number of frames (for animations) for the given image @id {String}.
		 */
		getFrameNumber: function(id) 
		{
			if (jasy.Env.isSet("debug")) {
				core.Assert.isType(id, "String", "Invalid asset ID (no string): " + id + "!");
			}
			
			var entry = jasy.Asset.resolve(id);
			if (jasy.Env.isSet("debug")) 
			{
				if (!entry) {
					throw new Error("Could not figure out frame number of unknown image: " + id);
				}
				
				if (entry.t != "i") {
					throw new Error("Could not figure out number of frames of non image asset: " + id);
				}
			}

			return getFrameNumber(entry.d);
		},


		/**
		 * {Map} Returns the image data for the given asset @id {String} with the keys:
		 * `src`, `left`, `top`, `width` and `height` to being used in a sprite compatible
		 * image rendering mechanism (e.g. CSS background image + position, Canvas `dragImage`, etc.)
		 */
		getImage : function(id) 
		{
			if (jasy.Env.isSet("debug")) {
				core.Assert.isType(id, "String", "Invalid asset ID (no string): " + id + "!");
			}
			
			var entry = jasy.Asset.resolve(id);
			if (jasy.Env.isSet("debug")) 
			{
				if (!entry) {
					throw new Error("Unknown image: " + id);	
				}
				
				if (entry.t != "i") {
					throw new Error("Could not figure out image data of non image asset: " + id);
				}
			}
			
			var data = entry.d;
			
			var width = data[0];
			var height = data[1];
			
			var spriteData = data[2];
			if (spriteData)
			{
				var spriteId = jasy.Asset.resolveSprite(spriteData[0], id);
				return {
					node: getFromCache(spriteId, "node"),
					src : jasy.Asset.toUri(spriteId),
					left : spriteData[1],
					top : spriteData[2],
					width: width,
					height: height
				};
			}
			else
			{
				// Return compatible data format in cases where no sprite sheet is used
				return {
					node: getFromCache(id, "node"),
					src : jasy.Asset.entryToUri(entry, id),
					left : 0,
					top: 0,
					width: width,
					height: height
				};
			}
		},
		
		
		/**
		 * {Map} Collects and returns data about the given image @id {String} on the given @frame {Number}.
		 * The following fields are available `src`, `left`, `top`, `width`, `height`, `offsetLeft`, `offsetTop` and `rotation`.
		 */
		getFrame : function(id, frame) 
		{
			if (jasy.Env.isSet("debug")) 
			{
				core.Assert.isType(id, "String", "Invalid asset ID (no string): " + id + "!");
				core.Assert.isType(frame, "Integer", "Invalid frame number (no integer): " + frame + " for asset " + id + "!");
			}
			
			var entry = jasy.Asset.resolve(id);
			if (jasy.Env.isSet("debug")) 
			{
				if (!entry) {
					throw new Error("Unknown image: " + id);	
				}
				
				if (entry.t != "i") {
					throw new Error("Could not figure out image data of non image asset: " + id);
				}
			}			
			
			var data = entry.d;
			
			var width = data[0];
			var height = data[1];
			
			var spriteData = data[2];
			if (spriteData) 
			{
				var spriteId = jasy.Asset.resolveSprite(spriteData[0], id);
				var src = jasy.Asset.toUri(spriteId);
				var node = getFromCache(spriteId, "node");

				var left = spriteData[1];
				var top = spriteData[2];
			}
			else
			{
				var src = jasy.Asset.entryToUri(entry, id);
				var node = getFromCache(id, "node");

				var left = 0;
				var top = 0;
			}
			
			var offsetLeft = 0;
			var offsetTop = 0;
			
			var rotation = 0;
			
			// Detect whether a frame config is available
			var frameData = data[3];
			if (frameData) 
			{
				var number = getFrameNumber(entry.d);
				if (frame >= number && jasy.Env.isSet("debug")) {
					throw new Error("Invalid frame number " + frame + " for asset " + id + "!");
				}
				
				// Manual frames
				// Just one sub array with all frames configured manually
				if (frameData.length == 1)
				{
					var frameConfig = frameData[0][frame];
					
					// Format: left, top, width, height, offsetX?, offsetY?, rotation?
					
					// Required fields
					left += frameConfig[0];
					top += frameConfig[1];
					width = frameConfig[2];
					height = frameConfig[3];
					
					// Optional fields
					if (frameConfig.length > 4) 
					{
						offsetLeft = frameConfig[4] || 0;
						offsetTop = frameConfig[5] || 0;
						rotation = frameConfig[6] || 0;
					}
				}

				// Automatic frames
				else
				{
					// Correctly work when using sprite images
					var cols = frameData[0];
					var rows = frameData[1];
					
					// Correct image dimensions
					width /= cols;
					height /= rows;
					
					// Calculate position inside sprite image
					left += (frame % cols) * width;
					top += (~~(frame / cols)) * height;
				}
			}
			else if (frame != 0 && jasy.Env.isSet("debug"))
			{
				throw new Error("Invalid frame number " + frame + " for asset " + id + "!");
			}

			var result = 
			{
				node : node,
				src : src,
				left : left,
				top : top,
				width : width,
				height : height,
				offsetLeft : offsetLeft,
				offsetTop : offsetTop,
				rotation : rotation
			};
			
			// Prevent changes in object
			if (jasy.Env.isSet("debug") && Object.freeze) {
				Object.freeze(result);
			}
			
			return result;
		}
	});
	
})(this, Object);

