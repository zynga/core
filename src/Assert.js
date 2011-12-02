/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2011 Sebastian Werner
==================================================================================================
*/

/**
 * @require {fix.ArrayIndexOf}
 * @require {fix.Console}
 * @require {fix.DateNow}
 * @require {fix.DocumentHead}
 * @require {fix.ExecScript}
 * @require {fix.FunctionBind}
 * @require {fix.HTML5Markup}
 * @require {fix.ObjectKeys}
 * @require {fix.SetTimeoutArgs}
 */
(function(global, toString) 
{
	// Module class is not yet ready
	if (!global.core) {
		global.core = {};
	}
	
	var add = function(func, name, msg) 
	{
		if (!func) {
			throw new Error("Invalid function during adding assertion for " + name);
		}
		
		// Wrap method throw error for simplified throwing of exceptions in type checks
		if (func.length == 1) 
		{
			Assert[name] = function(value, localMsg) 
			{
				if (!func(value)) {
					throw new Error('Value: "' + value + '": ' + (localMsg || msg));
				}
			};
		}
		else 
		{
			Assert[name] = function(value, test, localMsg) 
			{
				if (!func(value, test)) {
					throw new Error('Value: "' + value + '": ' + (localMsg || msg).replace("%1", "" + test));
				}
			};
		}
		
		Assert[name].displayName = "core.Assert." + name;
	};
	
	
	/**
	 * Assert module which contains and manages assertions.
	 */
	var Assert = core.Assert = 
	{
		/**
		 * Adds a new assertion check. Wraps the original method
		 *
		 * Supports two different function signatures:
		 *
		 * * function(expression)
		 * * function(expression, comparison) (supports replacing %s inside the error message with the comparison value)
		 *
		 * @param func {Function} Function for the test. Must return boolean.
		 * @param name {String} Name of the method to attach.
		 * @param msg {String} Generic message to print out
		 *
		 */
		add : add
	};

	// The actual basic assertions
	add(function(value) { return typeof value == "boolean"; }, "boolean", "Not boolean!");
	add(function(value) { return typeof value == "string"; }, "string", "Not a string!");
	add(function(value) { return typeof value == "number" && isFinite(value); }, "number", "Not a number!");
	add(function(value) { return parseInt(value) === value; }, "integer", "Not an integer!");
	add(function(value) { return value != null; }, "notNull", "Is null!");

	add(function(value, match) { 
		return value == match; 
	}, "equal", "Is not equal!");

	add(function(value) {
		var type = typeof value;
		return value == null || type == "boolean" || type == "number" || type == "string";
	}, "primitive", "Not a primitive value!");

	// Make not use of instanceof operator as it has a memory leak in IE and also does not work cross frame.
	// Cross frame: http://perfectionkills.com/instanceof-considered-harmful-or-how-to-write-a-robust-isarray/
	var toString = Object.prototype.toString;
	var toStringMap = {};
	"Array Function RegExp Object".replace(/\w+/g, function(cls) {
		toStringMap[cls] = "[object " + cls + "]";
	});

	add(function(value) {
		return value != null && toString.call(value) == toStringMap.Array;
	}, "array", "Not an array!");

	add(function(value) {
		return value != null && toString.call(value) == toStringMap.Function;
	}, "func", "Not a function!");
	
	add(function(value) {
		return value != null && toString.call(value) == toStringMap.RegExp;
	}, "regExp", "Not a regular expression!");

	add(function(value) {
		return value != null && toString.call(value) == toStringMap.Object;
	}, "object", "Not an object!");
	
	add(function(value) {
		return value != null && toString.call(value) == toStringMap.Object && value.constructor === Object;
	}, "map", "Not a map (plain object)!");

	add(function(value, keys) 
	{
		Assert.map(value);
		Assert.array(keys);
		
		var valueKeys = Object.keys(value);
		for (var i=0, l=valueKeys.length; i<l; i++) 
		{
			var key = valueKeys[i];
			if (keys.indexOf(key) == -1) {
				return false;
			}
		}
		
		return true;
	}, "hasAllowedKeysOnly", "Defines a key %1 which is not allowed being used!");

	add(function(value, regexp) { 
		return typeof value == "string" && !!value.match(regexp); 
	}, "matchesRegExp", "Does not match regular expression %1!");
	
	add(function(value, list) {
		return list.indexOf(value) != -1;
	}, "inList", "Is not in specified list!");
	
	// Use instanceof here, but be memory safe in IE
	// Memory leak: http://ajaxian.com/archives/working-aroung-the-instanceof-memory-leak
	add(function(value, clazz) {
		return value != null && value.hasOwnProperty && value instanceof clazz;
	}, "instanceOf", "Is not a instance of %1!"); 

	add(function(obj, key) {
		return obj != null && key in obj;
	}, "hasKey", "Missing key %1!");
	
	add(function(value) {
		return value && value.nodeType != null;
	}, "node", "Not a node!");

	add(function(value) {
		return value && value.nodeType == 1;
	}, "element", "Not an element!");

	add(function(value) {
		return value && value.nodeType == 3;
	}, "textNode", "Not a text node!");

	add(function(value) {
		return value && value.nodeType == 9;
	}, "document", "Not a document!");
	
})(this);
