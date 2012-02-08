var global = this;
$(function() {
	
	/*
	---------------------------------------------------------------------------
		FIX
	---------------------------------------------------------------------------
	*/
	
	module("Fix");
	
	asyncTest("setTimeout with arguments", 1, function() 
	{
		/** #require(core.fix.SetTimeoutArgs) */
		setTimeout(function(arg)
		{
			equals(arg, "hello");
			start();
		}, 10, "hello");
	});

	asyncTest("setImmediate", 1, function() 
	{
		/** #require(core.polyfill.setImmediate) */
		setImmediate(function() {
			ok(true, "always fine");
			start();
		});
	});

	asyncTest("requestAnimationFrame", 1, function() 
	{
		/** #require(core.polyfill.requestAnimationFrame) */
		requestAnimationFrame(function() {
			ok(true, "always fine");
			start();
		});
	});
	
	test("Object.keys", function() 
	{
		// Basic first
		var keys = Object.keys({hello:null, foo:1}).sort().join(",");
		equals(keys, "foo,hello");

		// toString etc. are special in IE because these are built-in keys
		var keys = Object.keys({toString:null, hello:null, foo:1}).sort().join(",");
		equals(keys, "foo,hello,toString");
	});

	test("Object.empty", function() 
	{
		/** #require(core.fix.ObjectKeys) */
		
		// toString etc. are special in IE because these are built-in keys
		ok(Object.empty({}));
		ok(!Object.empty({toString:null}));
		ok(!Object.empty({toString:null, hello:null, foo:1}));
	});
	
	
	
	
	/*
	---------------------------------------------------------------------------
		EXT
	---------------------------------------------------------------------------
	*/
	
	module("Ext");

	/** #require(core.ext.Array) */

	test("Array.prototype.max", function() 
	{
		equals([1,4,23,3].max(), 23);
		equals([10,10,10].max(), 10);
		equals([].max(), -Infinity);
	});

	test("Array.prototype.min", function() 
	{
		equals([1,4,23,3].min(), 1);
		equals([10,10,10].min(), 10);
		equals([].min(), Infinity);
	});
	
	test("Array.prototype.sum", function() 
	{
		equals([1,4,23,3].sum(), 31);
		equals([1,4,23,,,3].sum(), 31);
		equals([].sum(), 0);
	});
		
	test("Array.prototype.insertAt", function() 
	{
		var arr1 = [1,2,3,4,5,6,7];
		equals(arr1.insertAt("end"), "end");
		equals(arr1.join(","), "1,2,3,4,5,6,7,end");

		var arr1 = [1,2,3,4,5,6,7];
		equals(arr1.insertAt("begin", 0), "begin");
		equals(arr1.join(","), "begin,1,2,3,4,5,6,7");

		var arr1 = [1,2,3,4,5,6,7];
		equals(arr1.insertAt("fromBegin", 3), "fromBegin");
		equals(arr1.join(","), "1,2,3,fromBegin,4,5,6,7");

		var arr1 = [1,2,3,4,5,6,7];
		equals(arr1.insertAt("fromEnd", -3), "fromEnd");
		equals(arr1.join(","), "1,2,3,4,fromEnd,5,6,7");
	});
		
	test("Array.prototype.contains", function() 
	{
		var arr1 = [1,2,3,5,6,7];
		ok(arr1.contains(3));
		ok(!arr1.contains(4));
		ok(arr1.contains(5));
		
		var arr2 = ["true","1",3,false];
		ok(!arr2.contains(true));
		ok(!arr2.contains(1));
		ok(!arr2.contains("3"));
		ok(!arr2.contains("false"));

		ok(arr2.contains("true"));
		ok(arr2.contains("1"));
		ok(arr2.contains(3));
		ok(arr2.contains(false));
	});
	
	test("Array.prototype.clone", function() 
	{
		var orig = [1,2,3];
		var clone = orig.clone();
		equals(orig.length, clone.length);
		equals(orig.join(","), clone.join(","));

		var orig = [1,2,,,5];
		var clone = orig.clone();
		equals(orig.length, clone.length);
		equals(orig.join(","), clone.join(","));
	});
	
	test("Array.prototype.remove", function() 
	{
		var arr = [1,2,3,4,5,6];
		equals(arr.remove(4), 4);
		equals(arr.length, 5);
		equals(arr.remove(4));
		equals(arr.length, 5);

		var arr = [1,2,3,1,2,3];
		equals(arr.remove(3), 3);
		equals(arr.join(","), "1,2,1,2,3");
	});
	
	test("Array.prototype.removeAt", function() 
	{
		var arr = [1,2,3,4,5,6];
		equals(arr.removeAt(2), 3);
		equals(arr.removeAt(12));
		equals(arr.join(","), "1,2,4,5,6");
	});
	
	test("Array.prototype.removeRange", function() 
	{
		var arr = [1,2,3,4,5,6,7,8,9];
		arr.removeRange(1, 1);
		equals(arr.join(","), "1,3,4,5,6,7,8,9");

		var arr = [1,2,3,4,5,6,7,8,9];
		arr.removeRange(1, 3);
		equals(arr.join(","), "1,5,6,7,8,9");

		var arr = [1,2,3,4,5,6,7,8,9];
		arr.removeRange(1, -3);
		equals(arr.join(","), "1,8,9");

		var arr = [1,2,3,4,5,6,7,8,9];
		arr.removeRange(-3, -1);
		equals(arr.join(","), "1,2,3,4,5,6");
	});
	
	test("Array.prototype.unique", function() 
	{
		var arr = [1,2,3,1,2,3];
		equals(arr.unique().join(","), "1,2,3");

		// sparse arrays supported
		var arr = [1,2,,,2,3];
		equals(arr.unique().join(","), "1,2,3");

		// null values are treated special
		var arr = [1,2,null,null,2,3];
		equals(arr.unique().join(","), "1,2,,3");

		// selection test
		var arr = [1,"2",3,"1",2,"3"];
		var unique = arr.unique();
		equals(unique.join(","), "1,2,3");
		equals(typeof unique[0], "number");
		equals(typeof unique[1], "string");
		equals(typeof unique[2], "number");
		
		// does not support objects
		var arr = [{},{},{}];
		equals(arr.unique().join(","), "[object Object]");
		
		// but can work with special objects
		var hashCode = 0;
		var Special = function() {
			this.hashCode = hashCode++;
		}
		Special.prototype.toString = function() {
			return "[object Special#" + this.hashCode + "]";
		}
		arr = [new Special, new Special, new Special];
		equals(arr.unique().join(","), "[object Special#0],[object Special#1],[object Special#2]");
	});
	
	test("Array.prototype.at", function() 
	{
		var arr = [1,2,3,4,5];
		equals(arr.at(0), 1);
		equals(arr.at(-1), 5);
		equals(arr.at(20));
		equals(arr.at(-20));
	});
	
	test("Array.prototype.compact", function() 
	{
		var sparse = [1,2,3,,5,,,8];
		equals(sparse.compact().length, 5);

		var undef;
		var sparse = [1,2,3,null,5,,undef,8];
		equals(sparse.compact().length, 7);
		equals(sparse.compact(true).length, 5);
	});
	
	test("Array.prototype.flatten", function() 
	{
		equals([[1], 2, [3]].flatten().toString(), [1,2,3].toString());
		equals([["a"],[],"b","c"].flatten().toString(), ["a","b","c"].toString());
	});
	
	/** #require(core.ext.Function) */
	
	asyncTest("Function.prototype.debounce - END", 1, function() 
	{
		var counter = 0;
		var callback = function() {
			counter++;
		};
		
		var debounced = callback.debounce();
		debounced();
		debounced();
		debounced();
		debounced();
		debounced();
		
		window.setTimeout(function() {
			equals(counter, 1);
			start();
		}, 200)
	});

	test("Function.prototype.debounce - ASAP", function() 
	{
		var counter = 0;
		var callback = function() {
			counter++;
		};
		
		var debounced = callback.debounce(100, true);
		debounced();
		debounced();
		debounced();
		debounced();
		debounced();
		
		equals(counter, 1);
	});
	
	/** #require(core.ext.Object) */
		
	test("Object.values", function() 
	{
		var values = Object.values({x:1, y:2, z:3}).sort().join(",");
		equals(values, "1,2,3");
	});
	
	/** #require(core.ext.Number) */

	test("Number.prototype.pad", function() 
	{
		equals((23).pad(2), "23");
		equals((23).pad(4), "0023");
		equals((23).pad(6), "000023");
		equals((0).pad(6), "000000");
	});
	
	/** #require(core.ext.String) */
	
	test("String.prototype.contains", function() 
	{
		ok("hello world".contains("hello"));
		ok("hello world".contains(""));
		ok("hello world".contains(" "));
		ok(!"hello world".contains(12));
		ok(!"hello world".contains("dlrow"));
	});

	test("String.prototype.hyphenate", function() 
	{
		equals("backgroundColor".hyphenate(), "background-color");
		equals("WebkitTransform".hyphenate(), "-webkit-transform");
		equals("ISOString".hyphenate(), "-i-s-o-string");
	});

	test("String.prototype.repeat", function() 
	{
		equals("x".repeat(3), "xxx");
		equals("xyz".repeat(3), "xyzxyzxyz");
		equals("xyz".repeat(0), "");
	});
	
	
	
	
	/*
	---------------------------------------------------------------------------
		UTIL
	---------------------------------------------------------------------------
	*/
	
	module("Util");
	
	test("Id", function() {
		
		var myFunc = new Function;
		strictEqual(core.util.Id.get(myFunc), 1);
		strictEqual(core.util.Id.get(myFunc), 1);

		strictEqual(core.util.Id.get(document.body), 2);
		strictEqual(core.util.Id.get(document.body), 2);
		
	});
	
	test("Text", function() {
		
		strictEqual(typeof core.bom.Text.measure("hello world"), "object");
		strictEqual(typeof core.bom.Text.measure("hello world").width, "number");
		strictEqual(typeof core.bom.Text.measure("hello world").height, "number");

		strictEqual(typeof core.bom.Text.measure("hello world foo bar baz", null, 40), "object");
		strictEqual(core.bom.Text.measure("hello world foo bar baz", null, 40).width, 40);
		
	});
	
	
	
	/*
	---------------------------------------------------------------------------
		TEMPLATE
	---------------------------------------------------------------------------
	*/
	
	module("Template");
	
	test("Basic", function() {
		
		var template = core.template.Compiler.compile("Follow @{{screenName}}.");
		ok(template instanceof core.template.Template);

		var output = template.render({
		  screenName: "dhg",
		});
		
		equal(output, "Follow @dhg.");
		
		var output = template.render({
		  screenName: "wpbasti",
		});
		
		equal(output, "Follow @wpbasti.");
		
	});
	
	test("Lists", function() {

		var template = core.template.Compiler.compile("{{#repo}}<b>{{name}}</b>{{/repo}}")
		ok(template instanceof core.template.Template);
		
		var output = template.render({
		  "repo": [
		    { "name": "resque" },
		    { "name": "hub" },
		    { "name": "rip" },
		  ]
		});
		
		equal(output, "<b>resque</b><b>hub</b><b>rip</b>");
		
	});
	
	test("Lambdas", function() {

		var template = core.template.Compiler.compile("{{#wrapped}}{{name}} is awesome.{{/wrapped}}")
		ok(template instanceof core.template.Template);
		
		var output = template.render({
		  "name": "Willy",
		  "wrapped": function() {
		    return function(text) {
		      return "<b>" + text + "</b>"
		    }
		  }
		});
		
		equal(output, "<b>Willy is awesome.</b>");
		
	});
	
	test("Non False", function() {

		var template = core.template.Compiler.compile("{{#person?}}Hi {{name}}!{{/person?}}")
		ok(template instanceof core.template.Template);
		
		var output = template.render({
		  "person?": { "name": "Jon" }
		});
		
		equal(output, "Hi Jon!");
		
	});	

	
	test("Parser", function() {
		
		var text = "{{^check}}No{{/check}}{{#check}}Yes{{/check}}";
		var tree = core.template.Compiler.parse(core.template.Compiler.scan(text));

		equals(tree[0].tag, "^");
		equals(tree[0].n, "check");
		equals(tree[1].tag, "#");
		equals(tree[1].n, "check");
		
	});
	
	
	
	/*
	---------------------------------------------------------------------------
		CRYPT
	---------------------------------------------------------------------------
	*/	
	
	module("Crypt");
	
	test("Adler32", function() {
		
		strictEqual(core.crypt.Adler32.checksum("hello world"), 436929629);
		strictEqual(core.crypt.Adler32.checksum("hello world!"), 512296062);
		strictEqual(core.crypt.Adler32.checksum("günthér falit°@"), 1027999529);
		
	});
	
	test("CRC32", function() {
		
		strictEqual(core.crypt.CRC32.checksum("hello world"), 222957957);
		strictEqual(core.crypt.CRC32.checksum("hello world!"), 62177901);
		strictEqual(core.crypt.CRC32.checksum("günthér falit°@"), 1750898803);

	});
	
	test("MD5", function() {

		strictEqual(core.crypt.MD5.checksum("hello world").toHex(), "5eb63bbbe01eeed093cb22bb8f5acdc3");
		strictEqual(core.crypt.MD5.checksum("hello karl").toHex(), "967f3d167631b54ea74b380e439ec2d5");
		strictEqual(core.crypt.MD5.checksum("günthér falit°@").toHex(), "c901b2c94c101e0c2fdb2c96a041ceda");
		
		strictEqual(core.crypt.MD5.hmac("secret", "hello world").toHex(), "78d6997b1230f38e59b6d1642dfaa3a4");
		strictEqual(core.crypt.MD5.hmac("secret", "hello karl").toHex(), "1df06dd6ad23a62de80b713bdfc5f59f");
		
		strictEqual(core.crypt.MD5.hmac("other secret", "hello world").toHex(), "614ff83602727ee68fba3e9500856fad");
		strictEqual(core.crypt.MD5.hmac("other secret", "hello karl").toHex(), "71b406e27e5184663c0c01448b57c5a7");
		
	});
	
	test("SHA1", function() {
		
		strictEqual(core.crypt.SHA1.checksum("hello world").toHex(), "2aae6c35c94fcfb415dbe95f408b9ce91ee846ed");
		strictEqual(core.crypt.SHA1.checksum("hello karl").toHex(), "1665bcf30c12443dbb332b84590123f7d544500b");
		strictEqual(core.crypt.SHA1.checksum("günthér falit°@").toHex(), "01695e64d0f83e453281f385209884e94784c7bf");

		strictEqual(core.crypt.SHA1.hmac("secret", "hello world").toHex(), "03376ee7ad7bbfceee98660439a4d8b125122a5a");
		strictEqual(core.crypt.SHA1.hmac("secret", "hello karl").toHex(), "1de9256cf6805f714a59b69806647b34315ae6ad");
		
		strictEqual(core.crypt.SHA1.hmac("other secret", "hello world").toHex(), "2b7dd1114abb301c6a3879612c040db1dc76efe7");
		strictEqual(core.crypt.SHA1.hmac("other secret", "hello karl").toHex(), "1005fc78d9e3c525c72c3dcaef4ec2d1ae2d638d");

	});
	
	test("SHA256", function() {

		strictEqual(core.crypt.SHA256.checksum("hello world").toHex(), "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9");
		strictEqual(core.crypt.SHA256.checksum("hello karl").toHex(), "710e9c35558708b24698b55e5e890b506fc946558b3aaa4b356ba008e4edc860");
		strictEqual(core.crypt.SHA256.checksum("günthér falit°@").toHex(), "2b62c8f744680ed05d50246db24cdbc491532f185a736c72e7cd94a7bbd41e77");

		strictEqual(core.crypt.SHA256.hmac("secret", "hello world").toHex(), "734cc62f32841568f45715aeb9f4d7891324e6d948e4c6c60c0621cdac48623a");
		strictEqual(core.crypt.SHA256.hmac("secret", "hello karl").toHex(), "22585ec85d81b38049d3446dd109507bd6d72478b07ef35efb4767260fe09715");
		
		strictEqual(core.crypt.SHA256.hmac("other secret", "hello world").toHex(), "02113759509b1c7ae0deaee8f022d84f828e7d46ae9255044c3d801ad2b09a39");
		strictEqual(core.crypt.SHA256.hmac("other secret", "hello karl").toHex(), "17f71ee9084ade98ed82ee4153ceb47707381e5852b473fb77eb8632e06e8bb8");

	});
	
	
	

	/*
	---------------------------------------------------------------------------
		COLLECTION :: LINKED LIST
	---------------------------------------------------------------------------
	*/
	
	module("LinkedList");
	
	test("Create", function() 
	{
		var ll = new core.collection.LinkedList;
		ok(ll instanceof core.collection.LinkedList);
	});

	test("Import/Export", function() 
	{
		var Cls = function(i) {
			this.id = i;
		};

		var array = [new Cls(1), new Cls(2), new Cls(3), new Cls(4), new Cls(5)];
		var ll = new core.collection.LinkedList(array);
		ok(ll instanceof core.collection.LinkedList);
		equal(ll.getLength(), array.length);
		
		var exported = ll.toArray();
		ok(exported instanceof Array);
		equal(exported.length, array.length);
		
		equal(array[0], exported[0]);
		equal(array[1], exported[1]);
		equal(array[2], exported[2]);
		equal(array[3], exported[3]);
		equal(array[4], exported[4]);

	});
	
	test("Add/Remove Sorted", function() {
		
		var Cls = function(i) {
			this.id = i;
		};
		
		var ll = new core.collection.LinkedList;
		ok(ll instanceof core.collection.LinkedList);
		equal(ll.getLength(), 0);
		
		var first = new Cls(1);
		var second = new Cls(2);
		var third = new Cls(3);
		
		strictEqual(ll.add(first), ll);
		equal(ll.getLength(), 1);
		strictEqual(ll.add(second), ll);
		equal(ll.getLength(), 2);
		strictEqual(ll.add(third), ll);
		equal(ll.getLength(), 3);
		
		var exported = ll.toArray();
		
		strictEqual(ll.remove(first), ll);
		equal(ll.getLength(), 2);
		strictEqual(ll.remove(second), ll);
		equal(ll.getLength(), 1);
		strictEqual(ll.remove(third), ll);
		equal(ll.getLength(), 0);
		
		// Exported not modified by changes
		equal(exported.length, 3);

	});
	
	test("Add/Remove Random", function() {
		
		var Cls = function(i) {
			this.id = i;
		};
		
		var ll = new core.collection.LinkedList;
		ok(ll instanceof core.collection.LinkedList);
		equal(ll.getLength(), 0);
		
		var first = new Cls(1);
		var second = new Cls(2);
		var third = new Cls(3);
		
		strictEqual(ll.add(first), ll);
		equal(ll.getLength(), 1);
		var exported = ll.toArray();
		strictEqual(exported[0], first);
		
		strictEqual(ll.add(second), ll);
		equal(ll.getLength(), 2);
		var exported = ll.toArray();
		equal(exported.length, 2);
		strictEqual(exported[0], first);
		strictEqual(exported[1], second);

		strictEqual(ll.remove(first), ll);
		equal(ll.getLength(), 1);
		var exported = ll.toArray();
		equal(exported.length, 1);
		strictEqual(exported[0], second);

		strictEqual(ll.add(third), ll);
		equal(ll.getLength(), 2);
		strictEqual(ll.remove(third), ll);
		equal(ll.getLength(), 1);
		strictEqual(ll.remove(second), ll);
		equal(ll.getLength(), 0);
		
	});


	test("Add/Remove Random", function() {
		
		var Cls = function(i) {
			this.id = i;
		};
		
		var ll = new core.collection.LinkedList;
		ok(ll instanceof core.collection.LinkedList);
		equal(ll.getLength(), 0);
		
		
	});
	


	/*
	---------------------------------------------------------------------------
		NAMES
	---------------------------------------------------------------------------
	*/
	
	module("Names", {
		teardown : function() {
			delete global.foo;
			delete global.abc;
			delete global.a;
		}
	});
	
	test("Creating global", function() {
		Object.declareNamespace("foo", 3);
		equals(global.foo, 3);
	});

	test("Creating namespace", function() {
		Object.declareNamespace("abc.def", 5);
		equals(global.abc.def, 5);
	});



	/*
	---------------------------------------------------------------------------
		MODULES
	---------------------------------------------------------------------------
	*/
	
	module("Modules", {
		teardown : function() {
			delete global.abc;
			delete global.x;
		}
	});
	
	test("Creating empty module", function() {
		core.Module("abc.Module1", {});
		equals(core.Module.isModule(abc.Module1), true);
		equals(abc.Module1.moduleName, "abc.Module1");
		equals(abc.Module1.toString(), "[module abc.Module1]");
	});
	
	test("Creating module with short namespace", function() {
		core.Module("x.Module1", {});
		equals(core.Module.isModule(x.Module1), true);
		equals(x.Module1.moduleName, "x.Module1");
		equals(x.Module1.toString(), "[module x.Module1]");
	});

	test("Module false validation", function() {
		ok(!core.Module.isModule({}));
		ok(!core.Module.isModule(3));
		ok(!core.Module.isModule(null));
	});
	
	test("Creating method module", function() {
		core.Module("abc.Module2", {
			method1 : function() {},
			method2 : function() {},
			method3 : function() {}
		});
		equals(core.Module.isModule(abc.Module2), true);
		ok(abc.Module2.method1 instanceof Function);
		ok(abc.Module2.method2 instanceof Function);
		ok(abc.Module2.method3 instanceof Function);
		equals(abc.Module2.method1.displayName, "abc.Module2.method1");
		equals(abc.Module2.method2.displayName, "abc.Module2.method2");
		equals(abc.Module2.method3.displayName, "abc.Module2.method3");
	});
	
	test("Checking module name", function() {
		raises(function() {
			core.Module("", {});
		});
		raises(function() {
			Module(true, {});
		});
		raises(function() {
			core.Module(" SpaceVoodoo ", {});
		});
		raises(function() {
			core.Module("has space", {});
		});
		raises(function() {
			core.Module("firstLow", {});
		});
		raises(function() {
			core.Module("two..Dots", {});
		});
	});
	
	
	
	/*
	---------------------------------------------------------------------------
		CLASSES :: CORE
	---------------------------------------------------------------------------
	*/
	
	module("ClassesCore", {
		teardown : function() {
			Object.clearNamespace("abc.Class1");
			Object.clearNamespace("abc.Class2");
			Object.clearNamespace("abc.Class3");
		}
	});

	test("Invalid config", function() {
		raises(function() {
			core.Class("abc.Class1");
		});
		raises(function() {
			core.Class("abc.Class2", 42);
		})
		raises(function() {
			core.Class("abc.Class3", {
				unallowedKey : "foo"
			});
		});
	});

	test("Creating empty class", function() {
		core.Class("abc.Class1", {});
		equals(core.Class.isClass(abc.Class1), true);
		equals(abc.Class1.className, "abc.Class1");
		equals(abc.Class1.toString(), "[class abc.Class1]");
	});
	
	test("Class false validation", function() {
		ok(!core.Class.isClass({}));
		ok(!core.Class.isClass(3));
		ok(!core.Class.isClass(null));
	});
	
		
	
	
	/*
	---------------------------------------------------------------------------
		CLASSES :: MEMBERS
	---------------------------------------------------------------------------
	*/	
	
	module("ClassesMembers", {
		teardown : function() {
			Object.clearNamespace("members.Class1");
			Object.clearNamespace("members.Include1");
			Object.clearNamespace("members.Include2");
		}
	});
	
	
	/**
	 * Two classes which should be mixed into another one define the same member. 
	 * A conflict arises, as both could not be merged into the target class.
	 */
	test("Conflicting member functions", function() {
		core.Class("members.Include1", {
			members : {
				foo : function() {}
			}
		});
		core.Class("members.Include2", {
			members : {
				foo : function() {}
			}
		});

		raises(function() {
			core.Class("members.Join", {
				include : [members.Include1, members.Include2]
			});
		});
	});
	
	
	/**
	 * Two classes which should be mixed into another one define the same member.
	 * A conflict arises, as both could not be merged into the target class.
	 */
	test("Conflicting member data", function() {
		core.Class("members.Include1", {
			members : {
				foo : 1
			}
		});
		core.Class("members.Include2", {
			members : {
				foo : 2
			}
		});

		raises(function() {
			core.Class("members.Join", {
				include : [members.Include1, members.Include2]
			});
		});
	});	
	
	
	/**
	 * Two classes which should be mixed into another one define the same member. 
	 * The conflict is prevented as the affected member is also defined locally. So
	 * the author of the including class is aware of the conflict and could call the
	 * original methods if that makes sense.
	 */
	test("Conflicting member functions, correctly merged", function() {
		core.Class("members.Include1", {
			members : {
				foo : function() {}
			}
		});
		core.Class("members.Include2", {
			members : {
				foo : function() {}
			}
		});

		core.Class("members.Join", {
			include : [members.Include1, members.Include2],
			
			members : {
				// Merge manually
				foo : function() {
					members.Include1.prototype.foo.call(this);
					members.Include2.prototype.foo.call(this);
					
					doSomethingElse();
				}
			}
		});
		
		ok(true);
	});
	
	
	/**
	 * Two classes which should be mixed into another one define the same member. 
	 * The conflict is tried being prevented as the affected member is also defined locally. But as
	 * it is not a function this is not regarded as solved. The individual included classes might
	 * require that this member is a function!
	 */
	test("Conflicting member functions, not merged correctly", function() {
		core.Class("members.Include1", {
			members : {
				foo : function() {}
			}
		});
		core.Class("members.Include2", {
			members : {
				foo : function() {}
			}
		});

		raises(function() {
			core.Class("members.Join", {
				include : [members.Include1, members.Include2],
			
				members : {
					// Invalid merge
					foo : null
				}
			});
		});
	});	
	
	
	/**
	 * Two classes which should be mixed into another one define the same member. 
	 * The conflict is tried to being prevented as the affected member is also defined locally. 
	 * But this is not allowed for private members.
	 */
	test("Conflicting member functions with failed private merge", function() {
		core.Class("members.Include1", {
			members : {
				__foo : function() {}
			}
		});
		core.Class("members.Include2", {
			members : {
				__foo : function() {}
			}
		});

		raises(function() {
			core.Class("members.Join", {
				include : [members.Include1, members.Include2],
			
				members : {
					// Private merge... not allowed
					__foo : function() {
						members.Include1.prototype.foo.call(this);
						members.Include2.prototype.foo.call(this);
					
						doSomethingElse();
					}
				}
			});
		});
	});	
	


	/*
	---------------------------------------------------------------------------
		CLASSES :: EVENTS
	---------------------------------------------------------------------------
	*/
	
	module("ClassesEvents", {
		teardown : function() {
			Object.clearNamespace("events.Keyboard");
			Object.clearNamespace("events.Mouse");
			Object.clearNamespace("events.Widget");
			Object.clearNamespace("events.Widget2");
		}
	});
	
		
	/**
	 * Basic event declaration with additional test to mixin classes.
	 */
	
	// Prepare event classes
	core.Class("MouseEvent", {});
	core.Class("KeyEvent", {});
	core.Class("TouchEvent", {});
	core.Class("DataEvent", {});
	core.Class("FocusEvent", {});

	
	test("Events", function() {
		core.Class("events.Mouse", {
			events : {
				click : MouseEvent,
				mousedown : MouseEvent,
				mouseup : MouseEvent
			}
		});
		
		var eventMap = core.Class.getEvents(events.Mouse);
		ok((function() {
			core.Assert.isType(eventMap, "Map");
			return true;
		})(), "Events should be a returned as a map");
		equals(eventMap.click, MouseEvent, "No click event found");
		
		core.Class("events.Keyboard", {
			events : {
				keydown : KeyEvent,
				keyup : KeyEvent,
			}
		});
		
		core.Class("events.Widget", {
			include : [events.Mouse, events.Keyboard]
		});
		
		var full = Object.keys(core.Class.getEvents(events.Widget)).join(",");
		equals(full, "click,mousedown,mouseup,keydown,keyup", "Merge of events failed");

		core.Class("events.Widget2", {
			include : [events.Mouse, events.Keyboard],
			events : {
				custom : DataEvent
			}
		});

		var full = Object.keys(core.Class.getEvents(events.Widget2)).join(",");
		equals(full, "custom,click,mousedown,mouseup,keydown,keyup", "Merge of events with own events failed");
	});
	
	
	
	test("Event Conflicts", function() {
		core.Class("events.Mouse", {
			events : {
				click : MouseEvent,
				mousedown : MouseEvent,
				mouseup : MouseEvent
			}
		});
		
		core.Class("events.Keyboard", {
			events : {
				keydown : KeyEvent,
				keyup : KeyEvent,
			}
		});
		
		core.Class("events.Widget", {
			include : [events.Mouse, events.Keyboard],
			
			events : {
				// This override should be okay
				click : MouseEvent
			}
		});
		
		core.Class("events.Touch", {
			events : {
				click : TouchEvent,
				tap : TouchEvent
			}
		});		
		
		var full = Object.keys(core.Class.getEvents(events.Widget)).join(",");
		equals(full, "click,mousedown,mouseup,keydown,keyup", "Merge of events failed");
		
		raises(function() {
			core.Class("events.Widget2", {
				// This should fail, two click events in include list
				include : [events.Mouse, events.Keyboard, events.Touch]
			});		
		})
	});
	
	test("Event Interfaces", function() 
	{
		core.Interface("events.UserActions", 
		{
			events : 
			{
				click : MouseEvent,
				mousedown : MouseEvent,
				mouseup : MouseEvent,
				focus : FocusEvent,
				blur : FocusEvent,
				keydown : KeyEvent,
				keyup : KeyEvent
			}
		});
		
		raises(function() 
		{
			var MouseEvent = true;
			core.Class("events.Mouse", 
			{
				implement : [events.UserActions],
				events : {
					click : MouseEvent,
					mousedown : MouseEvent,
					mouseup : MouseEvent
				}
			});
		});
	});
	
	
	
	/*
	---------------------------------------------------------------------------
		CLASSES :: PROPERTIES
	---------------------------------------------------------------------------
	*/
	
	module("ClassesProperties", {
		teardown : function() {
			Object.clearNamespace("properties.Text");
			Object.clearNamespace("properties.Dimension");
			Object.clearNamespace("properties.Label");
			Object.clearNamespace("properties.Simple");
			Object.clearNamespace("properties.IColor");
			Object.clearNamespace("properties.IFontSize");
			Object.clearNamespace("properties.ColorImplementer");
			Object.clearNamespace("properties.ColorWrongImplementer");
			Object.clearNamespace("properties.FontSizeImplementer");
			Object.clearNamespace("properties.FontSizeMissing");
			Object.clearNamespace("properties.FontSizeWrongImplementer");
		}
	});	
	
	test("Creating Properties", function() 
	{
		core.Class("properties.Simple", 
		{
			properties : 
			{
				color : 
				{
					type : "String",
					apply : function(value, old) {
						// pass
					}
				},
				
				backgroundColor : 
				{
					type : "String",
					apply : function(value, old) {
						// pass
					},
					fire : "changeBackgroundColor"
				}
			},
			
			members : 
			{
				// Interface implementation
				fireEvent : function(type, value, old) {
					// pass
				}
			}
		});
		
		ok((function() {
			core.Class.assertIsClass(properties.Simple);
			return true;
		})());
		equals(Object.keys(core.Class.getProperties(properties.Simple)).join(","), "color,backgroundColor");

		equals(core.Class.getProperties(properties.Simple).color.type, "String");
		equals(typeof core.Class.getProperties(properties.Simple).color.apply, "function");

		ok(properties.Simple.prototype.getColor instanceof Function);
		ok(properties.Simple.prototype.getBackgroundColor instanceof Function);
		ok(properties.Simple.prototype.setColor instanceof Function);
		ok(properties.Simple.prototype.setBackgroundColor instanceof Function);

		equals(properties.Simple.prototype.getColor.displayName, "properties.Simple.getColor");
		equals(properties.Simple.prototype.getBackgroundColor.displayName, "properties.Simple.getBackgroundColor");
		equals(properties.Simple.prototype.setColor.displayName, "properties.Simple.setColor");
		equals(properties.Simple.prototype.setBackgroundColor.displayName, "properties.Simple.setBackgroundColor");
		
		equals(properties.Simple.prototype.getColor.length, 0);
		equals(properties.Simple.prototype.getBackgroundColor.length, 0);
		equals(properties.Simple.prototype.setColor.length, 1);
		equals(properties.Simple.prototype.setBackgroundColor.length, 1);
		
		var obj1 = new properties.Simple;
		equals(obj1.setColor("red"), "red");
		equals(obj1.setBackgroundColor("black"), "black");
		equals(obj1.getColor(), "red");
		equals(obj1.getBackgroundColor(), "black");
	});
	
	
	test("Property Interfaces", function()
	{
		core.Interface("properties.IColor", 
		{
			properties : 
			{
				color : {
					type : "String",
					fire : "changeColor"
				}
			}
		});
		
		core.Class("properties.ColorImplementer", 
		{
			implement : [properties.IColor],
			properties : 
			{
				color : 
				{
					type : "String",
					fire : "changeColor"
				}
			},
			
			members : 
			{
				// Interface implementation
				fireEvent : function(type, value, old) {
					// pass
				}
			}
		});
		
		raises(function() {
			core.Class("properties.ColorImplementer",
			{
				implement : [properties.IColor],
				properties : 
				{
					color : 
					{
						type : "String"
					}
				}
			});
		});
	
		core.Interface("properties.IFontSize", 
		{
			properties : 
			{
				fontSize : {
					type : "Integer",
					inheritable : true
				}
			}
		});
		
		core.Class("properties.FontSizeImplementer", 
		{
			implement : [properties.IFontSize],
			properties : 
			{
				fontSize : 
				{
					type : "Integer",
					inheritable : true
				}
			},
			
			members : 
			{
				// Interface implementation
				getInheritedValue : function(property) {
					// pass
				}
			}
		});
		
		raises(function() 
		{
			core.Class("properties.FontSizeMissing", {
				implement : [properties.IFontSize]
			});
		})
		
		raises(function() 
		{
			core.Class("properties.FontSizeWrongImplementer", 
			{
				implement : [properties.IFontSize],
				properties : 
				{
					fontSize : 
					{
						type : "String",
						inheritable : true
					}
				},

				members : 
				{
					// Interface implementation
					getInheritedValue : function(property) {
						// pass
					}
				}
			});
		});
	});
	
	test("Creating specific properties in classes without matching interfaces", function()
	{
		raises(function() 
		{
			core.Class("properties.NoFireEvent", 
			{
				properties : 
				{
					size : {
						fire : "changeSize"
					}
				}
			});
		});
		
		raises(function() 
		{
			core.Class("properties.NoGetThemed", 
			{
				properties : 
				{
					size : {
						themeable : true
					}
				}
			});
		});
		
		raises(function() 
		{
			core.Class("properties.NoGetInherited", 
			{
				properties : 
				{
					size : {
						inheritable : true
					}
				}
			});
		});
	});
	
	
	test("Inheriting Properties", function() 
	{
		core.Class("properties.Text", 
		{
			construct : function(element) {
				this.__textElement = element;
			},
			
			properties : 
			{
				wrap : 
				{
					type : "Boolean",
					apply : function(value, old) {
						this.__textElement.style.whiteSpace = value ? "" : "no-wrap"
					}
				},
				
				color : 
				{
					type : "String",
					apply : function(value, old) {
						this.__textElement.style.color = value;
					},
				},
				
				fontFamily : 
				{
					type : ["sans-serif", "serif", "monospace"],
					apply : function(value, old) {
						this.__textElement.style.fontFamily = value;
					}
				},
				
				lineHeight : 
				{
					type : "Integer",
					apply : function(value, old) {
						this.__textElement.style.lineHeight = value;
					}
				}
			},
			
			members : 
			{
				destruct : function() {
					this.__textElement = null;
				}
			}
		});
		
		ok(core.Class.isClass(properties.Text));
		equals(Object.keys(core.Class.getProperties(properties.Text)).join(","), "wrap,color,fontFamily,lineHeight");



		core.Class("properties.Dimension", 
		{
			properties : 
			{
				width : {
					type : "integer"
				},
				
				height : {
					type : "integer"
				}
			}
		});

		ok(core.Class.isClass(properties.Dimension));
		equals(Object.keys(core.Class.getProperties(properties.Dimension)).join(","), "width,height");
		
		


		core.Class("properties.Label", 
		{
			include : [properties.Text, properties.Dimension],
			
			construct : function() 
			{
				this.__labelElement = document.createElement("label");
				
				properties.Text.call(this, this.__labelElement);
				
				this.setLineHeight(2);
			},
			
			members :
			{
				destruct : function() 
				{
					properties.Text.prototype.destruct.call(this);
					this.__labelElement = null;
				}
			}
		});
		
		ok(core.Class.isClass(properties.Label));
		equals(Object.keys(core.Class.getProperties(properties.Label)).join(","), "wrap,color,fontFamily,lineHeight,width,height");
		
		
		
		var ll = new properties.Label;
		equals(ll.getLineHeight(), 2);
	});
	
	
	
});
