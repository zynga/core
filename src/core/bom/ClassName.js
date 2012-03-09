/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
==================================================================================================
*/

(function() 
{
	/**
	 * {Boolean} Returns whether the given @string {String} is a valid {CSSClassName}.
	 */
	var isValid = function(string) {
		return typeof string == "string" && string.length != 0 && !(/\s/.test(string));
	};
	
	// Verify incoming parameters
	if (core.Env.isSet("debug")) 
	{
		var validate = function(args) 
		{
			core.Assert.equal(args.length, 2);
			core.dom.Node.assertIsNode(args[0]);
			core.Assert.isTrue(isValid(args[1], "Invalid CSS class name!"));
		};
	}
	
	// Support new classList interface
	if ("classList" in document.createElement("div")) 
	{
		var addClass = function(elem, className) 
		{
			if (core.Env.isSet("debug")) {
				validate(arguments);
			}
			
			elem.classList.add(className);
		};

		var removeClass = function(elem, className) 
		{
			if (core.Env.isSet("debug")) {
				validate(arguments);
			}

			elem.classList.remove(className);
		};

		var containsClass = function(elem, className) 
		{
			if (core.Env.isSet("debug")) {
				validate(arguments);
			}
		
			return elem.classList.contains(className);
		};

		var toggleClass = function(elem, className) 
		{
			if (core.Env.isSet("debug")) {
				validate(arguments);
			}

			elem.classList.toggle(className);
		};
	}
	else
	{
		
		var space = " ";
		
		/**
		 * Adds the @className {CSSClassName} to the given @elem {Element}.
		 */
		var addClass = function(elem, className) 
		{
			if (core.Env.isSet("debug")) {
				validate(arguments);
			}
			
			if (!containsClass(elem, className)) {
				elem.className += space + className;
			}
		};

		/**
		 * Removes the @className {CSSClassName} from the given @elem {Element}.
		 */
		var removeClass = function(elem, className) 
		{
			if (core.Env.isSet("debug")) {
				validate(arguments);
			}

			elem.className = (space + elem.className + space).replace(className, "")
		};

		/**
		 * {Boolean} Returns whether @className {CSSClassName} is applied to the given @elem {Element}.
		 */
		var containsClass = function(elem, className) 
		{
			if (core.Env.isSet("debug")) {
				validate(arguments);
			}

		  return elem.className && (elem.className == className || (space + elem.className + space).indexOf(space + className + space) !== -1);
		};

		/**
		 * Toggles the @className {CSSClassName} for the given @elem {Element}.
		 */
		var toggleClass = function(elem, className) 
		{
			if (core.Env.isSet("debug")) {
				validate(arguments);
			}
			
			if (containsClass(elem, className)) {
				removeClass(elem, className);
			} else {
				elem.className += space + className;
			}
		};
		
	}
	

	/**
	 * Managing class names on DOM nodes the easy way.
	 *
	 * Makes use of high-performance `classList` interface in modern browsers:
	 * https://developer.mozilla.org/en/DOM/element.classList
	 */
	core.Module("core.bom.ClassName",
	{
		isValid: isValid,
		add : addClass,
		remove : removeClass,
		contains : containsClass,
		toggle : toggleClass
	});
	
})();
