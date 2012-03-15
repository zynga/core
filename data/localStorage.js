apibrowser.callback({
  "statics": [
    {
      "from": "ext.LocalStorage", 
      "name": "clear", 
      "doc": "<p>Clears all data from local storage.</p>\n", 
      "fromLink": "static:ext.LocalStorage~clear", 
      "sourceLink": "source:ext.LocalStorage~44", 
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
              "builtin": true, 
              "name": "String"
            }
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
      "visibility": "public", 
      "name": "length", 
      "sourceLink": "source:ext.LocalStorage~26", 
      "fromLink": "static:ext.LocalStorage~length", 
      "doc": "<p>Number of items in local storage.</p>\n", 
      "line": 26, 
      "type": "Integer", 
      "value": "0", 
      "summary": "Number of items in local storage."
    }, 
    {
      "visibility": "public", 
      "fromLink": "static:ext.LocalStorage~removeItem", 
      "line": 39, 
      "isFunction": true, 
      "from": "ext.LocalStorage", 
      "name": "removeItem", 
      "sourceLink": "source:ext.LocalStorage~39", 
      "summary": "Removes the given key from local storage.", 
      "params": [
        {
          "position": 0, 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "String"
            }
          ], 
          "name": "key"
        }
      ], 
      "doc": "<p>Removes the given <code class=\"param\">key</code> from local storage.</p>\n", 
      "type": "Function"
    }, 
    {
      "visibility": "public", 
      "fromLink": "static:ext.LocalStorage~setItem", 
      "line": 29, 
      "isFunction": true, 
      "from": "ext.LocalStorage", 
      "name": "setItem", 
      "sourceLink": "source:ext.LocalStorage~29", 
      "summary": "Stores value under the given key.", 
      "params": [
        {
          "position": 0, 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "String"
            }
          ], 
          "name": "key"
        }, 
        {
          "position": 1, 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "String"
            }
          ], 
          "name": "value"
        }
      ], 
      "doc": "<p>Stores <code class=\"param\">value</code> under the given <code class=\"param\">key</code>.</p>\n", 
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