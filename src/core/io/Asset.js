/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Zynga Inc.
==================================================================================================
*/

(function(global)
{
	// Internal data stores
	var merged = null;
	var root = null;
	var assets = {};


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
		
		if (current == null) {
			console.warn("Could not resolve URI: " + id);
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
					} else if (merged) {
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
		
		return root + (merged ? id : resolve(id)[0]);
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
		add : function(data) 
		{
			console.debug("Adding asset data...", data);
			
			// Validate input data
			if (core.Env.isSet("debug")) 
			{
				core.Assert.isType(data, "Map");
				core.Assert.isType(data.assets, "Map");
				core.Assert.isType(data.root, "String");
				core.Assert.isType(data.merged, "Boolean");
			}

			// Initial data
			if (root == null) 
			{
				assets = data.assets;
				merged = data.merged;
				root = data.root;
			}
			
			// Inject data
			else
			{
				if (data.merged != merged) {
					throw new Error("Cannot handle merged and unmerged assets into one data set!");
				}
				
				if (data.root != root) {
					throw new Error("Cannot handle two different roots in on data set!");
				}
				
				// TODO: Merge assets
				
			}
			
			
		},
		
		
		
		toUri : toUri,
		
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
		
		/**
		 * {Array} Returns the dimensions of the given image @id {String} with as `width`, `height`.
		 */
		getImageSize : function(id)
		{
			var entry = resolve(id);
			var start = merged ? 0 : 1;
			
			return entry.slice(start, start+2);
		},
		
		
		getFrameNumber: function(id) 
		{
			var entry = resolve(id);
			var number = 1;
			
			// Create duplicate with remove first item
			// Because in source (non merged) the first entry is the path
			if (!merged) {
				entry = entry.slice(1);
			}
			
			switch(entry.length)
			{
				case 4:
					// auto calculated frame size
					number = entry[2] * entry[3];
					break;
					
				case 5:
					// manually defined frame size
					number = entry[4];
					break;
					
				case 6:
					// manually defined frames
					number = entry[5].length;
					
				case 7:
					// auto calculated frame size (image sprite)
					number = entry[5] * entry[6];
					break;
				
				case 8:
					// manually defined frame size (image sprite)
					number = entry[7];
					break;
			}
			
			return number;
		},


		getImage : function(id) 
		{
			var entry = resolve(id);
			
			// Is part of image sprite?
			if (typeof entry[2] == "string") 
			{
				var spriteId = entry[2];
				
				// Local path (same folder as requested image)
				if (spriteId.indexOf("/") != -1) 
				{
					var pos = spriteId.lastIndexOf("/");
					if (pos != -1) {
						src.slice(0, pos) + id;
					}
				}
				
				return {
					src : resolve(spriteId),
					left : entry[3],
					top : entry[4]
				};
			}
			else
			{
				// Return compatible data format in cases where no sprite sheet is used
				return {
					src : root + (merged ? id : entry[0]),
					left : 0,
					top: 0
				};
			}
		},
		
		
		getFrame : function(id, frame) {
			
			
			
			
		},
		
		
		getFrames : function(id) {
			

			
		}
		


		
	});
	
	core.io.Asset.add(core.Env.getValue("assets"));
	
})(this);

