/* 
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
==================================================================================================
*/

/** Adds the pretty essential `Array.isArray()` method from ES5 if it is missing. */
Object.addStatics("Array",
{
	/**
	 * Implements ES5 `isArray` method to verify whether @value {var} is an `Array`.
	 * See also: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray
	 */
	isArray : function(value) {
		return value != null && Object.prototype.toString.call(value) == "[object Array]";
	}
}, true);
