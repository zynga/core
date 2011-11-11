(function() {
	
	var unique = 0;
	var undef;
	
	/**
	 * A LinkedList implemented in pure JavaScript. 
	 *
	 * Use this class when adding/removing/contains is more performance critical to you than iterating.
	 * LinkedLists beat native array performance especially on checking for containment and removing of objects.
	 * It adds somewhat of a memory overhead though as every object refers the previous/next objects.
	 * Through the nature of having fast contains checks and position storage it can be used when both 
	 * positions and fast containsment checks are required (a mix of array/hashmap)
	 */
	core.Class("core.collection.LinkedList", 
	{
		/**
		 * @param array {Array} Native array like object to import
		 */
		construct: function(array) 
		{
			
			// Field to store data in each object
			// Keeps an array with [prev, next]
			var id = this.__id = "$ll" + unique++;
			
			// Import array
			if (array) {
				
				if (core.Env.isSet("debug")) {
					core.Test.assertArray(array);
				}
				
				var length = array.length;
				if (length > 0) {
					
					var current = array[0];
					var prev, next;
					
					this.__first = current;
					this.__length = length;
					
					for (var i=0; i<length; i++) {

						if (current[id]) {
							throw new Error("Duplicated object during import: " + obj);
						}
						
						next = array[i+1];

						current[id] = [prev, next];
						
						prev = current;
						current = next;

					}
				}
			}
		},

		members: 
		{
			
			__first: undef,
			__last: undef,
			__length: 0,
			

			/**
			 * Adds the given object to the list
			 *
			 * Performance behavior: O(1)
			 *
			 * @param obj {Object} Object to add
			 * @return {LinkedList} Returns this object for further operations
			 */
			add: function(obj) {

				var self = this;
				
				if (obj[self.__id]) {
					throw new Error("Object is already in the list: " + obj);
				}

				var id = self.__id;
				
				var prev = self.__last;
				if (prev) {
					
					// append after previous last one
					obj[id] = [prev];
					prev[id][1] = obj;
					
				} else {
					
					// insert as the first object
					obj[id] = [];
					self.__first = obj;
					
				}
				
				self.__length++;
				self.__last = obj;
				
				return self;
				
			},
			

			/**
			 * Removes the given object from the list
			 *
			 * Performance behavior: O(1)
			 *
			 * @param obj {Object} Object to remove
			 * @return {LinkedList} Returns this object for further operations
			 */
			remove: function(obj) {

				var self = this;
				
				if (!obj[self.__id]) {
					throw new Error("Object is not in the list: " + obj);
				}

				var id = self.__id;
				var store = obj[id];
				
				var prev = store[0];
				var next = store[1];
				
				if (prev && next) {
					
					// Conntext previous and next child
					prev[1] = next;
					next[0] = prev;
					
				} else if (prev) {
					
					// Free previous child from reference to this object
					prev[1] = undef;
					self.__last = prev;
					
				} else if (next) {
					
					// We seem to be the first
					// Make following child the first
					next[0] = undef;
					self.__first = next;
					
				} else {
					
					self.__first = undef;
					self.__last = undef;
					
				}
				
				obj[id] = undef;
				self.__length--;
				
				return self;
				
			},


			/**
			 * Whether the list contains the given object
			 *
			 * Performance behavior: O(1)
			 *
			 * @param obj {Object} Object to check for
			 * @return {Boolean} Whether the object is in the list
			 */
			has: function(obj) {
				return !!obj[this.__id];
			},
			
			
			/**
			 * Returns the position of the object in the list
			 *
			 * Performance behavior: O(n); in negative cases just O(1)
			 *
			 * @param obj {Object} Object to check for
			 * @return {Integer} The position of the object in the list. `-1` when object was not found.
			 */
			indexOf: function(obj) {
				
				var self = this;
				var id = self.__id;
				
				if (!obj[id]) {
					return -1;
				}

				var current = self.__first;
				var pos = 0;
				
				for(;;) {

					if (current === obj) {
						return pos;
					}
					
					pos++;
					current = current[id][1];
					
				}
			},
			
			
			/**
			 * Whether the LinkedList is empty
			 *
			 * Performance behavior: O(1)
			 *
			 * @return {Boolean} Whether the list is empty
			 */
			isEmpty: function() {
				return this.__length > 0;
			},
			
			
			/**
			 * Returns the length of the list
			 *
			 * Performance behavior: O(1)
			 *
			 * @return {Integer} Length of the list
			 */
			getLength: function() {
				return this.__length;
			},
			
			
			/**
			 * Clears the full list
			 *
			 * Performance behavior: O(n)
			 *
			 * @return {LinkedList} Returns this object for further operations
			 */
			clear: function() {
				
				var self = this;

				var length = self.__length;
				var id = self.__id;
				
				var current = self.__first;
				var next;

				for (var i=0; i<length; i++) {
					next = current[id][1];
					current[id] = null;
					current = next;
				}
				
				return this;

			},
			
			
			/**
			 * Returns an array copy of the list
			 *
			 * Performance behavior: O(n)
			 *
			 * @return {Array} Current list converted to an array
			 */
			toArray: function() {
				
				var self = this;
				var array = [];
				
				var length = self.__length;
				var id = self.__id;
				
				var current = self.__first;
				for (var i=0; i<length; i++) {
					array.push(current);
					current = current[id][1];
				}
				
				return array;
				
			}
		}
	});
})();
