/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2011 Sebastian Werner
==================================================================================================
*/

/**
 * Checks for existance of global API objects.
 *
 */
core.Module("core.detect.Object",
{
	get : (function(global)
	{
		// TODO
		// But not possible here:
		// - Canvas
		// - SVG
		// - GeoLocation (navigator)
		// - QuerySelectorAll

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
