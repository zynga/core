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
	var htmlChars = /[&<>\"\']/g;
	var htmlMap = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		"'": '&#39;',
		'"': '&quot;'
	};
	var htmlEscape = function(str) {
		return htmlMap[str];
	};
	
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var undef;

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
			
			this.__render = render;
		},
		
		members: 
		{
			/**
			 * {String} Public render method which transforms the stored template text using the @data {Map}
			 * and runtime specific @partials {Map?null}.
			 */
			render: function(data, partials) 
			{
				if (core.Env.isSet("debug")) 
				{
					core.Assert.isType(data, "Map", "Invalid data to render");
					
					if (arguments.length > 1) {
						core.Assert.isType(partials, "Map", "Invalid partials");
					}
				}
				
				return this.__render(data, partials);
			},

			/** 
			 * {String} Outputs the @key {String} of @data {Map} 
			 * using the given accessor @method {Integer} as pure data or
			 * via enabling @escape {Boolean?false} as HTML escaped.
			 */
			_data: function(key, method, data, escape) 
			{
				var value = accessor[method](key, data);
				var str = value == null ? "" : "" + value;
				
				return escape ? str.replace(htmlChars, htmlEscape) : str;
			},

			/** 
			 * {String} Tries to find a partial in the current scope and render it 
			 */
			_partial: function(name, data, partials) 
			{
				if (partials && hasOwnProperty.call(partials, name)) {
					return partials[name].__render(data, partials);
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
			 * {Boolean} Whether the given @key {String} has valid content inside @data {Map} 
			 * using the given accessor @method {Integer}.
			 */
			_has: function(key, method, data) 
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
