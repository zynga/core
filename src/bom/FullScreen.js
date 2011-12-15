/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2011 Sebastian Werner
==================================================================================================
*/

(function(document) {
	
	var root = document.documentElement;
	var request, cancel, is;

	if (root.requestFullScreen) 
	{
		request = function(elem) {
			(elem||root).requestFullScreen();
		};
		
		cancel = function() {
			document.cancelFullScreen();
		};
		
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
			
			request = function(elem) {
				(elem||root)[requestName]();
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
	

	core.Module("core.bom.FullScreen", {
	
		/**
		 * Requests full screen mode
		 *
		 */
		request: request,

		/**
		 * Cancels full screen mode
		 */
		cancel: cancel,

		/**
		 * Whether the browser is in full screen mode
		 *
		 * @return {Boolean} Whether the browser is in full screen mode
		 */
		is: is
		
	});
	
})(document);