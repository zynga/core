/**
 * Main class of application $${name} based on $${origin.name}.
 *
 * Auto created by Jasy $${jasy.version}.
 *
 * #asset($${name}/*)
 */
core.Class("$${name}.Main", {
	
	construct: function() {
		
		core.io.StyleSheet.load(jasy.Asset.toUri("$${name}/main.css"));
		
		alert("Hello from $${name}!");
		
	},
	
	members: {
		
		
		
		
	}
	
});
