/* 
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
--------------------------------------------------------------------------------------------------
  Based on the work of ES5 Shim
  MIT License, Copyright (c) 2009, 280 North Inc. http://280north.com/
  http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
==================================================================================================
*/

(function() 
{
	// Fix for IE bug with enumerables
	var hasDontEnumBug = true;
	for (var key in {"toString": null}) {
		hasDontEnumBug = false;	
	}
	
	if (hasDontEnumBug) 
	{
		var dontEnums = "toString,toLocaleString,valueOf,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,constructor".split(",");
		var dontEnumsLength = dontEnums.length;
	}
	
	/**
	 * Adds missing ES5 `Object.keys` to the Object constructor when not implemented natively by the browser engine.
	 * Also adds a custom extension `Object.empty` to quickly check whether an object is empty (no keys).
	 *
	 * #require(core.Bootstrap)
	 */
	Object.addStatics("Object", 
	{
		/**
		 * {Array} Returns an array of all own enumerable properties found upon a given @object {Object}, 
		 * in the same order as that provided by a for-in loop 
		 * 
		 * See also: 
		 *
		 * - ES5 15.2.3.14
		 * - https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/keys
		 */
		keys : function keys(object) 
		{
			var keys = [];
			for (var name in object) {
				if (Object.hasOwnProperty(object, name)) {
					keys.push(name);
				}
			}

			if (hasDontEnumBug) 
			{
				for (var i=0; i<dontEnumsLength; i++) 
				{
					var dontEnum = dontEnums[i];
					if (Object.hasOwnProperty(object, dontEnum)) {
						keys.push(dontEnum);
					}
				}
			}

			return keys;
		},

		/**
		 * {Boolean} Tests whether the given @object {Object} is empty
		 *
		 * Non standard extension (because it's easier here than anywhere else)
		 */
		empty : function(object) 
		{
			for (var name in object) {
				return false;
			}

			if (hasDontEnumBug) 
			{
				for (var i=0; i<dontEnumsLength; i++) 
				{
					if (Object.hasOwnProperty(object, dontEnums[i])) {
						return false;
					}
				}
			}

			return true;
		}
		
	}, true);

})();