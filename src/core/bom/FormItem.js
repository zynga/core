/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Zynga Inc.
==================================================================================================
*/

/**
 * Collection of serialization methods for form items
 */
core.Module("core.bom.FormItem",
{
	/**
	 * {Boolean} Returns whether the form @item {Element} is successful (should be submitted to the server)
	 */
	isSuccessful: function(item)
	{
		if (jasy.Env.isSet("debug")) 
		{
			core.Assert.equal(args.length, 1);
			core.dom.Node.assertIsNode(item);
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
	 * {String} Returns the serialized representation of the given form @item {Element}.
	 */
	serialize: function(item) 
	{
		if (jasy.Env.isSet("debug")) 
		{
			core.Assert.equal(args.length, 1);
			core.dom.Node.assertIsNode(item);
			core.Assert.isType(item.name, "String");
		}
		
		return item.name + "=" + encodeURIComponent(item.value);
	}
});