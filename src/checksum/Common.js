Module("core.checksum.Common", {
	
	/*
	 * Convert a raw string to a hex string
	 */
	rstr2hex : function(input)
	{
		try { hexcase } catch(e) { hexcase=0; }
		var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
		var output = "";
		var x;
		for(var i = 0; i < input.length; i++)
		{
			x = input.charCodeAt(i);
			output += hex_tab.charAt((x >>> 4) & 0x0F)
						 +	hex_tab.charAt( x				 & 0x0F);
		}
		return output;
	}
	
	
	
});
