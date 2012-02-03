/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
==================================================================================================
*/

(function() 
{
	var hexTable = "0123456789abcdef".split("");
	
	/**
	 * Utility collection used by the different checksum/hashing implementations.
	 */
	core.Module("core.crypt.Util", 
	{
		/**
		 * {String} Convert the @input {String} to a hex string
		 */
		strToHex: function(input) 
		{
			var output = "";
			var code;

			for (var i = 0, l = input.length; i < l; i++)
			{
				code = input.charCodeAt(i);
				output += hexTable[(code >>> 4) & 0x0F] + hexTable[code & 0x0F];
			}

			return output;
		},
		
		
		/**
		 * {String} Encodes @input {String} as utf-8.
		 *
		 * For efficiency, this assumes the input is valid utf-16.
		 */
		strToUtf8 : function(input)
		{
			var output = "";
			var i = -1;
			var x, y;

			while (++i < input.length)
			{
				// Decode utf-16 surrogate pairs
				x = input.charCodeAt(i);
				y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;

				if (0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF)
				{
					x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);
					i++;
				}

				/* Encode output as utf-8 */
				if (x <= 0x7F) {
					output += String.fromCharCode(x);
				} else if (x <= 0x7FF) {
					output += String.fromCharCode(0xC0 | ((x >>> 6 ) & 0x1F), 0x80 | ( x & 0x3F));
				} else if (x <= 0xFFFF) {
					output += String.fromCharCode(0xE0 | ((x >>> 12) & 0x0F), 0x80 | ((x >>> 6 ) & 0x3F), 0x80 | ( x & 0x3F));
				} else if (x <= 0x1FFFFF) {
					output += String.fromCharCode(0xF0 | ((x >>> 18) & 0x07), 0x80 | ((x >>> 12) & 0x3F), 0x80 | ((x >>> 6 ) & 0x3F), 0x80 | ( x & 0x3F));
				}
			}
			
			return output;
		},
		
		
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
})();

