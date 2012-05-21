/* 
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Zynga Inc.
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
	 */
	core.Main.addStatics("Object", 
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
		keys : function(object) 
		{
			var keys = [];
			for (var name in object) 
			{
				if (Object.prototype.hasOwnProperty.call(object, name)) {
					keys.push(name);
				}
			}

			if (hasDontEnumBug) 
			{
				for (var i=0; i<dontEnumsLength; i++) 
				{
					var dontEnum = dontEnums[i];
					if (Object.prototype.hasOwnProperty.call(object, dontEnum)) {
						keys.push(dontEnum);
					}
				}
			}

			return keys;
		}
		
	}, true);

})();