(function() {
	
	var count = 1;
	
	/**
	 * Manages global unique IDs of objects. Works fine with the following types:
	 *
	 * * Functions
	 * * Class Instances
	 * * DOM Elements (body, input, etc.)
	 * * Native Objects (document, XHR, etc.)
	 *
	 * Does not work on primitive data objects aka maps/dict and primitive values aka string, number, ...
	 */
	core.Module("core.util.Id", {
		
		/**
		 * Returns a unique ID of the given object.
		 *
		 * To improve performance one could also use:
		 * `var uniqueId = obj.$$id || z.core.Id.get(obj);`
		 */
		get: function(obj) {
			
			if (core.Env.isSet("debug")) {

				var type = typeof obj;
				if (obj == null || (type != "object" && type != "function") || obj.constructor == Object) {
					throw new Error("Could not detect ID of " + obj);
				}

			}
			
			var id = obj.$$id;
			if (id == null) {
				id = obj.$$id = count++;
			}
			
			return id;
		}
	});
})();
