Core - A Fine Foundation for JavaScript Projects
================================================

Core prepares the ground for JavaScript projects. It fills what is missing, fixes what is wrong, adds what is useful. While doing this it is still a pretty lightweight framework which is a good start for all kind of JavaScript projects.

Core was designed to work together with the JavaScript tooling project [Jasy](https://github.com/zynga/jasy).


## Components

### Basic Fixes

Fixes for issues or missing features in specific JavaScript implementations (core.fix.*)

* `Array.prototype.indexOf`
* `console`
* `Date.now`
* `document.head`
* `execScript`
* `Function.prototype.bind`
* HTML5 markup support for IE
* `Object.keys`
* `setTimeout`/`setIntervals` with additional arguments

### ES5 Support

* *Array*: `isArray`
* *Array.prototype*: `forEach`, `map`, `filter`, `every`, `some`, `reduce`, `reduceRight`, `lastIndexOf`
* *Date.prototype*: `toISOString`, `toJSON`
* *JSON*: `stringify`, `parse`
* *String.prototype*: `trim`

### Language Extensions

* Synthetic sugar for better comfort during JavaScript development


### Polyfills

* Base64 Support
* Local Storage (TODO)
* Request Animation Frame
* Immediate Function Calls


### Object Orientation

* Supports classes, mixins and interfaces with convenient "closed" syntax
* Prefers composition of classes/mixins instead of deep inheritance hierarchies
* Supports interfaces for validating support. Prefers them instead of abstract classes.


### Property Support

* Basic setter/getter creation for classes based on config (core.property.*)
* Super efficient data storage
* Validation of incoming values
* Custom apply logic when changes occur
* Event system integration (TODO)
* Groups of properties e.g. paddingLeft, paddingTop, ... => padding
* Multi properties with support for multi value storage (themed, user, inherited)


### Tooling

Most of these features are especially useful to use in conjunction with [Jasy](https://github.com/wpbasti/jasy)

* Basic feature detection for browser engine, ES5 support, locale, URL parameters, etc. (core.detect.*)
* Asset loading and URL resolution in complex multi project structures (core.Asset)
* Support for storing image sizes and image sprite data in a central location.


### Professionalism

* Extendable type test and assertion module (core.Test)
* Useful to harden methods to enforce specific incoming values


### IO

* Asynchronous load system for JavaScript files, stylesheets, images, text, json, etc.
* Detection of network availability (core.io.Network)


### Browser Object Model

* Managing CSS class names (core.bom.ClassName)
* Serializing HTML forms (core.bom.Form)


### Utilities

* Adler32 checksum algorithm
* CRC32 checksum algorithm


## License

Copyright (c) 2011-2012 Zynga Inc. http://zynga.com/

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.