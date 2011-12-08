/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2011 Sebastian Werner
==================================================================================================
*/

core.Module("core.checksum.Util",
{
	
	/*
	 * Encode a string as utf-16
	 */
	str2rstr_utf16le : function(input)
	{
		var output = "";
		
		for(var i = 0; i < input.length; i++) {
			output += String.fromCharCode( input.charCodeAt(i)				& 0xFF, (input.charCodeAt(i) >>> 8) & 0xFF);
		}
		
		return output;
	},

	str2rstr_utf16be : function(input)
	{
		var output = "";
		
		for(var i = 0; i < input.length; i++) {
			output += String.fromCharCode((input.charCodeAt(i) >>> 8) & 0xFF, input.charCodeAt(i) & 0xFF);
		}
		
		return output;
	}
	
});
