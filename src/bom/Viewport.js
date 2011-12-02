(function(global) {
	
	/**
	 *
	 * 
	 * See also:
	 * http://www.quirksmode.org/blog/archives/2011/12/outerwidth_and.html
	 */
	Module("core.bom.Viewport", {
		
		isLandscape: function() {
			return global.outerWidth > global.outerHeight;
		},

		isPortrait: function() {
			return global.outerWidth < global.outerHeight;
		},
		
		getOrientation: function() {
			
			var orient = global.orientation;
			
			if (orient != null) {
				
				
				
			}
			
			return orient;
			
		}
		
	});
	
})(this);