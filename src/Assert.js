/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
==================================================================================================
*/

(function() {
	
	function raise(message) {
		throw new Error(message);
	}
	
	/** 
	 * Collection of assertions which could be used to verify incoming arguments, etc.
	 *
	 * Modelled after the Python API at http://docs.python.org/library/unittest.html
	 */
	core.Module("core.Assert", 
	{
		/**
		 * Raises an exception when the two values @a {var} and @b {var} are not equal (`!=`)
		 * Customizable with a custom @message {String?} for the exception text.
		 */
		assertEqual: function(a, b, message) 
		{
			if (a != b) {
				raise(message || "Values must be equal: " + a + " and " + b + "!");
			}
		},

		/**
		 * Raises an exception when the two values @a {var} and @b {var} are equal (`==`). 
		 * Customizable with a custom @message {String?} for the exception text.
		 */
		assertNotEqual: function(a, b, message) 
		{
			if (a == b) {
				raise(message || "Values must not be equal: " + a + " and " + b + "!");
			}
		},
		
		/**
		 * Raises an exception when the two values @a {var} and @b {var} are not identical (`!==`)
		 * Customizable with a custom @message {String?} for the exception text.
		 */
		assertIs: function(a, b, message) 
		{
			if (a !== b) {
				raise(message || "Values must be identical: " + a + " and " + b + "!");
			}
		},

		/**
		 * Raises an exception when the two values @a {var} and @b {var} are identical (`===`). 
		 * Customizable with a custom @message {String?} for the exception text.
		 */
		assertIsNot: function(a, b, message) 
		{
			if (a === b) {
				raise(message || "Values must not be identical: " + a + " and " + b + "!");
			}
		},
		
		/**
		 * Raises an exception when the value @a {var} is not trueish (`!= true`). 
		 * Customizable with a custom @message {String?} for the exception text.
		 */
		assertTrue: function(a, message) 
		{
			if (a != true) {
				raise(message || "Value must be true: " + a + "!");
			}
		},

		/**
		 * Raises an exception when the value @a {var} is not falsy (`!= false`). 
		 * Customizable with a custom @message {String?} for the exception text.
		 */
		assertFalse: function(a, message) 
		{
			if (a != false) {
				raise(message || "Value must be false: " + a + "!");
			}
		},

		/**
		 * Raises an exception when the value @a {var} is not in @object {Object|Array|String}. 
		 * Customizable with a custom @message {String?} for the exception text.
		 */
		assertIn: function(a, object, message) 
		{
			if (!(a in object || object.indexOf && object.indexOf(a) != -1)) {
				raise(message || "Value " + a + " is not in given object!");
			}
		},

		/**
		 * Raises an exception when the value @a {var} is in @object {Object|Array|String}. 
		 * Customizable with a custom @message {String?} for the exception text.
		 */
		assertNotIn: function(a, object, message) 
		{
			if (a in object || object.indexOf && object.indexOf(a) != -1) {
				raise(message || "Value " + a + " must not be in given object!");
			}
		},

		/**
		 * Raises an exception when the value @a {var} is not `null`.
		 * Customizable with a custom @message {String?} for the exception text.
		 */
		assertIsNull: function(a, message) 
		{
			if (a == null) {
				raise(message || "Value " + a + " must be null!");
			}
		},
		
		/**
		 * Raises an exception when the value @a {var} is `null`.
		 * Customizable with a custom @message {String?} for the exception text.
		 */
		assertIsNotNull: function(a, message) 
		{
			if (a == null) {
				raise(message || "Value " + a + " must not be null!");
			}
		},
		
		/**
		 * Raises an exception when the value @a {var} does not match the regular expression @regexp {RegExp}.
		 * Customizable with a custom @message {String?} for the exception text.
		 */
		assertMatches: function(a, regexp, message) 
		{
			if (!regexp.match(a)) {
				raise(message || "Value " + a + " must match " + regexp);
			}
		},
		
		/**
		 * Raises an exception when the value @a {var} matches the regular expression @regexp {RegExp}.
		 * Customizable with a custom @message {String?} for the exception text.
		 */
		assertNotMatches: function(a, regexp, message) 
		{
			if (regexp.match(a)) {
				raise(message || "Value " + a + " must not match " + regexp);
			}
		},
		
		/**
		 * Raises an exception when the value @a {var} is not of @type {String} (checked via {core.Bootstrap#isType})
		 * Customizable with a custom @message {String?} for the exception text.
		 */
		assertTypeOf: function(a, type, message) 
		{
			if (!Object.isTypeOf(a, type)) {
				raise(message || "Value " + a + " must match type: " + type);
			}
		},

		/**
		 * Raises an exception when the value @a {var} is of @type {String} (checked via {core.Bootstrap#isType})
		 * Customizable with a custom @message {String?} for the exception text.
		 */
		assertNotTypeOf: function(a, type, message) 
		{
			if (Object.isTypeOf(a, type)) {
				raise(message || "Value " + a + " must not match type: " + type);
			}
		}
		
	});
	
})();

