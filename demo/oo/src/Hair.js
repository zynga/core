/**
 * Adds hair to any object
 */
core.Class("oo.Hair", {
	construct : function(color) {
		this.__color = color;
	},
	
	members : {
		getHairColor : function() {
			return this.__color;
		}
	}
});
