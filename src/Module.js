/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
==================================================================================================
*/

(function(global, undef)
{
	var genericToString = function() {
		return "[module " + this.moduleName + "]";
	};
	

	/**
	 * Define a module with the given @name {String} with static @members {Map} being attached.
	 */
	Object.declareNamespace("core.Module", function(name, members)
	{
		if (!core.Module.isModuleName(name)) {
			throw new Error("Invalid module name " + name + "!");
		}
		
		if (!Object.isType(members, "Map")) {
			throw new Error("Invalid map as module configuration in " + name + "!");
		}

		var prefix = name + ".";
		var value;

		for (var key in members)
		{
			value = members[key];

			// Performance would better using typeof but instanceof is required to exclude RegExps
			if (value instanceof Function) {
				value.displayName = prefix + key;
			}
		}

		// Add module name, implement toString() and valueOf()
		if (members.moduleName == null) {
			members.moduleName = name;
		}

		if (!members.hasOwnProperty("toString")) {
			members.toString = genericToString;
		}

		if (!members.hasOwnProperty("valueOf")) {
			members.valueOf = genericToString;
		}

		// Mark as module
		members.__isModule = true;

		// Attach to name
		Object.declareNamespace(name, members);
	});
	
	
	Object.addStatics("core.Module", 
	{
		/**
		 * Resolves a given Module name
		 *
		 * @param moduleName {String} Name to resolve
		 * @return {Object} Returns the Module stored under the given name
		 */
		getByName : function(moduleName)
		{
			var obj = Module.resolveName(moduleName);
			return isModule(obj) ? obj : null;
		},
		
		
		/**
		 * Whether the given name is a valid module name.
		 *
		 * @param value {String} Any string
		 * @return {Boolean} Whether the given string is a valid module name
		 */
		isModuleName : function(value) {
			return /^(([a-z][a-z0-9]*\.)*)([A-Z][a-zA-Z0-9]*)$/.test(value);
		},
		
		
		/**
		 * Whether the given object is a Model
		 *
		 * @return {Boolean} Whether the given argument is an valid Model.
		 */
		isModule : function(module) {
			return !!(module && typeof module == "object" && module.__isModule);
		}
	});

})(this);
