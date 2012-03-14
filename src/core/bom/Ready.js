/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Zynga Inc.
==================================================================================================
*/

(function(global, doc, re) 
{
	/**
	 * Easy wrapper on content loaded event registration
	 */
	core.Module("core.bom.Ready", 
	{
		/**
		 * Executes the given @callback {Function} (in given @context {Object?}) 
		 * when the document is ready.
		 */
		exec: function(callback, context)
		{
			if (context) {
				callback = callback.bind(context);
			}

			if (re.test(doc.readyState)) {
				callback();
			} else {
				doc.addEventListener('DOMContentLoaded', callback, false);
			}
		}
	});
})(this, document, /complete|loaded|interactive/);
