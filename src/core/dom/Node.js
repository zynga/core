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
	},
	
	
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
	},
	
	
	/**
	 * Returns the DOM index of the given node
	 *
	 * @param node {Node} Node to look for
	 * @return {Integer} The DOM index
	 */
	getNodeIndex : function(node)
	{
		var index = 0;
		while (node && (node = node.previousSibling)) {
			index++;
		}

		return index;
	},


	/**
	 * Returns the DOM index of the given element (ignoring non-elements)
	 *
	 * @param element {Element} Element to look for
	 * @return {Integer} The DOM index
	 */
	getElementIndex : function(element)
	{
		var index = 0;
		while (element && (element = element.previousSibling))
		{
			if (element.nodeType == 1) {
				index++;
			}
		}

		return index;
	},
});
