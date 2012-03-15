apibrowser.callback({
  "statics": [
    {
      "name": "clear", 
      "doc": "<p>Clears all data from local storage.</p>\n", 
      "visibility": "public", 
      "summary": "Clears all data from local storage.", 
      "sourceLink": "source:ext.LocalStorage~44", 
      "line": 44, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
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
      "line": 34, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "length", 
      "doc": "<p>Number of items in local storage.</p>\n", 
      "visibility": "public", 
      "summary": "Number of items in local storage.", 
      "value": "0", 
      "sourceLink": "source:ext.LocalStorage~26", 
      "line": 26, 
      "type": "Integer"
    }, 
    {
      "name": "removeItem", 
      "sourceLink": "source:ext.LocalStorage~39", 
      "visibility": "public", 
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
      "doc": "<p>Removes the given <code class=\"param\">key</code> from local storage.</p>\n", 
      "line": 39, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "setItem", 
      "sourceLink": "source:ext.LocalStorage~29", 
      "visibility": "public", 
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
      "doc": "<p>Stores <code class=\"param\">value</code> under the given <code class=\"param\">key</code>.</p>\n", 
      "line": 29, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "ext", 
  "basename": "LocalStorage", 
  "permutations": [], 
  "uses": [
    "core.Main"
  ], 
  "main": {
    "name": "localStorage", 
    "extension": true, 
    "tags": [], 
    "doc": "<p>Emulation for <code>localStorage</code> object to store text data on the browser.</p>\n", 
    "line": 23, 
    "type": "core.Main"
  }, 
  "id": "ext.LocalStorage", 
  "size": {
    "zipped": 122, 
    "optimized": 185, 
    "compressed": 196
  }
},'ext.LocalStorage');