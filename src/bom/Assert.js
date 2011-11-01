/* 
==================================================================================================
  Jasy - JavaScript Tooling Framework
  Copyright 2010-2011 Sebastian Werner
==================================================================================================
*/

base.Test.add(function(value) { 
	return value && value.nodeType != undef; 
}, "isNode", "Not a node!");

base.Test.add(function(value) { 
	return value && value.nodeType == 1; 
}, "isElement", "Not an element!");

base.Test.add(function(value) { 
	return value && value.nodeType == 3; 
}, "isTextNode", "Not a text node!");

base.Test.add(function(value) { 
	return value && value.nodeType == 9; 
}, "isDocument", "Not a document!");
