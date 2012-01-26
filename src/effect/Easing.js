/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
--------------------------------------------------------------------------------------------------
  Easing Equations (c) 2003 Robert Penner, all rights reserved.
  Open source under the BSD License.
  This work is subject to the terms in http://www.robertpenner.com/easing_terms_of_use.html
  Adapted for script.aculo.us by Brian Crescimanno <brian.crescimanno@gmail.com> and Ken Snyder <kendsnyder@gmail.com)
==================================================================================================
*/

/**
 * Collection of pretty much standard easing methods. Based on the work of Robert Penner.
 */
core.Module("core.effect.Easing", 
{
	/**
	 * {Number} Transforms a position (@pos {Number}) between 0 (start of effect) and 1 (end of effect) into a effect modified one.
	 */
	easeInQuad: function(pos) {
		return Math.pow(pos, 2);
	},

	/**
	 * {Number} Transforms a position (@pos {Number}) between 0 (start of effect) and 1 (end of effect) into a effect modified one.
	 */
	easeOutQuad: function(pos) {
		return -(Math.pow((pos - 1), 2) - 1);
	},

	/**
	 * {Number} Transforms a position (@pos {Number}) between 0 (start of effect) and 1 (end of effect) into a effect modified one.
	 */
	easeInOutQuad: function(pos) {
		if ((pos /= 0.5) < 1) {
			return 0.5 * Math.pow(pos, 2);
		}

		return -0.5 * ((pos -= 2) * pos - 2);
	},

	/**
	 * {Number} Transforms a position (@pos {Number}) between 0 (start of effect) and 1 (end of effect) into a effect modified one.
	 */
	easeInCubic: function(pos) {
		return Math.pow(pos, 3);
	},

	/**
	 * {Number} Transforms a position (@pos {Number}) between 0 (start of effect) and 1 (end of effect) into a effect modified one.
	 */
	easeOutCubic: function(pos) {
		return (Math.pow((pos - 1), 3) + 1);
	},

	/**
	 * {Number} Transforms a position (@pos {Number}) between 0 (start of effect) and 1 (end of effect) into a effect modified one.
	 */
	easeInOutCubic: function(pos) {
		if ((pos /= 0.5) < 1) {
			return 0.5 * Math.pow(pos, 3);
		}

		return 0.5 * (Math.pow((pos - 2), 3) + 2);
	},

	/**
	 * {Number} Transforms a position (@pos {Number}) between 0 (start of effect) and 1 (end of effect) into a effect modified one.
	 */
	easeInQuart: function(pos) {
		return Math.pow(pos, 4);
	},

	/**
	 * {Number} Transforms a position (@pos {Number}) between 0 (start of effect) and 1 (end of effect) into a effect modified one.
	 */
	easeOutQuart: function(pos) {
		return -(Math.pow((pos - 1), 4) - 1);
	},

	/**
	 * {Number} Transforms a position (@pos {Number}) between 0 (start of effect) and 1 (end of effect) into a effect modified one.
	 */
	easeInOutQuart: function(pos) {
		if ((pos /= 0.5) < 1) {
			return 0.5 * Math.pow(pos, 4);
		}

		return -0.5 * ((pos -= 2) * Math.pow(pos, 3) - 2);
	},

	/**
	 * {Number} Transforms a position (@pos {Number}) between 0 (start of effect) and 1 (end of effect) into a effect modified one.
	 */
	easeInQuint: function(pos) {
		return Math.pow(pos, 5);
	},

	/**
	 * {Number} Transforms a position (@pos {Number}) between 0 (start of effect) and 1 (end of effect) into a effect modified one.
	 */
	easeOutQuint: function(pos) {
		return (Math.pow((pos - 1), 5) + 1);
	},

	/**
	 * {Number} Transforms a position (@pos {Number}) between 0 (start of effect) and 1 (end of effect) into a effect modified one.
	 */
	easeInOutQuint: function(pos) {
		if ((pos /= 0.5) < 1) {
			return 0.5 * Math.pow(pos, 5);
		}

		return 0.5 * (Math.pow((pos - 2), 5) + 2);
	},

	/**
	 * {Number} Transforms a position (@pos {Number}) between 0 (start of effect) and 1 (end of effect) into a effect modified one.
	 */
	easeInSine: function(pos) {
		return -Math.cos(pos * (Math.PI / 2)) + 1;
	},

	/**
	 * {Number} Transforms a position (@pos {Number}) between 0 (start of effect) and 1 (end of effect) into a effect modified one.
	 */
	easeOutSine: function(pos) {
		return Math.sin(pos * (Math.PI / 2));
	},

	/**
	 * {Number} Transforms a position (@pos {Number}) between 0 (start of effect) and 1 (end of effect) into a effect modified one.
	 */
	easeInOutSine: function(pos) {
		return (-0.5 * (Math.cos(Math.PI * pos) - 1));
	},

	/**
	 * {Number} Transforms a position (@pos {Number}) between 0 (start of effect) and 1 (end of effect) into a effect modified one.
	 */
	easeInExpo: function(pos) {
		return (pos === 0) ? 0 : Math.pow(2, 10 * (pos - 1));
	},

	/**
	 * {Number} Transforms a position (@pos {Number}) between 0 (start of effect) and 1 (end of effect) into a effect modified one.
	 */
	easeOutExpo: function(pos) {
		return (pos === 1) ? 1 : -Math.pow(2, -10 * pos) + 1;
	},

	/**
	 * {Number} Transforms a position (@pos {Number}) between 0 (start of effect) and 1 (end of effect) into a effect modified one.
	 */
	easeInOutExpo: function(pos) {
		if (pos === 0) {
			return 0;
		}

		if (pos === 1) {
			return 1;
		}

		if ((pos /= 0.5) < 1) {
			return 0.5 * Math.pow(2, 10 * (pos - 1));
		}

		return 0.5 * (-Math.pow(2, -10 * --pos) + 2);
	},

	/**
	 * {Number} Transforms a position (@pos {Number}) between 0 (start of effect) and 1 (end of effect) into a effect modified one.
	 */
	easeInCirc: function(pos) {
		return -(Math.sqrt(1 - (pos * pos)) - 1);
	},

	/**
	 * {Number} Transforms a position (@pos {Number}) between 0 (start of effect) and 1 (end of effect) into a effect modified one.
	 */
	easeOutCirc: function(pos) {
		return Math.sqrt(1 - Math.pow((pos - 1), 2));
	},

	/**
	 * {Number} Transforms a position (@pos {Number}) between 0 (start of effect) and 1 (end of effect) into a effect modified one.
	 */
	easeInOutCirc: function(pos) {
		if ((pos /= 0.5) < 1) {
			return -0.5 * (Math.sqrt(1 - pos * pos) - 1);
		}

		return 0.5 * (Math.sqrt(1 - (pos -= 2) * pos) + 1);
	},

	/**
	 * {Number} Transforms a position (@pos {Number}) between 0 (start of effect) and 1 (end of effect) into a effect modified one.
	 */
	easeOutBounce: function(pos) {
		if ((pos) < (1 / 2.75)) {
			return (7.5625 * pos * pos);
		} else if (pos < (2 / 2.75)) {
			return (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
		} else if (pos < (2.5 / 2.75)) {
			return (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
		} else {
			return (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
		}
	},

	/**
	 * {Number} Transforms a position (@pos {Number}) between 0 (start of effect) and 1 (end of effect) into a effect modified one.
	 */
	easeInBack: function(pos) {
		var s = 1.70158;
		return (pos) * pos * ((s + 1) * pos - s);
	},

	/**
	 * {Number} Transforms a position (@pos {Number}) between 0 (start of effect) and 1 (end of effect) into a effect modified one.
	 */
	easeOutBack: function(pos) {
		var s = 1.70158;
		return (pos = pos - 1) * pos * ((s + 1) * pos + s) + 1;
	},

	/**
	 * {Number} Transforms a position (@pos {Number}) between 0 (start of effect) and 1 (end of effect) into a effect modified one.
	 */
	easeInOutBack: function(pos) {
		var s = 1.70158;
		if ((pos /= 0.5) < 1) {
			return 0.5 * (pos * pos * (((s *= (1.525)) + 1) * pos - s));
		}

		return 0.5 * ((pos -= 2) * pos * (((s *= (1.525)) + 1) * pos + s) + 2);
	},

	/**
	 * {Number} Transforms a position (@pos {Number}) between 0 (start of effect) and 1 (end of effect) into a effect modified one.
	 */
	elastic: function(pos) {
		return -1 * Math.pow(4, - 8 * pos) * Math.sin((pos * 6 - 1) * (2 * Math.PI) / 2) + 1;
	},

	/**
	 * {Number} Transforms a position (@pos {Number}) between 0 (start of effect) and 1 (end of effect) into a effect modified one.
	 */
	swingFromTo: function(pos) {
		var s = 1.70158;
		return ((pos /= 0.5) < 1) ? 0.5 * (pos * pos * (((s *= (1.525)) + 1) * pos - s)) :
			0.5 * ((pos -= 2) * pos * (((s *= (1.525)) + 1) * pos + s) + 2);
	},

	/**
	 * {Number} Transforms a position (@pos {Number}) between 0 (start of effect) and 1 (end of effect) into a effect modified one.
	 */
	swingFrom: function(pos) {
		var s = 1.70158;
		return pos * pos * ((s + 1) * pos - s);
	},

	/**
	 * {Number} Transforms a position (@pos {Number}) between 0 (start of effect) and 1 (end of effect) into a effect modified one.
	 */
	swingTo: function(pos) {
		var s = 1.70158;
		return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
	},

	/**
	 * {Number} Transforms a position (@pos {Number}) between 0 (start of effect) and 1 (end of effect) into a effect modified one.
	 */
	bounce: function(pos) {
		if (pos < (1 / 2.75)) {
			return (7.5625 * pos * pos);
		} else if (pos < (2 / 2.75)) {
			return (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
		} else if (pos < (2.5 / 2.75)) {
			return (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
		} else {
			return (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
		}
	},

	/**
	 * {Number} Transforms a position (@pos {Number}) between 0 (start of effect) and 1 (end of effect) into a effect modified one.
	 */
	bouncePast: function(pos) {
		if (pos < (1 / 2.75)) {
			return (7.5625 * pos * pos);
		} else if (pos < (2 / 2.75)) {
			return 2 - (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
		} else if (pos < (2.5 / 2.75)) {
			return 2 - (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
		} else {
			return 2 - (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
		}
	},

	/**
	 * {Number} Transforms a position (@pos {Number}) between 0 (start of effect) and 1 (end of effect) into a effect modified one.
	 */
	easeFromTo: function(pos) {
		if ((pos /= 0.5) < 1) {
			return 0.5 * Math.pow(pos, 4);
		}

		return -0.5 * ((pos -= 2) * Math.pow(pos, 3) - 2);
	},

	/**
	 * {Number} Transforms a position (@pos {Number}) between 0 (start of effect) and 1 (end of effect) into a effect modified one.
	 */
	easeFrom: function(pos) {
		return Math.pow(pos, 4);
	},

	/**
	 * {Number} Transforms a position (@pos {Number}) between 0 (start of effect) and 1 (end of effect) into a effect modified one.
	 */
	easeTo: function(pos) {
		return Math.pow(pos, 0.25);
	}
});
