/* 
==================================================================================================
  Core - JavaScript Foundation 
  Copyright 2010-2012 Zynga Inc.
--------------------------------------------------------------------------------------------------
  Based on base64 implementation by: 
  https://bitbucket.org/davidchambers/base64.js
==================================================================================================
*/

(function (global) 
{
	// Keep native methods
	if (global.btoa) {
		return;
	}
	
	var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	var fromCharCode = String.fromCharCode;
	
	// Slight performance impact for much better compression
	var charAt = "charAt";
	var charCodeAt = "charCodeAt";
	var indexOf = "indexOf";

	/**
	 * Polyfill for Base64 support which is natively implemented in most recent browsers.
	 */
	core.Main.addStatics("global",
	{
		/**
		 * {String} Creates a base-64 encoded ASCII string from a @string {String} of binary data.
		 *
		 * See also: https://developer.mozilla.org/en/DOM/window.btoa
		 */
		btoa : function(string) 
		{
			var i = 0;
			var len = string.length;
			var result = [];

			while (i < len) 
			{
				var a = string[charCodeAt](i++) || 0;
				var b = string[charCodeAt](i++) || 0;
				var c = string[charCodeAt](i++) || 0;

				var b1 = (a >> 2) & 0x3F;
				var b2 = ((a & 0x3) << 4) | ((b >> 4) & 0xF);
				var b3 = ((b & 0xF) << 2) | ((c >> 6) & 0x3);
				var b4 = c & 0x3F;

				if (!b) {
					b3 = b4 = 64;
				} else if (!c) {
					b4 = 64;
				}

				result.push(characters[charAt](b1), characters[charAt](b2), characters[charAt](b3), characters[charAt](b4));
			}

			return result.join("");
		},

		/**
		 * {String} Decodes a @string {String} of data which has been encoded using base-64 encoding.
		 *
		 * See also: https://developer.mozilla.org/en/DOM/window.atob
		 */
		atob : function(string) 
		{
			string = string.replace(/=+$/, "");

			var len = string.length;
			var i = 0;
			var chars = [];
			while (i < len) 
			{
				var b1 = characters[indexOf](string[charAt](i++));
				var b2 = characters[indexOf](string[charAt](i++));
				var b3 = characters[indexOf](string[charAt](i++));
				var b4 = characters[indexOf](string[charAt](i++));

				var a = ((b1 & 0x3F) << 2) | ((b2 >> 4) & 0x3);
				var b = ((b2 & 0xF) << 4) | ((b3 >> 2) & 0xF);
				var c = ((b3 & 0x3) << 6) | (b4 & 0x3F);

				chars.push(fromCharCode(a));
				b && chars.push(fromCharCode(b));
				c && chars.push(fromCharCode(c));
			}

			return chars.join("");
		}
	}, true);

}(this));
