/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
==================================================================================================
*/

/**
 * #load(core.fix.ArrayIndexOf)
 * #load(core.fix.Console)
 * #load(core.fix.DateNow)
 * #load(core.fix.DocumentHead)
 * #load(core.fix.FunctionBind)
 * #load(core.fix.HTML5Markup)
 * #load(core.fix.ObjectKeys)
 * #load(core.fix.TimeoutArgs)
 */
(function(global, toString, undef) 
{

	// Try catch to prevent access error to core.Env which is not yet existend
	if (global.core)
	{ 
		// Include ES5 support if not natively supported
		if (!core.Env.isSet("es5")) 
		{
			/**
			 * #load(core.es5.Array)
			 * #load(core.es5.Date)
			 * #load(core.es5.String)
			 * #load(core.es5.JSON)
			 */
			0;
		}
	}
	
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
	 * Add @statics {Map} to the object found under the given @name {String}.
	 * It is possible to control whether to @keep {Boolean?false} existing statics.
	 */
	var addStatics = function(name, statics, keep) 
	{
		var object = global[name] || cache[name];
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
	}


	/**
	 * Add @members {Map} to the prototype of the object found under the given @name {String}.
	 * It is possible to control whether to @keep {Boolean?false} existing members.
	 */
	var addMembers = function(name, members, keep) 
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
	
	// Prefill cache
	var toStringMap = {};
	var classes = "Array Function RegExp Object Date Number String Boolean";
	classes.replace(/\w+/g, function(cls) {
		toStringMap[cls] = "[object " + cls + "]";
	});
	
	// Temporary hack to make next statement workable
	Object.addStatics = addStatics;
	
	/**
	 * Useful root methods to add members to objects
	 */
	Object.addStatics("Object", 
	{
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
		 * {Object} Declares the given @name {String} and stores the given @object {Object|Function} onto it.
		 */
		declareNamespace : function (name, object)
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

		addStatics : addStatics,
		addMembers : addMembers
	});
	
})(this, Object.prototype.toString);
