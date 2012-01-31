/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
==================================================================================================
*/

(function()
{
	// http://blog.stevenlevithan.com/archives/faster-trim-javascript
	var trimBeginRegexp = /^\s\s*/;
	var trimEndRegexp = /\s\s*$/;

	/**
	 * Adds ES5 String methods if these are not implemented by the engine.
	 */
	Object.addMembers("String", 
	{
		/**
		 * Implements `trim` according to ES5 15.5.4.20
		 */
		trim: function() {
			return String(this).replace(trimBeginRegexp, '').replace(trimEndRegexp, '');
		}
	})

})();
