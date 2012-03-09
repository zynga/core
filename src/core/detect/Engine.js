/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Zynga Inc.
==================================================================================================
*/

/**
 * Detects the browser engine in which the script is executed. It respects full browser engines
 * only and does not differentiate between different script engines or versions (like V8 vs. Nitro)
 */
core.Module("core.detect.Engine",
{
	/** {=String} One of `presto`, `gecko`, `webkit`, `trident` */
	VALUE : (function(global, toString)
	{
		var engine;
		var doc = global.document;
		var nav = global.navigator;
		var docStyle = doc && doc.documentElement.style;
		
		// isOldIE = '\v' == 'v'

		// Priority based detection
		// Omit possibility to fake user agent string by using object based detection first
		// Fall back to other ways for special cases like NodeJS and special environments like PhoneGap or AppMobi
		if (global.opera && toString.call(global.opera) == "[object Opera]") {
			engine = "presto"; // Opera
		} else if (global.WebKitPoint && toString.call(global.WebKitPoint) == "[object WebKitPoint]") {
			engine = "webkit"; // Chrome, Safari, ...
		} else if (global.controllers && toString.call(global.controllers) == "[object XULControllers]") {
			engine = "gecko"; // Firefox, Camino, ...
		} else if (nav && typeof nav.cpuClass === "string") {
			engine = "trident"; // Internet Explorer
		} else if (typeof window != "undefined") {
			engine = "webkit"; // NodeJS
		} else if (nav && /(webkit)[ \/]([\w.]+)/.exec(nav.userAgent)) {
			engine = "webkit"; // PhoneGap, AppMobi, etc.
		} else if (nav && /(mozilla)(?:.*? rv:([\w.]+))?/i.exec(nav.userAgent)) {
			engine = "gecko"; // Non XUL Firefox like
		}
		
		return engine;
	})(this, Object.prototype.toString)
});
