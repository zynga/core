(function() {
	
	var funcId = 0;
	
	/**
	 *
	 *
	 */
	Class("core.flow.Callbacks", {

		construct: function() {

			
			this.__list = [];
			this.__stack = [];
			
		},

		members: {

			/** Actual callback list */
			list : null,

			/** Stack of fire calls for repeatable lists */
			stack : null,

			/** Last fire value (for non-forgettable lists) */
			memory : false,
			
			/** Flag to know if list is currently firing */
			firing : false,
			
			/** First callback to fire (used internally by add and fireWith) */
			firingStart : null,
			
			/** End of the loop when firing */
			firingLength : null,
			
			/** Index of currently firing callback (modified by remove if needed) */
			firingIndex : null,
			
			
			/** 
			 * Add one or several callbacks to the list
			 */
			__add : function( args ) {
				var i,
					length,
					elem,
					type,
					actual;
				for ( i = 0, length = args.length; i < length; i++ ) {
					elem = args[ i ];
					type = jQuery.type( elem );
					if ( type === "array" ) {
						// Inspect recursively
						add( elem );
					} else if ( type === "function" ) {
						// Add if not in unique mode and callback is not in
						if ( !flags.unique || !self.has( elem ) ) {
							list.push( elem );
						}
					}
				}
			},
			
			
			/**
			 * Fire callbacks
			 */
			__fire : function( context, args ) {
				args = args || [];
				memory = !flags.memory || [ context, args ];
				firing = true;
				firingIndex = firingStart || 0;
				firingStart = 0;
				firingLength = list.length;
				for ( ; list && firingIndex < firingLength; firingIndex++ ) {
					if ( list[ firingIndex ].apply( context, args ) === false && flags.stopOnFalse ) {
						memory = true; // Mark as halted
						break;
					}
				}
				firing = false;
				if ( list ) {
					if ( !flags.once ) {
						if ( stack && stack.length ) {
							memory = stack.shift();
							self.fireWith( memory[ 0 ], memory[ 1 ] );
						}
					} else if ( memory === true ) {
						self.disable();
					} else {
						list = [];
					}
				}
			},


			/**
			 * Add a callback or a collection of callbacks to the list
			 */
			add: function() {
				if ( list ) {
					var length = list.length;
					add( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away, unless previous
					// firing was halted (stopOnFalse)
					} else if ( memory && memory !== true ) {
						firingStart = length;
						fire( memory[ 0 ], memory[ 1 ] );
					}
				}
				
				return this;
			},
			
			
			/**
			 * Remove a callback from the list
			 */
			remove: function() {
				if ( list ) {
					var args = arguments,
						argIndex = 0,
						argLength = args.length;
					for ( ; argIndex < argLength ; argIndex++ ) {
						for ( var i = 0; i < list.length; i++ ) {
							if ( args[ argIndex ] === list[ i ] ) {
								// Handle firingIndex and firingLength
								if ( firing ) {
									if ( i <= firingLength ) {
										firingLength--;
										if ( i <= firingIndex ) {
											firingIndex--;
										}
									}
								}
								// Remove the element
								list.splice( i--, 1 );
								// If we have some unicity property then
								// we only need to do this once
								if ( flags.unique ) {
									break;
								}
							}
						}
					}
				}
				
				return this;
			},
			
			
			/**
			 * Control if a given callback is in the list
			 */
			has: function( fn ) {
				if ( list ) {
					var i = 0,
						length = list.length;
					for ( ; i < length; i++ ) {
						if ( fn === list[ i ] ) {
							return true;
						}
					}
				}
				
				return false;
			},
			
			
			/**
			 * Remove all callbacks from the list
			 */
			empty: function() {
				list = [];
				
				return this;
			},
			
			
			/**
			 * Have the list do nothing anymore
			 */
			disable: function() {
				list = stack = memory = undefined;
				
				return this;
			},
			
			
			/**
			 * Is it disabled?
			 */
			disabled: function() {
				return !list;
			},
			
			
			/**
			 * Lock the list in its current state
			 */
			lock: function() {
				stack = undefined;
				if ( !memory || memory === true ) {
					this.disable();
				}
				
				return this;
			},
			
			
			/**
			 * Is it locked?
			 */
			locked: function() {
				return !stack;
			},
			
			
			/**
			 * Call all callbacks with the given context and arguments
			 */
			fireWith: function( context, args ) {
				if ( stack ) {
					if ( firing ) {
						if ( !flags.once ) {
							stack.push( [ context, args ] );
						}
					} else if ( !( flags.once && memory ) ) {
						fire( context, args );
					}
				}
				
				return this;
			},
			
			
			/**
			 * Call all the callbacks with the given arguments
			 */
			fire: function() {
				this.fireWith( this, arguments );
				
				return this;
			},
			
			
			/**
			 * To know if the callbacks have already been called at least once
			 */
			fired: function() {
				return !!memory;
			}
		}
	});
	
})();
