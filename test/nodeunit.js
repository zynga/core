global.core = {};

require('../src/core/Main.js');
require('../src/core/Module.js');
require('../src/core/Env.js');
require('../src/core/Assert.js');

require('../src/ext/sugar/Object.js');

require('../src/core/Class.js');

var nodeunit = require('nodeunit');

core.Class("a.fuppes.Uppercase", {

	construct: function() {
	},

	members: {
		brambes: function()
		{
			console.log("This is a.fuppes.Uppercase.brambes calling");
			return true;
		}
	}
});

exports['test'] = function(test)
{
  var foo = new core.fuppes.Uppercase();

  test.ok(foo.brambes());
  test.done();
}
