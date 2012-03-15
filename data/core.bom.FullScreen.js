apibrowser.callback({
  "statics": [
    {
      "name": "cancel", 
      "sourceLink": "source:core.bom.FullScreen~26", 
      "visibility": "public", 
      "summary": "Cancels full screen mode.", 
      "doc": "<p>Cancels full screen mode.</p>\n", 
      "line": 26, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "is", 
      "doc": "<p>Returns whether the browser is in full screen mode.</p>\n", 
      "visibility": "public", 
      "summary": "Returns whether the browser is in full screen mode.", 
      "returns": [
        {
          "builtin": true, 
          "name": "Boolean"
        }
      ], 
      "sourceLink": "source:core.bom.FullScreen~33", 
      "line": 33, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "request", 
      "doc": "<p>Requests full screen mode for given <code class=\"param\">element</code>.</p>\n", 
      "visibility": "public", 
      "summary": "Requests full screen mode for given element.", 
      "params": [
        {
          "default": "document.documentElement", 
          "position": 0, 
          "optional": true, 
          "name": "element", 
          "type": [
            {
              "linkable": true, 
              "name": "Element"
            }
          ]
        }
      ], 
      "sourceLink": "source:core.bom.FullScreen~19", 
      "line": 19, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "core.bom", 
  "basename": "FullScreen", 
  "permutations": [
    "engine"
  ], 
  "uses": [
    "core.Env", 
    "core.Module"
  ], 
  "main": {
    "name": "core.bom.FullScreen", 
    "tags": [], 
    "doc": "<p>Collection of methods to deal with different full screen APIs in browsers.</p>\n", 
    "summary": "Collection of methods to deal with different full screen APIs in browsers.", 
    "line": 79, 
    "type": "core.Module"
  }, 
  "id": "core.bom.FullScreen", 
  "size": {
    "zipped": 294, 
    "optimized": 541, 
    "compressed": 846
  }
},'core.bom.FullScreen');