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

	// Internal data storage
	var profiles, assets, sprites;

	/**
	 * {Array} Resolves the given @id {String} into the stored entry of the asset data base.
	 */
	var resolve = function(id) 
	{
		if (id.constructor == Object) {
			return id;
		}
		
		if (core.Env.isSet("debug")) {
			core.Assert.isType(id, "String");
		}
		
		var splits = id.split("/");
		var current = assets;
		for (var i=0, l=splits.length; current && i<l; i++) {
			current = current[splits[i]];
		}
		
		return current;
	};
	
	
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
	 * Returns the URLs for the given entry
	 */
	var entryToUri = function(entry, id) 
	{
		if (core.Env.isSet("debug")) 
		{
			core.Assert.isType(entry, "Map");
			core.Assert.isType(id, "String");
		}
		
		var profile = profiles[entry.p];
		var url = (profile.root || "") + (entry.u || id);

		return url;
	};
	
	
	var idToUri = function(id) 
	{
		if (core.Env.isSet("debug")) {
			core.Assert.isType(id, "String");
		}
		
		var resolved = resolve(id);
		if (core.Env.isSet("debug")) {
			core.Assert.isNotNull(resolved);
		}
		
		return entryToUri(resolved, id);
	};
	
	
	/**
	 * Merged two data maps @src {Map} and @dst {Map} recursively by using as much of 
	 * the original data as possible (no copying). Will never override existing values!
	 */
	var mergeData = function(src, dst)
	{
		for (var key in src) 
		{
			var srcValue = src[key];
			var dstValue = dst[key];
			
			// Just use value from source (works for folders and files)
			if (dstValue == null) {
				dst[key] = srcValue;
			}
			
			// Deep merge
			else if (srcValue.constructor === Object && dstValue.constructor === Object) {
				mergeData(srcValue, dstValue);
			}
		}
	};
	
	
	/**
	 * {Integer} Returns the number of frames for the given @data {Array}.
	 */
	var getFrameNumber = function(data) 
	{
		// Data format is [width, height, spriteData, animationData]
		var animationData = data[3];
		
		// Correct entry length for format detection
		switch(animationData.length)
		{
			case 1:
				// manually defined frames
				return animationData[0].length;
				
			case 2:
				// auto calculated frame size
				return animationData[0] * animationData[1];

			case 3:
				// manually defined frame size
				return animationData[2];
		}
		
		return 1;
	};
	
	
	/**
	 * {String} Returns the sprite ID for the given data @spriteNumber {Integer} and image 
	 * @id {String}.
	 */
	var resolveSprite = function(spriteNumber, assetId)
	{
		if (core.Env.isSet("debug")) 
		{
			core.Assert.isType(spriteNumber, "Number");
			core.Assert.isType(assetId, "String");
		}
		
		// Sprite data format: index, left, top
		var spriteId = sprites[spriteNumber];
		
		// Explicit root path
		if (spriteId.charAt(0) == "/") {
			spriteId = spriteId.slice(1);
		}

		// Local path (same folder as requested image)
		else if (spriteId.indexOf("/") == -1) 
		{
			var pos = assetId.lastIndexOf("/");
			if (pos != -1) {
				spriteId = assetId.slice(0, pos+1) + spriteId;
			}
		}
		
		return spriteId;
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
	 * #require(ext.sugar.Array) 
	 * #require(ext.sugar.Object)
	 * #require(ext.sugar.String)
	 */
	core.Module("core.io.Asset",
	{
		/**
		 * Adds the given asset @data {Map}. Must contain these top level keys:
		 *
		 * * `assets`: The real asset structure representing the client side asset IDs
		 */
		addData : function(data) 
		{
			// Validate input data
			if (core.Env.isSet("debug")) 
			{
				core.Assert.isType(data, "Map");
				core.Assert.isType(data.profiles, "Array");
				core.Assert.isType(data.assets, "Map");
				
				if ("sprites" in data) {
					core.Assert.isType(data.sprites, "Array");
				}
			}

			// Initial data
			if (!profiles)
			{
				profiles = data.profiles;
				assets = data.assets;
				sprites = data.sprites;
			}
			
			// Inject data
			else
			{
				mergeData(data.assets, assets);
				
				// TODO: Merge sprites and profiles
			}
		},
		
		
		/**
		 * Resets the internal state of the asset class.
		 */
		resetData : function() {
			profiles = assets = sprites = null;
		},
		
		
		/**
		 * {String} Converts the given asset @id {String} to a fully qualified URI. 
		 * The method throws an error whenever an asset ID is unknown.
		 */
		toUri : idToUri,
		
		
		/**
		 * {Boolean} Whether the registry has information about the given asset @id {String}.
		 */
		has : function(id) 
		{
			if (core.Env.isSet("debug")) {
				core.Assert.isType(id, "String");
			}
			
			return !!resolve(id);
		},
		
		
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
			if (core.Env.isSet("debug"))
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
			var entries = collect(section, resolve(section), recursive);

			// Resolve URIs for assets
			var uris = [];
			var uriToId = {};
			
			for (var id in entries) 
			{
				// Filter loaded assets
				if (!(id in cache))
				{
					var entry = entries[id];

					var spriteData = entry.d[2];
					if (spriteData) 
					{
						id = resolveSprite(spriteData[0], id);
						
						// Omit loading sprite multiple times
						if (id in cache) {
							continue;
						}
						
						var uri = idToUri(id);
					}
					else
					{
						var uri = entryToUri(entry, id);
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
					callback.call(context||global);
				}
			}
			else
			{
				if (core.Env.isSet("debug")) {
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
						callback.call(context||global);
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
			if (core.Env.isSet("debug"))
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
			
			var uris = ids.map(idToUri);
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
			if (core.Env.isSet("debug")) {
				core.Assert.isType(id, "String", "Invalid asset ID (no string): " + id + "!");
			}

			var entry = resolve(id);
			if (core.Env.isSet("debug") && !entry) {
				throw new Error("Could not figure out size of unknown image: " + id);
			}

			// First two values in data are the size of the image
			return entry.d.slice(0, 2);
		},
		

		/**
		 * {Map} Returns the internal cache object. Be careful with this!
		 */
		getCache: function() {
			return cache;
		},
		
		
		/**
		 * {Integer} Returns the number of frames (for animations) for the given image @id {String}.
		 */
		getFrameNumber: function(id) 
		{
			if (core.Env.isSet("debug")) {
				core.Assert.isType(id, "String", "Invalid asset ID (no string): " + id + "!");
			}
			
			var entry = resolve(id);
			if (core.Env.isSet("debug") && !entry) {
				throw new Error("Could not figure out frame number of unknown image: " + id);
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
			if (core.Env.isSet("debug")) {
				core.Assert.isType(id, "String", "Invalid asset ID (no string): " + id + "!");
			}
			
			var entry = resolve(id);
			if (!entry && core.Env.isSet("debug")) {
				throw new Error("Unknown image: " + id);
			}
			
			var data = entry.d;
			
			var width = data[0];
			var height = data[1];
			
			var spriteData = data[2];
			if (spriteData)
			{
				var spriteId = resolveSprite(spriteData[0], id);
				return {
					node: getFromCache(spriteId, "node"),
					src : idToUri(spriteId),
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
					src : entryToUri(entry, id),
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
			if (core.Env.isSet("debug")) 
			{
				core.Assert.isType(id, "String", "Invalid asset ID (no string): " + id + "!");
				core.Assert.isType(frame, "Integer", "Invalid frame number (no integer): " + frame + " for asset " + id + "!");
			}
			
			var entry = resolve(id);
			if (!entry && core.Env.isSet("debug")) {
				throw new Error("Unknown image: " + id);
			}
			
			var data = entry.d;
			
			var width = data[0];
			var height = data[1];
			
			var spriteData = data[2];
			if (spriteData) 
			{
				var spriteId = resolveSprite(spriteData[0], id);
				var src = idToUri(spriteId);
				var node = getFromCache(spriteId, "node");

				var left = spriteData[1];
				var top = spriteData[2];
			}
			else
			{
				var src = entryToUri(entry, id);
				var node = getFromCache(id, "node");

				var left = 0;
				var top = 0;
			}
			
			var offsetLeft = 0;
			var offsetTop = 0;
			
			var rotation = 0;
			var fps = 0;
			
			// Detect whether a frame config is available
			var frameData = data[3];
			if (frameData) 
			{
				var number = getFrameNumber(entry.d);
				if (frame >= number && core.Env.isSet("debug")) {
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
			else if (frame != 0 && core.Env.isSet("debug"))
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
				rotation : rotation,
				fps : fps
			};
			
			// Prevent changes in object
			if (core.Env.isSet("debug") && Object.freeze) {
				Object.freeze(result);
			}
			
			return result;
		}
	});
	
})(this, Object);

