/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Zynga Inc.
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
	},
	

	/**
	 * {Element} Finds the closest parent of @start {Element} which is 
	 * successfully tested against the given @test {Function}.
	 */
	closest: function(start, test) 
	{
		while (start && start.nodeType != 9) 
		{
			if (test(start)) {
				return start;
			}

			start = start.parentNode;
		}
	},
	
	
	/**
	 * {Boolean} Returns whether the given @parent {Element} contains the
	 * given @child {Element}.
	 */
	contains: function(parent, child) 
	{
		if (parent.nodeType == 9) {
			return child.ownerDocument === parent;
		} else if (parent.contains) {
			return parent.contains(child);
		} else if (parent.compareDocumentPosition) {
			return !!(parent.compareDocumentPosition(child) & 16);
		}
		
		while(target)
		{
			if (element == target) {
				return true;
			}

			target = target.parentNode;
		}

		return false;
	}
});
