/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Zynga Inc.
==================================================================================================
*/

/**
 * #require(ext.RequestAnimationFrame)
 */

(function() 
{
	var time = Date.now;
	var desiredFrames = 60;
	var millisecondsPerSecond = 1000;
	var running = {};
	var counter = 1;

	/**
	 * Generic animation class with support for dropped frames both optional easing and duration.
	 *
	 * Optional duration is useful when the lifetime is defined by another condition than time
	 * e.g. speed of an animating object, etc.
	 *
	 * Dropped frame logic allows to keep using the same updater logic independent from the actual
	 * rendering. This eases a lot of cases where it might be pretty complex to break down a state
	 * based on the pure time difference.
	 *
	 * Requires {ext.RequestAnimationFrame} for cross browser support.
	 */
	core.Module("core.effect.Animate", {

		/**
		 * {Boolean} Stops the given animation via its @id {Integer}. Returns whether the animation was stopped.
		 */
		stop: function(id) {
			var cleared = running[id] != null;
			if (cleared) {
				running[id] = null;
			}

			return cleared;
		},


		/**
		 * {Boolean} Whether the given animation via its @id {Integer} is still running.
		 */
		isRunning: function(id) {
			return running[id] != null;
		},


		/**
		 * {Integer} Start the animation. Returns the identifier of animation. Can be used to stop it any time.
		 *
		 * - @stepCallback {Function} Pointer to function which is executed on every step.
		 *   Signature of the method should be `function(percent, now, virtual) { return continueWithAnimation; }`
		 * - @verifyCallback {Function} Executed before every animation step.
		 *   Signature of the method should be `function() { return continueWithAnimation; }`
		 * - @completedCallback {Function}
		 *   Signature of the method should be `function(droppedFrames, finishedAnimation) {}`
		 * - @duration {Integer} Milliseconds to run the animation
		 * - @easingMethod {Function} Pointer to easing function
		 *   Signature of the method should be `function(percent) { return modifiedValue; }`
		 * - @root {Element ? document.body} Render root, when available. Used for internal
		 *   usage of requestAnimationFrame.
		 */
		start: function(stepCallback, verifyCallback, completedCallback, duration, easingMethod, root) {

			var start = time();
			var lastFrame = start;
			var percent = 0;
			var dropCounter = 0;
			var id = counter++;

			if (!root) {
				root = document.body;
			}

			// Compacting running db automatically every few new animations
			if (id % 20 === 0) {
				var newRunning = {};
				for (var usedId in running) {
					newRunning[usedId] = true;
				}
				running = newRunning;
			}

			// This is the internal step method which is called every few milliseconds
			var step = function(virtual) {

				// Normalize virtual value
				var render = virtual !== true;

				// Get current time
				var now = time();

				// Verification is executed before next animation step
				if (!running[id] || (verifyCallback && !verifyCallback(id))) {

					running[id] = null;
					completedCallback && completedCallback(desiredFrames - (dropCounter / ((now - start) / millisecondsPerSecond)), id, false);
					return;

				}

				// For the current rendering to apply let's update omitted steps in memory.
				// This is important to bring internal state variables up-to-date with progress in time.
				if (render) {

					var droppedFrames = Math.round((now - lastFrame) / (millisecondsPerSecond / desiredFrames)) - 1;
					for (var j = 0; j < Math.min(droppedFrames, 4); j++) {
						step(true);
						dropCounter++;
					}

				}

				// Compute percent value
				if (duration) {
					percent = (now - start) / duration;
					if (percent > 1) {
						percent = 1;
					}
				}

				// Execute step callback, then...
				var value = easingMethod ? easingMethod(percent) : percent;
				if ((stepCallback(value, now, render) === false || percent === 1) && render) {
					running[id] = null;
					completedCallback && completedCallback(desiredFrames - (dropCounter / ((now - start) / millisecondsPerSecond)), id, percent === 1 || duration == null);
				} else if (render) {
					lastFrame = now;
					requestAnimationFrame(step, root);
				}
			};

			// Mark as running
			running[id] = true;

			// Init first step
			requestAnimationFrame(step, root);

			// Return unique animation ID
			return id;
		}
	});
})();

