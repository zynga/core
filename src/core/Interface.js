/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Zynga Inc.
==================================================================================================
*/

(function() 
{
	
	/**
	 * {String} Returns a string representing the Interface.
	 */
	var genericToString = function() {
		return "[interface " + this.interfaceName + "]";
	};

	var removedUnusedArgs = !(function(arg1){}).length;

	/**
	 * Define an interface with @name {String} using @config {Map} which can be used for validation of class instances.
	 *
	 * #break(core.Class)
	 */
	core.Main.declareNamespace("core.Interface", function(name, config)
	{
		if (core.Env.isSet("debug"))
		{
			if (!core.Module.isModuleName(name)) {
				throw new Error("Invalid interface name " + name + "!");
			}
			
			core.Assert.isType(config, "Map", "Invalid interface configuration in " + name);

			/** #require(ext.sugar.Object) */
			var invalidKeys = Object.validateKeys(config, "properties,events,members".split(","));
			if (invalidKeys.length > 0) {
				throw new Error("Interface declaration of " + name + " contains invalid configuration keys: " + invalidKeys.join(", ") + "!");
			}
		}

		var iface =
		{
			__properties : config.properties,
			__events : config.events,
			__members : config.members,
			__isInterface : true,

			/** {String} Name of the interface */
			interfaceName : name,

			toString : genericToString,
			valueOf : genericToString,
			assert : core.Interface.assert
		};

		// Attach to namespace
		core.Main.declareNamespace(name, iface);
	});

	core.Main.addStatics("core.Interface", 
	{
		/**
		 * {core.Interface} Resolves a given @interfaceName {String}.
		 */
		getByName : function(interfaceName)
		{
			if (core.Env.isSet("debug")) {
				core.Assert.isType(interfaceName, "String");
			}

			var obj = core.Main.resolveNamespace(interfaceName);
			return core.Interface.isInterface(obj) ? obj : null;
		},


		/**
		 * Verifies whether the given @objectOrClass {Object|core.Class} implements the given @iface {core.Interface?this}.
		 *
		 * - Tests all members of being defined and being the same type (based on Object.toString).
		 * - Tests all properties regarding existance. Also checks whether the outer visible aspects: events, group, themeable and inheritable are identical.
		 * - Tests all events regarding existance and whether there EventClass - if defined - is identical.
		 *
		 * Throws whenever the object or class does not implements the interface.
		 */
		assert : function(objectOrClass, iface)
		{
			if (!objectOrClass) {
				throw new Error("Invalid class or object to verify interface with: " + objectOrClass);
			}

			var cls = typeof objectOrClass == "object" ? objectOrClass.constructor : objectOrClass;
			if (!core.Class.isClass(cls)) {
				throw new Error("Invalid class or object to verify interface with: " + objectOrClass);
			}

			if (!iface && this.__isInterface) {
				iface = this;
			}

			if (!core.Interface.isInterface(iface)) {
				throw new Error("Invalid interface " + iface);
			}

			var ifaceMembers = iface.__members;
			var ifaceProperties = iface.__properties;
			var ifaceEvents = iface.__events;

			var commonErrMsg = "Class " + cls.className + " does not implement interface " + iface.interfaceName + ": ";

			if (ifaceMembers)
			{
				var cMembers = cls.prototype;
				for (var name in ifaceMembers)
				{
					if (!(name in cMembers)) {
						throw new Error(commonErrMsg + "Missing member: " + name + "!");
					}

					var iMember = ifaceMembers[name];
					var cMember = cMembers[name];

					if (typeof iMember == typeof cMember)
					{
						if (iMember == null) {
							continue;
						}

						if (cMember == null) {
							throw new Error(commonErrMsg + "Missing member: " + name + "!");
						}

						if (Object.prototype.toString.call(iMember).slice(8,-1) != Object.prototype.toString.call(cMember).slice(8,-1)) {
							throw new Error(commonErrMsg + "Invalid member type in :" + name + "! Expecting: " + Object.prototype.toString.call(iMember).slice(8,-1).toLowerCase());
						}

						if (iMember instanceof Function)
						{
							if (!(cMember instanceof Function)) {
								throw new Error(commonErrMsg + "Different member types in: " + name + "! Expecting a function!");
							} else if (!removedUnusedArgs && iMember.length != cMember.length) {
								throw new Error(commonErrMsg + "Different number of arguments in function '" + name + "'. Expecting " + iMember.length + "!");
							}
						}
					}
					else
					{
						throw new Error(commonErrMsg + "Different member types in: " + name + "! Expecting type " + (typeof iMember));
					}
				}
			}

			if (ifaceProperties)
			{
				var cProperties = core.Class.getProperties(cls);
				for (var name in ifaceProperties)
				{
					if (!(name in cProperties)) {
						throw new Error(commonErrMsg + "Missing property: " + name + "!");
					}

					var iProperty = ifaceProperties[name];
					var cProperty = cProperties[name];

					// "apply" has not outer visibility
					// "init" has not outer visibility
					// "type" is value compared
					// all others are just tested for pure existence.

					if (iProperty.type !== cProperty.type) {
						throw new Error(commonErrMsg + "Invalid property: " + name + "! Different types! Expecting " + iProperty.type + "!");
					}

					if ("nullable" in iProperty && !("nullable" in cProperty)) {
						throw new Error(commonErrMsg + "Invalid property: " + name + "! Missing 'nullable' definition!");
					}

					if ("fire" in iProperty && !("fire" in cProperty)) {
						throw new Error(commonErrMsg + "Invalid property: " + name + "! Missing 'fire' definition!");
					}

					if ("group" in iProperty && !("group" in cProperty)) {
						throw new Error(commonErrMsg + "Invalid property: " + name + "! Missing 'group' definition!");
					}

					if ("themeable" in iProperty && !("themeable" in cProperty)) {
						throw new Error(commonErrMsg + "Invalid property: " + name + "! Missing 'themeable' definition!");
					}

					if ("inheritable" in iProperty && !("inheritable" in cProperty)) {
						throw new Error(commonErrMsg + "Invalid property: " + name + "! Missing 'inheritable' definition!");
					}
				}
			}

			if (ifaceEvents)
			{
				var cEvents = core.Class.getEvents(cls);
				for (var name in ifaceEvents)
				{
					if (!(name in cEvents)) {
						throw new Error(commonErrMsg + "Missing event: " + name + "!");
					}
				}
			}
		},


		/**
		 * {Boolean} Whether the given object is a @iface {core.Interface}.
		 */
		isInterface : function(iface) {
			return !!(iface && typeof iface == "object" && iface.__isInterface);
		}
	});

})();