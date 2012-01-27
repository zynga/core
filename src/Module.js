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
	 * Define a module with static methods/fields.
	 *
	 * As there are new fields added to the member data structure and the module
	 * itself this is not feasible to being used as a structure for looping through
	 * via for-in loops.
	 *
	 * @param name {String} Name of Module
	 * @param members {Map} Data structure containing the members
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
	
	
	Object.addStatics("core.Module", {
		
		/**
		 * Returns all registers names (modules, interfaces, classes, etc.)
		 *
		 * @return {Array}
		 */
		getAllNames : function() {
			return Object.keys(cache);
		},


		/**
		 * Clears the object under the given name (incl cache)
		 *
		 * @param name {String} Clears the given name (Only works with stuff attached via {@see #declare})
		 * @return {Boolean} Whether clearing was successful
		 */
		clearName : function(name)
		{
			if (name in cache)
			{
				delete cache[name];

				var current = global;
				var splitted = name.split(".");
				for (var i=0, l=splitted.length-1; i<l; i++) {
					current = current[splitted[i]];
				}

				// Delete might not work when global object is affected
				try{
					delete current[splitted[i]];
				} catch(ex) {
					current[splitted[i]] = undef;
				}

				return true;
			}

			return false;
		},


		/**
		 * Resolves a given name into the already existing object/class.
		 *
		 * @param name {String} Name to resolve
		 * @return {Object} Returns the object stored under the given name
		 */
		resolveName : function(name)
		{
			var current = cache[name];
			if (!current)
			{
				current = global;
				if (name)
				{
					var splitted = name.split(".");
					for (var i=0, l=splitted.length; i<l; i++)
					{
						current = current[splitted[i]];
						if (!current)
						{
							current = null;
							break;
						}
					}
				}
			}

			return current;
		},


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
