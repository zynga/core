/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
--------------------------------------------------------------------------------------------------
  Inspired by: http://www.quirksmode.org/blog/archives/2011/12/outerwidth_and.html
==================================================================================================
*/

(function(global) 
{
	
	/**
	 * Utility module for dealing with the browser viewport. Contains methods
	 * specifically interesting for mobile devices like smartphones/tablets (orientation, etc.)
	 */
	core.Module("core.bom.Viewport", 
	{
		
		getWidth: function() {
			return global.innerWidth;
		},
		
		getHeight: function() {
			return global.innerHeight;
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