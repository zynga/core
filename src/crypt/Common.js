/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2011 Sebastian Werner
==================================================================================================
*/

(function() 
{
	core.Module("core.crypt.Common", 
	{
		/*
		 * Encode a string as utf-8.
		 * For efficiency, this assumes the input is valid utf-16.
		 */
		str2rstr_utf8 : function(input)
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
		
		
		/*
		 * Convert a raw string to an array of little-endian words
		 * Characters >255 have their high-byte silently ignored.
		 */
		rstr2binl : function(input)
		{
			var output = Array(input.length >> 2);
			for(var i = 0; i < output.length; i++)
				output[i] = 0;
			for(var i = 0; i < input.length * 8; i += 8)
				output[i>>5] |= (input.charCodeAt(i / 8) & 0xFF) << (i%32);
			return output;
		},

		/*
		 * Convert an array of little-endian words to a string
		 */
		binl2rstr : function(input)
		{
			var output = "";
			for(var i = 0; i < input.length * 32; i += 8)
				output += String.fromCharCode((input[i>>5] >>> (i % 32)) & 0xFF);
			return output;
		},
		
		
		/*
		 * Convert a raw string to an array of big-endian words
		 * Characters >255 have their high-byte silently ignored.
		 */
		rstr2binb : function (input)
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
		
		
		/*
		 * Convert an array of big-endian words to a string
		 */
		binb2rstr : function(input)
		{
			var output = "";
			
			for(var i = 0; i < input.length * 32; i += 8) {
				output += String.fromCharCode((input[i>>5] >>> (24 - i % 32)) & 0xFF);
			}
			
			return output;
		}
	});
})();

