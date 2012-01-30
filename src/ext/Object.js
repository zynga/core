/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
==================================================================================================
*/

Object.addMembers("Object", 
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
	}
});

