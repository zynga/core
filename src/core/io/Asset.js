/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Zynga Inc.
==================================================================================================
*/

(function(global)
{
	// Jasy is replacing this call via the kernel permutation
	var data = core.Env.getValue("assets");

	// Shorthands
	var assets = data.assets;
	var merged = data.merged;
	var root = data.root;
	
	/**
	 * {Array} Resolves the given @id {String} into the stored entry of the asset data base.
	 */
	var resolve = function(id) 
	{
		if (id.constructor == Object) {
			return id;
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
	var toUri = function(id) {
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
		/**
		 * {Boolean} Whether the registry has information about the given asset @id {String}.
		 */
		has : function(id) {
			return !!resolve(id);
		},

		/**
		 * Loads the given section
		 *
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

			var helper = !callback || function(data) {
				callback.call(context||global, Object.translate(data, urisToIds));
			};
			
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

			var helper = !callback || function(data) {
				callback.call(context||global, Object.translate(data, urisToIds));
			};
			
			core.io.Queue.load(uris, helper, this, nocache);
		},


		/**
		 * {Array} Returns the dimensions of the given image @id {String} with as `width`, `height`.
		 */
		getImageSize : function(id)
		{
			var entry = resolve(id);
			var start = merged ? 0 : 1;
			
			return entry.slice(start, start+2);
		},


		toUri : toUri
	});
})(this);