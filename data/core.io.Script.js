apibrowser.callback({
  "statics": [
    {
      "constant": true, 
      "name": "SUPPORTS_PARALLEL", 
      "doc": "<p>Whether the loader supports parallel requests</p>\n", 
      "visibility": "public", 
      "summary": "Whether the loader supports parallel requests.", 
      "sourceLink": "source:core.io.Script~33", 
      "line": 33, 
      "type": "Boolean"
    }, 
    {
      "name": "load", 
      "doc": "<p>Loads a JavaScript file from the given <code class=\"param\">uri</code> and fires a <code class=\"param\">callback</code> (in <code class=\"param\">context</code>) when the script was loaded.\nOptionally appends an random <code>GET</code> parameter to omit caching when <code class=\"param\">nocache</code> is enabled..</p>\n", 
      "visibility": "public", 
      "summary": "Loads a JavaScript file from the given uri and fires a callback (in context) when the script was loaded.", 
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
      "sourceLink": "source:core.io.Script~40", 
      "line": 40, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "core.io", 
  "basename": "Script", 
  "permutations": [
    "debug", 
    "engine"
  ], 
  "uses": [
    "core.Assert", 
    "core.Env", 
    "core.Module"
  ], 
  "usedBy": [
    "api.Browser", 
    "core.io.Queue"
  ], 
  "main": {
    "name": "core.io.Script", 
    "tags": [], 
    "doc": "<p>Generic script loader for features. Could be used for loading feature/class packages after initial load.</p>\n\n<p>(though limited feature set and file registration not useful for data transaction)</p>\n", 
    "summary": "Generic script loader for features.", 
    "line": 30, 
    "type": "core.Module"
  }, 
  "id": "core.io.Script", 
  "size": {
    "zipped": 382, 
    "optimized": 599, 
    "compressed": 1284
  }
},'core.io.Script');