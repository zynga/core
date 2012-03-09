/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Zynga Inc.
==================================================================================================
*/

/**
 * Checks for existance of global API objects.
 *
 * - feature.appcache
 * - feature.worker
 * - feature.xhr
 * - feature.storage
 * - feature.gl
 * - feature.message
 * - feature.db
 * - feature.json
 * - feature.socket
 */
core.Module("core.detect.Object",
{
	get : (function(global)
	{
		var allowed =
		{
			"feature.appcache" : "applicationCache",
			"feature.worker" : "Worker",
			"feature.xhr" : "XMLHttpRequest",
			"feature.storage" : "localStorage",
			"feature.gl" : "WebGLRenderingContext",
			"feature.message" : "postMessage",
			"feature.db" : "openDatabase",
			"feature.json" : "JSON",
			"feature.socket" : "WebSocket"
		};

		/**
		 * {Boolean} Returns the whether the given @feature {String} is supported
		 */
		return function get(feature)
		{
			var test = allowed[feature];

			try {
				var result = test && test in global;
			} catch(ex) {}

			return !!result;
		};
	})(this)
});
