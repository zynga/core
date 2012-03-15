apibrowser.callback({
  "assets": [], 
  "package": "ext", 
  "basename": "StringTrim", 
  "permutations": [], 
  "uses": [
    "core.Main"
  ], 
  "members": [
    {
      "name": "trim", 
      "doc": "<p>Implements <code>trim</code> according to // ES5 15.5.4.20 (<a href=\"http://es5.github.com/#x15.5.4.20\">http://es5.github.com/#x15.5.4.20</a>)</p>\n", 
      "visibility": "public", 
      "returns": [
        "String"
      ], 
      "sourceLink": "source:ext.StringTrim~30", 
      "line": 30, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "trimLeft", 
      "doc": "<p>Trims whitespace from the left side of the string. Non standard extension of JavaScript 1.8.1.</p>\n", 
      "visibility": "public", 
      "summary": "Trims whitespace from the left side of the string.", 
      "returns": [
        "String"
      ], 
      "sourceLink": "source:ext.StringTrim~37", 
      "line": 37, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "trimRight", 
      "doc": "<p>Trims whitespace from the right side of the string. Non standard extension of JavaScript 1.8.1.</p>\n", 
      "visibility": "public", 
      "summary": "Trims whitespace from the right side of the string.", 
      "returns": [
        "String"
      ], 
      "sourceLink": "source:ext.StringTrim~44", 
      "line": 44, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "usedBy": [
    "core.Main"
  ], 
  "main": {
    "name": "String", 
    "extension": true, 
    "tags": [], 
    "doc": "<p>Adds ES5 String methods if these are not implemented by the engine.</p>\n\n<ul>\n<li><code>trim()</code> (ES5)</li>\n<li><code>trimLeft()</code> (JavaScript 1.8.1)</li>\n<li><code>trimRight()</code> (JavaScript 1.8.1)</li>\n</ul>\n", 
    "line": 25, 
    "type": "core.Main"
  }, 
  "id": "ext.StringTrim", 
  "size": {
    "zipped": 223, 
    "optimized": 408, 
    "compressed": 499
  }
},'ext.StringTrim');