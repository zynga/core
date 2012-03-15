apibrowser.callback({
  "statics": [
    {
      "name": "get", 
      "doc": "<p>Returns a unique ID of the given <code class=\"param\">object</code>.</p>\n\n<p>To improve performance one could also use:\n<code>var uniqueId = obj.$$id || core.util.Id.get(obj);</code></p>\n", 
      "visibility": "public", 
      "summary": "Returns a unique ID of the given object.", 
      "returns": [
        {
          "linkable": true, 
          "name": "Integer"
        }
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "Function"
            }, 
            {
              "linkable": true, 
              "builtin": true, 
              "name": "Object"
            }, 
            {
              "linkable": true, 
              "name": "Element"
            }
          ], 
          "name": "object"
        }
      ], 
      "sourceLink": "source:core.util.Id~31", 
      "line": 31, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "core.util", 
  "basename": "Id", 
  "permutations": [
    "debug"
  ], 
  "uses": [
    "core.Env", 
    "core.Module"
  ], 
  "main": {
    "name": "core.util.Id", 
    "tags": [], 
    "doc": "<p>Manages global unique IDs of objects. Works fine with the following types:</p>\n\n<ul>\n<li>Functions</li>\n<li>Class Instances</li>\n<li>DOM Elements (<code>body</code>, <code>input</code>, etc.)</li>\n<li>Native Objects (<code>document</code>, <code>XHR</code>, etc.)</li>\n</ul>\n\n<p>Does not work on primitive data objects aka maps/dict and primitive values aka <code>string</code>, <code>number</code>, &hellip;</p>\n", 
    "summary": "Manages global unique IDs of objects.", 
    "line": 22, 
    "type": "core.Module"
  }, 
  "id": "core.util.Id", 
  "size": {
    "zipped": 104, 
    "optimized": 117, 
    "compressed": 328
  }
},'core.util.Id');