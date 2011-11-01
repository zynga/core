Base - A Fine Foundation for JavaScript Projects
================================================

Features
--------

* A full blown class system with support for composition and interfaces.
* Basic feature detection framework to use in conjunction with [Jasy](https://github.com/wpbasti/jasy)
* Fixes for issues or missing features in specific JavaScript implementations
  * Array.prototype.indexOf
  * console
  * Date.now
  * document.head
  * execScript
  * Function.prototype.bind
  * HTML5 markup support
  * Object.keys
  * setTimeout/setIntervals with additional arguments
* EcmaScript 5 Support (for all not fixed/added before)
  * Array: `isArray`
  * Array.prototype: `forEach`, `map`, `filter`, `every`, `some`, `reduce`, `reduceRight`, `lastIndexOf`
  * Date.prototype: `toISOString`, `toJSON`
  * JSON: `stringify`, `parse`
  * String.prototype: `trim`
* Synthetic sugar for better comfort during JavaScript development (base.ext.*)
* Extendable type test and assertion module (base.Test)
