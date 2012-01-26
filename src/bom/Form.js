/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
==================================================================================================
*/

/**
 * Utilities to work with HTML form elements
 */
core.Module("core.bom.Form",
{
	/**
	 * {String} Serializes a HTML @form {DOMElement}.
	 */
	serialize: function(form) 
	{
		if (core.Env.isSet("debug")) 
		{
			core.Assert.assertEqual(args.length, 1);
			core.Assert.element(form);
			core.Assert.assertEqual(form.tagName, "FORM");
		}
		
		return Array.prototype.filter.call(form.elements, core.bom.FormItem.isSuccessful).map(core.bom.FormItem.serialize).join("&");
	}
});

