/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
==================================================================================================
*/

/**
 * Checks whether the ES5 extensions should be loaded to fix missing engine functions.
 *
 * - Array.prototype.forEach
 * - Array.prototype.map
 * - Array.prototype.filter
 * - Array.prototype.every
 * - Array.prototype.some
 * - Array.prototype.reduce
 * - Array.prototype.reduceRight
 * - Array.prototype.indexOf
 * - Array.prototype.lastIndexOf
 * - Date.prototype.toISOString
 * - Date.prototype.toJSON
 * - JSON.parse
 * - JSON.stringify
 *
 * These ES5 methods are fixed outside the {ext.es5} package via:
 *
 * - Array.isArray: {ext.IsArray}
 * - Date.now(): {ext.DateNow}
 * - Function.prototype.bind: {ext.FunctionBind}
 * - String.prototype.trim: {ext.StringTrim}
 *
 * The reasoning behind this is that these functions are also missing in some otherwise ES5 compatible engines.
 */
core.Module("core.detect.ES5", 
{
	/**
	 * {=Boolean} Whether ES5 is supported
	 */
	VALUE : !!(Array.prototype.map && Date.prototype.toISOString && this.JSON)
});


