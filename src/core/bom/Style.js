/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Zynga Inc.
==================================================================================================
*/

(function() 
{
	/** Caches CSS property names to browser specific names. Can be used as a fast lookup alternative to {#property}. */
	var nameCache = {};

	var helperElem = document.createElement('div');
	var helperStyle = helperElem.style;
	var undef;

	var vendorPrefix = core.Env.select("engine", {
		trident: 'ms',
		gecko: 'Moz',
		webkit: 'Webkit',
		presto: 'O'
	});

	/**
	 * {String} Returns the supported property (e.g. `WebkitTransform`) of the given standard CSS property 
	 * @name {String} like `transform`. Returns `null` when the property is not supported.
	 */
	var getProperty = function(name) 
	{
		// Fast path, real native property
		if (name in helperStyle) {
			return name;
		}

		// Fixed name already cached?
		var fixedName = nameCache[name];
		if (fixedName !== undef) {
			return fixedName;
		}

		// Find vendor name
		var vendorName = vendorPrefix + name.charAt(0).toUpperCase() + name.slice(1);
		if (vendorName in helperStyle) {
			return (nameCache[name] = vendorName);
		}
		
		return null;
	};


	/**
	 * Utility class for working with HTML style properties (setting/getting). Automatically figures out the
	 * correct property name when the engine does not yet support the specified name, but a vendor prefixed one.
	 */
	core.Module("core.bom.Style", 
	{
		names: nameCache,
		property: getProperty,
		

		/**
		 * {String} Returns the value of the given property @name {String} on the given @element {Element}. By
		 * default the method returns the locally applied property value but there is also support for figuring
		 * out the @computed {Boolean?false} value by triggering the corresponding flag.
		 *
		 * **Note:** In Internet Explorer there is no 100% possibility to have access to the computed value.
		 * We fallback to the only supported thing: cascaded properties. These are the actual value
		 * of the property as applied - non interpreted. This means that units are not translated
		 * to pixels etc. like which is normally the case in computed properties.
		 */
		get: function(element, name, computed) 
		{
			// Find real name, use if supported
			var supported = name in helperStyle && name || nameCache[name] || getProperty(name);

			// Fast-path: local styles
			if (!computed) {
				return element.style[supported];
			}

			// Check support for computed style, fall back to cascaded styles
			// The solution is not 100% correct in IE, but as there is no 100% solution we omit the
			// whole thing here and just implement the basic fallback. Should be enough in most cases.
			var global = element.ownerDocument.defaultView;
			if (global) {
				return global.getComputedStyle(element, null)[supported];
			} else if (element.currentStyle) {
				return element.currentStyle[supported];
			}
		},


		/**
		 * {Integer} Returns an integer representation of the given style property @name {String} on the 
		 * given @element {Element}. By default the method returns the locally applied property value 
		 * but there is also support for figuring out the @computed {Boolean?false} value by triggering 
		 * the corresponding flag.
		 */
		getInteger: function(element, name, computed) {
			return parseInt(this.get(element, name, computed), 10) || 0;
		},
		

		/**
		 * Sets one or multiple style properties on the given @element {Element}. If @name {String|Map} is a `String`
		 * the third parameter @value defines the value to apply. Alternatively @name can be a `Map` which defines
		 * all properties to set.
		 */
		set: function(element, name, value) 
		{
			var style = element.style;
			var supported;

			if (typeof name === 'string') 
			{
				// Find real name, apply if supported
				supported = name in helperStyle && name || nameCache[name] || getProperty(name);
				if (supported) {
					if (core.Env.getValue("engine") == "trident") {
						try {
							style[supported] = value == null ? '' : value;
						} catch (e) {
							console.error("Style " + supported + " don't allow value " + value);
						}
					} else {
						style[supported] = value == null ? '' : value;
					}
				}
			}
			else
			{
				for (var key in name) 
				{
					// Find real name, apply if supported
					value = name[key];
					supported = key in helperStyle && key || nameCache[key] || getProperty(key);
					if (supported) {
						if (core.Env.getValue("engine") == "trident") {
							try {
								style[supported] = value == null ? '' : value;
							} catch (e) {
								console.error("Style " + supported + " don't allow value " + value);
							}
						} else {
							style[supported] = value == null ? '' : value;
						}
					}
				}
			}
		}
	});
})();

