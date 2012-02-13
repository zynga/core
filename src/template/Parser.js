(function() 
{
	var tagSplitter = /(\{\{[^\{\}}]*\}\})/;
	var tagMatcher = /^\{\{\s*([#\^\/\!\<\>\=\$\&]?)\s*([^\{\}}]*?)\s*\}\}$/;
	
	
	/**
	 * {Array} Processes a list of @tokens {String[]} to create a tree. 
	 * Optional @stack {Array?} is used internally during recursion.
	 */
	function buildTree(tokens, stack) 
	{
		var instructions = [];
		var opener = null;
		var token = null;
				
		while (tokens.length > 0) 
		{
			token = tokens.shift();
			
			// Sections (and inverted sections) are stored structured in the tree
			if (token.tag == "#" || token.tag == "^") 
			{
				stack.push(token);
				token.nodes = buildTree(tokens, stack);
				instructions.push(token);
			}
			else if (token.tag == "/") 
			{
				if (core.Env.isSet("debug") && stack.length === 0) {
					throw new Error("Closing tag without opener: /" + token.name);
				}
				
				opener = stack.pop();
				
				if (core.Env.isSet("debug") && token.name != opener.name) {
					throw new Error("Nesting error: " + opener.name + " vs. " + token.name);
				}
				
				return instructions;
			}
			
			// All other tokens are just copied into the structure
			else 
			{
				instructions.push(token);
			}
		}

		if (core.Env.isSet("debug") && stack.length > 0) {
			throw new Error("Missing closing tag: " + stack.pop().name);
		}

		return instructions;
	}
	
	
	/**
	 * This is a parser for the [Mustache](http://mustache.github.com/) templating language which is based on [Hogan.js](http://twitter.github.com/hogan.js/). 
	 * For information on Mustache, see the [manpage](http://mustache.github.com/mustache.5.html) and the [spec](https://github.com/mustache/spec).
	 */
	core.Module("core.template.Parser", 
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
			var matched;

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
		},
		
		
		/**
		 * {String[]} Returns the token tree of the given template @text {String}.
		 *
		 * A token holds the following information:
		 *
		 * - `tag`: tag of the token
		 * - `name`: name of the token
		 * - `nodes`: children of the node
		 */
		parse: function(text) {
			return buildTree(this.tokenize(text), []);
		}
		
	});
})();

