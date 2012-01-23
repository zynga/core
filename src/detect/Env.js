(function(global) {
	
	core.Module("core.detect.Env", {

		BROWSER: core.Type.isHostType(global, 'document') && core.Type.isHostType(global, 'navigator'),

		JAVA: core.Type.isClassOf(global.java, 'JavaPackage')

	});

})(this);
