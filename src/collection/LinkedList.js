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
	 * positions and fast containsment checks are required (a mix of array/hashmap).
	 *
	 * The implementation is a doubly linked list which stores references on the objects which are stored. So
	 * these objects are modified. Iterating through this objects will show the keys added by the LinkedList!
	 *
	 * **Wikipedia on LinkedList**
	 *
	 * The principal benefit of a linked list over a conventional array is that the list elements can easily 
	 * be inserted or removed without reallocation or reorganization of the entire structure because the data 
	 * items need not be stored contiguously in memory or on disk. Linked lists allow insertion and removal 
	 * of nodes at any point in the list, and can do so with a constant number of operations if the link 
	 * previous to the link being added or removed is maintained during list traversal.
	 *
	 * On the other hand, simple linked lists by themselves do not allow random access to the data, or any form 
	 * of efficient indexing. Thus, many basic operations — such as obtaining the last node of the list 
	 * (assuming that the last node is not maintained as separate node reference in the list structure), or 
	 * finding a node that contains a given datum, or locating the place where a new node should be inserted — 
	 * may require scanning most or all of the list elements.
	 *
	 * For more info: http://en.wikipedia.org/wiki/Linked_list
	 */
	core.Class("core.collection.LinkedList", 
	{
		/**
		 * Native @array {Array} like object to import
		 */
		construct: function(array) 
		{
			
			// Field to store data in each object
			// Keeps an array with [prev, next]
			var id = this.__id = "$ll" + unique++;
			
			// Import array
			if (array) {
				
				if (core.Env.isSet("debug")) {
					core.Assert.array(array);
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
			 * {LinkedList} Adds the given @obj {Object} to the list
			 *
			 * Performance behavior: O(1)
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
			 * {LinkedList} Removes the given @obj {Object} from the list
			 *
			 * Performance behavior: O(1)
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
			 * {Boolean} Returns whether the list contains the given @obj {Object}
			 *
			 * Performance behavior: O(1)
			 */
			has: function(obj) {
				return !!obj[this.__id];
			},
			
			
			/**
			 * {Integer} Returns the position of the @obj {Object} in the list
			 *
			 * Performance behavior: O(n); in negative cases just O(1)
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
			 * {Boolean} Returns whether the list is empty
			 *
			 * Performance behavior: O(1)
			 */
			isEmpty: function() {
				return this.__length > 0;
			},
			
			
			/**
			 * {Integer} Returns the length of the list
			 *
			 * Performance behavior: O(1)
			 */
			getLength: function() {
				return this.__length;
			},
			
			
			/**
			 * {LinkedList} Clears the full list and returns the list object
			 *
			 * Performance behavior: O(n)
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
			 * {Array} Returns an array copy of the list
			 *
			 * Performance behavior: O(n)
			 */
			toArray: function() {
				
				var self = this;
				var array = new Array(this.__length);
				
				var length = self.__length;
				var id = self.__id;
				
				var current = self.__first;
				for (var i=0; i<length; i++) {
					array[i] = current;
					current = current[id][1];
				}
				
				return array;
				
			}
		}
	});
})();
