/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
==================================================================================================
*/

/**
 * For classes which use inheritable properties.
 */
core.Interface("core.property.IInheritable",
{
	members : 
	{
		/**
		 * Returns the inherited value of the given property
		 */
		getInheritedValue : function(property) {}
	}
});
