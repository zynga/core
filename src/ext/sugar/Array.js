/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Zynga Inc.
--------------------------------------------------------------------------------------------------
  Inspired by Sugar.js, Copyright © 2011 Andrew Plummer
==================================================================================================
*/

// Enforce loading of ES5 array fixes if required
if (!core.Env.isSet("es5")) 
{
	/** #require(ext.es5.Array) */
	0;
}

/**
 * Adds useful non-standard extensions to the `Array.prototype` like {#min}, {#contains} and {#remove}.
 */
core.Main.addStatics("Array", 
{
	/**
	 * {Array} Converts the given @args {arguments} into an array.
	 */
	fromArguments : function(args) {
		// See also: http://jsperf.com/arrayifying-arguments/4
		return Array.apply(null, args);
	}
});

core.Main.addMembers("Array", 
{
	/**
	 * {Number} Returns the maximum number in the array.
	 */
	max : function() {
		return Math.max.apply(Math, this);
	},
	

	/**
	 * {Number} Returns the minimum number in the array.
	 */
	min : function() {
		return Math.min.apply(Math, this);
	},


	/**
	 * {Number} Returns the sum of all values in the array.
	 */
	sum : function() 
	{
		var sum = 0;
		this.forEach(function(value) {
			sum += value;
		});
		
		return sum;
	},

	
	/**
	 * {var} Inserts and returns the given @value {var} at the given @position {Integer?-1}. 
	 * Supports negative position values, too. Appends to the end if no position is defined.
	 */
	insertAt : function(value, position) 
	{
		position == null ? this.push(value) : this.splice(position < 0 ? this.length+position : position, 0, value);
		return value;
	},
	
	
	/**
	 * {Boolean} Whether the array contains the given @value {var}.
	 */
	contains : function(value) {
		return ~this.indexOf(value);
	},
	
	
	/**
	 * {Array} Clones the whole array and returns it.
	 */
	clone : function() 
	{
		// Wrap method for security reaons, so params to concat are safely ignored.
		return this.concat();
	},
	
	
	/**
	 * {Array} Filters out sparse fields (including all null/undefined values if @nulls is `true`) and returns a new compacted array.
	 */
	compact : function(nulls) 
	{
		// Pretty cheap way to iterate over all relevant values and create a copy
		return this.filter(nulls ? function(value) { return value != null; } : function() { return true; });
	},
	
	
	/**
	 * {Array} Returns a flattened, one-dimensional copy of the array.
	 */
	flatten: function() 
	{
		var result = [];
		
		this.forEach(function(value) 
		{
			if (value instanceof Array) {
				result.push.apply(result, value.flatten());
			} else {
				result.push(value);
			}
		});
	
		return result;
	},
	

	/**
	 * Randomizes the array via Fisher-Yates algorithm.
	 */
	randomize : function() {
		for(var j, x, self=this, i=self.length; i; j = parseInt(Math.random() * i), x = self[--i], self[i] = self[j], self[j] = x);
	},
	
	
	/** 
	 * {var} Removes the given @value {var} (first occourence only) from the array and returns it.
	 */
	remove : function(value) 
	{
		var position = this.indexOf(value);
		if (position != -1) 
		{
			this.splice(position, 1);
			return value;
		}
	},
	
	
	/**
	 * {Array} Returns a new array with all elements that are unique. 
	 * 
	 * Comparison happens based on the toString() value! So numbers
	 * and booleans might be unified with strings with the same "value".
	 * This is mainly because of performance reasons.
	 */
	unique : function() 
	{
		var strings = {};
		return this.filter(function(value) 
		{
			if (!strings.hasOwnProperty(value)) {
				return strings[value] = true;
			}
		});
	},
	
	
	/**
	 * {var} Returns the value at the given @position {Integer}. Supports negative indexes, too.
	 */
	at : function(position) {
		return this[position < 0 ? this.length + position : position];
	},
	

	/** 
	 * {var} Removes and returns the value at the given @position {Integer}.
	 */
	removeAt : function(position) 
	{
		var ret = this.splice(position < 0 ? this.length + position : position, 1);
		if (ret.length) {
			return ret[0];
		}
	},


	/**
	 * Removes a specific range (@from {Integer} <-> @to {Integer}) from the array. Supports negative indexes, too.
	 */
	removeRange : function(from, to) 
	{
		// Based on Array Remove - By John Resig (MIT Licensed)
		// http://ejohn.org/blog/javascript-array-remove/
		
		var rest = this.slice((to || from) + 1 || this.length);
		this.length = from < 0 ? this.length + from : from;
		this.push.apply(this, rest);
	}
});

