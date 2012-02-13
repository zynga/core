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
	var rSlash = /\\/g;
	var rQuot = /\"/g;
	var rNewline = /\n/g;
	var rCr = /\r/g;
	
	var accessTags = {
		"#" : 1,
		"^" : 1,
		"{" : 1,
		"&" : 1,
		"$" : 1
	};

	function esc(s) {
		return s.replace(rSlash, '\\\\').replace(rQuot, '\\\"').replace(rNewline, '\\n').replace(rCr, '\\r');
	}

	function chooseAccessMethod(str) {
		return 
	}

	function walk(node) 
	{
		var code = '';
		var tag, name;
		
		for (var i = 0, l = node.length; i < l; i++) 
		{
			var current = node[i];
			var tag = current.tag;
			
			if (tag == null) 
			{
				code += 'buf+="' + esc(current) + '";';
			}
			else
			{
				var name = current.name;
				
				if (accessTags[tag]) {
					var accessMethod = ~name.indexOf('.') ? '_getDotted' : '_get';
				}
				
				if (tag == '#') {
					code += section(current.nodes, name, accessMethod);
				} else if (tag == '^') {
					code += invertedSection(current.nodes, name, accessMethod);
				} else if (tag == '&') {
					code += data(name, accessMethod);
				} else if (tag == '$') {
					code += variable(name, accessMethod);
				} else if (tag == '<' || tag == '>') {
					code += partial(current);
				} else if (tag == '\n') {
					code += 'buf+="\\n";';
				}
			}
		}
		
		return code;
	}

	function section(nodes, id, accessMethod, start, end) {
		return 'if(this._section(this.' + accessMethod + '("' + esc(id) + '",ctx,partials,true),ctx,partials,false)){this._renderSection(ctx,partials,function(ctx,partials){' + walk(nodes) + '});ctx.pop();}';
	}

	function invertedSection(nodes, id, accessMethod) {
		return 'if(!this._section(this.' + accessMethod + '("' + esc(id) + '",ctx,partials,true),ctx,partials,true)){' + walk(nodes) + '};';
	}

	function partial(tok) {
		return 'buf+=this._renderPartial("' + esc(tok.name) + '",ctx,partials,false);';
	}

	function data(id, accessMethod) {
		return 'buf+=this._data(this.' + accessMethod + '("' + esc(id) + '",ctx,partials,false));';
	}

	function variable(id, accessMethod) {
		return 'buf+=this._variable(this.' + accessMethod + '("' + esc(id) + '",ctx,partials,false));';
	}


	/**
	 * This is a compiler for the [Mustache](http://mustache.github.com/) templating language which is based on [Hogan.js](http://twitter.github.com/hogan.js/). 
	 * For information on Mustache, see the [manpage](http://mustache.github.com/mustache.5.html) and the [spec](https://github.com/mustache/spec).
	 */
	core.Module("core.template.Compiler", 
	{
		/**
		 * {core.template.Template} Translates the @code {Array} tree from {#parse} into actual JavaScript 
		 * code (in form of a {core.template.Template} instance) to insert dynamic data fields. It uses
		 * the original @text {String} for template construction.
		 */
		compile : function(text) {

			var tree = core.template.Parser.parse(text);
			var wrapped = 'var buf="";' + walk(tree) + 'return buf;';

			return new core.template.Template(new Function('ctx', 'partials', wrapped), text);
		}
	});
	
})();