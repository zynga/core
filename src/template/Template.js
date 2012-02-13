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

	function coerceToString(val) {
		return val == null ? "" : "" + val;
	}

	function hoganEscape(str) {
		str = coerceToString(str);
		return hChars.test(str) ? str.replace(rAmp, '&amp;').replace(rLt, '&lt;').replace(rGt, '&gt;').replace(rApos, '&#39;').replace(rQuot, '&quot;') : str;
	}

	/**
	 * A template engine based on HoganJS/Mustache with a few modifications:
	 *
	 * - No support to lambdas
	 * - No support for triple '{{{xxx}}}' unescaped values. Use `{{&xxx}}` instead
	 *
	 * #break(core.template.Compiler)
	 */
	core.Class("core.template.Template",
	{
		construct: function (renderFunc, text) 
		{
			if (renderFunc) {
				this.__render = renderFunc;
			}
			
			this.text = text || '';
			this.buf = '';
		},
		
		members: 
		{
			// render: replaced by generated code.
			__render: function (context, partials) { 
				return ''; 
			},
			
			render: null,

			variable: hoganEscape,
			data: coerceToString,

			render: function(context, partials) {
				return this.__render([context], partials || {});
			},

			/** tries to find a partial in the current scope and render it */
			renderPartial: function(name, context, partials) 
			{
				var partial = partials[name];
				return partial ? partial.__render(context, partials) : "";
			},

			/** render a section */
			renderSection: function(context, partials, section) {
				var tail = context[context.length - 1];

				if (!Array.isArray(tail)) {
					section.call(this, context, partials);
					return;
				}

				for (var i = 0; i < tail.length; i++) {
					context.push(tail[i]);
					section.call(this, context, partials);
					context.pop();
				}
			},

			/** maybe start a section */
			section: function(val, data, partials, inverted) 
			{
				var pass;
				
				if (Array.isArray(val) && val.length === 0) {
					return false;
				}

				pass = (val === '') || !!val;

				if (!inverted && pass && data) {
					data.push((typeof val == 'object') ? val : data[data.length - 1]);
				}

				return pass;
			},

			/** find values with dotted names */
			getDotted: function(key, data, partials, returnFound) 
			{
				var names = key.split('.'),
						val = this.get(names[0], data, partials, returnFound),
						cx = null;

				if (key === '.' && Array.isArray(data[data.length - 2])) {
					return data[data.length - 1];
				}

				for (var i = 1; i < names.length; i++) {
					if (val && typeof val == 'object' && names[i] in val) {
						cx = val;
						val = val[names[i]];
					} else {
						val = '';
					}
				}

				if (returnFound && !val) {
					return false;
				}

				return val;
			},

			/* find values with normal names **/
			get: function(key, data, partials, returnFound) 
			{
				var val = false;
				var v = null;
				var found = false;

				for (var i = data.length - 1; i >= 0; i--) 
				{
					v = data[i];
					
					if (v && typeof v == 'object' && key in v) 
					{
						val = v[key];
						found = true;
						break;
					}
				}

				if (!found) {
					return returnFound ? false : "";
				}

				return val;
			}
		}
	});
	
})();
