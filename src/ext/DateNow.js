/* 
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
==================================================================================================
*/

Object.addMembers("Date",
{
	/** 
	 * {Number} Returns the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC. 
	 *
	 * See also: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/now
	 */
	now: function() {
		return +new Date;
	}
}, true);
