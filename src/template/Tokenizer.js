(function() {
	
	var tagSplitter = /(\{\{[^\{\}}]*\}\})/;
	var tagMatcher = /^\{\{\s*([#\^\/\!\<\>\=\$\&]?)\s*([^\{\}}]*?)\s*\}\}$/;
	
	
	/**
	 * This is a parser for the [Mustache](http://mustache.github.com/) templating language which is based on [Hogan.js](http://twitter.github.com/hogan.js/). 
	 * For information on Mustache, see the [manpage](http://mustache.github.com/mustache.5.html) and the [spec](https://github.com/mustache/spec).
	 */
	core.Module("core.template.Tokenizer", 
	{
		/**
		 * {String[]} Tokenizer for template @text {String}. Returns an array of tokens
		 * where tags are returned as an object with the keys `tag` and `name` while
		 * normal strings are kept as strings.
		 */
		tokenize: function(text) 
		{
			var tokens = [];
			var splitted = text.split(tagSplitter);

			for (var i=0, l=splitted.length; i<l; i++) 
			{
				var segment = splitted[i];
				if (segment.charAt(0) == "{" && (matched = tagMatcher.exec(segment))) 
				{
					var tag = matched[1] || "$";

					// Ignore comment types
					if (tag != "!") 
					{
						tokens.push({
							tag: tag,
							name: matched[2]
						});
					}
				}
				else if (segment != "")
				{
					// Only add non-empty strings
					tokens.push(segment);
				}
			}

			return tokens;
		}
	});
	
})();