/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
==================================================================================================
*/

(function(global) {
	
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

			add(object, name, item);
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

			add(proto, name, item);
		}
	}
	
	
	/**
	 * Declares the given name and stores the given object onto it.
	 *
	 * @param name {String} Namespace/Package e.g. foo.bar.baz
	 * @param object {Object|Function} Any object or function
	 * @return {Object} Returns the given object
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
	 * {Boolean} Whether the given @object {Object} or the @property {String?} inside the given object is a native host type.
	 */
	function isHostType(object, property) 
	{
		var type = object != null ? typeof object[property] : 'number';
		return !/^(?:boolean|number|string|undefined)$/.test(type) && (type == 'object' ? !!object[property] : true);
	}


	// Prefill cache for `isClassOf`
	var toStringMap = {};
	"Array Function RegExp Object Date Number String".replace(/\w+/g, function(cls) {
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
	 */
	function isClassOf(value, name) {
		return value != null && toStringMap[toString.call(value)] == name;
	}
	
	
	/**
	 * {Boolean} Whether the given value is of the given type
	 *
	 * Supports all class checks support by `isClassOf` but also:
	 * 
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
		
		return result;
	}
	
	
	// Temporary hack to make next statement workable
	Object.prototype.addStatics = addStatics;
	
	/**
	 * Useful root methods to add members to objects
	 */
	Object.prototype.addStatics("Object", 
	{
		declareNamespace : declareNamespace,
		addStatics : addStatics,
		addMembers : addMembers,
		isHostType : isHostType,
		isClassOf : isClassOf,
		isTypeOf : isTypeOf
	});
	
})(this);
