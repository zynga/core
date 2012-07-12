/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Zynga Inc.
==================================================================================================
*/

/**
 * #load(ext.Console)
 * #load(ext.DateNow)
 * #load(ext.DocumentHead)
 * #load(ext.IsArray)
 * #load(ext.FunctionBind)
 * #load(ext.HTML5Markup)
 * #load(ext.StringTrim)
 * #load(ext.TimeoutArgs)
 */
(function(global, toString, undef) 
{
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
	var cache = {
		"global" : global
	};


	/**
	 * {Object} Declares the given @name {String} and stores the given @object {Object|Function} onto it.
	 */
	var declareNamespace = function(name, object)
	{
		var splits = name.split(".");
		var current = global;
		var length = splits.length-1;
		var segment;
		var i = 0;
		var c = 1;

		if(typeof window === 'undefined')
		{
			var currentNode = core;

			while(c<length)
			{
				segment = splits[c++];
				if (current[segment] == null) {
					current = current[segment] = {};
					currentNode = currentNode[segment] = {};
				} else {
					current = current[segment];
					currentNode = currentNode[segment];
				}
			}
			currentNode[splits[c]] = object;
		}

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
	};

	// Prefill cache
	var toStringMap = {};
	var classes = "Array Function RegExp Object Date Number String Boolean";
	classes.replace(/\w+/g, function(cls) {
		toStringMap[cls] = "[object " + cls + "]";
	});

	// Temporary hack to make next statement workable
	declareNamespace("core.Main.declareNamespace", declareNamespace);
	core.Main.declareNamespace = declareNamespace;

	/**
	 * Useful root methods to add members to objects
	 *
	 * Loading this class also adds a few essential fixes for different engines.
	 */
	core.Main.declareNamespace("core.Main", 
	{
		declareNamespace : declareNamespace,
		

		/** {=Array} Set of types which are supported */
		TYPES: (classes + " Null Native Map Integer Primitive").split(" "),
		
		/**
		 * {Boolean} Whether the given @value {var} is of the given @type {String}.
		 *
		 * Supports these types:
		 * 
		 * - `Null`
		 * - `Array`
		 * - `Function`
		 * - `RegExp`
		 * - `Object`
		 * - `Date`
		 * - `Number`
		 * - `String`
		 * - `Boolean`
		 * - `Map`
		 * - `Integer`
		 * - `Primitive`
		 */
		isTypeOf : function(value, type) 
		{
			var result = false;

			if (value == null) 
			{
				result = type == "Null";
			}
			else if (type in toStringMap) 
			{
				result = toString.call(value) == toStringMap[type];
			}
			else if (type == "Map") 
			{
				result = toString.call(value) == toStringMap.Object && value.constructor === Object;
			}
			else if (type == "Integer") 
			{
				result = toString.call(value) == toStringMap.Number && (~~value) == value;
			} 
			else if (type == "Primitive") 
			{
				var type = typeof value;
				result = value == null || type == "boolean" || type == "number" || type == "string";
			}

			return result;
		},
		

		/**
		 * {Boolean} Clears the object under the given @name {String} (including name cache) and returns if that was successful.
		 */
		clearNamespace: function(name)
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
		 * {Object|Function|Array} Resolves a given @name {String} into the item stored unter it.
		 */
		resolveNamespace: function(name)
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
		 * Add @statics {Map} to the object found under the given @name {String}.
		 * It is possible to control whether to @keep {Boolean?false} existing statics.
		 */
		addStatics : function(name, statics, keep) 
		{
			var object = global[name] || cache[name] || name.prototype;
			var prefix = name + ".";
			for (var staticName in statics) 
			{
				if (!keep || object[staticName] === undef) 
				{
					var item = statics[staticName];
					if (item instanceof Function) {
						item.displayName = prefix + name;
					}

					add(object, staticName, item);
				}
			}
		},


		/**
		 * Add @members {Map} to the prototype of the object found under the given @name {String}.
		 * It is possible to control whether to @keep {Boolean?false} existing members.
		 */
		addMembers : function(name, members, keep) 
		{
			var object = global[name] || cache[name];
			var proto = object.prototype;
			var prefix = name + ".prototype.";
			for (var memberName in members) 
			{
				if (!keep || proto[memberName] === undef) 
				{
					var item = members[memberName];
					if (item instanceof Function) {
						item.displayName = prefix + name;
					}

					add(proto, memberName, item);
				}
			}
		}
	});
})(this, Object.prototype.toString);
