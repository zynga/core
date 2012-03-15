apibrowser.callback({
  "statics": [
    {
      "constant": true, 
      "name": "SUPPORTS_PARALLEL", 
      "doc": "<p>Whether the loader supports parallel requests. Always true for images.</p>\n", 
      "visibility": "public", 
      "summary": "Whether the loader supports parallel requests.", 
      "value": "true", 
      "sourceLink": "source:core.io.Jsonp~27", 
      "line": 27, 
      "type": "Boolean"
    }, 
    {
      "name": "load", 
      "sourceLink": "source:core.io.Jsonp~33", 
      "visibility": "public", 
      "summary": "Loads an JSONP via the given uri and fires a callback (in the given context) when the data was loaded.", 
      "params": [
        {
          "position": 0, 
          "type": [
            "String"
          ], 
          "name": "uri"
        }, 
        {
          "position": 1, 
          "type": [
            "Function"
          ], 
          "name": "callback"
        }, 
        {
          "position": 2, 
          "optional": true, 
          "name": "context", 
          "type": [
            "Object"
          ]
        }, 
        {
          "default": "false", 
          "position": 3, 
          "optional": true, 
          "name": "nocache", 
          "type": [
            "Boolean"
          ]
        }
      ], 
      "doc": "<p>Loads an JSONP via the given <code class=\"param\">uri</code> and fires a <code class=\"param\">callback</code> (in the given <code class=\"param\">context</code>) when the data was loaded.\nOptionally appends an random <code>GET</code> parameter to omit caching when <code class=\"param\">nocache</code> is enabled.</p>\n", 
      "line": 33, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "core.io", 
  "basename": "Jsonp", 
  "permutations": [], 
  "uses": [
    "core.Module"
  ], 
  "usedBy": [
    "core.io.Queue"
  ], 
  "main": {
    "doc": "<p>Async JSON-P loader</p>\n", 
    "line": 24, 
    "type": "core.Module", 
    "name": "core.io.Jsonp", 
    "tags": []
  }, 
  "id": "core.io.Jsonp", 
  "size": {
    "zipped": 276, 
    "optimized": 349, 
    "compressed": 546
  }
},'core.io.Jsonp');