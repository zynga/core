(function() {
	
	var count = 1;
	
	/**
	 * Manages global unique IDs of objects. Works fine with the following types:
	 *
	 * - Functions
	 * - Class Instances
	 * - DOM Elements (`body`, `input`, etc.)
	 * - Native Objects (`document`, `XHR`, etc.)
	 *
	 * Does not work on primitive data objects aka maps/dict and primitive values aka `string`, `number`, ...
	 */
	core.Module("core.util.Id", {
		
		/**
		 * {Integer} Returns a unique ID of the given @object {Function|Object|Element}.
		 *
		 * To improve performance one could also use:
		 * `var uniqueId = obj.$$id || core.util.Id.get(obj);`
		 */
		get: function(object) {
			
			if (core.Env.isSet("debug")) {

				var type = typeof object;
				if (object == null || (type != "object" && type != "function") || object.constructor == Object) {
					throw new Error("Could not detect ID of " + object);
				}

			}
			
			var id = object.$$id;
			if (id == null) {
				id = object.$$id = count++;
			}
			
			return id;
		}
	});
})();
