/* 
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
==================================================================================================
*/

(function(Date) 
{
	if (!Date.now) 
	{
		Date.now = function() {
			return +new Date;
		};
	}
})(Date);
