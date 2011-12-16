/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2011 Sebastian Werner
==================================================================================================
*/

(function(global, undef)
{
	// Jasy is replacing this call via the kernel permutation
	var fields = core.Env.getValue("fields");

	if (fields)
	{
		// Stores all selected fields in a simple map
		var selected = {};

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
					if (type == 1 && third.indexOf(value) == -1) {
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
			 * @require {core.ext.String}
			 */
			return core.crypt.SHA1.hash(key.join(";")).hex();
		})();
	}
	else
	{
		// Enable debug by default
		// All other data might be configured using {@link #define} later.
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
		/** {Map} Currently selected fields from Env data */
		SELECTED : selected,

		/** {Number} Holds the checksum for the current permutation which is auto detected by features or by compiled-in data */
		CHECKSUM : checksum,


		/**
		 * Configure environment data dynamically
		 *
		 * @param name {String} Name of the field to configure
		 * @param value {var} Value to set
		 */
		define : function(name, value) {
			selected[name] = value;
		},


		/**
		 * Whether the given field was set to the given value. Boolean
		 * fields could also be checked without a given value as the value
		 * defaults to <code>true</code>.
		 *
		 * @param name {String} Name of the field to query
		 * @param value {var?true} Value to compare to (defaults to true)
		 * @return {Boolean} Whether the field is set to the given value
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
		 * Returns the value of the given field
		 *
		 * @param name {String} Name of the field to query
		 * @return {var} The value of the given field
		 */
		getValue : function(name) {
			return selected[name];
		},
		
		
		/**
		 * Selects the current value of the given name from the map.
		 *
		 * @param name {String} Name of the field to query
		 * @param map {Map} Map to select a key by the value of the given field
		 * @return {var} Selected value
		 */
		select: function(name, map) {
			return map[selected[name]];
		}
	});
})(this);

