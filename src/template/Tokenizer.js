(function() {
	
	// Setup regexassignments
	// remove whitespace according to Mustache spec
	var tagTypes = {
		'#': 1, 
		'^': 2, 
		'/': 3,	 
		'!': 4, 
		'>': 5, 
		'<': 6, 
		'=': 7, 
		'$': 8, 
		'{': 9, 
		'&': 10
	};
	
	function tagChange(tag, text, index) {
		return text.slice(index, index+tag.length) == tag;
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
			if (buf.length > 0) 
			{
				tokens.push("" + buf);
				buf = '';
			}
		}
		

		function lineIsWhitespace() 
		{
			for (var j = lineStart; j < tokens.length; j++) 
			{
				if (!((tokens[j].tag && tagTypes[tokens[j].tag] < tagTypes['$']) || (!tokens[j].tag && tokens[j].match(/\S/) == null))) {
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
			else if (!noNewLine) 
			{
				tokens.push({
					tag:'\n'
				});
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
				tagType = tag ? text.charAt(i + 1) : '$';
				
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
					tokens.push({
						tag: tagType, 
						n: buf.trim(), 
						i: (tagType == '/') ? seenTag - ctag.length : i + otag.length
					});
					
					buf = '';
					i += ctag.length - 1;
					state = IN_TEXT;
					
					if (tagType == '{') {
						i++;
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
	 * This is a parser for the [Mustache](http://mustache.github.com/) templating language which is based on [Hogan.js](http://twitter.github.com/hogan.js/). 
	 * For information on Mustache, see the [manpage](http://mustache.github.com/mustache.5.html) and the [spec](https://github.com/mustache/spec).
	 */
	core.Module("core.template.Tokenizer", {
		tokenize: tokenize
	});
	
})();