Core - A Fine Foundation for JavaScript Projects
================================================

Core prepares the ground for JavaScript projects. Adds what is missing, fixes what is wrong, adds what is useful. While doing this it is still a pretty lightweight framework.

Core was designed to work together with the JavaScript tooling project [Jasy](https://github.com/wpbasti/jasy).


## License

Core is licensed under a dual license MIT + Apache V2. See separate license files for details. 


## Components

### Base

Fixes for issues or missing features in specific JavaScript implementations (core.fix.*)

* `Array.prototype.indexOf`
* `console`
* `Date.now`
* `document.head`
* `execScript`
* `Function.prototype.bind`
* `HTML5 markup support for IE`
* `Object.keys`
* `setTimeout/setIntervals with additional arguments`

### ES5 Support

* *Array*: `isArray`
* *Array.prototype*: `forEach`, `map`, `filter`, `every`, `some`, `reduce`, `reduceRight`, `lastIndexOf`
* *Date.prototype*: `toISOString`, `toJSON`
* *JSON*: `stringify`, `parse`
* *String.prototype*: `trim`

### Language Extensions

* Synthetic sugar for better comfort during JavaScript development (core.ext.*)


### Object Orientation

* A full blown class system with support for composition and interfaces.


### Tooling

* Basic feature detection framework to use in conjunction with [Jasy](https://github.com/wpbasti/jasy)


### Professionalism

* Extendable type test and assertion module (core.Test)


### Performance

* Asynchronous load system for JavaScript, Stylesheets and Images

