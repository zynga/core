apibrowser.callback({
  "statics": [
    {
      "from": "ext.sugar.Object", 
      "name": "fromArray", 
      "doc": "<p>Creates a new object with prefilled content from the <code class=\"param\">keys</code> list.\nThe <code class=\"param\">value</code> is always the same, defaults to true, but is also configurable.</p>\n", 
      "visibility": "public", 
      "summary": "Creates a new object with prefilled content from the keys list.", 
      "returns": [
        "Map"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "Array"
          ], 
          "name": "keys"
        }, 
        {
          "default": "true", 
          "position": 1, 
          "optional": true, 
          "name": "value", 
          "type": [
            "var"
          ]
        }
      ], 
      "sourceLink": "source:ext.sugar.Object~17", 
      "fromLink": "static:ext.sugar.Object~fromArray", 
      "line": 17, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "visibility": "public", 
      "fromLink": "static:ext.sugar.Object~isEmpty", 
      "line": 35, 
      "isFunction": true, 
      "from": "ext.sugar.Object", 
      "name": "isEmpty", 
      "sourceLink": "source:ext.sugar.Object~35", 
      "returns": [
        "Boolean"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "Object"
          ], 
          "name": "object"
        }
      ], 
      "doc": "<p>Tests whether the given <code class=\"param\">object</code> is empty</p>\n", 
      "type": "Function"
    }, 
    {
      "visibility": "public", 
      "fromLink": "static:ext.es5.Object~keys", 
      "line": 41, 
      "isFunction": true, 
      "from": "ext.es5.Object", 
      "name": "keys", 
      "sourceLink": "source:ext.es5.Object~41", 
      "returns": [
        "Array"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "Object"
          ], 
          "name": "object"
        }
      ], 
      "doc": "<p>Returns an array of all own enumerable properties found upon a given <code class=\"param\">object</code>,\nin the same order as that provided by a for-in loop</p>\n\n<p>See also:</p>\n\n<ul>\n<li>ES5 15.2.3.14</li>\n<li><a href=\"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/keys\">https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/keys</a></li>\n</ul>\n", 
      "type": "Function"
    }, 
    {
      "from": "ext.sugar.Object", 
      "name": "validateKeys", 
      "doc": "<p>Validates the <code class=\"param\">object</code> to don&#39;t hold other keys than the ones defined by <code class=\"param\">allowed</code>.\nReturns first non matching key which was found or <code>undefined</code> if all keys are valid.</p>\n", 
      "visibility": "public", 
      "summary": "Validates the object to don&#39;t hold other keys than the ones defined by allowed.", 
      "returns": [
        "String"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "Map"
          ], 
          "name": "object"
        }, 
        {
          "position": 1, 
          "type": [
            "Array"
          ], 
          "name": "allowed"
        }
      ], 
      "sourceLink": "source:ext.sugar.Object~61", 
      "fromLink": "static:ext.sugar.Object~validateKeys", 
      "line": 61, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "from": "ext.sugar.Object", 
      "name": "values", 
      "doc": "<p>Returns all the values of the given <code class=\"param\">object</code>.</p>\n", 
      "visibility": "public", 
      "summary": "Returns all the values of the given object.", 
      "returns": [
        "Array"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "Map"
          ], 
          "name": "object"
        }
      ], 
      "sourceLink": "source:ext.sugar.Object~49", 
      "fromLink": "static:ext.sugar.Object~values", 
      "line": 49, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "package": "", 
  "basename": "Object", 
  "uses": [], 
  "main": {
    "from": [
      "ext.sugar.Object", 
      "ext.es5.Object"
    ], 
    "type": "Extend", 
    "name": "Object", 
    "doc": "Extensions for Object"
  }, 
  "id": "Object"
},'Object');