/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2011 Sebastian Werner
==================================================================================================
*/

(function() 
{
	// Add a new test for class names
	core.Test.add(function(value) {
		return typeof value == "string" && value.length != 0 && !(/\s/.test(value));
	}, "isClassName", "Not a valid class name");
	
	// Verify incoming parameters
	if (core.Env.isSet("debug")) 
	{
		var validate = function(args) 
		{
			core.Test.assertEqual(args.length, 2);
			core.Test.assertElement(args[0]);
			core.Test.assertClassName(args[1]);
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
		
		var addClass = function(elem, className) 
		{
			if (core.Env.isSet("debug")) {
				validate(arguments);
			}
			
			if (!containsClass(elem, className)) {
				elem.className += space + className;
			}
		};

		var removeClass = function(elem, className) 
		{
			if (core.Env.isSet("debug")) {
				validate(arguments);
			}

			elem.className = (space + elem.className + space).replace(className, "")
		};

		var containsClass = function(elem, className) 
		{
			if (core.Env.isSet("debug")) {
				validate(arguments);
			}

		  return elem.className && (elem.className == className || (space + elem.className + space).indexOf(space + className + space) !== -1);
		};

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
		/**
		 * Adds a class to an element's list of classes
		 *
		 * @param elem {Element} DOM element to modify
		 * @param className {String} Class to add
		 */
		add : addClass,
		
		/**
		 * Removes a class from an element's list of classes
		 *
		 * @param elem {Element} DOM element to modify
		 * @param className {String} Class to remove
		 */
		remove : removeClass,
	
		/**
		 * Whether the given node contains the given class
		 *
		 * @param elem {Element} DOM element to modify
		 * @param className {String} Class to check for
		 * @return {Boolean} Whether the element contains the given class
		 */
		contains : containsClass,
		
		/**
		 * Toggles the existence of a class in an element's list of classes
		 *
		 * @param elem {Element} DOM element to modify
		 * @param className {String} Class to toggle
		 */
		toggle : toggleClass
	});
	
})();
