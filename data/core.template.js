apibrowser.callback({
  "package": "core", 
  "basename": "template", 
  "content": [
    {
      "link": "core.template.Compiler", 
      "name": "Compiler", 
      "summary": "This is the Compiler of the template engine and transforms the token tree into a compiled template instance."
    }, 
    {
      "link": "core.template.Parser", 
      "name": "Parser", 
      "summary": "This is the Parser of the template engine and transforms the template text into a tree of tokens."
    }, 
    {
      "link": "core.template.Template", 
      "name": "Template", 
      "summary": "This is the template class which is typically initialized and configured using the core.template.Compiler#compile method."
    }
  ], 
  "uses": [], 
  "main": {
    "doc": "<p>The template engine is based on <a href=\"http://twitter.github.com/hogan.js/\">Hogan.js</a>/Mustache with a few modifications:</p>\n\n<ul>\n<li>No support for automatic parent lookup of locally unavailable keys.</li>\n<li>No support to lambdas in data to dynamically process data.</li>\n<li>No support for triple <code>{{{xxx}}}</code> unescaped values. Use <code>{{&amp;xxx}}</code> instead.</li>\n<li>No support for dynamic template controllable delimiters using <code>{{=delim}}</code>.</li>\n<li>Added support for basic non looping conditionals <code>{{?xxx}}</code>.</li>\n</ul>\n\n<p>See also:</p>\n\n<ul>\n<li><a href=\"http://mustache.github.com/mustache.5.html\">Mustache Manpage</a></li>\n<li><a href=\"https://github.com/mustache/spec\">Mustache Spec</a></li>\n</ul>\n", 
    "type": "Package", 
    "name": "core.template"
  }, 
  "id": "core.template"
},'core.template');