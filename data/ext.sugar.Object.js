apibrowser.callback({
  "statics": [
    {
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
      "line": 17, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "isEmpty", 
      "doc": "<p>Tests whether the given <code class=\"param\">object</code> is empty</p>\n", 
      "visibility": "public", 
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
      "sourceLink": "source:ext.sugar.Object~35", 
      "line": 35, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
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
      "line": 61, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
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
      "line": 49, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "ext.sugar", 
  "basename": "Object", 
  "permutations": [], 
  "uses": [
    "core.Main"
  ], 
  "usedBy": [
    "core.Class", 
    "core.property.Simple"
  ], 
  "main": {
    "name": "Object", 
    "extension": true, 
    "tags": [], 
    "doc": "<p>Adds useful non-standard extensions to the Object class like <a href=\"#~fromArray\"><code>fromArray</code></a> and <a href=\"#~values\"><code>values</code></a>.</p>\n", 
    "line": 11, 
    "type": "core.Main"
  }, 
  "id": "ext.sugar.Object", 
  "size": {
    "zipped": 265, 
    "optimized": 463, 
    "compressed": 630
  }
},'ext.sugar.Object');