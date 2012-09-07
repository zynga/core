/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Zynga Inc.
==================================================================================================
*/

(function(global)
{
	var plural;
	if (global.locale) 
	{
		
		plural = (function(fields, Plural)
		{
			var code="", pos=0;
			var field, expr;

			for (var i=0; i<5; i++)
			{
				field = fields[i];
				if (expr = Plural[field]) {
					code += "if(" + expr + ")return " + (pos++) + ";";
				}
			}

			code += "return " + pos + ";"

			return new Function("n", code);
		})(["ZERO", "ONE", "TWO", "FEW", "MANY"], locale.Plural);
		
	}
	else 
	{
		console.warn("Using locale fallback support (no detailed plural rules!)")

		/**
		 * {Integer} Applies the plural rule to the given @n {Number} of the current locale and returns the
		 * field index on the translation data (0-6). This is the data used
		 * by the classical GNU gettext tools. See also:
		 * http://www.gnu.org/software/hello/manual/gettext/Plural-forms.html
		 */
		plural = function(n) {
			return n == 1 ? 0 : 1;
		}
	}
	
	/**
	 * {String} Quick and easy string templating using %1, %2, etc. as placeholders
	 * and an array for the data. You pass in the @message {String} and the @data {Array}
	 * and an optional @start {Integer?-1} to configure the initial array position to use.
	 */
	var template = function(message, data, start)
	{
		// %1 = first, %2 = second, ...
		start = start == null ? -1 : start - 1;
		return message.replace(/%([0-9])/g, function(match, pos) {
			return data[start+parseInt(pos)];
		});
	};

	
	/**
	 * Developer interface to translation API of Core Library.
	 */
	core.Module("core.locale.Translate",
	{
		template : template,
		plural : plural,


		/**
		 * {String} Mark @message {String} for tranlsation, but always return the original text.
		 */
		marktr : function(message) {
			return message;
		},


		/**
		 * {String} Translates the given @message {String} and replaces any numeric placeholders 
		 * (`%[0-9]`) with the corresponding number arguments passed via @varargs {var...?}.
		 */
		tr : function(message, varargs)
		{
			var args = arguments;
			var replacement = jasy.Translate.getEntry(message) || message;

			return args.length <= 1 ? replacement : template(replacement, args, 1);
		},


		/**
		 * {String} Translates the given @message {String} und while choosing the one which matches the 
		 * given @context {String} and replaces any numeric placeholders (`%[0-9]`) with the corresponding 
		 * number arguments passed via @varargs {var...?}.
		 */
		trc : function(context, message, varargs)
		{
			var args = arguments;
			var replacement = jasy.Translate.getEntry(message, null, context) || message;

			return args.length <= 2 ? replacement : template(replacement, args, 2);
		},


		/**
		 * {String} Translates the given @messageSingular {String} or @messagePlural {String} 
		 * depending on the @number {Number} passed to the method.
		 * Like the other methods it also supports replacing any numeric placeholders 
		 * (`%[0-9]`) with the corresponding number arguments passed via @varargs {var...?}.
		 */
		trn : function(messageSingular, messagePlural, number, varargs)
		{
			var args = arguments;
			var replacement = jasy.Translate.getEntry(messageSingular, messagePlural);

			// Do numeric lookup for correct plural case
			if (typeof replacement == "object") {
				var result = replacement[plural(number)];
			}

			// Fallback to programmatically defined messages
			if (!result) {
				result = number == 1 ? messageSingular : messagePlural;
			}

			return args.length <= 3 ? result : template(result, args, 3);
		},


		/**
		 * Optimized method being used by Jasy-replaced `trn()` method
		 */
		trnc : function(messages, number, varargs)
		{
			var args = arguments;
			var result = messages[plural(number)];

			// Fallback to first message if matching plural was not found
			if (!result) {
				result = messages[0];
			}

			return args.length <= 2 ? result : template(result, args, 2);     
		}
	});
})(this);
