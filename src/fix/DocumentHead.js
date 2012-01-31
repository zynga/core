/* 
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
==================================================================================================
*/

/**
 * Fixes missing `document.head` in older browser engines.
 */
(function(doc) {
	if (doc && !doc.head) {
		doc.head = doc.getElementsByTagName('head')[0];
	}
})(document);
