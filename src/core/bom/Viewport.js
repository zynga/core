/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
--------------------------------------------------------------------------------------------------
  Inspired by: http://www.quirksmode.org/blog/archives/2011/12/outerwidth_and.html
==================================================================================================
*/

(function(window) 
{
	/**
	 * Support for the browsers viewport. Also contains methods
	 * specifically interesting for mobile devices like smartphones/tablets (orientation, etc.)
	 */
	core.Module("core.bom.Viewport", 
	{
		/** {Integer} Returns the viewport width */
		getWidth: function() {
			return window.innerWidth;
		},
		
		/** {Integer} Returns the viewport height */
		getHeight: function() {
			return window.innerHeight;
		},
		
		/** {Boolean} Whether the viewport is in landscape orientation */
		isLandscape: function() {
			return global.outerWidth > global.outerHeight;
		},

		/** {Boolean} Whether the viewport is in portrait orientation */
		isPortrait: function() {
			return global.outerWidth < global.outerHeight;
		},
		
		/** {String} Returns the viewport orientation. */
		getOrientation: function() 
		{
			var orient = global.orientation;
			
			// TODO
			
			if (orient != null) {
				
				
				
			}
			
			return orient;
			
		}
		
	});
	
})(this);