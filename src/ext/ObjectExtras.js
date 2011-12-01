/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2011 Sebastian Werner
--------------------------------------------------------------------------------------------------
  (C) WebReflection - Mit Style License
  Array extras applied to Objects
  http://webreflection.blogspot.com/2011/11/array-extras-and-objects.html
==================================================================================================
*/

(function (Object) 
{
	if ("forEach" in Object.prototype) {
		return;
	}
	
	function OPmap(key, i, arr) {
		this.n[key] = invoke(this, key);
	}

	function OPfilter(key, i, arr) {
		invoke(this, key) && (this.n[key] = this.s[key]);
	}

	function define(key, callback) {
		callback.displayName = "Object.prototype." + key;
		Object.defineProperty(OP, key, {value: callback});
	}

	function generic(key, i, arr) {
		return invoke(this, key);
	}

	function invoke(self, key) {
		return self.f.call(self.c, self.s[key], key, self.s);
	}

	function iterator(self, callback, context, freshlyBaked) {
		return {s: self, f: callback, c: context, n: freshlyBaked};
	}

	define("every", function(callback, context) {
		return Object.keys(this).every(generic, iterator(this, callback, context));
	});

	define("filter", function(callback, context) 
	{
		Object.keys(this).forEach(OPfilter, iterator(this, callback, context, context = {}));
		return context;
	});

	define("forEach", function(callback, context) {
		Object.keys(this).forEach(generic, iterator(this, callback, context));
	});

	define("map", function(callback, context) 
	{
		Object.keys(this).map(OPmap, iterator(this, callback, context, context = {}));
		return context;
	});

	define("some", function(callback, context) {
		return Object.keys(this).some(generic, iterator(this, callback, context));
	});

}(Object));