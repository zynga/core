apibrowser.callback({
  "statics": [
    {
      "name": "cancel", 
      "doc": "<p>Cancels full screen mode.</p>\n", 
      "visibility": "public", 
      "summary": "Cancels full screen mode.", 
      "sourceLink": "source:core.bom.FullScreen~26", 
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
        "Boolean"
      ], 
      "sourceLink": "source:core.bom.FullScreen~33", 
      "line": 33, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "request", 
      "sourceLink": "source:core.bom.FullScreen~19", 
      "visibility": "public", 
      "summary": "Requests full screen mode for given element.", 
      "params": [
        {
          "default": "document.documentElement", 
          "position": 0, 
          "optional": true, 
          "name": "element", 
          "type": [
            "Element"
          ]
        }
      ], 
      "doc": "<p>Requests full screen mode for given <code class=\"param\">element</code>.</p>\n", 
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
    "doc": "<p>Collection of methods to deal with different full screen APIs in browsers.</p>\n", 
    "line": 79, 
    "type": "core.Module", 
    "name": "core.bom.FullScreen", 
    "tags": []
  }, 
  "id": "core.bom.FullScreen", 
  "size": {
    "zipped": 294, 
    "optimized": 541, 
    "compressed": 846
  }
},'core.bom.FullScreen');