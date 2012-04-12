/* 
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Zynga Inc.
--------------------------------------------------------------------------------------------------
  Based on the work of Andrea Giammarchi
  Vice-Versa Project: http://code.google.com/p/vice-versa/
  http://webreflection.blogspot.com/2010/02/functionprototypebind.html
  MIT LICENSE
==================================================================================================
*/

/**
 * Adds missing ES5 `Function.prototype.bind` when not implemented natively by the browser engine.
 */
core.Main.addMembers("Function",
{
	/**
	 * {Function} Binds the function to the specific @context {Object} with optionally bound arbitrary number of @varargs {var...?}.
	 *
	 * See also: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/bind
	 */
	bind : function(context, varargs) 
	{
		// closest thing possible to the ECMAScript 5 internal IsCallable function
		if (typeof this !== "function") {
			throw new TypeError();
		}

		// "trapped" function reference
		var self = this;
		var undef;

		// only if there is more than an argument
		// we are interested into more complex operations
		// this will speed up common bind creation
		// avoiding useless slices over arguments
		if (varargs !== undef) 
		{
			// extra arguments to send by default
			var extraargs = Array.prototype.slice.call(arguments, 1);
			
			return function()
			{
				return self.apply(
					context,
					// thanks @kangax for this suggestion
					arguments.length ?
						// concat arguments with those received
						extraargs.concat(Array.prototype.slice.call(arguments)) :
						// send just arguments, no concat, no slice
						extraargs
				);
			};
		}
		else
		{
			// optimized callback
			return function() 
			{
				// speed up when function is called without arguments
				return arguments.length ? self.apply(context, arguments) : self.call(context);
			};
		}
	}
}, true);

