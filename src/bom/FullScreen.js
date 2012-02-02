/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2011 Sebastian Werner
==================================================================================================
*/

(function(document) {
	
	var root = document.documentElement;
	var request, cancel, is;

	// See also: http://hacks.mozilla.org/2012/01/using-the-fullscreen-api-in-web-browsers/
	if (root.requestFullScreen) 
	{
		/**
		 * Requests full screen mode for given @element {DOMElement?document.documentElement}.
		 */
		request = function(element) {
			(element||root).requestFullScreen();
		};
		
		/**
		 * Cancels full screen mode.
		 */
		cancel = function() {
			document.cancelFullScreen();
		};
		
		/**
		 * {Boolean} Returns whether the browser is in full screen mode.
		 */
		is = function() {
			return document.fullScreenElement != null;
		};
	}
	else
	{
		var prefix = core.Env.select("engine", {
			trident: 'ms',
			gecko: 'moz',
			webkit: 'webkit',
			presto: 'o'
		});
		
		var baseName = "FullScreen";
		var requestName = prefix + "Request" + baseName;

		if (root[requestName]) 
		{
			var cancelName = prefix + "Cancel" + baseName;
			var hasName = prefix + baseName
			var isName = prefix + "Is" + baseName;
			
			request = function(element) {
				(element||root)[requestName]();
			};
			
			cancel = function() {
				document[cancelName]();
			};

			is = function() {
				return document[hasName] || document[isName];
			};
		}
		else
		{
			request = cancel = is = function() {
				return false;
			};
		}
	}
	

	/**
	 * Collection of methods to deal with different full screen APIs in browsers.
	 */
	core.Module("core.bom.FullScreen", {
	
		request: request,
		cancel: cancel,
		is: is
		
	});
	
})(document);