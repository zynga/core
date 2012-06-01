/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Zynga Inc.
==================================================================================================
*/

/**
 * Caret query and manipulation API.
 */
core.Module("core.bom.Caret",
{
	/**
	 * {Integer} Returns the caret position on the given @element {Element}.
	 */
	getPosition : function(element) 
	{
		if (document.selection) 
		{
			element.focus();
			var sel = document.selection.createRange();
			sel.moveStart('character', -element.value.length);
			return sel.text.length;
		}
		else if (typeof element.selectionStart == "number") 
		{
			return element.selectionStart;
		}
	},

	/**
	 * Sets the caret @position {Integer} on the given @element {Element}.
	 */
	setPosition : function(element, position)
	{
		if (document.selection) 
		{
			var range = element.createTextRange();
			range.collapse(true);
			range.moveEnd('character', position);
			range.moveStart('character', position);
			range.select();
		}
		else if (typeof element.selectionStart == "number") 
		{
			element.selectionStart = position;
			element.selectionEnd = position;
		}
	}
});
