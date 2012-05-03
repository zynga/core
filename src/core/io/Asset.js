/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Zynga Inc.
==================================================================================================
*/

(function(global)
{
	//
	// Data formats for image sprites / images frames:
	//
	// [width, height]
	// [400, 200]
	//
	// [width, height, cellNumber, rowNumber]
	// [400, 200, 20, 10]
	//
	// [width, height, cellNumber, rowNumber, frameNumber]
	// [400, 200, 20, 10, 183]
	//
	// [width, height, spriteId, left, top]
	// [24, 24, "icons.png", 48, 0]
	//
	// [width, height, spriteId, left, top, cellNumber, rowNumber]
	// [100, 100, "explode.png", 420, 245, 5, 5] 
	// Image is part of sprite image explode.png with offsets 420x245. It contains 25 images with each being 20x20.
	//
	// [width, height, spriteId, left, top, cellNumber, rowNumber, frameNumber]
	// [100, 100, "explode.png", 420, 245, 5, 5, 23] 
	// Image is part of sprite image explode.png with offsets 420x245. It contains 23 images with each being 20x20.
	//
	// [width, height, spriteId, left, top, [[left,top,width,height], ...]]
	// [60, 40, "explode.png", 420, 245, [[0,0,20,20],[20,0,40,40],[0,20,20,20]]]
	// Image is part of sprite image with offsets 420x245. It contains 3 manually positioned images.
	//
	
	// Internal data storage
	var deployed, root, assets;
	var Object = global.Object;

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
		for (var i=0, l=splits.length; current&&i<l; i++) {
			current = current[splits[i]];
		}
		
		return current;
	};
	
	
	/**
	 * {Map} Collects asset with the given asset @prefix {String} from the given @section {Map}. 
	 * Optionally works recursively by enabling @recursive {Boolean?false} or only 
	 * returns the data by enabling @data {Boolean?false}. Last parameter @all {Map?} 
	 * is used to fill an existing object instead of a new one.
	 */
	var collect = function(prefix, cut, section, recursive, data, all) 
	{
		if (!all) {
			all = {};
		}
		
		if (section)
		{
			for (var filename in section) 
			{
				var entry = section[filename];
				var id = prefix + "/" + filename;

				if (entry.constructor == Object) 
				{
					if (recursive) {
						collect(id, cut, entry, recursive, data, all);
					}
				}
				else
				{
					var localId = !cut ? id : id.slice(cut);
					
					if (data) {
						all[localId] = entry;
					} else if (deployed) {
						all[localId] = root + id;
					} else {
						all[localId] = root + entry[0];
					}
				}
			}
		}
		
		return all;
	};
	

	/**
	 * {String} Converts the given asset @id {String} to a full qualified URI. 
	 * The method throws an error whenever an asset ID is unknown.
	 */
	var toUri = function(id) 
	{
		if (core.Env.isSet("debug")) {
			core.Assert.isType(id, "String");
		}
		
		if (id.charAt("0") == "/" || id.startsWith("http:") || id.startsWith("https:")) {
			return id;
		}
		
		if (deployed) 
		{
			return root + id;
		} 
		else 
		{
			var entry = resolve(id);
			if (core.Env.isSet("debug") && !entry) {
				throw new Error("Can't resolve URL for asset: " + id);
			}
			
			return root + entry[entry.length-1];
		}
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
			else if (srcValue.constructor === Object && dstValue.construtor === Object) {
				mergeData(srcValue, dstValue);
			}
		}
	};
	
	
	var getFrameNumber = function(entry) 
	{
		// Correct entry length for format detection
		var length = entry.length;
		if (!deployed) {
			length--;
		}
		
		switch(length)
		{
			case 4:
				// auto calculated frame size
				return entry[2] * entry[3];

			case 5:
				// manually defined frame size
				return entry[4];

			case 6:
				// manually defined frames
				return entry[5].length;

			case 7:
				// auto calculated frame size (image sprite)
				return entry[5] * entry[6];

			case 8:
				// manually defined frame size (image sprite)
				return entry[7];
		}
		
		return 1;
	};
	
	
	var getSpriteId = function(entry, id)
	{
		// We need more data than just the image sprite ID
		var spriteId = entry.length > 3 ? entry[2] : null;
		
		// Is part of image sprite?
		if (typeof spriteId == "string") 
		{
			// Explicit root path
			if (spriteId.charAt(0) == "/") {
				spriteId = spriteId.slice(1);
			}

			// Local path (same folder as requested image)
			else if (spriteId.indexOf("/") == -1) 
			{
				var pos = id.lastIndexOf("/");
				if (pos != -1) {
					spriteId = id.slice(0, pos+1) + spriteId;
				}
			}
			
			return spriteId;
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
		reset : function() 
		{
			deployed = root = null;
			assets = {};
		},

		
		isDeployed: function(data) {
			return deployed;
		},
		
		
		add : function(data) 
		{
			// Validate input data
			if (core.Env.isSet("debug")) 
			{
				core.Assert.isType(data, "Map");
				core.Assert.isType(data.assets, "Map");
				core.Assert.isType(data.root, "String");
				core.Assert.isType(data.deployed, "Boolean");
			}

			// Initial data
			if (root == null) 
			{
				assets = data.assets;
				deployed = data.deployed;
				root = data.root;
			}
			
			// Inject data
			else
			{
				if (core.Env.isSet("debug"))
				{
					if (data.deployed != deployed) {
						throw new Error("Cannot handle deployed and undeployed assets into one data set!");
					}

					if (data.root != root) {
						throw new Error("Cannot handle two different roots in on data set!");
					}
				}
				
				mergeData(data.assets, assets);
			}
			
		},
		
		
		
		toUri : toUri,
		resolve: resolve,
		
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
		 * Loads the given @section {String}. Optionally @recursive {Boolean?false} it traverses
		 * the whole tree starting at @section. The optional @callback {Function?} is executed
		 * in the given @context {Object?} when all files are loaded. It is called with one
		 * parameter which contains are `Map` of all data (relative asset ID to loaded item).
		 * Optionally caching can be disabled by attaching a random `GET` parameter.
		 */
		loadSection: function(section, recursive, callback, context, nocache) 
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

				if (nocache != null) {
					core.Assert.isType(nocache, "Boolean");
				}
			}
			
			// Collect assets
			var all = collect(section, section.length + 1, resolve(section), recursive);
			var uris = Object.values(all);

			// Build back tables to translate uris back to local IDs
			var urisToIds = uris.zip(Object.keys(all));

			var helper = callback ? function(data) {
				callback.call(context||global, Object.translate(data, urisToIds));
			} : callback;
			
			core.io.Queue.load(uris, helper, this, nocache);
		},


		/**
		 * Loads the given assets by their ID and executes @callback {Function?}
		 * in the given @context {Object?global}. Optionally caching can be disabled
		 * by attaching a random `GET` parameter.
		 */
		load: function(ids, callback, context, nocache) 
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

				if (nocache != null) {
					core.Assert.isType(nocache, "Boolean");
				}
			}
			
			var uris = ids.map(toUri);
			var urisToIds = uris.zip(ids);

			var helper = callback ? function(data) {
				callback.call(context||global, Object.translate(data, urisToIds));
			} : callback;
			
			core.io.Queue.load(uris, helper, this, nocache);
		},


		/**
		 * {Array} Returns the dimensions of the given image @id {String} with as `width`, `height`.
		 */
		getImageSize : function(id)
		{
			if (core.Env.isSet("debug")) {
				core.Assert.isType(id, "String", "Invalid asset ID!");
			}

			var entry = resolve(id);
			if (core.Env.isSet("debug") && !entry) {
				throw new Error("Could not figure out size of unknown image: " + id);
			}
			
			return entry.slice(0, 2);
		},
		
		
		/**
		 * {Integer} Returns the number of frames (for animations) for the given image @id {String}.
		 */
		getNumberOfFrames: function(id) 
		{
			if (core.Env.isSet("debug")) {
				core.Assert.isType(id, "String", "Invalid asset ID!");
			}
			
			var entry = resolve(id);
			if (core.Env.isSet("debug") && !entry) {
				throw new Error("Could not figure out frame number of unknown image: " + id);
			}

			return getFrameNumber(entry);
		},


		/**
		 * {Map} Returns the image data for the given asset @id {String} with the keys:
		 * `src`, `left`, `top`, `width` and `height` to being used in a sprite compatible
		 * image rendering mechanism (e.g. CSS background image + position, Canvas `dragImage`, etc.)
		 */
		getImage : function(id) 
		{
			var entry = resolve(id);
			if (!entry && core.Env.isSet("debug")) {
				throw new Error("Unknown image: " + id);
			}
			
			var width = entry[0];
			var height = entry[1];
			
			var spriteId = getSpriteId(entry, id);
			if (spriteId) 
			{
				return {
					src : toUri(spriteId),
					left : entry[3],
					top : entry[4],
					width: width,
					height: height
				};
			}
			else
			{
				// Return compatible data format in cases where no sprite sheet is used
				return {
					src : root + (deployed ? id : entry[entry.length-1]),
					left : 0,
					top: 0,
					width: width,
					height: height
				};
			}
		},
		
		
		getFrame : function(id, frame) 
		{
			var entry = resolve(id);
			if (!entry && core.Env.isSet("debug")) {
				throw new Error("Unknown image: " + id);
			}
			
			// Correct entry length for format detection
			var length = entry.length;
			var spriteId = getSpriteId(entry, id);
			
			console.debug("SPRITE-ID:", spriteId)
			
			var src = root + (spriteId ? spriteId : deployed ? id : entry[--length]);
			var left=0, top=0, width=entry[0], height=entry[1], offsetLeft=0, offsetTop=0;
			
			// Detect whether a frame is available
			if (length > 3 || length < 9) 
			{
				
				//console.debug("FRAME-REL-LENGTH: ", length)
				var number = getFrameNumber(entry);

				if (frame >= number && core.Env.isSet("debug")) {
					throw new Error("Invalid frame number " + frame + " for asset " + id + "!");
				}
				
				
				
				
				// Manual frames
				if (length == 6)
				{
					
					
				}

				// Automatic frames
				else
				{
					// Correctly work when using sprite images
					var cols = length > 6 ? entry[5] : entry[2];
					var rows = length > 6 ? entry[6] : entry[3];
					
					// Correct image dimensions
					width /= cols;
					height /= rows;
					
					// Calculate position inside sprite image
					left = (frame % cols) * width;
					top = Math.floor(frame / cols) * height;
				}
			}
			else if (frame != 0 && core.Env.isSet("debug"))
			{
				throw new Error("Invalid frame number " + frame + " for asset " + id + "!");
			}

			return {
				src : src,
				left : left,
				top : top,
				width : width,
				height : height,
				offsetLeft : offsetLeft,
				offsetTop : offsetTop
			};
			
		}
		
	});
	
	core.io.Asset.reset();
	core.io.Asset.add(core.Env.getValue("assets"));
	
})(this);

