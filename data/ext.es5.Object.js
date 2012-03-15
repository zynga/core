apibrowser.callback({
  "statics": [
    {
      "name": "keys", 
      "doc": "<p>Returns an array of all own enumerable properties found upon a given <code class=\"param\">object</code>,\nin the same order as that provided by a for-in loop</p>\n\n<p>See also:</p>\n\n<ul>\n<li>ES5 15.2.3.14</li>\n<li><a href=\"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/keys\">https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/keys</a></li>\n</ul>\n", 
      "visibility": "public", 
      "summary": "Returns an array of all own enumerable properties found upon a given object, in the same order as that provided by a for-in loop  See also:   ES5 15.2.3.14 https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/keys.", 
      "returns": [
        {
          "linkable": true, 
          "builtin": true, 
          "name": "Array"
        }
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "Object"
            }
          ], 
          "name": "object"
        }
      ], 
      "sourceLink": "source:ext.es5.Object~41", 
      "line": 41, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "ext.es5", 
  "basename": "Object", 
  "permutations": [], 
  "uses": [
    "core.Main"
  ], 
  "usedBy": [
    "core.Class"
  ], 
  "main": {
    "name": "Object", 
    "extension": true, 
    "tags": [], 
    "doc": "<p>Adds missing ES5 <code>Object.keys</code> to the Object constructor when not implemented natively by the browser engine.\nAlso adds a custom extension <code>Object.empty</code> to quickly check whether an object is empty (no keys).</p>\n", 
    "summary": "Adds missing ES5 Object.keys to the Object constructor when not implemented natively by the browser engine.", 
    "line": 30, 
    "type": "core.Main"
  }, 
  "id": "ext.es5.Object", 
  "size": {
    "zipped": 260, 
    "optimized": 386, 
    "compressed": 580
  }
},'ext.es5.Object');