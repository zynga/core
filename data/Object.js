apibrowser.callback({
  "statics": [
    {
      "from": "ext.sugar.Object", 
      "name": "fromArray", 
      "doc": "<p>Creates a new object with prefilled content from the <code class=\"param\">keys</code> list.\nThe <code class=\"param\">value</code> is always the same, defaults to true, but is also configurable.</p>\n", 
      "visibility": "public", 
      "summary": "Creates a new object with prefilled content from the keys list.", 
      "returns": [
        {
          "linkable": true, 
          "name": "Map"
        }
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "Array"
            }
          ], 
          "name": "keys"
        }, 
        {
          "default": "true", 
          "position": 1, 
          "optional": true, 
          "name": "value", 
          "type": [
            {
              "pseudo": true, 
              "name": "var"
            }
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
      "from": "ext.sugar.Object", 
      "name": "isEmpty", 
      "doc": "<p>Tests whether the given <code class=\"param\">object</code> is empty</p>\n", 
      "visibility": "public", 
      "summary": "Tests whether the given object is empty.", 
      "returns": [
        {
          "builtin": true, 
          "name": "Boolean"
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
      "sourceLink": "source:ext.sugar.Object~35", 
      "fromLink": "static:ext.sugar.Object~isEmpty", 
      "line": 35, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "from": "ext.es5.Object", 
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
      "fromLink": "static:ext.es5.Object~keys", 
      "line": 41, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "from": "ext.sugar.Object", 
      "name": "validateKeys", 
      "doc": "<p>Validates the <code class=\"param\">object</code> to don&#39;t hold other keys than the ones defined by <code class=\"param\">allowed</code>.\nReturns first non matching key which was found or <code>undefined</code> if all keys are valid.</p>\n", 
      "visibility": "public", 
      "summary": "Validates the object to don&#39;t hold other keys than the ones defined by allowed.", 
      "returns": [
        {
          "linkable": true, 
          "builtin": true, 
          "name": "String"
        }
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            {
              "linkable": true, 
              "name": "Map"
            }
          ], 
          "name": "object"
        }, 
        {
          "position": 1, 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "Array"
            }
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
              "name": "Map"
            }
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