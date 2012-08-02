/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Zynga Inc.
==================================================================================================
*/

/**
 * Declarations of simple modules with static members
 */
(function(undef)
{
	var genericToString = function() {
		return "[module " + this.moduleName + "]";
	};
	

	/**
	 * Define a module with the given @name {String} with static @members {Map} being attached.
	 */
	core.Main.declareNamespace("core.Module", function(name, members)
	{
		if (!core.Module.isModuleName(name)) {
			throw new Error("Invalid module name " + name + "!");
		}
		
		if (!core.Main.isTypeOf(members, "Map")) {
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
		core.Main.declareNamespace(name, members);
	});
	
	
	/**
	 * {core.Module} Resolves a given @name {String} and returns the stored module.
	 */
	var getByName = function(name)
	{
		var obj = core.Main.resolveNamespace(name);
		return isModule(obj) ? obj : null;
	};

	/**
	 * {Boolean} Returns whether the given @name {String} is a valid module name.
	 */
	var isModuleName = function(name) {
		return /^(([a-z][a-z0-9]*\.)*)([A-Z][a-zA-Z0-9]*)$/.test(name);
	};
	
	/**
	 * {Boolean} Whether the given object is a valid @module {Object}.
	 */
	var isModule = function(module) {
		return !!(module && typeof module == "object" && module.__isModule);
	};
	
	
	core.Main.addStatics("core.Module", 
	{
		getByName : getByName,
		isModuleName : isModuleName,
		isModule : isModule,
	});

})();
