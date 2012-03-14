/* 
==================================================================================================
  Core - JavaScript Foundation 
  Copyright 2010-2012 Zynga Inc.
--------------------------------------------------------------------------------------------------
  Based on Remy Sharp's HTML5 Enabling Script:
  http://remysharp.com/2009/01/07/html5-enabling-script/
==================================================================================================
*/

/**
 * Adds HTML5 tag support to Internet Explorer 
 *
 * #custom
 */
(function(doc) 
{
	// Verify browser environment
	if (doc) 
	{
		var tags = 'abbr article aside audio canvas details figcaption figure footer header hgroup mark meter nav output progress section summary time video';
		tags.replace(/\w+/g, function(tagName) {
			doc.createElement(tagName); 
		});
	}
})(this.document);
