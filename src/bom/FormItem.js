/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
==================================================================================================
*/

/**
 * Offers methods around serialization tasks of form items.
 */
core.Module("core.bom.FormItem",
{
	/**
	 * Whether the form field is successful (should be submitted to the server)
	 *
	 * @param item {Element} DOM element
	 * @return {Boolean} Whether the value of the given form element should be submitted to the server
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
	 * Returns the serialized representation of the given form item.
	 *
	 * @param item {Element} DOM element
	 * @return {String} Serialized representation of the form item
	 */
	serialize: function(item) 
	{
		if (core.Env.isSet("debug")) 
		{
			core.Assert.assertEqual(args.length, 1);
			core.Assert.element(item);
			core.Assert.string(item.name);
		}
		
		return item.name + "=" + encodeURIComponent(item.value);
	}
});