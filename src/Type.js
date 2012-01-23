(function(global, toString) 
{
	// Module class is not yet ready
	if (!global.core) {
		global.core = {};
	}
	
	// Some inspired by benchmark.js
	// https://github.com/bestiejs/benchmark.js/blob/master/benchmark.js
	
	core.Type = {
		
		isHostType: function(object, property) 
		{
			var type = object != null ? typeof object[property] : 'number';
			return !/^(?:boolean|number|string|undefined)$/.test(type) && (type == 'object' ? !!object[property] : true);
		},
		
		isClassOf: function(value, name) {
			return value != null && toString.call(value) == '[object ' + name + ']';
		}
		
	};
	
})(this, Object.prototype.toString);

