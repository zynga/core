/* 
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
--------------------------------------------------------------------------------------------------
  Based on the work of ES5 Shim
  MIT License, Copyright (c) 2009, 280 North Inc. http://280north.com/ 
==================================================================================================
*/

/**
 * Adds ES5 Date methods if these are not implemented by the engine.
 *
 * #require(core.Bootstrap)
 */
Object.addMembers("Date",
{
	/**
	 * Converts the `Date` instance to an ISO string representation.
	 *
	 * - ES5 15.9.5.43: http://es5.github.com/#x15.9.5.43
	 *
	 * This function returns a String value represent the instance in time
	 * represented by this Date object. The format of the String is the Date Time
	 * string format defined in 15.9.1.15. All fields are present in the String.
	 * The time zone is always UTC, denoted by the suffix Z. If the time value of
	 * this object is not a finite Number a RangeError exception is thrown.
	 */
	toISOString : function() 
	{
		var result, length, value, year;
		if (!isFinite(this)) {
			throw new RangeError;
		}

		// the date time string format is specified in 15.9.1.15.
		result = [this.getUTCMonth() + 1, this.getUTCDate(), this.getUTCHours(), this.getUTCMinutes(), this.getUTCSeconds()];
		year = this.getUTCFullYear();
		year = (year < 0 ? '-' : (year > 9999 ? '+' : '')) + ('00000' + Math.abs(year)).slice(0 <= year && year <= 9999 ? -4 : -6);

		length = result.length;
		while (length--) 
		{
			value = result[length];

			// pad months, days, hours, minutes, and seconds to have two digits.
			if (value < 10) {
				result[length] = "0" + value;
			}
		}
		
		// pad milliseconds to have three digits.
		return year + "-" + result.slice(0, 2).join("-") + "T" + result.slice(2).join(":") + "." + ("000" + this.getUTCMilliseconds()).slice(-3) + "Z";
	},
	
	
	/**
	 * Converts the `Date` instance to a JSON representation.
	 *
	 * - @key is currently unused.
	 * - ES5 15.9.5.44
	 */
	toJSON : function(key) 
	{
		// This function provides a String representation of a Date object for
		// use by JSON.stringify (15.12.3). When the toJSON method is called
		// with argument key, the following steps are taken:

		// 1. Let O be the result of calling ToObject, giving it the this value as its argument.
		// 2. Let tv be ToPrimitive(O, hint Number).
		// 3. If tv is a Number and is not finite, return null.
		// 4. Let toISO be the result of calling the [[Get]] internal method of O with argument "toISOString".
		// 5. If IsCallable(toISO) is false, throw a TypeError exception.
		if (typeof this.toISOString !== "function") {
			throw new TypeError();
		}
			
		// 6. Return the result of calling the [[Call]] internal method of
		// toISO with O as the this value and an empty argument list.
		return this.toISOString();

		// NOTE 1 The argument is ignored.

		// NOTE 2 The toJSON function is intentionally generic; it does not
		// require that its this value be a Date object. Therefore, it can be
		// transferred to other kinds of objects for use as a method. However,
		// it does require that any such object have a toISOString method. An
		// object is free to use the argument key to filter its
		// stringification.
	}
	
}, true);

