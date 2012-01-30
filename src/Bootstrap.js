/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
==================================================================================================
*/

(function(global, toString) {
	
	// defineProperty exists in IE8 but will error when trying to define a property on
	// native objects. IE8 does not have defineProperies, however, so this check saves a try/catch block.
	if(Object.defineProperty && Object.defineProperties)
	{
		var add = function(target, name, method) 
		{
			Object.defineProperty(target, name, 
			{
				value: method, 
				configurable: true, 
				enumerable: false, 
				writeable: true 
			});
		};
	}
	else 
	{
		var add = function(target, name, method) {
			target[name] = method;
		};
	};
	
	
	/** {Map} Stores and maps namespaces */
	var cache = {};


	/**
	 * Add @members {Map} to the object found under the given @name {String|Object}.
	 */
	function addStatics(name, members) 
	{
		var object = typeof name == "string" ? global[name] || cache[name] : name;
		var prefix = name + ".";
		for (var memberName in members) 
		{
			var item = members[memberName];
			if (item instanceof Function) {
				item.displayName = prefix + name;
			}

			add(object, memberName, item);
		}
	}


	/**
	 * Add @members {Map} to the prototype of the object found under the given @name {String|Object}.
	 */
	function addMembers(name, members) 
	{
		var object = typeof name == "string" ? global[name] || cache[name] : name;
		var proto = object.prototype;
		var prefix = name + ".prototype.";
		for (var memberName in members) 
		{
			var item = members[memberName];
			if (item instanceof Function) {
				item.displayName = prefix + name;
			}

			add(proto, memberName, item);
		}
	}
	
	
	/**
	 * {Object} Declares the given @name {String} and stores the given @object {Object|Function} onto it.
	 */
	function declareNamespace(name, object, duplicate)
	{
		var splits = name.split(".");
		var current = global;
		var length = splits.length-1;
		var segment;
		var i = 0;

		while(i<length)
		{
			segment = splits[i++];
			if (current[segment] == null) {
				current = current[segment] = {};
			} else {
				current = current[segment];
			}
		}

		return cache[name] = current[splits[i]] = object;
	}
	
	
	/**
	 * {Array} Returns all registers names (modules, interfaces, classes, etc.)
	 */
	function getNamespaces() {
		return Object.keys(cache);
	}


	/**
	 * {Boolean} Clears the object under the given @name {String} (including name cache) and returns if that was successful.
	 */
	function clearNamespace(name)
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
	}


	/**
	 * {Object|Function|Array} Resolves a given @name {String} into the item stored unter it.
	 */
	function resolveNamespace(name)
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
	}
	

	/**
	 * {Boolean} Whether the given @object {Object} or the @property {String?} inside the given object is a native host type.
	 */
	function isHostType(object, property) 
	{
		var type = object != null ? typeof object[property] : 'number';
		return !/^(?:boolean|number|string|undefined)$/.test(type) && (type == 'object' ? !!object[property] : true);
	}


	// Prefill cache for `isClassOf`
	var toStringMap = {};
	var classes = "Array Function RegExp Object Date Number String Boolean";
	classes.replace(/\w+/g, function(cls) {
		toStringMap[cls] = "[object " + cls + "]";
	});
	
	
	/**
	 * {Boolean} Whether the given value is an instance of the given native class @name.
	 *
	 * Supports these classes:
	 *
	 * - `Array`
	 * - `Function`
	 * - `RegExp`
	 * - `Object`
	 * - `Date`
	 * - `Number`
	 * - `String`
	 * - `Boolean`
	 */
	function isClassOf(value, name) {
		return value != null && toString.call(value) == toStringMap[name];
	}
	
	
	/**
	 * {Boolean} Whether the given value is of the given type
	 *
	 * Supports all class checks support by `isClassOf` but also:
	 * 
	 * - `Native`
	 * - `Map`
	 * - `Integer`
	 * - `Primitive`
	 */
	function isTypeOf(value, type) 
	{
		var result;
		
		if (toStringMap[type]) 
		{
			result = isClassOf(value, type);
		}
		else if (type == "Native")
		{
			result = isHostType(value);
		}
		else if (type == "Map") 
		{
			result = isClassOf(value, "Object") && value.constructor === Object;
		}
		else if (type == "Integer") 
		{
			result = isClassOf(value, "Number") && (~~value) == value;
		} 
		else if (type == "Primitive") 
		{
			var type = typeof value;
			result = value == null || type == "boolean" || type == "number" || type == "string";
		}
		else if (global.console)
		{
			console.warn("Unsupported type call to Object.isTypeOf(): " + type);
		}
		
		return result;
	}
	
	var types = "Native Map Integer Primitive";
	
	
	/**
	 * {String} Validates the @object {Map} to don't hold other keys than the ones defined by @allowed {Array}. 
	 * Returns first non matching key which was found or `undefined` if all keys are valid.
	 */
	function validateKeys(object, allowed) 
	{
		// Build lookup table
		var set = {};
		for (var i=0, l=allowed.length; i<l; i++) {
			set[allowed[i]] = true;
		}
		
		// Collect used keys
		var list = Object.keys(object);
		
		// Validate keys
		var invalid = [];
		for (var i=0, l=list.length; i<l; i++) 
		{
			var current = list[i];
			if (!set[current]) {
				invalid.push(current);
			}
		}
		
		return invalid;
	}	
	
	function arrayToSet(array) 
	{
		var set = {};
		for (var i=0, l=array.length; i<l; i++) {
			set[array[i]] = true;
		}
		
		return set;
	}
	
	
	// Temporary hack to make next statement workable
	Object.addStatics = addStatics;
	
	/**
	 * Useful root methods to add members to objects
	 */
	Object.addStatics("Object", 
	{
		/** {Set} Set of classes which are supported */
		CLASSES: arrayToSet(classes.split(" ")),
		
		/** {Set} Set of types which are supported */
		TYPES: arrayToSet(types.split(" ")),
		
		declareNamespace : declareNamespace,
		getNamespaces: getNamespaces,
		clearNamespace: clearNamespace,
		resolveNamespace: resolveNamespace,

		addStatics : addStatics,
		addMembers : addMembers,
		
		validateKeys : validateKeys,

		isHostType : isHostType,
		isClassOf : isClassOf,
		isTypeOf : isTypeOf
	});
	
})(this, Object.prototype.toString);
