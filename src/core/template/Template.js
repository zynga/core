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

	function coerceToString(value) {
		return value == null ? "" : "" + value;
	}

	function escapeString(str) {
		str = coerceToString(str);
		return hChars.test(str) ? str.replace(rAmp, '&amp;').replace(rLt, '&lt;').replace(rGt, '&gt;').replace(rApos, '&#39;').replace(rQuot, '&quot;') : str;
	}

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
				core.Assert.isType(render, "Function");
			}
			
			this.__render = render;
		},
		
		members: 
		{
			/**
			 * {String} Public render method which transforms the stored template text using the @data {Map}
			 * and runtime specific @partials {Map?null}.
			 */
			render: function(data, partials) {
				return this.__render([data], partials || {});
			},

			_variable: escapeString,
			_data: coerceToString,

			// render: replaced by generated code.
			__render: null,
			
			/** 
			 * Tries to find a partial in the current scope and render it 
			 */
			_renderPartial: function(name, context, partials) 
			{
				var partial = partials[name];
				return partial ? partial.__render(context, partials) : "";
			},

			/** 
			 * Renders a section using the given @context {var} data, user
			 * defined @partials {Map} and a @section {Function} specific renderer.
			 */
			_renderSection: function(context, partials, section) 
			{
				var tail = context[context.length - 1];

				if (!Array.isArray(tail)) 
				{
					section.call(this, context, partials);
					return;
				}

				for (var i = 0; i < tail.length; i++) 
				{
					context.push(tail[i]);
					section.call(this, context, partials);
					context.pop();
				}
			},

			/** 
			 * Maybe start a section 
			 */
			_section: function(value, data, partials, inverted) 
			{
				var pass;
				
				if (Array.isArray(value) && value.length === 0) {
					return false;
				}

				pass = (value === '') || !!value;

				if (!inverted && pass && data) {
					data.push((typeof value == 'object') ? value : data[data.length - 1]);
				}

				return pass;
			},

			/** 
			 * Find values with dotted names 
			 */
			_getDotted: function(key, data, partials, returnFound) 
			{
				var names = key.split('.'),
						value = this._get(names[0], data, partials, returnFound),
						cx = null;

				if (key === '.' && Array.isArray(data[data.length - 2])) {
					return data[data.length - 1];
				}

				for (var i = 1; i < names.length; i++) {
					if (value && typeof value == 'object' && names[i] in value) {
						cx = value;
						value = value[names[i]];
					} else {
						value = '';
					}
				}

				if (returnFound && !value) {
					return false;
				}

				return value;
			},

			/** 
			 * Find values with non-dotted @key {String}
			 */
			_get: function(key, data, partials, returnFound) 
			{
				var value = false;
				var found = false;

				for (var i=data.length-1; i>=0; i--) 
				{
					var current = data[i];
					if (current && typeof current == 'object' && key in current) 
					{
						value = current[key];
						found = true;
						break;
					}
				}

				if (!found) {
					return returnFound ? false : "";
				}

				return value;
			}
		}
	});
	
})();
