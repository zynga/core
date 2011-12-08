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
		setTimeout(function(arg)
		{
			equals(arg, "hello");
			start();
		}, 10, "hello");
	});

	asyncTest("setImmediate", 1, function() 
	{
		setImmediate(function() {
			ok(true, "always fine");
			start();
		});
	});

	asyncTest("requestAnimationFrame", 1, function() 
	{
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
		raises(function() {
			// Use removeAt() instead!
			var arr = [1,2,3,4,5,6,7,8,9];
			arr.removeRange(1);
		})

		var arr = [1,2,3,4,5,6,7,8,9];
		equals(arr.removeRange(1, 1), 8);
		equals(arr.join(","), "1,3,4,5,6,7,8,9");

		var arr = [1,2,3,4,5,6,7,8,9];
		equals(arr.removeRange(1, 3), 6);
		equals(arr.join(","), "1,5,6,7,8,9");

		var arr = [1,2,3,4,5,6,7,8,9];
		equals(arr.removeRange(1, -3), 3);
		equals(arr.join(","), "1,8,9");

		var arr = [1,2,3,4,5,6,7,8,9];
		equals(arr.removeRange(-3, -1), 6);
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
		
	test("Object.values", function() 
	{
		var values = Object.values({x:1, y:2, z:3}).sort().join(",");
		equals(values, "1,2,3");
	});
	
	test("Number.prototype.pad", function() 
	{
		equals((23).pad(2), "23");
		equals((23).pad(4), "0023");
		equals((23).pad(6), "000023");
		equals((0).pad(6), "000000");
	});
	
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
		CRYPT
	---------------------------------------------------------------------------
	*/	
	
	module("Crypt");
	
	test("Adler32", function() {
		
		
	});
	
	test("CRC32", function() {
		
		
	});
	
	test("MD5", function() {
		
		
	});
	
	test("SHA1", function() {
		
		
	});
	
	test("SHA256", function() {
		
		
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
		core.Module.declareName("foo", 3);
		equals(global.foo, 3);
	});

	test("Creating namespace", function() {
		core.Module.declareName("abc.def", 5);
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
			core.Module.clearName("abc.Class1");
			core.Module.clearName("abc.Class2");
			core.Module.clearName("abc.Class3");
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
			core.Module.clearName("members.Class1");
			core.Module.clearName("members.Include1");
			core.Module.clearName("members.Include2");
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
			core.Module.clearName("events.Keyboard");
			core.Module.clearName("events.Mouse");
			core.Module.clearName("events.Widget");
			core.Module.clearName("events.Widget2");
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
			core.Assert.map(eventMap);
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
			core.Module.clearName("properties.Text");
			core.Module.clearName("properties.Dimension");
			core.Module.clearName("properties.Label");
			core.Module.clearName("properties.Simple");
			core.Module.clearName("properties.IColor");
			core.Module.clearName("properties.IFontSize");
			core.Module.clearName("properties.ColorImplementer");
			core.Module.clearName("properties.ColorWrongImplementer");
			core.Module.clearName("properties.FontSizeImplementer");
			core.Module.clearName("properties.FontSizeMissing");
			core.Module.clearName("properties.FontSizeWrongImplementer");
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
					type : "string",
					apply : function(value, old) {
						// pass
					}
				},
				
				backgroundColor : 
				{
					type : "string",
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
			core.Assert.cls(properties.Simple);
			return true;
		})());
		equals(Object.keys(core.Class.getProperties(properties.Simple)).join(","), "color,backgroundColor");

		equals(core.Class.getProperties(properties.Simple).color.type, "string");
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
					type : "string",
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
					type : "string",
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
						type : "string"
					}
				}
			});
		});
	
		core.Interface("properties.IFontSize", 
		{
			properties : 
			{
				fontSize : {
					type : "integer",
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
					type : "integer",
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
						type : "string",
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
					type : "boolean",
					apply : function(value, old) {
						this.__textElement.style.whiteSpace = value ? "" : "no-wrap"
					}
				},
				
				color : 
				{
					type : "string",
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
					type : "integer",
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
