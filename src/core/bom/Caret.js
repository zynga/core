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
	getPosition : function(el) 
	{
		if (document.selection) 
		{
			el.focus();
			var sel = document.selection.createRange();
			sel.moveStart('character', -el.value.length);
			return sel.text.length;
		}
		else if (typeof el.selectionStart == "number") 
		{
			return el.selectionStart;
		}
	},

	setPosition : function(el, position)
	{
		if (document.selection) 
		{
			var range = el.createTextRange();
			range.collapse(true);
			range.moveEnd('character', position);
			range.moveStart('character', position);
			range.select();
		}
		else if (typeof el.selectionStart == "number") 
		{
			el.selectionStart = position;
			el.selectionEnd = position;
		}
	}
});
