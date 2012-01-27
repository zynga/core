/* 
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
==================================================================================================
*/

(function(global) {
	
	/**
	 * Holds basic informations about the environment the script is running in.
	 */
	core.Module("core.detect.Env", {

		/** {=Boolean} Whether the script is running inside a typical browser */
		BROWSER: core.Type.isHostType(global, 'document') && core.Type.isHostType(global, 'navigator')

	});

})(this);
