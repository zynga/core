/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Zynga Inc.
==================================================================================================
*/

(function(window) 
{
	/**
	 * Querying element positions inside the document
	 */
	core.Module("core.bom.Offset", 
	{
		/**
		 * {Map} Returns the absolute position of the @element {Element} (from document perspective)
		 * with the keys `top`, `left`, `right`, `bottom`, `width` and `height`.
		 */
		get: function(element) 
		{
			var obj = element.getBoundingClientRect();
			
			var x = window.pageXOffset;
			var y = window.pageYOffset;
			
			obj.left += x;
			obj.top += y;
			obj.right += x;
			obj.bottom += y;

			return obj;
		}
	});
})(this);

