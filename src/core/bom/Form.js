/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Zynga Inc.
==================================================================================================
*/

/**
 * Utilities to work with HTML form elements
 */
core.Module("core.bom.Form",
{
	/**
	 * {String} Serializes a HTML @form {Element}.
	 */
	serialize: function(form) 
	{
		if (core.Env.isSet("debug")) 
		{
			core.Assert.equal(args.length, 1);
			core.dom.Node.assertIsNode(form);
			core.Assert.equal(form.tagName, "FORM");
		}
		
		return Array.prototype.filter.call(form.elements, core.bom.FormItem.isSuccessful).map(core.bom.FormItem.serialize).join("&");
	}
});

