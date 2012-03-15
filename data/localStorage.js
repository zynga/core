apibrowser.callback({
  "statics": [
    {
      "from": "ext.LocalStorage", 
      "name": "clear", 
      "sourceLink": "source:ext.LocalStorage~44", 
      "fromLink": "static:ext.LocalStorage~clear", 
      "doc": "<p>Clears all data from local storage.</p>\n", 
      "line": 44, 
      "type": "Function", 
      "isFunction": true, 
      "visibility": "public", 
      "summary": "Clears all data from local storage."
    }, 
    {
      "from": "ext.LocalStorage", 
      "name": "getItem", 
      "doc": "<p>Returns the value stored under the given <code class=\"param\">key</code>.</p>\n", 
      "visibility": "public", 
      "summary": "Returns the value stored under the given key.", 
      "returns": [
        "String"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "String"
          ], 
          "name": "key"
        }
      ], 
      "sourceLink": "source:ext.LocalStorage~34", 
      "fromLink": "static:ext.LocalStorage~getItem", 
      "line": 34, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "from": "ext.LocalStorage", 
      "value": "0", 
      "name": "length", 
      "sourceLink": "source:ext.LocalStorage~26", 
      "fromLink": "static:ext.LocalStorage~length", 
      "doc": "<p>Number of items in local storage.</p>\n", 
      "line": 26, 
      "type": "Integer", 
      "visibility": "public", 
      "summary": "Number of items in local storage."
    }, 
    {
      "visibility": "public", 
      "fromLink": "static:ext.LocalStorage~removeItem", 
      "line": 39, 
      "isFunction": true, 
      "from": "ext.LocalStorage", 
      "name": "removeItem", 
      "doc": "<p>Removes the given <code class=\"param\">key</code> from local storage.</p>\n", 
      "summary": "Removes the given key from local storage.", 
      "params": [
        {
          "position": 0, 
          "type": [
            "String"
          ], 
          "name": "key"
        }
      ], 
      "sourceLink": "source:ext.LocalStorage~39", 
      "type": "Function"
    }, 
    {
      "visibility": "public", 
      "fromLink": "static:ext.LocalStorage~setItem", 
      "line": 29, 
      "isFunction": true, 
      "from": "ext.LocalStorage", 
      "name": "setItem", 
      "doc": "<p>Stores <code class=\"param\">value</code> under the given <code class=\"param\">key</code>.</p>\n", 
      "summary": "Stores value under the given key.", 
      "params": [
        {
          "position": 0, 
          "type": [
            "String"
          ], 
          "name": "key"
        }, 
        {
          "position": 1, 
          "type": [
            "String"
          ], 
          "name": "value"
        }
      ], 
      "sourceLink": "source:ext.LocalStorage~29", 
      "type": "Function"
    }
  ], 
  "package": "", 
  "basename": "localStorage", 
  "uses": [], 
  "main": {
    "from": [
      "ext.LocalStorage"
    ], 
    "type": "Extend", 
    "name": "localStorage", 
    "doc": "Extensions for localStorage"
  }, 
  "id": "localStorage"
},'localStorage');