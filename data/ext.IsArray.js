apibrowser.callback({
  "statics": [
    {
      "name": "isArray", 
      "doc": "<p>Implements ES5 <code>isArray</code> method to verify whether <code class=\"param\">value</code> is an <code>Array</code>.\nSee also: <a href=\"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray\">https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray</a></p>\n", 
      "visibility": "public", 
      "summary": "Implements ES5 isArray method to verify whether value is an Array.", 
      "returns": [
        {
          "auto": true, 
          "builtin": true, 
          "name": "Boolean"
        }
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            {
              "pseudo": true, 
              "name": "var"
            }
          ], 
          "name": "value"
        }
      ], 
      "sourceLink": "source:ext.IsArray~15", 
      "line": 15, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "ext", 
  "basename": "IsArray", 
  "permutations": [], 
  "uses": [
    "core.Main"
  ], 
  "usedBy": [
    "core.Main"
  ], 
  "main": {
    "name": "Array", 
    "extension": true, 
    "tags": [], 
    "doc": "<p>Adds the pretty essential <code>Array.isArray()</code> method from ES5 if it is missing.</p>\n", 
    "summary": "Adds the pretty essential Array.isArray() method from ES5 if it is missing.", 
    "line": 9, 
    "type": "core.Main"
  }, 
  "id": "ext.IsArray", 
  "size": {
    "zipped": 120, 
    "optimized": 126, 
    "compressed": 138
  }
},'ext.IsArray');