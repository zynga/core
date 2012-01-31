/* 
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
==================================================================================================
*/

(function(global) 
{
	// Dynamic URI can be shared because we do not support reloading files
	var dynamicExtension = "?r=" + Date.now();

	/** 
	 * Image loader with support for load callback.
	 */
	core.Module("core.io.Image",
	{
		/** Whether the loader supports parallel requests. Always true for images. */
		SUPPORTS_PARALLEL : true,

		/**
		 * Loads an image with the given @uri {String} and fires a @callback {Function} (in @context {Object?}) when the image was loaded.
		 * Optionally appends an random `GET` parameter to omit caching when @nocache {Boolean?false} is enabled.
		 */
		load : function(uri, callback, context, nocache) 
		{
			if (core.Env.isSet("debug")) 
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
			
			var img = new Image;

			img.onload = img.onerror = function(e) 
			{
				img.onload = img.onerror = null;

				var errornous = (e||global.event).type === "error";
				if (core.Env.isSet("debug") && errornous) {
					console.warn("Could not load image: " + uri);
				}

				if (callback) 
				{
					callback.call(context || global, uri, errornous, {
						node: img,
						width : img.naturalWidth || img.width || 0,
						height : img.naturalHeight || img.height || 0
					});
				}
			}

			img.src = uri + (nocache ? dynamicExtension : "");
		}
	});
})(this);
