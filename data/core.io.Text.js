apibrowser.callback({
  "statics": [
    {
      "constant": true, 
      "name": "SUPPORTS_PARALLEL", 
      "doc": "<p>Whether the loader supports parallel requests</p>\n", 
      "value": "true", 
      "summary": "Whether the loader supports parallel requests.", 
      "visibility": "public", 
      "sourceLink": "source:core.io.Text~28", 
      "line": 28, 
      "type": "Boolean"
    }, 
    {
      "name": "load", 
      "doc": "<p>Loads a text file from the given <code class=\"param\">uri</code> and fires a <code class=\"param\">callback</code> (in <code class=\"param\">context</code>) when it was loaded.\nOptionally appends an random <code>GET</code> parameter to omit caching when <code class=\"param\">nocache</code> is enabled. The optional\n<code class=\"param\">timeout</code> is configured to 10 seconds by default.</p>\n", 
      "visibility": "public", 
      "summary": "Loads a text file from the given uri and fires a callback (in context) when it was loaded.", 
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
        }, 
        {
          "default": "10000", 
          "position": 4, 
          "optional": true, 
          "name": "timeout", 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "Number"
            }
          ]
        }
      ], 
      "sourceLink": "source:core.io.Text~35", 
      "line": 35, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "core.io", 
  "basename": "Text", 
  "permutations": [
    "engine"
  ], 
  "uses": [
    "core.Env", 
    "core.Module"
  ], 
  "usedBy": [
    "core.io.Queue"
  ], 
  "main": {
    "name": "core.io.Text", 
    "tags": [], 
    "doc": "<p>Generic loader for any text content using XMLHTTPRequests.</p>\n", 
    "summary": "Generic loader for any text content using XMLHTTPRequests.", 
    "line": 25, 
    "type": "core.Module"
  }, 
  "id": "core.io.Text", 
  "size": {
    "zipped": 432, 
    "optimized": 751, 
    "compressed": 1139
  }
},'core.io.Text');