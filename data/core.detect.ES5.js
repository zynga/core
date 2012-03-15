apibrowser.callback({
  "statics": [
    {
      "constant": true, 
      "name": "VALUE", 
      "sourceLink": "source:core.detect.ES5~39", 
      "visibility": "public", 
      "doc": "<p>Whether ES5 is supported</p>\n", 
      "line": 39, 
      "type": "Boolean"
    }
  ], 
  "assets": [], 
  "package": "core.detect", 
  "basename": "ES5", 
  "permutations": [], 
  "uses": [
    "core.Module"
  ], 
  "main": {
    "doc": "<p>Checks whether the ES5 extensions should be loaded to fix missing engine functions.</p>\n\n<ul>\n<li>Array.prototype.forEach</li>\n<li>Array.prototype.map</li>\n<li>Array.prototype.filter</li>\n<li>Array.prototype.every</li>\n<li>Array.prototype.some</li>\n<li>Array.prototype.reduce</li>\n<li>Array.prototype.reduceRight</li>\n<li>Array.prototype.indexOf</li>\n<li>Array.prototype.lastIndexOf</li>\n<li>Date.prototype.toISOString</li>\n<li>Date.prototype.toJSON</li>\n<li>JSON.parse</li>\n<li>JSON.stringify</li>\n</ul>\n\n<p>These ES5 methods are fixed outside the <a href=\"#ext.es5\"><code>ext.es5</code></a> package via:</p>\n\n<ul>\n<li>Array.isArray: <a href=\"#ext.IsArray\"><code>ext.IsArray</code></a></li>\n<li>Date.now(): <a href=\"#ext.DateNow\"><code>ext.DateNow</code></a></li>\n<li>Function.prototype.bind: <a href=\"#ext.FunctionBind\"><code>ext.FunctionBind</code></a></li>\n<li>String.prototype.trim: <a href=\"#ext.StringTrim\"><code>ext.StringTrim</code></a></li>\n</ul>\n\n<p>The reasoning behind this is that these functions are also missing in some otherwise ES5 compatible engines.</p>\n", 
    "line": 34, 
    "type": "core.Module", 
    "name": "core.detect.ES5", 
    "tags": []
  }, 
  "id": "core.detect.ES5", 
  "size": {
    "zipped": 98, 
    "optimized": 102, 
    "compressed": 102
  }
},'core.detect.ES5');