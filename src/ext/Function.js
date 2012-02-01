/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
==================================================================================================
*/

/**
 * Adds useful non-standard extensions to the `Function.prototype` like {#debounce}.
 *
 * #require(core.Bootstrap)
 */
Object.addMembers("Function",
{
	/**
	 * {Function} Debounces the given method.
	 *
	 * Debouncing ensures that exactly one signal is sent for an event that may be happening
	 * several times — or even several hundreds of times over an extended period. As long as
	 * the events are occurring fast enough to happen at least once in every detection
	 * period, the signal will not be sent!
	 *
	 * Via: 
	 *
	 * - @threshold {Integer} Number of milliseconds of distance required before reacting/resetting.
	 * - @execAsap {Boolean?false} Whether the execution should happen at begin.
	 */
	debounce : function(threshold, execAsap)
	{
		// Via: http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
		var func = this;
		var timeout;

		return function debounced()
		{
			var obj = this, args = arguments;
			function delayed()
			{
				if (!execAsap) {
					func.apply(obj, args);
				}

				timeout = null;
			};

			if (timeout){
				clearTimeout(timeout);
			} else if (execAsap) {
				func.apply(obj, args);
			}

			timeout = setTimeout(delayed, threshold || 100);
		};
	}
});

