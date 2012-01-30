/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
==================================================================================================
*/

/**
 * Collection of serialization methods for form items
 */
core.Module("core.bom.FormItem",
{
	/**
	 * {Boolean} Returns whether the form @item {DOMElement} is successful (should be submitted to the server)
	 */
	isSuccessful: function(item)
	{
		if (core.Env.isSet("debug")) 
		{
			core.Assert.assertEqual(args.length, 1);
			core.Assert.element(item);
		}
		
		if (!item.name || item.disabled) {
			return false;
		}

		switch (item.type)
		{
			case "button":
			case "reset":
				return false;

			case "radio":
			case "checkbox":
				return item.checked;

			case "image":
			case "submit":
				return item == (item.ownerDocument || item.document).activeElement;
		}

		return true;
	},


	/**
	 * {String} Returns the serialized representation of the given form @item {DOMElement}.
	 */
	serialize: function(item) 
	{
		if (core.Env.isSet("debug")) 
		{
			core.Assert.assertEqual(args.length, 1);
			core.Assert.element(item);
			core.Assert.assertTypeOf(item.name, "String");
		}
		
		return item.name + "=" + encodeURIComponent(item.value);
	}
});