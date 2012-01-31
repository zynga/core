/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
==================================================================================================
*/

(function(global)
{
	// Jasy is replacing this call via the kernel permutation
	var translations = core.Env.getValue("translations");
	
	var plural;
	if (global.locale) {
		
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
		/**
		 * {Integer} Applies the plural rule to the given @n {Number} of the current locale and returns the
		 * field index on the translation data (0-6). This is the data used
		 * by the classical GNU gettext tools. See also:
		 * http://www.gnu.org/software/hello/manual/gettext/Plural-forms.html
		 */
		plural = function(n) {
			return 0;
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
		 * {String} Translates the given @message {String} and replaces any numeric placeholders 
		 * (`%[0-9]`) with the corresponding number arguments passed via @varargs {var...?}.
		 */
		tr : function(message, varargs)
		{
			var replacement = translations[message] || message;
			return arguments.length <= 1 ? replacement : template(replacement, arguments, 1);
		},


		/**
		 * {String} Translates the given @message {String} und while choosing the one which matches the 
		 * given @hint {String} and replaces any numeric placeholders (`%[0-9]`) with the corresponding 
		 * number arguments passed via @varargs {var...?}.
		 */
		trc : function(hint, message, varargs)
		{
			var replacement = translations[message] || message;
			return arguments.length <= 2 ? replacement : template(replacement, arguments, 2);
		},


		/**
		 * {String} Translates the given @messageSingular {String} or @messagePlural {String} 
		 * depending on the @number {Number} passed to the method.
		 * Like the other methods it also supports replacing any numeric placeholders 
		 * (`%[0-9]`) with the corresponding number arguments passed via @varargs {var...?}.
		 */
		trn : global.locale && function(messageSingular, messagePlural, number, varargs)
		{
			// Matching is based on singular "messageid"
			var replacement = translations[messageSingular];

			// Do numeric lookup
			if (typeof replacement == "object") {
				var result = replacement[plural(number)];
			}

			// Fallback to programmatically defined messages
			if (!result) {
				result = number == 1 ? messageSingular : messagePlural;
			}

			return arguments.length <= 3 ? result : template(result, arguments, 3);
		}
	});
})(this);
