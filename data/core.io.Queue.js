apibrowser.callback({
  "statics": [
    {
      "name": "isLoaded", 
      "doc": "<p>Returns whether the given <code class=\"param\">uris</code> were loaded before.</p>\n", 
      "visibility": "public", 
      "summary": "Returns whether the given uris were loaded before.", 
      "returns": [
        {
          "builtin": true, 
          "name": "Boolean"
        }
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "String"
            }, 
            {
              "linkable": true, 
              "array": true, 
              "name": "String", 
              "builtin": true
            }
          ], 
          "name": "uris"
        }
      ], 
      "sourceLink": "source:core.io.Queue~70", 
      "line": 70, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "load", 
      "doc": "<p>Loads the given <code class=\"param\">uris</code> and optionally executes the given <code class=\"param\">callback</code> with the <code class=\"param\">context</code> after all are completed.\nOne can optionally disable the browser caching using enforced get parameters via the <code class=\"param\">nocache</code> flag. Typically\nthe matching loader is figured out automatically based on the file extension but can be controlled using the <code class=\"param\">type</code> parameter.</p>\n", 
      "visibility": "public", 
      "summary": "Loads the given uris and optionally executes the given callback with the context after all are completed.", 
      "params": [
        {
          "position": 0, 
          "type": [
            {
              "linkable": true, 
              "array": true, 
              "name": "String", 
              "builtin": true
            }
          ], 
          "name": "uris"
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
          "default": "null", 
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
          "position": 4, 
          "optional": true, 
          "name": "type", 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "String"
            }
          ]
        }
      ], 
      "sourceLink": "source:core.io.Queue~96", 
      "line": 96, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "core.io", 
  "basename": "Queue", 
  "permutations": [
    "debug"
  ], 
  "uses": [
    "core.Assert", 
    "core.Env", 
    "core.Module", 
    "core.io.Image", 
    "core.io.Jsonp", 
    "core.io.Script", 
    "core.io.StyleSheet", 
    "core.io.Text"
  ], 
  "usedBy": [
    "api.Browser", 
    "core.io.Asset"
  ], 
  "main": {
    "name": "core.io.Queue", 
    "tags": [], 
    "doc": "<p>Generic URLs loader queue with support for different type &ldquo;backend&rdquo; modules.</p>\n\n<p>Uses parallel loading where available and load all other resources\nsequentially. Sequential loading is done by type so that multiple\ndifferent types are loaded in parallel.</p>\n\n<p>Loader module need to implement the following interface:</p>\n\n<ul>\n<li>method load(uri, callback, context, nocache) which calls the callback like callback.call(context, uri, errornous, data)</li>\n<li>constant <code>SUPPORTS_PARALLEL</code> with a boolean value whether the loader supports parallel loading</li>\n</ul>\n", 
    "summary": "Generic URLs loader queue with support for different type &ldquo;backend&rdquo; modules.", 
    "line": 65, 
    "type": "core.Module"
  }, 
  "id": "core.io.Queue", 
  "size": {
    "zipped": 544, 
    "optimized": 980, 
    "compressed": 2464
  }
},'core.io.Queue');