/* 
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
--------------------------------------------------------------------------------------------------
  Inspired by http://mathiasbynens.be/notes/settimeout-onload and 
  http://dbaron.org/log/20100309-faster-timeouts
  By L. David Baron <dbaron@dbaron.org>, 2010-03-07, 2010-03-09
  Released under the following license: Copyright (c) 2010, The Mozilla Foundation
  All rights reserved.
==================================================================================================
*/

/**
 * Emulate setImmediate/clearImmediate using postMessage or timeouts.
 * 
 * See also: http://dvcs.w3.org/hg/webperf/raw-file/tip/specs/setImmediate/Overview.html
 */
(function(global) 
{
	if (global.setImmediate) {
		return;
	}
	
	if (global.postMessage && global.addEventListener) 
	{
		var timeouts = [];
		var messageName = "zero-timeout";
		
		global.addEventListener("message", function(ev) 
		{
			if (ev.source == global && ev.data == messageName) 
			{
				ev.stopPropagation();
				if (timeouts.length) {
					timeouts.shift()();
				}
			}
		}, true);
		
		/** 
		 * Adds non-standard methods `setImmediate` and `clearImmediate` which were introduced by Firefox to the global object.
		 *
		 * #require(core.Bootstrap)
		 */
		Object.addStatics("global",
		{
			/**
			 * This method is used to break-up long running operations and run a callback @func {Function} immediately after the browser 
			 * has completed other operations such as events and display updates.
			 *
			 * See also: https://developer.mozilla.org/en/Document_Object_Model_(DOM)/window.setImmediate
			 */
			setImmediate : function(func) 
			{
				timeouts.push(func);
				postMessage(messageName, "*");
				return func; // use function as timeout handle
			},
		
			/**
			 * This method clears the action specified by {#setImmediate} via the given @handle {var}.
			 *
			 * See also: https://developer.mozilla.org/en/Document_Object_Model_(DOM)/window.clearImmediate
			 */
			clearImmediate : function(handle) 
			{
				var pos = timeouts.lastIndexOf(handle);
				if (pos != -1) {
					timeouts.splice(pos, 1);
				}
			}
		}, true);
	}
	else
	{
		Object.addStatics("global",
		{
			setImmediate : function(func) {
				return setTimeout(func, 0);
			},

			clearImmediate : function(handle) {
				clearTimeout(handle);
			}
		}, true);
	}
})(this);
