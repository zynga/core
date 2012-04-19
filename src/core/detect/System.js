/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Zynga Inc.
--------------------------------------------------------------------------------------------------
  Based on code of Unify Project
  License: MIT + Apache (V2)
  Copyright: 2009-2011 Deutsche Telekom AG, Germany, http://telekom.com
==================================================================================================
*/

(function() {
	
	var agent = navigator.userAgent.replace(/_/g, ".");
	var match, version, name;
	var platform = core.detect.Platform.VALUE;

	if (platform == "win")
	{
		name = platform;
		match = /((Windows NT|Windows|Win) ?([0-9\.]+))/.exec(agent);
		if (match)
		{
			version = {
				"5.0" : "2000",
				"5.01" : "2000",
				"5.1" : "xp",
				"5.2" : "2003",
				"6.0" : "vista",
				"6.1" : "7"
			}[parseFloat(match[3], 10)] || version;
		}
		else
		{
			match = /(Windows CE)/.exec(agent);
			if (match)
			{
				match = /IEMobile ([0-9\.]+)/.exec(agent);
				if (match)
				{
					version = parseFloat(match[1]);
					if (version >= 7) {
						version = 6.1;
					} else if (version >= 6) {
						version = 6.0;
					} else {
						version = 5.0;
					}
				}
				else
				{
					match = /PPC|Smartphone/.exec(agent);
					if (match) {
						version = 5.0;
					}
				}

				name = "winmobile";
			}
			else if (/PPC|Smartphone/.exec(agent))
			{
				name = "winmobile";
				version = 5.0;
			}
		}
	}
	else if (platform == "mac")
	{
		match = /(((Mac OS X)|(Mac OS)) ([0-9\.]+))/.exec(agent);
		name = "macos";
		if (match)
		{
			version = parseFloat(match[5], 10);
		}
		else
		{
			var match = /OS ([0-9\._]+) like Mac OS/.exec(agent);
			if (match) 
			{
				name = "ios";
				version = parseFloat(match[1].replace(/_/, "."), 10);
			}
		}
	}
	else if (platform == "unix")
	{
		if (agent.indexOf("Linux") != -1)
		{
			match = /((Android|Maemo) ([0-9\.]+))/.exec(agent);
			if (match)
			{
				name = match[2].toLowerCase();
				version = parseFloat(match[3]);
			}
			else
			{
				name = "linux";
			}
		}
		else if (agent.indexOf("webOS") != -1)
		{
			name = "webos";
			match = /webOS\/([\.0-9]+)/.exec(agent);
			if (match) {
				version = parseFloat(match[1]);
			}
		}
		else if (agent.indexOf("BSD") != -1)
		{
			name = "bsd";
		}
		else
		{
			name = "unix";
		}
	}
	else if (platform == "other")
	{
		if (agent.indexOf("RIM Tablet OS") != -1) 
		{
			name = "rim tablet os";
			match = /RIM Tablet OS ([\.0-9]+)/.exec(agent);
			if (match) {
				version = parseFloat(match[1]);
			}
		}
		else if (agent.indexOf("Symbian") != -1)
		{
			name = "symbian";
		}
	}


	if (version == null) {
		version = "0.0";
	}
	
	
	/**
	 * Detects the system where the application is running on. This is more detailed
	 * than just the platform as on most of them it includes the specific version
	 * e.g. Windows XP or a specific variant e.g. Android.
	 *
	 * The listed constants are automatically filled on the initialization
	 * phase of the class. The defaults listed in the API viewer need not
	 * to be identical to the values at runtime.
	 */
	core.Module("core.detect.System", {
		
		/** System identification */
		VALUE: name + " " + version
		
	});
	
})();