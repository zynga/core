/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
==================================================================================================
*/

(function() 
{
	var transform = core.bom.Style.property('transform');
	if (transform) {

		var gpuStacking = !!core.bom.Style.property('perspective');
		if (!gpuStacking) {

			// Note: translateZ is supported on some clients even if 3D transforms and perspective is not.
			var element = document.createElement("div");
			var style = element.style;
			var value = "translateZ(20px)";
			
			style[transform] = value
			gpuStacking = style[transform] == value;

		}
	}
	
	// Verify incoming parameters
	if (core.Env.isSet("debug")) 
	{
		var validate = function(args) 
		{
			// Three required parameters
			core.dom.Node.assertIsNode(args[0]);
			core.Assert.isType(args[1], "Number");
			core.Assert.isType(args[2], "Number");
			
			// Two optional ones
			if (args[3] != null) 
			{
				// zIndex does not support floats.
				core.Assert.isType(args[3], "Integer");
			}

			if (args[4] != null) {
				core.Assert.isType(args[4], "Number");
			}
		};
	}
	
	if (gpuStacking) 
	{
		var set = function(element, x, y, z, zoom) 
		{
			if (core.Env.isSet("debug")) {
				validate(arguments);
			}

			// We default to z position zero instead of leaving it untouched to force acceleration in Safari
			if (z == null) {
				z = 0;
			}

			var value = "translate(" + x + "px," + y + "px) translateZ(" + z + "px)";
			
			if (zoom != null) {
				value += " scale(" + zoom + ")";
			}
			
			element.style[transform] = value;
		};
		
		var reset = function(element) 
		{
			if (core.Env.isSet("debug")) {
				core.dom.Node.assertIsNode(element);
			}
			
			element.style[transform] = "";
		};
	} 
	else if (transform) 
	{
		var set = function(element, x, y, z, zoom) 
		{
			if (core.Env.isSet("debug")) {
				validate(arguments);
			}
			
			var value = "translate(" + x + "px," + y + "px)";

			if (zoom != null) {
				value += " scale(" + zoom + ")";
			}

			var style = element.style;
			style[transform] = value;
			
			if (z != null) {
				style.zIndex = z;
			}
		};

		var reset = function(element) 
		{
			if (core.Env.isSet("debug")) {
				core.dom.Node.assertIsNode(element);
			}
			
			var style = element.style;
			style[transform] = "";
			style.zIndex = "";
		};
	}
	else 
	{
		/**
		 * Positions the given @element {Element} on coordinates @x {Number}, @y {Number} and @z {Integer?null}.
		 * Optionally supports zooming using the @zoom {Number?1} parameter as well.
		 */
		var set = function(element, x, y, z, zoom) 
		{
			if (core.Env.isSet("debug")) {
				validate(arguments);
			}
			
			var style = element.style;
			style.left = (x / zoom) + "px";
			style.top = (y / zoom) + "px";

			if (z != null) {
				style.zIndex = z;
			}
			
			if (zoom != null) {
				style.zoom = zoom;
			}
		};

		/**
		 * Resets the position of the given @element {Element}.
		 */
		var reset = function(element) 
		{
			if (core.Env.isSet("debug")) {
				core.dom.Node.assertIsNode(element);
			}
			
			var style = element.style;
			style.left = style.top = style.zIndex = style.zoom = "";
		};
	}
	
	
	/**
	 * High performance DOM node positioning with stacking and zooming support
	 */
	core.Module("core.bom.Position", 
	{
		set: set,
		reset: reset
	});
})();
