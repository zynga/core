/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2011 Sebastian Werner
==================================================================================================
*/

core.Module("core.util.StringEncode",
{
	encode: function(input, encoding)
	{
		var divisor = encoding.length;
		var i, j, q, x, quotient;

		// Convert to an array of 16-bit big-endian values, forming the dividend
		var dividend = Array(Math.ceil(input.length / 2));
		for (i = 0; i < dividend.length; i++) {
			dividend[i] = (input.charCodeAt(i * 2) << 8) | input.charCodeAt(i * 2 + 1);
		}

		// Repeatedly perform a long division. The binary array forms the dividend,
		// the length of the encoding is the divisor. Once computed, the quotient
		// forms the dividend for the next step. All remainders are stored for later
		// use.
		var full_length = Math.ceil(input.length * 8 / (Math.log(encoding.length) / Math.log(2)));
		var remainders = Array(full_length);

		for (j = 0; j < full_length; j++)
		{
			quotient = Array();
			x = 0;

			for (i = 0; i < dividend.length; i++)
			{
				x = (x << 16) + dividend[i];
				q = Math.floor(x / divisor);
				x -= q * divisor;

				if (quotient.length > 0 || q > 0) {
					quotient[quotient.length] = q;
				}
			}

			remainders[j] = x;
			dividend = quotient;
		}

		/* Convert the remainders to the output string */
		var output = "";
		for (i = remainders.length - 1; i >= 0; i--) {
			output += encoding.charAt(remainders[i]);
		}

		return output;
	}
});
