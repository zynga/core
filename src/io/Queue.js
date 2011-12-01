(function() 
{
	/** {Map} Keys are all URIs which are completely loaded */
	var completed = {};

	
	/** {Map} Maps extensions to loader classes */
	var typeLoader = 
	{
		js : core.io.Script,
		css : core.io.StyleSheet,
		jsonp : core.io.Jsonp,
		json : core.io.Text,
		txt : core.io.Text,
		md : core.io.Text,
		html : core.io.Text,
		png : core.io.Image,
		jpeg : core.io.Image,
		jpg : core.io.Image,
		gif : core.io.Image
	};


	/**
	 * Returns the extension of the given filename
	 *
	 * @param filename {String} Name of file or full URI
	 * @return {String} Extension part or <code>null</code> if no extension was found
	 */
	var extractExtension = function(filename) 
	{
		// Filter out query string and find last dot to split extension
		var result = filename.match(/\.([^\.\?]+)(?:\?|$)/);
		
		// Extension found
		if (result != null) {
			return result[1];
		}
		
		// Support for callback params in URI (JSON-P)
		if (filename.indexOf("callback=") != -1) {
			return "jsonp";
		}
		
		return null;
	};
	

	/**
	 * Generic URLs loader queue with support for different type "backend" modules.
	 *
	 * Uses parallel loading where available and load all other resources
	 * sequentially. Sequential loading is done by type so that multiple
	 * different types are loaded in parallel.
	 *
	 * Loader module need to implement the following interface:
	 *
	 * * method load(uri, callback, context, nocache) which calls the callback like callback.call(context, uri, errornous, data)
	 * * constant `SUPPORTS_PARALLEL` with a boolean value whether the loader supports parallel loading
	 */
	core.Module("core.io.Queue",
	{
		/**
		 * Whether the given URIs were loaded before
		 *
		 * @param uris {Array} One or multiple URIs to verify.
		 * @return {Boolean} Whether all given URIs have been loaded. Returns `false` with the first new one.
		 */
		isLoaded : function(uris) 
		{
			if (typeof uris == "string") {
				return !!completed[uris];
			}
			
			if (core.Env.isSet("debug")) {
				core.Assert.array(uris, "Invalid list of URIs!");
			}

			for (var i=0, l=uris.length; i<l; i++) 
			{
				if (!completed[uris[i]]) {
					return false;
				}
			}

			return true;
		},
		
		
		/**
		 * Loads the given URIs and optionally executes the given callback after all are completed
		 *
		 * @param uris {Array} List of URLs to load
		 * @param callback {Function ? null} Callback method to execute
		 * @param context {Object ? null} Context in which the callback function should be executed
		 * @param nocache {Boolean ? false} Whether a cache prevention logic should be applied (to force a fresh copy)
		 * @param type {String ? auto} Whether the automatic type detection should be disabled and the given type should be used.
		 */
		load : function(uris, callback, context, nocache, type) 
		{
			if (core.Env.isSet("debug")) 
			{
				core.Assert.array(uris);

				if (callback != null) {
					core.Assert.func(callback, "Invalid callback method!");
				}
				
				if (context != null) {
					core.Assert.object(context, "Invalid callback context!");
				}
				
				if (nocache != null) {
					core.Assert.boolean(nocache);
				}

				if (type != null) {
					core.Assert.string(type);
				}
			}
			
			// Keys are all URIs which are currently loading
			var loading = {};

			// Data cache for callback return
			var cache = {};
			
			
			/**
			 * Registers the given URI as being loaded. 
			 * 
			 * @param uri {String} URI to mark as being loaded
			 * @param errornous {Boolean?false} Whether request was not successful
			 * @param data {Map} Additional data to exchange
			 */
			var onLoad = function(uri, errornous, data) 
			{
				if (core.Env.isSet("debug")) {
					core.Assert.string(uri, "Got invalid URI from loader!");
					core.Assert.boolean(errornous, "Got invalid errornous flag from loader for uri: " + uri);
				}

				delete loading[uri];
				completed[uri] = true;
				
				// Make data available for callback
				if (data != null) {
					cache[uri] = data;
				}

				// Check whether there is more to load
				for (var queued in loading) {
					return;
				}

				// Execute callback
				context ? callback.call(context, cache) : callback(cache);
			};
			
			var executeDirectly = !!callback;
			var autoType = !type;
			
			// List of sequential items sorted by type
			var sequential = {};
			
			// Process all URIs
			for (var i=0, l=uris.length; i<l; i++)
			{
				var currentUri = uris[i];
				
				if (!completed[currentUri])
				{
					if (autoType) {
						type = extractExtension(currentUri);
						
						if (core.Env.isSet("debug") && (!type || !typeLoader[type])) {
							throw new Error("Could not figure out loader to use for URI: " + currentUri);
						}
					}
					
					var loader = typeLoader[type];

					// As we are waiting for things to load, we can't execute the callback directly anymore
					executeDirectly = false;

					// When script is not being loaded already, then start with it here
					// (Otherwise we just added the callback to the queue and wait for it to be executed)
					if (!loading[currentUri])
					{
						// Register globally as loading
						loading[currentUri] = true;
						
						// Differenciate between loader capabilities
						if (loader.SUPPORTS_PARALLEL) 
						{
							loader.load(currentUri, onLoad, null, nocache);
						}
						else
						{
							// Sort in the URI into a type specific queue
							if (sequential[type]) {
								sequential[type].push(currentUri);
							} else {
								sequential[type] = [currentUri];
							}
						}
					}
				}
			}

			// If all scripts are loaded already, just execute the callback
			if (executeDirectly) 
			{
				// Nothing to load, execute callback directly
				context ? callback.call(context, cache) : callback(cache);
			} 
			else
			{
				/**
				 * Loads the next URI for the given type
				 *
				 * @param type {String} Which queue to use
				 */
				var loadNext = function(type)
				{
					var uri = sequential[type].shift();
					if (uri) 
					{
						typeLoader[type].load(uri, function(uri, errornous, data) 
						{
							onLoad(uri, errornous, data);
							loadNext(type);
						}, 
						null, nocache);
					} 
				};
				
				// Load and execute first item in each queue
				for (var type in sequential) {
					loadNext(type);
				}
			}
		}
	});
})();

