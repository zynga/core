/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2011 Sebastian Werner
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
	serialize: function(form) {
		return filter(form.elements, core.bom.FormItem.isSuccessful).map(core.bom.FormItem.serialize).join("&");
	}
});

