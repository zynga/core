/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
==================================================================================================
*/

/**
 * Adds useful non-standard extensions to the `Number.prototype` like {#pad}, {#times} and {#hex}.
 *
 * #require(core.Bootstrap)
 */
Object.addMembers("Number",
{
	/**
	 * {String} Pads the number to reach the given @length {Integer}.
	 */
	pad : function(length) {
		return ("0".repeat(length) + this).slice(-length);
	},


	/**
	 * Executes the given @func {Function} x-times.
	 * Support an optional @context {Object?} for execution.
	 */
	times : function(func, context) {
		for (var i=0; i<this; i++) {
			context ? func.call(context) : func();
		}
	},


	/**
	 * {String} Converts the number to a hex string.
	 */
	hex : function() {
		return this.toString(16);
	}
});

