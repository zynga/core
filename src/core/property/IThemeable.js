/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Zynga Inc.
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
		 * {var} Returns the themed value of the given @property {String}.
		 */
		getThemedValue : function(property) {}
	}
});
 