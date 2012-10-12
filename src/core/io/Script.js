/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Zynga Inc.
==================================================================================================
*/

(function(global)
{
	var doc = global.document;

	// the following is a feature sniff for the ability to set async=false on dynamically created script elements, as proposed to the W3C
	// RE: http://wiki.whatwg.org/wiki/Dynamic_Script_Execution_Order
	var supportsScriptAsync = doc.createElement("script").async === true;

	// Dynamic URI can be shared because we do not support reloading files
	var dynamicExtension = "?r=" + Date.now();

	// Used for shorten calls
	var assignCallback = function(elem, value) {
		
		if (/MSIE (\d+\.\d+);/.test(navigator.userAgent))
		{
			var ieversion = parseInt(RegExp.$1)
			if (ieversion>=10)
			{
				elem.onload = elem.onerror = value;
			}
		}
		else
		{
			elem.onload = elem.onerror = elem.onreadystatechange = value;
		}
	};

	/**
	 * Generic script loader for features. Could be used for loading feature/class packages after initial load.
	 *
	 * (though limited feature set and file registration not useful for data transaction)
	 */
	core.Module("core.io.Script",
	{
		/** Whether the loader supports parallel requests */
		SUPPORTS_PARALLEL : supportsScriptAsync || jasy.Env.isSet("engine", "gecko") || jasy.Env.isSet("engine", "opera"),


		/**
		 * Loads a JavaScript file from the given @uri {String} and fires a @callback {Function} (in @context {Object?}) when the script was loaded.
		 * Optionally appends an random `GET` parameter to omit caching when @nocache {Boolean?false} is enabled..
		 */
		load : function(uri, callback, context, nocache)
		{
			if (jasy.Env.isSet("debug"))
			{
				core.Assert.isType(uri, "String");

				if (callback != null) {
					core.Assert.isType(callback, "Function", "Invalid callback method!");
				}

				if (context != null) {
					core.Assert.isType(context, "Object", "Invalid callback context!");
				}

				if (nocache != null) {
					core.Assert.isType(nocache, "Boolean");
				}
			}

			if (jasy.Env.isSet("debug") && nocache == null) {
				nocache = true;
			}

			var head = doc.head;
			var elem = doc.createElement("script");

			// load script via 'src' attribute, set onload/onreadystatechange listeners
			assignCallback(elem, function(e)
			{
				var errornous = (e||global.event).type === "error";
				if (errornous)
				{
					console.warn("Could not load script: " + uri);
				}
				else
				{
					var readyState = elem.readyState;
					if (readyState && readyState !== "complete" && readyState !== "loaded") {
						return;
					}
				}

				// Prevent memory leaks
				assignCallback(elem, null);

				// Execute callback
				if (callback) {
					callback.call(context||global, uri, errornous);
				}
			});

			elem.src = nocache ? uri + dynamicExtension : uri;

			if (supportsScriptAsync) {
				elem.async = false;
			}

			head.insertBefore(elem, head.firstChild);
		}
	});
})(this);

