/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
==================================================================================================
*/

/**
 * Utility collection used by the different checksum/hashing implementations.
 */
core.Module("core.crypt.Util", 
{
	/**
	 * {Array} Convert @input {String} to an array of little-endian words.
	 * 
	 * Note: Characters >255 have their high-byte silently ignored.
	 */
	rawStringToLittleEndian : function(input)
	{
		var output = Array(input.length >> 2);
		
		for(var i = 0; i < output.length; i++) {
			output[i] = 0;
		}
			
		for(var i = 0; i < input.length * 8; i += 8) {
			output[i>>5] |= (input.charCodeAt(i / 8) & 0xFF) << (i%32);
		}
			
		return output;
	},


	/**
	 * {String} Converts @input {Array} of little-endian words to a string.
	 */
	littleEndianToRawString : function(input)
	{
		var output = "";
		
		for(var i = 0; i < input.length * 32; i += 8) {
			output += String.fromCharCode((input[i>>5] >>> (i % 32)) & 0xFF);
		}
			
		return output;
	},
	
	
	/**
	 * {Array} Converts a @input {String} to an array of big-endian words.
	 *
	 * Note: Characters >255 have their high-byte silently ignored.
	 */
	rawStringToBigEndian : function(input)
	{
		var output = Array(input.length >> 2);

		for (var i = 0; i < output.length; i++) {
			output[i] = 0;
		}

		for (var i = 0; i < input.length * 8; i += 8) {
			output[i>>5] |= (input.charCodeAt(i / 8) & 0xFF) << (24 - i % 32);
		}

		return output;
	},
	
	
	/**
	 * {String} Converts @input {Array} of big-endian words to a string.
	 */
	bigEndianToRawString : function(input)
	{
		var output = "";
		
		for(var i = 0; i < input.length * 32; i += 8) {
			output += String.fromCharCode((input[i>>5] >>> (24 - i % 32)) & 0xFF);
		}
		
		return output;
	}
});

