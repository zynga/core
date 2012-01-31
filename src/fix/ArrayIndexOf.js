/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
==================================================================================================
*/

/**
 * Fixes missing `Array.prototype.indexOf` is some non JavaScript 1.6 compatible browsers.
 */
Object.addMembers("Array", 
{
	/**
	 * {Integer} Returns the first index at which a given @searchElement {var} can be found in the array, or `-1` if it is not present.
	 * 
	 * See also: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
	 */
	indexOf : function(searchElement /*, fromIndex */)
	{
		if (this == null) {
			throw new TypeError();
		}
	
		var t = Object(this);
		var len = t.length >>> 0;
		if (len === 0) {
			return -1;
		}
	
		var n = 0;
	
		if (arguments.length > 0) 
		{
			n = Number(arguments[1]);
			if (n !== n) { // shortcut for verifying if it's NaN
				n = 0;
			} else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
				n = (n > 0 || -1) * Math.floor(Math.abs(n));
			}
		}
	
		if (n >= len) {
			return -1;
		}
	
		var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
		for (; k < len; k++) 
		{
			if (k in t && t[k] === searchElement) {
				return k;
			}
		}
	
		return -1;
	}
	
}, true);
