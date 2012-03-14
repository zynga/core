/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Zynga Inc.
==================================================================================================
*/

/**
 * Detects browser language settings
 */
core.Module("core.detect.Locale",
{
	/**
	 * {=String} Locale string as configured by the user e.g. `de_AT`, `es_ES` or short like `de`
	 */
	VALUE : (function(global)
	{
		var nav = global.navigator || {};
		var input = (nav.userLanguage || nav.language || "en").toLowerCase();
		var split = input.indexOf("-");

		return split > 0 ? input.substring(0, split) : input;
	})(this)
});
