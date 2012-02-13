/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
==================================================================================================
*/

/**
 * DOM utility methods
 */
core.Module("core.dom.Node",
{
	/**
	 * Throws an exception when @node {var} is not a valid DOM node. 
	 * The exception @message {String} can be customized via the parameter.
	 */
	assertIsNode: function(node, message) 
	{
		if (typeof node != "object" || node.nodeType == null) {
			throw new Error(message || "Invalid DOM node: " + node);
		}
	}
	
});
