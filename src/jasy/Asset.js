(function(global)
{
	/** {Map} Internal map of delegates for building URLs based on profiles */
	var delegates = {};

	// Internal data storage
	var profiles, assets, sprites;
	
	/** {Map} Expands internal type names to user readable ones */
	var typeExpansion = 
	{
		i: "image",
		a: "audio",
		v: "video",
		f: "font",
		t: "text",
		b: "binary",
		o: "other"
	};


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
		
		return current || null;
	};


	/** 
	 * Returns the URI for the given @entry {Map} and @id {String}. This method
	 * is faster than using #idToUri.
	 */
	var entryToUri = function(entry, id) 
	{
		if (core.Env.isSet("debug")) 
		{
			core.Assert.isType(id, "String", "Unknown asset ID: " + id);
			core.Assert.isType(entry, "Map", "Invalid entry: " + entry + " for asset ID: " + id);
			core.Assert.isType(entry.p, "Integer", "Invalid profile in entry: " + entry.p + "for asset " + id + ". Do not now how to construct an URI for that entry!");
		}
		
		var profile = profiles[entry.p];

		var delegate = delegates[profile.name];
		if (delegate) {
			var url = delegate(profile, id, entry);
		} else {
			var url = (profile.root || "") + (entry.u || id);
		}
		
		return url;
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
	 * Jasy interface to asset API.
	 */
	core.Module("jasy.Asset",
	{
		resolve : resolve,

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
				core.Assert.isType(data, "Map", "Asset data must be a map with the keys assets and profiles.");
				core.Assert.isType(data.profiles, "Array", "Asset data must have an array of profiles under the profiles key.");
				core.Assert.isType(data.assets, "Map", "Asset data must define a structure of assets under the assets keys.");
				
				if ("sprites" in data) {
					core.Assert.isType(data.sprites, "Array", "Sprite data inside assets must be delivered as an Array.");
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

				// Hint: Profiles and Sprites should be identical in every set of assets 
				// (aka only the first one is relevant for keeping)
			}
		},
		
		
		/**
		 * Resets the internal state of the asset class.
		 */
		resetData : function() {
			profiles = assets = sprites = null;
		},
		

		/**
		 * Registers a @delegate {Function} for URL construction of the given @profile {String}.
		 * The @delegate is called with the parameters `profile`, `id` and `entry` and should return a fully qualified URL.
		 */
		registerDelegate : function(profile, delegate) 
		{
			// Validate input data
			if (core.Env.isSet("debug")) 
			{
				core.Assert.isType(profile, "String");
				core.Assert.isType(delegate, "Function");
			}
			
			delegates[profile] = delegate;
		},


		/**
		 * {Boolean} Whether the registry has information about the given asset @id {String}.
		 */
		has : function(id) 
		{
			if (core.Env.isSet("debug")) {
				core.Assert.isType(id, "String");
			}
			
			return !!(cache[id] || resolve(id));
		},


		/**
		 * {String} Returns the type of the given asset @id {String}. One of
		 * `image`, `audio`, `video`, `font`, `text`, `binary`, `other`.
		 */
		getType : function(id) 
		{
			if (core.Env.isSet("debug")) {
				core.Assert.isType(id, "String", "Invalid asset ID (no string): " + id + "!");
			}

			var entry = resolve(id);
			if (core.Env.isSet("debug") && !entry) {
				throw new Error("Could not figure out size of unknown image: " + id);
			}

			return typeExpansion[entry.t] || "other";
		},

	
		/**
		 * {String} Returns the URI for the given asset @id {String}
		 */
		toUri : function(id) 
		{
			if (core.Env.isSet("debug")) {
				core.Assert.isType(id, "String");
			}
			
			var resolved = resolve(id);
			if (core.Env.isSet("debug")) {
				core.Assert.isNotNull(resolved, "Failed to resolve asset ID: " + id);
			}
			
			return entryToUri(resolved, id);
		}
	});

})(this);
