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

	function chooseFieldAccessMethod(str) {
		return ~str.indexOf('.') ? 'getDotted' : 'get';
	}

	function walk(tree) 
	{
		var code = '';
		
		for (var i = 0, l = tree.length; i < l; i++) 
		{
			var tag = tree[i].tag;
			
			if (tag == '#') {
				code += section(tree[i].nodes, tree[i].name, chooseFieldAccessMethod(tree[i].name), tree[i].start, tree[i].end);
			} else if (tag == '^') {
				code += invertedSection(tree[i].nodes, tree[i].name, chooseFieldAccessMethod(tree[i].name));
			} else if (tag == '<' || tag == '>') {
				code += partial(tree[i]);
			} else if (tag == '{' || tag == '&') {
				code += tripleStache(tree[i].name, chooseFieldAccessMethod(tree[i].name));
			} else if (tag == '\n') {
				code += text('"\\n"' + (tree.length-1 == i ? '' : ' + i'));
			} else if (tag == '$') {
				code += variable(tree[i].name, chooseFieldAccessMethod(tree[i].name));
			} else if (tag == null) {
				code += text('"' + esc(tree[i]) + '"');
			}
		}
		
		return code;
	}

	function section(nodes, id, method, start, end) {
		return 'if(_.section(_.' + method + '("' + esc(id) + '",c,p,1),c,p,0,' + start + ',' + end + ')){_.rs(c,p,function(c,p,_){' + walk(nodes) + '});c.pop();}';
	}

	function invertedSection(nodes, id, method) {
		return 'if(!_.section(_.' + method + '("' + esc(id) + '",c,p,1),c,p,1,0,0,"")){' + walk(nodes) + '};';
	}

	function partial(tok) {
		return '_.buf+=_.rp("' +	 esc(tok.name) + '",c,p,"' + (tok.indent || '') + '");';
	}

	function tripleStache(id, method) {
		return '_.buf+=_.t(_.' + method + '("' + esc(id) + '",c,p,0));';
	}

	function variable(id, method) {
		return '_.buf+=_.v(_.' + method + '("' + esc(id) + '",c,p,0));';
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
		var wrapped = 'var _=this;_.buf+=(i=i||"");' + walk(tree) + 'return _.finish();';
		
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