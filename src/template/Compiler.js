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

	function writeCode(tree) {
		return 'var _=this;_.b(i=i||"");' + walk(tree) + 'return _.fl();';
	}

	function esc(s) {
		return s.replace(rSlash, '\\\\').replace(rQuot, '\\\"').replace(rNewline, '\\n').replace(rCr, '\\r');
	}

	function chooseMethod(s) {
		return (~s.indexOf('.')) ? 'd' : 'f';
	}

	function walk(tree) 
	{
		var code = '';
		
		for (var i = 0, l = tree.length; i < l; i++) 
		{
			var tag = tree[i].tag;
			if (tag == '#') {
				code += section(tree[i].nodes, tree[i].n, chooseMethod(tree[i].n), tree[i].i, tree[i].end);
			} else if (tag == '^') {
				code += invertedSection(tree[i].nodes, tree[i].n, chooseMethod(tree[i].n));
			} else if (tag == '<' || tag == '>') {
				code += partial(tree[i]);
			} else if (tag == '{' || tag == '&') {
				code += tripleStache(tree[i].n, chooseMethod(tree[i].n));
			} else if (tag == '\n') {
				code += text('"\\n"' + (tree.length-1 == i ? '' : ' + i'));
			} else if (tag == '_v') {
				code += variable(tree[i].n, chooseMethod(tree[i].n));
			} else if (tag == null) {
				code += text('"' + esc(tree[i]) + '"');
			}
		}
		
		return code;
	}

	function section(nodes, id, method, start, end) {
		return 'if(_.s(_.' + method + '("' + esc(id) + '",c,p,1),c,p,0,' + start + ',' + end + ')){_.rs(c,p,function(c,p,_){' + walk(nodes) + '});c.pop();}';
	}

	function invertedSection(nodes, id, method) {
		return 'if(!_.s(_.' + method + '("' + esc(id) + '",c,p,1),c,p,1,0,0,"")){' + walk(nodes) + '};';
	}

	function partial(tok) {
		return '_.b(_.rp("' +	 esc(tok.n) + '",c,p,"' + (tok.indent || '') + '"));';
	}

	function tripleStache(id, method) {
		return '_.b(_.t(_.' + method + '("' + esc(id) + '",c,p,0)));';
	}

	function variable(id, method) {
		return '_.b(_.v(_.' + method + '("' + esc(id) + '",c,p,0)));';
	}

	function text(id) {
		return '_.b(' + id + ');';
	}
	

	/**
	 * {core.template.Template} Translates the @code {Array} tree from {#parse} into actual JavaScript 
	 * code (in form of a {core.template.Template} instance) to insert dynamic data fields. It uses
	 * the original @text {String} for template construction.
	 */
	function compile(text) {
		return new core.template.Template(new Function('c', 'p', 'i', writeCode(core.template.Parser.parse(text))), text);
	}
	
	
	/**
	 * This is a compiler for the [Mustache](http://mustache.github.com/) templating language which is based on [Hogan.js](http://twitter.github.com/hogan.js/). 
	 * For information on Mustache, see the [manpage](http://mustache.github.com/mustache.5.html) and the [spec](https://github.com/mustache/spec).
	 */
	core.Module("core.template.Compiler", {
		compile : compile
	});
	
})();