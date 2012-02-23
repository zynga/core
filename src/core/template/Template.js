/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
--------------------------------------------------------------------------------------------------
  Based on the work of:
  Hogan.JS by Twitter, Inc.
  https://github.com/twitter/hogan.js
  Licensed under the Apache License, Version 2.0
  http://www.apache.org/licenses/LICENSE-2.0
==================================================================================================
*/

(function () 
{
	var rAmp = /&/g;
	var rLt = /</g;
	var rGt = />/g;
	var rApos = /\'/g;
	var rQuot = /\"/g;
	var hChars = /[&<>\"\']/;
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var undef;

	function coerceToString(value) {
		return value == null ? "" : "" + value;
	}

	var accessor = {
		
		2: function(key, data) {
			return data;
		},
		
		1: function(key, data) 
		{
			if (key == ".") {
				return data;
			}

			var splits = key.split(".");
			for (var i=0, l=splits.length; i<l; i++) 
			{
				var sub = splits[i];
				if (!hasOwnProperty.call(data, sub)) {
					return;
				}

				data = data[sub];
			}

			return data;
		},
		
		0: function(key, data) 
		{
			if (hasOwnProperty.call(data, key)) {
				return data[key];
			}
		}
		
	};
	

	/**
	 * This is the template class which is typically initialized and configured using the {core.template.Compiler#compile} method.
	 */
	core.Class("core.template.Template",
	{
		/**
		 * Creates a template instance with the given @render {Function} method. Best way to work with
		 * the template class is to create one using the {core.template.Compiler#compile} method.
		 */
		construct: function(render) 
		{
			if (core.Env.isSet("debug")) {
				core.Assert.isType(render, "Function", "Missing valid render method!");
			}
			
			this.render = render;
		},
		
		members: 
		{
			/**
			 * {String} Public render method which transforms the stored template text using the @data {Map}
			 * and runtime specific @partials {Map?null}.
			 */
			render: function(data, partials) {
				// pass
			},

			_variable: function(key, method, data) {
				var str = coerceToString(accessor[method](key, data));
				return hChars.test(str) ? str.replace(rAmp, '&amp;').replace(rLt, '&lt;').replace(rGt, '&gt;').replace(rApos, '&#39;').replace(rQuot, '&quot;') : str;
			},

			_data: function(key, method, data) {
				return coerceToString(accessor[method](key, data));
			},

			/** 
			 * Tries to find a partial in the current scope and render it 
			 */
			_partial: function(name, data, partials) 
			{
				if (partials && hasOwnProperty.call(partials, name)) {
					return partials[name].render(data, partials);
				} else {
					return "";
				}
			},

			/** 
			 * Renders a section using the given @data {var}, user
			 * defined @partials {Map} and a @section {Function} specific renderer.
			 */
			_section: function(key, method, data, partials, section) 
			{
				var value = accessor[method](key, data);
				
				if (value instanceof Array) 
				{
					for (var i=0, l=value.length; i<l; i++) {
						section.call(this, value[i], partials);
					}
				}
				else if (value !== undef)
				{
					section.call(this, value, partials);
				}
			},

			/** 
			 * Maybe start a section 
			 */
			_is: function(key, method, data) 
			{
				var value = accessor[method](key, data);
				if (value instanceof Array) {
					return value.length > 0;
				} else {
					return value === '' || !!value
				}
			}
		}
	});
	
})();
