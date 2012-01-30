core.Module("core.dom.Node",
{
	assertIsNode: function(node, message) 
	{
		if (typeof node != "object" || node.nodeType == null) {
			throw new Error(message || "Invalid DOM node: " + node);
		}
	}
	
});
