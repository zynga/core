/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Zynga Inc.
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
	var escapeMatcher = /[\\\"\n\r]/g;
	var escapeMap = {
		"\\" : '\\\\',
		"\"" : '\\\"',
		"\n" : '\\n',
		"\r" : '\\r'
	};
	var escapeReplacer = function(str) {
		return escapeMap[str];
	};
	
	var accessTags = {
		"#" : 1,
		"?" : 1,
		"^" : 1,
		"&" : 1,
		"$" : 1
	};
	
	var innerTags = {
		"#" : 1,
		"?" : 1,
		"^" : 1
	};

	function walk(node) 
	{
		var code = '';
		
		for (var i=0, l=node.length; i<l; i++) 
		{
			var current = node[i];
			var tag = current.tag;
			
			if (tag == null) 
			{
				code += 'buf+="' + current.replace(escapeMatcher, escapeReplacer) + '";';
			}
			else
			{
				var name = current.name;
				var escaped = name.replace(escapeMatcher, escapeReplacer);
				
				if (tag in accessTags) 
				{
					var accessor = name == "." ? 2 : ~name.indexOf('.') ? 1 : 0;
					var accessorCode = '"' + escaped + '",' + accessor + ',data';

					if (tag in innerTags) {
						var innerCode = walk(current.nodes);
					}
					
					if (tag == '?') {
						code += 'if(this._has(' + accessorCode + ')){' + innerCode + '}';
					} else if (tag == '^') {
						code += 'if(!this._has(' + accessorCode + ')){' + innerCode + '}';
					} else if (tag == '#') {
						code += 'this._section(' + accessorCode + ',partials,function(data,partials){' + innerCode + '});';
					} else if (tag == '&') {
						code += 'buf+=this._data(' + accessorCode + ');';
					} else if (tag == '$') {
						code += 'buf+=this._data(' + accessorCode + ', true);';
					}
				} 
				else if (tag == '>') 
				{
					code += 'buf+=this._partial("' + escaped + '",data,partials);';
				}
				else if (tag == '\n')
				{
					code += 'buf+="\\n";';
				}
			}
		}
		
		return code;
	}


	/**
	 * This is the Compiler of the template engine and transforms the token tree into a compiled template instance.
	 */
	core.Module("core.template.Compiler", 
	{
		/**
		 * {core.template.Template} Translates the @code {Array} tree from {core.template.Parser#parse} into actual JavaScript 
		 * code (in form of a {core.template.Template} instance) to insert dynamic data fields. It uses
		 * the original @text {String} for template construction. Optionally you can remove white spaces (line breaks,
		 * leading, trailing, etc.) by enabling @strip {Boolean?false}.
		 */
		compile : function(text, strip) {

			var tree = core.template.Parser.parse(text, strip);
			var wrapped = 'var buf="";' + walk(tree) + 'return buf;';

			return new core.template.Template(new Function('data', 'partials', wrapped), text);
		}
	});
	
})();