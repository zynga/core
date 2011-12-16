/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2011 Sebastian Werner
==================================================================================================
*/

/**
 * @require {core.ext.Core}
 */
Object.addPrototypeMethods("Object", 
{
	/**
	 * Creates a new object with prefilled content. Keys come from 
	 * the given array. The value is always the same, defaults to true,
	 * but is also configurable.
	 * 
	 * @param keys {Array} Keys as a list of keys
	 * @param value {var ? true} Value to use for all keys
	 * @return {Map} Newly created map with the given keys
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
	 * Returns all the values of the given object as an array.
	 *
	 * @param object {Map} Object to return values from
	 * @return {Array} List of all values
	 */
	values : function(object) 
	{
		return Object.keys(object).map(function(key) {
			return object[key];
		});
	}
});

