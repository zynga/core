Core Template Engine
====================

The template engine is based on HoganJS/Mustache with a few modifications:

- No support to lambdas in data
- No support for triple '{{{xxx}}}' unescaped values. Use `{{&xxx}}` instead
- No support for dynamic template controllable delimiters

