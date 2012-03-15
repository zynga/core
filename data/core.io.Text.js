apibrowser.callback({
  "statics": [
    {
      "constant": true, 
      "name": "SUPPORTS_PARALLEL", 
      "doc": "<p>Whether the loader supports parallel requests</p>\n", 
      "visibility": "public", 
      "value": "true", 
      "sourceLink": "source:core.io.Text~28", 
      "line": 28, 
      "type": "Boolean"
    }, 
    {
      "name": "load", 
      "sourceLink": "source:core.io.Text~35", 
      "visibility": "public", 
      "summary": "Loads a text file from the given uri and fires a callback (in context) when it was loaded.", 
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
        }, 
        {
          "default": "10000", 
          "position": 4, 
          "optional": true, 
          "name": "timeout", 
          "type": [
            "Number"
          ]
        }
      ], 
      "doc": "<p>Loads a text file from the given <code class=\"param\">uri</code> and fires a <code class=\"param\">callback</code> (in <code class=\"param\">context</code>) when it was loaded.\nOptionally appends an random <code>GET</code> parameter to omit caching when <code class=\"param\">nocache</code> is enabled. The optional\n<code class=\"param\">timeout</code> is configured to 10 seconds by default.</p>\n", 
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
    "doc": "<p>Generic loader for any text content using XMLHTTPRequests.</p>\n", 
    "line": 25, 
    "type": "core.Module", 
    "name": "core.io.Text", 
    "tags": []
  }, 
  "id": "core.io.Text", 
  "size": {
    "zipped": 432, 
    "optimized": 751, 
    "compressed": 1139
  }
},'core.io.Text');