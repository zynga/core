/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Zynga Inc.
==================================================================================================
*/

(function(global)
{
	// Jasy is replacing this call via the kernel permutation
	var assets = core.Env.getValue("assets");
	
	// Dynamically unpack compact structure for better runtime performance
	if (assets)
	{
		if (assets.dirs) 
		{
			var root = assets.root;
			var dirs = assets.dirs;

			var unpacked = {};

			for (var dir in dirs) 
			{
				var map = dirs[dir];
				var dirslash = dir ? dir + "/" : "";

				for (var base in map) 
				{
					var id = dirslash + base;

					// if not an array we store just '1' for being short and truish
					if (map[base] !== 1) 
					{
						unpacked[id] = map[base];
						map[base].unshift(root + id);
					}
					else
					{
						unpacked[id] = root + id;
					}
				}
			}

			// Replace compiled in data with unpacked one
			assets = unpacked;
		}
		else
		{
			// Shorthand
			assets = assets.files;
		}
	}
	

	/**
	 * Contains information about images (size, format, clipping, ...) and
	 * other assets like CSS files, local data, ...
	 */
	core.Module("core.io.Asset",
	{
		/**
		 * {Boolean} Whether the registry has information about the given asset @id {String}.
		 */
		has : function(id) {
			return assets.hasOwnProperty(id);
		},


		/**
		 * Loads the given asset @ids {String[]} and optionally executes the given 
		 * @callback {Function?} (in the given @context {Object?global}) after all are completed.
		 * The behavior is tweakable by enabling @nocache {Boolean?false} to append a dynamic 
		 * `GET` parameter and @type {String?} to enforce a specific loader class.
		 */
		load: function(ids, callback, context, nocache, type) 
		{
			var id, uri;

			var uris = [];
			var uriToId = {};

			for (var i=0, l=ids.length; i<l; i++) 
			{
				id = ids[i];
				uri = this.toUri(id);

				uris.push(uri);
				uriToId[uri] = id;
			}

			var localCallback = function(uriData)
			{
				var idData = {};
				for (var uri in uriData) {
					idData[uriToId[uri]] = uriData[uri];
				}

				context ? callback.call(context, idData) : callback(idData);
			}

			return core.io.Queue.load(uris, localCallback, null, nocache, type);
		},


		/**
		 * {Map} Returns the dimensions of the given image @id {String} with the keys `width` and `height`.
		 */
		getImageSize : function(id)
		{
			var entry = assets[id];
			if (core.Env.isSet("debug") && entry == null) {
				throw new Error("Unknown image: " + id);
			}

			return {
				width: entry[1],
				height: entry[2]
			};
		},


		/**
		 * {String} Converts the given asset @id {String} to a full qualified URI. 
		 * The method throws an error whenever an asset ID is unknown.
		 */
		toUri : function(id)
		{
			var entry = assets[id];
			if (core.Env.isSet("debug") && entry == null) {
				throw new Error("Unknown asset: " + id);
			}

			if (entry.push) {
				return entry[0];
			} else {
				return entry;
			}
		}
	});
})(this);