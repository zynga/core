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
	 * Serializes a HTML form element.
	 * 
	 * @param form {Element} DOM element of form to serialize
	 */
	serialize: function(form) 
	{
		if (core.Env.isSet("debug")) 
		{
			core.Assert.equal(args.length, 1);
			core.Assert.element(form);
			core.Assert.equal(form.tagName, "FORM");
		}
		
		return Array.prototype.filter.call(form.elements, core.bom.FormItem.isSuccessful).map(core.bom.FormItem.serialize).join("&");
	}
});

