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
	 * Adds useful non-standard extensions to the `String.prototype` like {#hyphenate}, {#startsWith} and {#contains}.
	 *
	 * #require(core.Bootstrap)
	 */
	Object.addMembers("String",
	{
		/**
		 * Convert a string to a hex string
		 * 
		 * @return {String} A hex representation of the string
		 */
		hex : function()
		{
			
			var output = "";
			var code;

			for (var i = 0, l = this.length; i < l; i++)
			{
				code = this.charCodeAt(i);
				output += hexTable[(code >>> 4) & 0x0F] + hexTable[code & 0x0F];
			}

			return output;
		},
		

		/**
		 * Converts a string to a base64 string 
		 * 
		 * @return {String} A base64 representation of the string
		 */
		base64: function() {
			return btoa(this);
		},


		/**
		 * Whether the string contains the given @substring {String}.
		 */
		contains : function(substring) {
			return this.indexOf(substring) != -1;
		},


		/**
		 * {Boolean} Returns true if the string has a length of 0 or contains only whitespace.
		 */
		isBlank : function() {
			return this.trim().length == 0;
		},


		/**
		 * {String} Reverses the string
		 */
		reverse : function() {
			return this.split("").reverse().join("");
		},


		/**
		 * {String} Removes double spaces and line breaks.
		 */
		compact : function() {
			return this.replace(/[\r\n]/g, " ").trim().replace(/([\s　])+/g, '$1');
		},


		/**
		 * {String} Returns a hyphenated copy of the original string e.g.
		 *
		 * - camelCase => camel-case
		 * - HelloWorld => -hello-world
		 */
		hyphenate : function() 
		{
			// Via: http://es5.github.com/#x15.5.4.11
			return this.replace(/[A-Z]/g,'-$&').toLowerCase();
		},


		/**
		 * {String} Camelizes this string.
		 */
		camelize: function ()
		{
			return this.replace(/\-+(\S)?/g, function(match, chr) {
				return chr ? chr.toUpperCase() : '';
			});
		},


		/**
		 * {String} Returns a new string which is a @nr {Integer} repeated copy of the original one.
		 */
		repeat : function(nr)
		{
			// empty array magic
			return Array(nr+1).join(this);
		},


		/**
		 * {Boolean} Returns `true` if this string starts with the given substring @begin {String}
		 */
		startsWith : function(begin) {
			return begin == this.slice(0, begin.length);
		},


		/**
		 * {Boolean} Returns `true` if this string ends with the given substring @end {String}
		 */
		endsWith : function(end) {
			return end == this.slice(-end.length);
		}
	});
	
})();

