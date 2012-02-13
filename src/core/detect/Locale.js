/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
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
	VALUE : (function()
	{
		var nav = navigator;
		var input = (nav.userLanguage || nav.language).toLowerCase();
		var split = input.indexOf("-");

		return split > 0 ? input.substring(0, split) : input;
	})()
});
