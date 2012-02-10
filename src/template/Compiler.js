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
	// Setup regex	assignments
	// remove whitespace according to Mustache spec
	var rIsWhitespace = /\S/,
			rQuot = /\"/g,
			rNewline =	/\n/g,
			rCr = /\r/g,
			rSlash = /\\/g,
			tagTypes = {
				'#': 1, '^': 2, '/': 3,	 '!': 4, '>': 5,
				'<': 6, '=': 7, '_v': 8, '{': 9, '&': 10
			};
			
	function cleanTripleStache(token) 
	{
		if (token.n.substr(token.n.length - 1) === '}') {
			token.n = token.n.substring(0, token.n.length - 1);
		}
	}

	function tagChange(tag, text, index) 
	{
		if (text.charAt(index) != tag.charAt(0)) {
			return false;
		}

		for (var i = 1, l = tag.length; i < l; i++) 
		{
			if (text.charAt(index + i) != tag.charAt(i)) {
				return false;
			}
		}

		return true;
	}

	function buildTree(tokens, stack) 
	{
		var instructions = [],
				opener = null,
				token = null;
				
		while (tokens.length > 0) 
		{
			token = tokens.shift();
			if (token.tag == '#' || token.tag == '^') 
			{
				stack.push(token);
				token.nodes = buildTree(tokens, stack);
				instructions.push(token);
			}
			else if (token.tag == '/') 
			{
				if (stack.length === 0) {
					throw new Error('Closing tag without opener: /' + token.n);
				}
				
				opener = stack.pop();
				if (token.n != opener.n) {
					throw new Error('Nesting error: ' + opener.n + ' vs. ' + token.n);
				}
				
				opener.end = token.i;
				return instructions;
			} 
			else 
			{
				instructions.push(token);
			}
		}

		if (stack.length > 0) {
			throw new Error('missing closing tag: ' + stack.pop().n);
		}

		return instructions;
	}

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
				code += section(tree[i].nodes, tree[i].n, chooseMethod(tree[i].n), tree[i].i, tree[i].end, tree[i].otag + " " + tree[i].ctag);
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

	function section(nodes, id, method, start, end, tags) {
		return 'if(_.s(_.' + method + '("' + esc(id) + '",c,p,1),c,p,0,' + start + ',' + end + ',"' + tags + '")){_.rs(c,p,function(c,p,_){' + walk(nodes) + '});c.pop();}';
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
	 * {String[]} Tokenizer for template @text {String}. Returns an array of tokens.
	 */
	function tokenize(text) {
		var len = text.length,
				IN_TEXT = 0,
				IN_TAG_TYPE = 1,
				IN_TAG = 2,
				state = IN_TEXT,
				tagType = null,
				tag = null,
				buf = '',
				tokens = [],
				seenTag = false,
				i = 0,
				lineStart = 0,
				otag = '{{',
				ctag = '}}';

		function addBuf() 
		{
			if (buf.length > 0) {
				tokens.push(new String(buf));
				buf = '';
			}
		}
		

		function lineIsWhitespace() 
		{
			for (var j = lineStart; j < tokens.length; j++) 
			{
				if (!((tokens[j].tag && tagTypes[tokens[j].tag] < tagTypes['_v']) || (!tokens[j].tag && tokens[j].match(rIsWhitespace) === null))) {
					return false;
				}
			}

			return true;
		}
		

		function filterLine(haveSeenTag, noNewLine) 
		{
			addBuf();

			if (haveSeenTag && lineIsWhitespace()) 
			{
				for (var j = lineStart, next; j < tokens.length; j++) 
				{
					if (!tokens[j].tag) 
					{
						if ((next = tokens[j+1]) && next.tag == '>') 
						{
							// set indent to token value
							next.indent = tokens[j].toString()
						}
						
						tokens.splice(j, 1);
					}
				}
			}
			else if (!noNewLine) {
				tokens.push({tag:'\n'});
			}

			seenTag = false;
			lineStart = tokens.length;
		}

		for (i = 0; i < len; i++) 
		{
			if (state == IN_TEXT) 
			{
				if (tagChange(otag, text, i)) 
				{
					--i;
					addBuf();
					state = IN_TAG_TYPE;
				}
				else
				{
					if (text.charAt(i) == '\n') {
						filterLine(seenTag);
					} else {
						buf += text.charAt(i);
					}
				}
			}
			else if (state == IN_TAG_TYPE) 
			{
				i += otag.length - 1;
				tag = tagTypes[text.charAt(i + 1)];
				tagType = tag ? text.charAt(i + 1) : '_v';
				
				if (tag) {
					i++;
				}
				
				state = IN_TAG;
				seenTag = i;
			}
			else
			{
				if (tagChange(ctag, text, i)) 
				{
					tokens.push({tag: tagType, n: buf.trim(), otag: otag, ctag: ctag, i: (tagType == '/') ? seenTag - ctag.length : i + otag.length});
					buf = '';
					i += ctag.length - 1;
					state = IN_TEXT;
					
					if (tagType == '{') 
					{
						if (ctag == '}}') {
							i++;
						} else {
							cleanTripleStache(tokens[tokens.length - 1]);
						}
					}
				}
				else 
				{
					buf += text.charAt(i);
				}
			}
		}

		filterLine(seenTag, true);

		return tokens;
	}
	
	
	/**
	 * {Array} Processes a list of @tokens {String[]} to create a tree.
	 */
	function parse(text) {
		return buildTree(tokenize(text), []);
	}
	

	/**
	 * {core.template.Template} Translates the @code {Array} tree from {#parse} into actual JavaScript 
	 * code (in form of a {core.template.Template} instance) to insert dynamic data fields. It uses
	 * the original @text {String} for template construction.
	 */
	function compile(text) 
	{
		/** #break(core.template.Template) */
		return new core.template.Template(new Function('c', 'p', 'i', writeCode(parse(text))), text);
	}
	
	
	/**
	 * This is a compiler for the [Mustache](http://mustache.github.com/) templating language which is based on [Hogan.js](http://twitter.github.com/hogan.js/). 
	 * For information on Mustache, see the [manpage](http://mustache.github.com/mustache.5.html) and the [spec](https://github.com/mustache/spec).
	 */
	core.Module("core.template.Compiler",
	{
		tokenize: tokenize,
		parse: parse,
		compile : compile
	});
	
})();