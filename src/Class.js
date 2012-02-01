/* 
==================================================================================================
	Core - JavaScript Foundation
	Copyright 2010-2012 Sebastian Werner
==================================================================================================
*/

// Include ES5 support if not natively supported
if(!core.Env.isSet("es5")) 
{
	// These classes don't really exist, so we need to protect the access.
	try{
		core.es5.Array;
		core.es5.Date;
		core.es5.String;
		core.es5.JSON;
	} catch(ex) {};
}

(function(global, undef) 
{
	var genericToString = function() {
		return "[class " + this.className + "]";
	};
	
	
	var extendClass = function(clazz, construct, superClass, name, basename)
	{
		var superproto = superClass.prototype;

		// Use helper function/class to save the unnecessary constructor call while
		// setting up inheritance.
		var helper = new Function;
		helper.prototype = superproto;
		var proto = new helper;

		// Apply prototype to new helper instance
		clazz.prototype = proto;

		// Store names in prototype
		proto.name = proto.classname = name;
		proto.basename = basename;

		// Store base constructor to constructor-
		// Store reference to extend class
		construct.base = clazz.superclass = superClass;

		// Store statics/constructor onto constructor/prototype
	 	// Store correct constructor
		// Store statics onto prototype
		construct.self = clazz.constructor = proto.constructor = clazz;
	};
	
	
	if (core.Env.isSet("debug"))
	{
		var checkMixinMemberConflicts = function(include, members, name) 
		{
			// Simplifies routine
			if (!members) {
				members = {};
			}

			var allIncludeMembers = {};
			for (var i=0, l=include.length; i<l; i++) 
			{
				var includedClass = include[i];
				var includedMembers = Object.keys(includedClass.prototype);

				for(var j=0, jl=includedMembers.length; j<jl; j++) 
				{
					var key = includedMembers[j];

					if (members.hasOwnProperty(key)) 
					{
						// Private member conflict with including class (must fail, always)
						if (key.substring(0,2) == "__") {
							throw new Error("Included class " + includedClass.className + " overwrites private member of class " + name);
						}

						// members are allowed to override protected and public members of any included class
					}

					if (allIncludeMembers.hasOwnProperty(key)) 
					{
						// Private members conflict between included classes (must fail, always)
						if (key.substring(0,2) == "__") {
							throw new Error("Included class " + includedClass.className + " overwrites private member of other included class " + allIncludeMembers[key].className + " in class " + name);
						}

						// If both included classes define this key as a function check whether 
						// the members section has a function as well (which might call both of them).
						if (key in members && members[key] instanceof Function && includedClass.prototype[key] instanceof Function && allIncludeMembers[key].prototype[key] instanceof Function) {
							// pass
						} else {
							throw new Error("Included class " + includedClass.className + " overwrites member " + key + " of other included class " + allIncludeMembers[key].className + " in class " + name);
						}
					}

					allIncludeMembers[key] = includedClass;
				}
			}
		};

		// Events between included classes must not collide
		// Including class can override any event 
		var checkMixinEventConflicts = function(include, events, name) 
		{
			var allIncludeEvents = {};
			for (var i=0, l=include.length; i<l; i++) 
			{
				var includedClass = include[i];
				var includedEvents = includedClass.__events;

				for (var eventName in includedEvents) {
					if (eventName in allIncludeEvents) {
						throw new Error("Included class " + includedClass.className + " overwrites event of other included class " + allIncludeEvents[eventName].className + " in class " + name);
					}

					allIncludeEvents[eventName] = includedClass;
				}
			}
		};


		// Properties between included classes must not collide
		// Including class can override any property
		var checkMixinPropertyConflicts = function(include, properties, name) 
		{
			var allIncludeProperties = {};
			for (var i=0, l=include.length; i<l; i++) 
			{
				var includedClass = include[i];
				var includedProperties = includedClass.__properties;

				for (var propertyName in includedProperties) {
					if (propertyName in allIncludeProperties) {
						throw new Error("Included class " + includedClass.className + " overwrites event of other included class " + allIncludeProperties[propertyName].className + " in class " + name);
					}

					allIncludeProperties[propertyName] = includedClass;
				}
			}
		};
	}
	
	
	var propertyJoinableNames = {};
	
	
	/**
	 * Rich class system for declaring powerful classes in JavaScript. The declarations supports a lot of convenience
	 * features and unifies all features under a simple declarative API which can be easily processed by 3rd party tools.
	 *
	 * Defines a new class with @name {String} using the given @config {Map}.
	 */
	Object.declareNamespace("core.Class", function(name, config) 
	{
		if (core.Env.isSet("debug")) 
		{
			if (!core.Module.isModuleName(name)) {
				throw new Error("Invalid class name " + name + "!");
			}
			
			core.Assert.isType(config, "Map", "Invalid class configuration in " + name);
			
			/** #require(core.ext.Object) */
			var invalidKeys = Object.validateKeys(config, "construct,events,members,properties,include,implement".split(","));
			if (invalidKeys.length > 0) {
				throw new Error("Class declaration of " + name + " contains invalid configuration keys: " + invalidKeys.join(", ") + "!");
			}
			
			if ("construct" in config) {
				core.Assert.isType(config.construct, "Function", "Invalid constructor in class " + name + "!");
			}
			
			if ("events" in config) {
				core.Assert.isType(config.events, "Map", "Invalid event data in class " + name + "!");
			}
			
			if ("members" in config) {
				core.Assert.isType(config.members, "Map", "Invalid member section in class " + name);
			}

			if ("properties" in config) {
				core.Assert.isType(config.properties, "Map", "Invalid properties section in class " + name);
			}
			
			if ("include" in config) {
				core.Assert.isType(config.include, "Array", "Invalid include list in class " + name);
			}

			if ("implement" in config) {
				core.Assert.isType(config.implement, "Array", "Invalid implement list in class " + name);
			}
		}
		
		
		
		// ------------------------------------
		//	 CONSTRUCTOR
		// ------------------------------------
		
		var construct = config.construct || function(){};
	
		// Store name / type
		construct.className = name;
		construct.displayName = name;
		construct.__isClass = true;
	
		// Add toString() / valueOf()
		construct.toString = genericToString;
		construct.valueOf = genericToString;

		// Attach events and properties data (use cryptic private fields for class storage)
		var events = construct.__events = config.events || {};
		var properties = construct.__properties = config.properties || {};
		
		// Prototype (stuff attached to all instances)
		var proto = construct.prototype;
	
	
	
		// ------------------------------------
		//	 MIXINS
		// ------------------------------------
	
		// Insert other classes
		var include = config.include;
		if (include) 
		{
			if (core.Env.isSet("debug")) 
			{
				for (var i=0, l=include.length; i<l; i++) {
					core.Class.assertIsClass(include[i], "Class " + name + " includes invalid class " + include[i] + " at position: " + i + "!");
				}
				
				checkMixinMemberConflicts(include, config.members, name);
				checkMixinEventConflicts(include, config.events, name);
				checkMixinPropertyConflicts(include, config.properties, name);
			}
			
			// Copy over list to class constructor
			construct.__includes = include;

			for (var i=0, l=include.length; i<l; i++) 
			{
				var includedClass = include[i];
				
				// Just remap members. Validation already happended in debug mode.
				// Function name keeps to be the same after inclusion. Still refering to original class.
				var includeMembers = includedClass.prototype;
				for (var key in includeMembers) {
					proto[key] = includeMembers[key];
				}
				
				// Just copy over the property data. Methods are already in member section.
				var includeProperties = includedClass.__properties;
				for (var key in includeProperties) {
					properties[key] = includeProperties[key];
				}

				// Events is just data to copy over.
				var includeEvents = includedClass.__events;
				for (var key in includeEvents) {
					events[key] = includeEvents[key];
				}
			}
		} 
	
	
	
		// ------------------------------------
		//	 LOCALS
		// ------------------------------------
	
		// Add properties
		for (var propertyName in properties) 
		{
			var propertyConfig = properties[propertyName];
			
			// Inject property name into config
			propertyConfig.name = propertyName;

			// Create members via specific property implementation 
			if (propertyConfig.group) {
				var propertyMembers = core.property.Group.create(propertyConfig);
			} else if (propertyConfig.themeable || propertyConfig.inheritable) {	
				var propertyMembers = core.property.Multi.create(propertyConfig);
			} else {
				var propertyMembers = core.property.Simple.create(propertyConfig);
			}
			
			// Prepare function names
			var propertyMethodPostfix = propertyJoinableNames[propertyName];
			if (propertyMethodPostfix === undef) 
			{
				propertyMethodPostfix = propertyName.charAt(0).toUpperCase() + propertyName.slice(1);
				propertyJoinableNames[propertyName] = propertyMethodPostfix;
			}
			
			// Attach property methods
			for (var propertyMemberKey in propertyMembers) 
			{
				var propertyMemberName = propertyMemberKey + propertyMethodPostfix;
				var propertyMember = propertyMembers[propertyMemberKey];
				
				proto[propertyMemberName] = propertyMember;
				propertyMember.displayName = name + "." + propertyMemberName;
			}
		}
		
		
		// Attach members
		var members = config.members;
		if (members) 
		{
			for (var key in members) 
			{
				var entry = proto[key] = members[key];
				if (entry instanceof Function) {
					entry.displayName = name + "." + key;
				}
			}
		}
	
	
	
		// ------------------------------------
		//	 INTERFACES
		// ------------------------------------
	
		if (core.Env.isSet("debug")) 
		{
			var implement = config.implement;
			if (implement) 
			{
				var iface;
				for (var i=0, l=implement.length; i<l; i++) 
				{
					iface = implement[i];
					if (!iface) {
						throw new Error("Class " + name + " implements invalid interface " + iface + " at position: " + i);
					}

					try {
						core.Interface.assert(construct, iface);
					} catch(ex) {
						throw new Error("Class " + name + " fails to implement given interface: " + iface + ": " + ex);
					}
				}
			}
			
			var propertyFeatures = Class.getPropertyFeatures(construct);
			if (propertyFeatures) 
			{
				if (propertyFeatures.fire) {
					core.Interface.assert(construct, core.property.IEvent);
				}

				if (propertyFeatures.themeable) {
					core.Interface.assert(construct, core.property.IThemeable);
				}

				if (propertyFeatures.inheritable) {
					core.Interface.assert(construct, core.property.IInheritable);
				}
			}
		}
		
		
		// ------------------------------------
		//	 FINISH
		// ------------------------------------
		
		// Attach to namespace
		Object.declareNamespace(name, construct);
	});

	
	// Shorthand
	var Class = core.Class;

	
	/**
	 * {Boolean} Returns whether the given @object {Object} is a class.
	 *
	 * @return  Whether the given argument is an valid Class.
	 */
	var isClass = function(object) {
		return !!(object && typeof object == "function" && object.__isClass);
	};
	
	
	/**
	 * Throws an error with a custom @message {String?} when the given @object {var} is not a class.
	 */
	var assertIsClass = function(object, message) 
	{
		if (!isClass(object)) {
			throw new Error(message || "Invalid class: " + object);
		}
	};


	Object.addStatics("core.Class", 
	{
		isClass : isClass,
		assertIsClass: assertIsClass,
		
		
		/**
		 * {Class} Resolves a given @className {String}
		 */
		getByName : function(className) 
		{
			if (core.Env.isSet("debug")) {
				core.Assert.isType(className, "String");
			}

			var obj = core.Module.resolveName(className);
			return isClass(obj) ? obj : null;
		},


		/**
		 * {Map} Returns a map of all events and their type of the given class (@cls {Class}).
		 */
		getEvents : function(cls) 
		{
			if (core.Env.isSet("debug")) {
				core.Class.assertIsClass(cls);
			}

			return cls.__events;
		},


		/**
		 * {Map} Returns a map of all properties and their configuration supported by the given class (@cls {Class}).
		 */
		getProperties : function(cls) 
		{
			if (core.Env.isSet("debug")) {
				core.Class.assertIsClass(cls);
			}

			return cls.__properties;
		},


		/**
		 * {Map} Returns all property features used in the given class (@cls {Class}).
		 */
		getPropertyFeatures : function(cls) 
		{
			var all = {};
			var properties = cls.__properties;
			for (var name in properties)
			{
				var config = properties[name];
				for (var key in config) {
					all[key] || (all[key] = true);
				}
			}

			return all;
		},


		/**
		 * {Boolean} Whether the first class includes the second one.
		 *
		 * - @cls {Class} Class to check for including other class.
		 * - @inc {Class} Class for checking if being included into first one.
		 */
		includesClass : function(cls, inc) 
		{
			if (core.Env.isSet("debug")) {
				core.Class.assertIsClass(cls, "Class to check for including class is itself not a class!");
				core.Class.assertIsClass(inc, "Class to check for being included is not a class!");
			}

			return cls.__includes.indexOf(inc) != -1;
		}
		
	});

})(this);
