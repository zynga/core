/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
==================================================================================================
*/

(function()
{
	// http://blog.stevenlevithan.com/archives/faster-trim-javascript
	// http://perfectionkills.com/whitespace-deviations/

	var ws = "[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]";
	
	var trimBeginRegexp = new RegExp("^" + ws + ws + "*");
	var trimEndRegexp = new RegExp(ws + ws + "*$");

	/**
	 * Adds ES5 String methods if these are not implemented by the engine.
	 */
	Object.addMembers("String", 
	{
		/**
		 * Implements `trim` according to // ES5 15.5.4.20 (http://es5.github.com/#x15.5.4.20)
		 */
		trim: function() {
			return String(this).replace(trimBeginRegexp, '').replace(trimEndRegexp, '');
		}
	});

})();
