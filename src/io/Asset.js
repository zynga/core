/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
==================================================================================================
*/

(function(global)
{
	// Jasy is replacing this call via the kernel permutation
	var assets = core.Env.getValue("assets");

	var entryCache = {};
	var spriteCache = {};

	var getEntry = function(id)
	{
		if (core.Env.isSet("debug")) {
			core.Assert.isType(id, "String", "Invalid asset identifier: " + id);
		}

		var lastSlash = id.lastIndexOf("/");
		if (lastSlash == -1)
		{
			var dirName = "";
			var fileName = id;
		}
		else
		{
			var dirName = id.slice(0, lastSlash);
			var fileName = id.slice(lastSlash+1);
		}

		var images = assets.images;
		if (images && dirName in images) {
			var entry = images[dirName][fileName];
		}

		if (!entry)
		{
			var files = assets.files;
			if (files && dirName in files) {
				var entry = files[dirName][fileName];
			}
		}

		if (entry != null) {
			return entryCache[id] = entry;
		}
	};


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
			return entryCache[id] || getEntry(id) != null;
		},


		/**
		 * Loads the given asset @ids {String[]} and optionally executes the given @callback {Function?} (in the given @context {Object}) after all are completed.
		 * The behavior is tweakable by enabling @nocache {Boolean?false} to append a dynamic `GET` parameter and @type {String} to enforce a specific loader class.
		 */
		load: function(ids, callback, context, nocache, type) {

			var id, uri;

			var uris = [];
			var uriToId = {};

			for (var i=0, l=ids.length; i<l; i++) {
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
			var entry = entryCache[id] || getEntry(id);
			if (core.Env.isSet("debug") && (!entry || entry.length < 3)) {
				throw new Error("Unknown image: " + id);
			}

			return {
				width: entry[1],
				height: entry[2]
			};
		},


		/**
		 * {Map} Returns sprite details for being used for the given image @id {String}.
		 */
		getImageSprite : function(id)
		{
			var result = spriteCache[id];
			if (!result)
			{
				var entry = entryCache[id] || getEntry(id);
				if (core.Env.isSet("debug") && (!entry || entry.length < 5)) {
					throw new Error("Unknown image sprite: " + id);
				}

				var lastSlash = id.lastIndexOf("/");
				var dirName = id.substring(0, lastSlash);
				var spriteData = assets.sprites[dirName][entry[3]];
				var needsPosX = spriteData[4] == 1;
				var needsPosY = spriteData[5] == 1;

				spriteCache[id] = result = {
					uri : assets.roots[spriteData[1]] + "/" + dirName + "/" + spriteData[0],
					left : needsPosX ? entry[4] : 0,
					top : needsPosY ? needsPosX ? entry[5] : entry[4] : 0,
					width : spriteData[2],
					height : spriteData[3]
				};
			}

			return result;
		},


		/**
		 * {String} Converts the given asset @id {String} to a full qualified URI. 
		 * The method throws an error whenever an asset ID is unknown.
		 */
		toUri : function(id)
		{
			if (id == null) {
				return id;
			}

			var entry = entryCache[id] || getEntry(id);
			if (core.Env.isSet("debug") && entry == null) {
				throw new Error("Could not figure out URL for asset: " + id);
			}

			// Differ between files (first case) and images (second case)
			var root = assets.roots[typeof entry == "number" ? entry : entry[0]];

			// Merge to full qualified URI
			var pos = id.indexOf("/");
			var path = pos == -1 ? "/" + id : id.slice(pos);
			
			return root + path;
		}
	});
})(this);