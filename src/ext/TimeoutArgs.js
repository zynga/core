/* 
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
--------------------------------------------------------------------------------------------------
  Based on the work of Andrea Giammarchi
  Vice-Versa Project: http://code.google.com/p/vice-versa/
  http://webreflection.blogspot.com/2011/05/settimeout-and-setinterval-with-extra.html
  MIT LICENSE
==================================================================================================
*/

/**
 * Adds support for extra parameters for setInterval/setTimeout for browsers (IE, ...) missing it
 *
 * #require(core.Bootstrap)
 */
if (core.Env.isSet("engine", "trident"))
{
	(function(global, undef) 
	{
		// trap original versions
		var origTimeout = global.setTimeout;
		var origInterval = global.setInterval;

		// create a delegate
		var delegate = function(callback, args) 
		{
			args = Array.prototype.slice.call(args, 2);
			return function() {
				callback.apply(null, args);
			};
		};

		/**
		 * Overrides global `setTimeout` and `setInterval` with implementations which supports
		 * extra parameters - a feature already supported by most JavaScript engines.
		 */
		Object.addStatics("global", 
		{
			/**
			 * Executes the @callback {Function} after specified @delay {Number}.
			 * 
			 * See also: https://developer.mozilla.org/en/DOM/window.setTimeout
			 */
			setTimeout : function(callback, delay) {
				return origTimeout(delegate(callback, arguments), delay);
			},

			/**
			 * Executes the @callback {Function} repeatedly, with a fixed time @delay {Number} between each call to that function.
			 *
			 * See also: https://developer.mozilla.org/en/DOM/window.setTimeout
			 */
			setInterval : function(callback, delay) {
				return origInterval(delegate(callback, arguments), delay);
			}

		});

	})(this);
}
