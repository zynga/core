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
	var rNewline =	/\n/g;
	var rCr = /\r/g;

	function esc(s) {
		return s.replace(rSlash, '\\\\').replace(rQuot, '\\\"').replace(rNewline, '\\n').replace(rCr, '\\r');
	}

	function chooseAccessMethod(str) {
		return ~str.indexOf('.') ? 'getDotted' : 'get';
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
				code += text('"' + esc(current) + '"');
			}
			else
			{
				var name = current.name;
				
				if (tag == '#') {
					// start and end are passed to the section renderer for supporting lambdas and their requirement to extract the content to process
					code += section(current.nodes, name, chooseAccessMethod(name), current.start, current.end);
				} else if (tag == '^') {
					code += invertedSection(current.nodes, name, chooseAccessMethod(name));
				} else if (tag == '<' || tag == '>') {
					code += partial(current);
				} else if (tag == '{' || tag == '&') {
					code += tripleStache(name, chooseAccessMethod(name));
				} else if (tag == '\n') {
					code += text('"\\n"' + (node.length-1 == i ? '' : ' + i'));
				} else if (tag == '$') {
					code += variable(name, chooseAccessMethod(name));
				}
			}
		}
		
		return code;
	}

	function section(nodes, id, accessMethod, start, end) {
		return 'if(_.section(_.' + accessMethod + '("' + esc(id) + '",c,p,1),c,p,0)){_.renderSection(c,p,function(c,p,_){' + walk(nodes) + '});c.pop();}';
	}

	function invertedSection(nodes, id, accessMethod) {
		return 'if(!_.section(_.' + accessMethod + '("' + esc(id) + '",c,p,1),c,p,1)){' + walk(nodes) + '};';
	}

	function partial(tok) {
		return '_.buf+=_.renderPartial("' +	 esc(tok.name) + '",c,p,"' + (tok.indent || '') + '");';
	}

	function tripleStache(id, accessMethod) {
		return '_.buf+=_.t(_.' + accessMethod + '("' + esc(id) + '",c,p,0));';
	}

	function variable(id, accessMethod) {
		return '_.buf+=_.v(_.' + accessMethod + '("' + esc(id) + '",c,p,0));';
	}

	function text(id) {
		return '_.buf+=' + id + ';';
	}
	

	/**
	 * {core.template.Template} Translates the @code {Array} tree from {#parse} into actual JavaScript 
	 * code (in form of a {core.template.Template} instance) to insert dynamic data fields. It uses
	 * the original @text {String} for template construction.
	 */
	function compile(text) {
		
		var tree = core.template.Parser.parse(text);
		var code = walk(tree);
		var wrapped = 'var _=this;_.buf+=(i=i||"");' + code + 'return _.finish();';

		console.debug("------------")
		console.debug(text);
		console.debug(code);
		
		return new core.template.Template(new Function('c', 'p', 'i', wrapped), text);
	}
	
	
	/**
	 * This is a compiler for the [Mustache](http://mustache.github.com/) templating language which is based on [Hogan.js](http://twitter.github.com/hogan.js/). 
	 * For information on Mustache, see the [manpage](http://mustache.github.com/mustache.5.html) and the [spec](https://github.com/mustache/spec).
	 */
	core.Module("core.template.Compiler", {
		compile : compile
	});
	
})();