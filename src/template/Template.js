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
	var rAmp = /&/g,
			rLt = /</g,
			rGt = />/g,
			rApos =/\'/g,
			rQuot = /\"/g,
			hChars =/[&<>\"\']/;

	function coerceToString(val) {
		return val == null ? "" : "" + val;
	}

	function hoganEscape(str) {
		str = coerceToString(str);
		return hChars.test(str) ? str.replace(rAmp, '&amp;').replace(rLt, '&lt;').replace(rGt, '&gt;').replace(rApos, '&#39;').replace(rQuot, '&quot;') : str;
	}

	/**
	 *
	 * #break(core.template.Compiler)
	 */
	core.Class("core.template.Template",
	{
		construct: function (renderFunc, text) 
		{
			this.r = renderFunc || this.r;
			this.text = text || '';
			this.buf = '';
		},
		
		members: 
		{
			// render: replaced by generated code.
			r: function (context, partials, indent) { return ''; },

			// variable escaping
			v: hoganEscape,

			// triple stache
			t: coerceToString,

			render: function render(context, partials, indent) {
				return this.ri([context], partials || {}, indent);
			},

			/** render internal -- a hook for overrides that catches partials too */
			ri: function (context, partials, indent) {
				return this.r(context, partials, indent);
			},

			/** tries to find a partial in the current scope and render it */
			rp: function(name, context, partials, indent) {
				var partial = partials[name];

				if (!partial) {
					return '';
				}

				if (typeof partial == 'string') {
					partial = core.template.Compiler.compile(partial);
				}

				return partial.ri(context, partials, indent);
			},

			/** render a section */
			rs: function(context, partials, section) {
				var tail = context[context.length - 1];

				if (!Array.isArray(tail)) {
					section(context, partials, this);
					return;
				}

				for (var i = 0; i < tail.length; i++) {
					context.push(tail[i]);
					section(context, partials, this);
					context.pop();
				}
			},

			/** maybe start a section */
			section: function(val, ctx, partials, inverted, start, end) {
				var pass;

				if (Array.isArray(val) && val.length === 0) {
					return false;
				}

				pass = (val === '') || !!val;

				if (!inverted && pass && ctx) {
					ctx.push((typeof val == 'object') ? val : ctx[ctx.length - 1]);
				}

				return pass;
			},

			/** find values with dotted names */
			getDotted: function(key, ctx, partials, returnFound) {
				var names = key.split('.'),
						val = this.get(names[0], ctx, partials, returnFound),
						cx = null;

				if (key === '.' && Array.isArray(ctx[ctx.length - 2])) {
					return ctx[ctx.length - 1];
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

				if (!returnFound && typeof val == 'function') {
					ctx.push(cx);
					val = this.lv(val, ctx, partials);
					ctx.pop();
				}

				return val;
			},

			/* find values with normal names **/
			get: function(key, ctx, partials, returnFound) {
				var val = false,
						v = null,
						found = false;

				for (var i = ctx.length - 1; i >= 0; i--) 
				{
					v = ctx[i];
					
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

				if (!returnFound && typeof val == 'function') {
					val = this.lv(val, ctx, partials);
				}

				return val;
			},

			// template result buffering
			finish: function() 
			{
				var result = this.buf; 
				this.buf = '';
				
				return result; 
			}
		}
	});
	
})();
