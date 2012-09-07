(function(global)
{
	/** {=Map} Translation table */
	var translations = {};

	/**
	 * Jasy interface to translation API.
	 */
	core.Module("jasy.Translate",
	{
		/**
		 * Imports translation @data {Map} into internal translation table.
		 */
		addData : function(data)
		{
			// Merge in new translations
			for (var id in data) {
				translations[id] = data[id];
			}
		},

		/**
		 * {String|Map} Returns translation data for the given message ID data.
		 */
		getData : function(basic, plural, context) 
		{
			var id = basic

			if (context != null) {
				id += "[C:" + context + "]";
			} else if (plural != null) {
				id += "[N:" + plural + "]";
			}			

			return translations[id];
		}
	});

})(this);