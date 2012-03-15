apibrowser.callback({
  "assets": [
    "api/*"
  ], 
  "package": "api", 
  "basename": "Browser", 
  "permutations": [], 
  "construct": {
    "sourceLink": "source:api.Browser~8", 
    "line": 8, 
    "init": "api.Browser", 
    "isFunction": true
  }, 
  "uses": [
    "core.Class", 
    "core.bom.ClassName", 
    "core.bom.ScrollInto", 
    "core.dom.Node", 
    "core.io.Asset", 
    "core.io.Queue", 
    "core.io.Script", 
    "core.template.Compiler"
  ], 
  "members": [
    {
      "name": "buildHash", 
      "doc": "<p>Returns a hash string from the given input parameters:</p>\n\n<ul>\n<li><code class=\"param\">type</code> Type of item to link to</li>\n<li><code class=\"param\">file</code> File to open (which contains the item)</li>\n<li><code class=\"param\">item</code> Item to open</li>\n</ul>\n", 
      "visibility": "public", 
      "returns": [
        "String"
      ], 
      "params": [
        {
          "default": "null", 
          "position": 0, 
          "optional": true, 
          "name": "type", 
          "type": [
            "String"
          ]
        }, 
        {
          "default": "current", 
          "position": 1, 
          "optional": true, 
          "name": "file", 
          "type": [
            "String"
          ]
        }, 
        {
          "position": 2, 
          "optional": true, 
          "name": "item", 
          "type": [
            "String"
          ]
        }
      ], 
      "sourceLink": "source:api.Browser~221", 
      "line": 221, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "callback", 
      "sourceLink": "source:api.Browser~135", 
      "visibility": "public", 
      "summary": "Callback method which should be used for loading JSONP-like data.", 
      "params": [
        {
          "position": 0, 
          "type": [
            "Map"
          ], 
          "name": "data"
        }, 
        {
          "position": 1, 
          "type": [
            "String"
          ], 
          "name": "id"
        }
      ], 
      "doc": "<p>Callback method which should be used for loading JSONP-like <code class=\"param\">data</code>. The\ndata is identified and processed via the <code class=\"param\">id</code> given.</p>\n", 
      "line": 135, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "open", 
      "doc": "<p>Opens the given <code class=\"param\">hash</code> with an optional hint <code class=\"param\">doToggle</code> whether the\naction should lead to a toggling.</p>\n", 
      "visibility": "public", 
      "summary": "Opens the given hash with an optional hint doToggle whether the action should lead to a toggling.", 
      "returns": [
        "Call"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "String"
          ], 
          "name": "hash"
        }, 
        {
          "default": "false", 
          "position": 1, 
          "optional": true, 
          "name": "doToggle", 
          "type": [
            "Boolean"
          ]
        }
      ], 
      "sourceLink": "source:api.Browser~303", 
      "line": 303, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "parseHash", 
      "doc": "<p>Parses the given <code class=\"param\">hash</code> and returns a map with the keys <code>type</code>, <code>file</code> and <code>item</code>.</p>\n", 
      "visibility": "public", 
      "summary": "Parses the given hash and returns a map with the keys type, file and item.", 
      "returns": [
        "Map"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "String"
          ], 
          "name": "hash"
        }
      ], 
      "sourceLink": "source:api.Browser~257", 
      "line": 257, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "main": {
    "doc": "<p>The main class of the API Browser.</p>\n", 
    "line": 6, 
    "type": "core.Class", 
    "name": "api.Browser", 
    "tags": [
      {
        "name": "asset", 
        "value": "api/*"
      }
    ]
  }, 
  "id": "api.Browser", 
  "size": {
    "zipped": 2043, 
    "optimized": 5196, 
    "compressed": 6468
  }
},'api.Browser');