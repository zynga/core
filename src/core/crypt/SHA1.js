/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Zynga Inc.
--------------------------------------------------------------------------------------------------
  Based on the work of:
  Version 2.2 Copyright Paul Johnston 2000 - 2009.
  Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
  Distributed under the BSD License
  See http://pajhome.org.uk/crypt/md5 for details.
==================================================================================================
*/

(function(Util) 
{
	/**
	 * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined in FIPS 180-1
	 */
	core.Module("core.crypt.SHA1", 
	{
		/**
		 * {String} Returns the SHA1 checksum of the given @str {String} as a raw string.
		 */
		checksum : function(str) { 

			str = str.encodeUtf8();
			
			return Util.bigEndianToRawString(binb_sha1(Util.rawStringToBigEndian(str), str.length * 8));

		},


		/**
		 * {String} Returns a HMAC (Hash-based Message Authentication Code) using the SHA1 hash function as a raw string.
		 *
		 * HMAC is a specific construction for calculating a message authentication code (MAC) involving a 
		 * cryptographic hash function in combination with a secret key.
		 *
		 * - @key {String} The secret key for verifying authenticity
		 * - @str {String} Message to compute the HMAC for
		 */
		hmac : function(key, str) { 
			
			key = key.encodeUtf8();
			str = str.encodeUtf8();
			
			var bkey = Util.rawStringToBigEndian(key);
			if (bkey.length > 16) {
				bkey = binb_sha1(bkey, key.length * 8);
			}

			var ipad = Array(16);
			var opad = Array(16);
			
			for (var i = 0; i < 16; i++)
			{
				ipad[i] = bkey[i] ^ 0x36363636;
				opad[i] = bkey[i] ^ 0x5C5C5C5C;
			}

			var hash = binb_sha1(ipad.concat(Util.rawStringToBigEndian(str)), 512 + str.length * 8);
			return Util.bigEndianToRawString(binb_sha1(opad.concat(hash), 512 + 160));

		}
	});


	/*
	 * Calculate the SHA-1 of an array of big-endian words, and a bit length
	 */
	function binb_sha1(x, len)
	{
		/* append padding */
		x[len >> 5] |= 0x80 << (24 - len % 32);
		x[((len + 64 >> 9) << 4) + 15] = len;

		var w = Array(80);
		
		var a = 1732584193;
		var b = -271733879;
		var c = -1732584194;
		var d = 271733878;
		var e = -1009589776;

		for (var i = 0; i < x.length; i += 16)
		{
			var olda = a;
			var oldb = b;
			var oldc = c;
			var oldd = d;
			var olde = e;

			for (var j = 0; j < 80; j++)
			{
				if (j < 16) {
					w[j] = x[i + j];
				} else {
					w[j] = bit_rol(w[j-3] ^ w[j-8] ^ w[j-14] ^ w[j-16], 1);
				}

				var t = safe_add(safe_add(bit_rol(a, 5), sha1_ft(j, b, c, d)), safe_add(safe_add(e, w[j]), sha1_kt(j)));

				e = d;
				d = c;
				c = bit_rol(b, 30);
				b = a;
				a = t;
			}

			a = safe_add(a, olda);
			b = safe_add(b, oldb);
			c = safe_add(c, oldc);
			d = safe_add(d, oldd);
			e = safe_add(e, olde);
		}
		
		return Array(a, b, c, d, e);
	}

	/*
	 * Perform the appropriate triplet combination function for the current
	 * iteration
	 */
	function sha1_ft(t, b, c, d)
	{
		if (t < 20) {
			return (b & c) | ((~b) & d);
		} else if (t < 40) {
			return b ^ c ^ d;
		} else if (t < 60) {
			return (b & c) | (b & d) | (c & d);
		} else {
			return b ^ c ^ d;
		}
	}

	/*
	 * Determine the appropriate additive constant for the current iteration
	 */
	function sha1_kt(t) {
		return (t < 20) ?	 1518500249 : (t < 40) ?	1859775393 : (t < 60) ? -1894007588 : -899497514;
	}

	/*
	 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
	 * to work around bugs in some JS interpreters.
	 */
	function safe_add(x, y)
	{
		var lsw = (x & 0xFFFF) + (y & 0xFFFF);
		var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
		
		return (msw << 16) | (lsw & 0xFFFF);
	}

	/*
	 * Bitwise rotate a 32-bit number to the left.
	 */
	function bit_rol(num, cnt) {
		return (num << cnt) | (num >>> (32 - cnt));
	}
	
})(core.crypt.Util);
