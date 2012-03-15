apibrowser.callback({
  "statics": [
    {
      "constant": true, 
      "name": "SUPPORTS_PARALLEL", 
      "doc": "<p>Whether the loader supports parallel requests. Always true for images.</p>\n", 
      "value": "true", 
      "summary": "Whether the loader supports parallel requests.", 
      "visibility": "public", 
      "sourceLink": "source:core.io.Jsonp~27", 
      "line": 27, 
      "type": "Boolean"
    }, 
    {
      "name": "load", 
      "doc": "<p>Loads an JSONP via the given <code class=\"param\">uri</code> and fires a <code class=\"param\">callback</code> (in the given <code class=\"param\">context</code>) when the data was loaded.\nOptionally appends an random <code>GET</code> parameter to omit caching when <code class=\"param\">nocache</code> is enabled.</p>\n", 
      "visibility": "public", 
      "summary": "Loads an JSONP via the given uri and fires a callback (in the given context) when the data was loaded.", 
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
          "name": "uri"
        }, 
        {
          "position": 1, 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "Function"
            }
          ], 
          "name": "callback"
        }, 
        {
          "position": 2, 
          "optional": true, 
          "name": "context", 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "Object"
            }
          ]
        }, 
        {
          "default": "false", 
          "position": 3, 
          "optional": true, 
          "name": "nocache", 
          "type": [
            {
              "builtin": true, 
              "name": "Boolean"
            }
          ]
        }
      ], 
      "sourceLink": "source:core.io.Jsonp~33", 
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
    "name": "core.io.Jsonp", 
    "tags": [], 
    "doc": "<p>Async JSON-P loader</p>\n", 
    "summary": "Async JSON-P loader.", 
    "line": 24, 
    "type": "core.Module"
  }, 
  "id": "core.io.Jsonp", 
  "size": {
    "zipped": 276, 
    "optimized": 349, 
    "compressed": 546
  }
},'core.io.Jsonp');