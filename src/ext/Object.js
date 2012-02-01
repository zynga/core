/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
==================================================================================================
*/

/**
 * Adds useful non-standard extensions to the Object class like {#fromArray} and {#values}.
 */
Object.addStatics("Object", 
{
	/**
	 * {Map} Creates a new object with prefilled content from the @keys {Array} list.
	 * The @value {var ? true} is always the same, defaults to true, but is also configurable.
	 */
	fromArray : function(keys, value) 
	{
		if (arguments.length == 1) {
			value = true;
		}
		
		var obj = {};
		for (var i=0, l=keys.length; i<l; i++) {
			obj[keys[i]] = value;
		}
		
		return obj;
	},
	
	
	/**
	 * {Array} Returns all the values of the given @object {Map}.
	 */
	values : function(object) 
	{
		return Object.keys(object).map(function(key) {
			return object[key];
		});
	},
	
	
	/**
	 * {String} Validates the @object {Map} to don't hold other keys than the ones defined by @allowed {Array}. 
	 * Returns first non matching key which was found or `undefined` if all keys are valid.
	 */
	validateKeys : function(object, allowed) 
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
});

