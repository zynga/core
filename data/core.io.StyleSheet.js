apibrowser.callback({
  "statics": [
    {
      "constant": true, 
      "name": "SUPPORTS_PARALLEL", 
      "doc": "<p>Whether the loader supports parallel requests. Always true for stylesheets (order should, hopefully, not be important).</p>\n", 
      "visibility": "public", 
      "summary": "Whether the loader supports parallel requests.", 
      "value": "true", 
      "sourceLink": "source:core.io.StyleSheet~22", 
      "line": 22, 
      "type": "Boolean"
    }, 
    {
      "name": "load", 
      "sourceLink": "source:core.io.StyleSheet~29", 
      "visibility": "public", 
      "summary": "Loads a StyleSheet file from the given uri and fires a callback (in context) when it was loaded.", 
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
      "doc": "<p>Loads a StyleSheet file from the given <code class=\"param\">uri</code> and fires a <code class=\"param\">callback</code> (in <code class=\"param\">context</code>) when it was loaded.\nOptionally appends an random <code>GET</code> parameter to omit caching when <code class=\"param\">nocache</code> is enabled..</p>\n", 
      "line": 29, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "core.io", 
  "basename": "StyleSheet", 
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
    "core.io.Queue"
  ], 
  "main": {
    "doc": "<p>Stylesheet loader with support for load callback.</p>\n", 
    "line": 19, 
    "type": "core.Module", 
    "name": "core.io.StyleSheet", 
    "tags": []
  }, 
  "id": "core.io.StyleSheet", 
  "size": {
    "zipped": 450, 
    "optimized": 858, 
    "compressed": 1562
  }
},'core.io.StyleSheet');