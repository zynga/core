/* 
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
--------------------------------------------------------------------------------------------------
  Based on the work of ES5 Shim
  MIT License, Copyright (c) 2009, 280 North Inc. http://280north.com/ 
==================================================================================================
*/

/**
 * Adds ES5 Array methods if these are not implemented by the engine.
 */
Object.addStatics("Array",
{
	/**
	 * Implements ES5 `isArray` method.
	 * See also: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray
	 */
	isArray : function(value) {
		return value != null && Object.prototype.toString.call(value) == "[object Array]";
	}
}, true);

Object.addMembers("Array",
{
	/**
	 * Implements ES5 `forEach` method as defined by: ES5 15.4.4.18
	 * See also: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/foreach
	 */
	forEach : function(block, thisObject) 
	{
		var len = +this.length;
		for (var i = 0; i < len; i++) 
		{
			if (i in this) {
				block.call(thisObject, this[i], i, this);
			}
		}
	},

	/**
	 * Implements ES5 `map` method as defined by: ES5 15.4.4.19
	 * See also: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/map
	 */
	map : function(fun /*, thisp*/) 
	{
		if (typeof fun !== "function") {
			throw new TypeError();
		}

		var len = this.length;
		var res = new Array(len);
		var thisp = arguments[1];
		
		for (var i = 0; i < len; i++) 
		{
			if (i in this) {
				res[i] = fun.call(thisp, this[i], i, this);
			}
		}

		return res;
	},

	/**
	 * Implements ES5 `filter` method as defined by: ES5 15.4.4.20
	 * See also: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/filter
	 */
	filter : function(block /*, thisp */) 
	{
		var values = [];
		var thisp = arguments[1];
		
		for (var i = 0; i < this.length; i++) 
		{
			if (block.call(thisp, this[i])) {
				values.push(this[i]);
			}
		}
		
		return values;
	},

	/**
	 * Implements ES5 `every` method as defined by: ES5 15.4.4.16
	 * See also: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/every
	 */
	every : function(block /*, thisp */) 
	{
		var thisp = arguments[1];
		
		for (var i = 0; i < this.length; i++) 
		{
			if (!block.call(thisp, this[i])) {
				return false;
			}
		}

		return true;
	},

	/**
	 * Implements ES5 `some` method as defined by: ES5 15.4.4.17
	 * See also: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some
	 */
	some : function(block /*, thisp */) 
	{
		var thisp = arguments[1];
		
		for (var i = 0; i < this.length; i++) 
		{
			if (block.call(thisp, this[i])) {
				return true;
			}
		}
		
		return false;
	},

	/**
	 * Implements ES5 `reduce` method as defined by: ES5 15.4.4.21
	 * See also: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/reduce
	 */
	reduce : function(fun /*, initial*/) 
	{
		var len = +this.length;
	
		// Whether to include (... || fun instanceof RegExp)
		// in the following expression to trap cases where
		// the provided function was actually a regular
		// expression literal, which in V8 and
		// JavaScriptCore is a typeof "function".  Only in
		// V8 are regular expression literals permitted as
		// reduce parameters, so it is desirable in the
		// general case for the shim to match the more
		// strict and common behavior of rejecting regular
		// expressions. However, the only case where the
		// shim is applied is IE's Trident (and perhaps very
		// old revisions of other engines).	 In Trident,
		// regular expressions are a typeof "object", so the
		// following guard alone is sufficient.
		
		if (typeof fun !== "function") {
			throw new TypeError();
		}

		// no value to return if no initial value and an empty array
		if (len === 0 && arguments.length === 1) {
			throw new TypeError();
		}

		var i = 0;
		if (arguments.length >= 2) 
		{
			var rv = arguments[1];
		}
		else 
		{
			do 
			{
				if (i in this) 
				{
					rv = this[i++];
					break;
				}

				// if array contains no values, no initial value to return
				if (++i >= len) {
					throw new TypeError();
				}
			} 
			while (true);
		}

		for (; i < len; i++) 
		{
			if (i in this) {
				rv = fun.call(null, rv, this[i], i, this);
			}
		}

		return rv;
	},

	/**
	 * Implements ES5 `reduceRight` method as defined by: ES5 15.4.4.22
	 * See also: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/reduceRight
	 */
	reduceRight : function(fun /*, initial*/) 
	{
		if (typeof fun !== "function") {
			throw new TypeError();
		}

		// no value to return if no initial value, empty array
		var len = this.length;
		if (len === 0 && arguments.length === 1) {
			throw new TypeError();
		}

		var rv, i = len - 1;
		if (arguments.length >= 2) 
		{
			rv = arguments[1];
		}
		else
		{
			do
			{
				if (i in this) 
				{
					rv = this[i--];
					break;
				}

				// if array contains no values, no initial value to return
				if (--i < 0) {
					throw new TypeError();
				}
			} 
			while (true);
		}

		for (; i >= 0; i--) 
		{
			if (i in this) {
				rv = fun.call(null, rv, this[i], i, this);
			}
		}

		return rv;
	},

	/**
	 * Implements ES5 `lastIndexOf` method as defined by: ES5 15.4.4.15
	 * See also: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/lastIndexOf
	 */
	lastIndexOf : function(value /*, fromIndex */) 
	{
		var length = this.length;
		if (!length) {
			return -1;
		}
			
		var i = arguments[1] || length;
		if (i < 0) {
			i += length;
		}
			
		i = Math.min(i, length - 1);
		
		for (; i >= 0; i--) 
		{
			if (!(i in this)) {
				continue;
			}
				
			if (value === this[i]) {
				return i;
			}
		}

		return -1;
	}
}, true);

