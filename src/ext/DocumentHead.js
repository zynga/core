/* 
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Zynga Inc.
==================================================================================================
*/

/**
 * Fixes missing `document.head` in older browser engines.
 *
 * #custom
 */
(function(doc) 
{
	if (doc && !doc.head) {
		doc.head = doc.getElementsByTagName('head')[0];
	}
})(this.document);
