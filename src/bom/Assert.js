/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2011 Sebastian Werner
==================================================================================================
*/

core.Test.add(function(value) {
	return value && value.nodeType != undef;
}, "isNode", "Not a node!");

core.Test.add(function(value) {
	return value && value.nodeType == 1;
}, "isElement", "Not an element!");

core.Test.add(function(value) {
	return value && value.nodeType == 3;
}, "isTextNode", "Not a text node!");

core.Test.add(function(value) {
	return value && value.nodeType == 9;
}, "isDocument", "Not a document!");
