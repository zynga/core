/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Zynga Inc.
==================================================================================================
*/

(function(global, undef)
{
	// Jasy is replacing this call via the kernel permutation
	// Catch this as it produce an error (missing API) when not being replaced.
	var fields;
	try{
		fields = core.Env.getValue("fields");
	} catch (ex) {}
	
	// At this level Array.prototype.indexOf might not be support, so we implement a custom logic for a contains check
	var contains = function(array, value) 
	{
		for (var i=0, l=array.length; i<l; i++) 
		{
			if (array[i] == value) {
				return true;
			}
		}
	}
	
	if (fields)
	{
		/** Currently selected fields from Env data */
		var selected = {};

		/** {=Number} Holds the checksum for the current permutation which is auto detected by features or by compiled-in data */
		var checksum = (function()
		{
			// Process entries
			var key = [];
			for (var i=0, l=fields.length; i<l; i++)
			{
				// possible variants
				// 1: name, 1, test, [val1, val2]
				// 2: name, 2, value
				// 3: name, 3, test, default (not permutated)

				var entry = fields[i];
				var name = entry[0];
				var type = entry[1]
				if (type == 1 || type == 3)
				{
					var test = entry[2];
					var value = "VALUE" in test ? test.VALUE : test.get(name);
					var third = entry[3];

					// Fallback to first value if test results in unsupported value
					if (type == 1 && !contains(third, value)) {
						value = third[0];
					}

					// Fill in missing value with default
					else if (type == 3 && value == null) {
						value = third;
					}
				}
				else
				{
					// In cases with no test, we don't have an array of fields but just a value
					value = entry[2];
				}

				selected[name] = value;

				if (type != 3) {
					key.push(name + ":" + value);
				}
			}

			if (selected.debug) {
				console.info("core.Env: " + key.join(", "));
			}

			/**
			 * #require(ext.sugar.String)
			 */
			return core.crypt.SHA1.checksum(key.join(";")).toHex();
		})();
	}
	else
	{
		// Enable debug by default
		// All other data might be configured using {#define} later.
		var selected = {
			debug : true
		};

		// No checksum available
		var checksum = null;
	}


	/**
	 * This class is the client-side representation for the permutation features of
	 * Jasy and supports features like auto-selecting builds based on specific feature sets.
	 */
	core.Module("core.Env",
	{
		SELECTED : selected,
		CHECKSUM : checksum,


		/**
		 * Configure environment data dynamically via setting a field @name {String} and its @value {var}.
		 */
		define : function(name, value) {
			selected[name] = value;
		},


		/**
		 * {Boolean} Whether the field with the given @name {String} was set to the given @value {var?true}. 
		 *
		 * Boolean fields could also be checked without a given value as the value
		 * defaults to `true`.
		 */
		isSet : function(name, value)
		{
			// Fallback to value of true
			if (value === undef) {
				value = true;
			}

			// Explicit use of normal equal here to not differ between numbers and strings etc.
			return selected[name] == value;
		},


		/**
		 * {var} Returns the value of the field with the given @name {String}.
		 */
		getValue : function(name) {
			return selected[name];
		},
		
		
		/**
		 * {var} Selects and returns the current value of the field with the given 
		 * @name {String} from the given @map {Map}.
		 */
		select: function(name, map) {
			return map[selected[name]];
		}
	});
})(this);

