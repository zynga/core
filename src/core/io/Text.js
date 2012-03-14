/* 
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Zynga Inc.
==================================================================================================
*/

/**
 * Loads all kinds of text content like text, HTML and JSON.
 *
 */
(function(global) 
{
	var empty = new Function;
	
	// Detect native support
	var XHR = global.XMLHttpRequest;
	
	// Dynamic URI can be shared because we do not support reloading files
	var dynamicExtension = "?r=" + Date.now();
	
	/**
	 * Generic loader for any text content using XMLHTTPRequests.
	 */
	core.Module("core.io.Text", 
	{
		/** Whether the loader supports parallel requests */
		SUPPORTS_PARALLEL : true,

		/**
		 * Loads a text file from the given @uri {String} and fires a @callback {Function} (in @context {Object?}) when it was loaded.
		 * Optionally appends an random `GET` parameter to omit caching when @nocache {Boolean?false} is enabled. The optional
		 * @timeout {Number?10000} is configured to 10 seconds by default.
		 */
		load : function(uri, callback, context, nocache, timeout) 
		{
			if (!context) {
				context = global;
			}
			
			var timeoutHandle = null;
			var request = XHR ? new XHR : new ActiveXObject("Microsoft.XMLHTTP");
			
			// Open request, we always use async GET here
			request.open("GET", uri + (nocache ? dynamicExtension : ""), true);
			
			// Attach event listener
			request.onreadystatechange = function(e) 
			{
				// Headers received... data following, now configuring the timeout
				// As we don't send any data it's okay to start the timeout at this state.
				if (request.readyState == 2 && timeout !== 0 && !timeoutHandle)
				{
					timeoutHandle = setTimeout(function() {
						request.onreadystatechange = empty;
						request.abort();
						callback.call(context, uri, true);
					}, timeout || 10000);
				}
				
				if (request.readyState == 4) 
				{
					request.onreadystatechange = empty;
					clearTimeout(timeoutHandle);
					
					// Finally call the user defined callback (succeed with data)
					var status = request.status;
					callback.call(context, uri, !(status >= 200 && status < 300 || status == 304 || status == 1223), { 
						text : request.responseText || ""
					});
				}
			};
			
			// Fixes for IE memory leaks
			if (core.Env.isSet("engine", "trident") && global.attachEvent) 
			{
				var onUnload = function() 
				{
					global.detachEvent("onunload", onUnload);
					request.onreadystatechange = empty;
					clearTimeout(timeoutHandle);
					
					// Internet Explorer will keep connections alive if we don't abort on unload
					request.abort();
					
					// Finally call the user defined callback (failed)
					callback.call(context, uri, true);
				};
				
				global.attachEvent("onunload", onUnload);
			}
			
			// Send request
			request.send();
		}
	});
})(this);
