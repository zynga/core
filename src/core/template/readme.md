The template engine is based on [Hogan.js](http://twitter.github.com/hogan.js/)/Mustache with a few modifications:

- No support to lambdas in data
- No support for triple '{{{xxx}}}' unescaped values. Use `{{&xxx}}` instead
- No support for dynamic template controllable delimiters

See also:

- [Mustache Manpage](http://mustache.github.com/mustache.5.html)
- [Mustache Spec](https://github.com/mustache/spec)