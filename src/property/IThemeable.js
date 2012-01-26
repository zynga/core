/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
==================================================================================================
*/

/**
 * For classes which use inheritable properties.
 */
core.Interface("core.property.IThemeable",
{
	members : 
	{
		/**
		 * Returns the themed value of the given property
		 */
		getThemedValue : function(property) {}
	}
});
