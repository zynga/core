apibrowser.callback({
  "assets": [], 
  "package": "ext.sugar", 
  "basename": "Function", 
  "permutations": [], 
  "uses": [
    "core.Main"
  ], 
  "members": [
    {
      "name": "debounce", 
      "doc": "<p>Debounces the given method.</p>\n\n<p>Debouncing ensures that exactly one signal is sent for an event that may be happening\nseveral times \u2014 or even several hundreds of times over an extended period. As long as\nthe events are occurring fast enough to happen at least once in every detection\nperiod, the signal will not be sent!</p>\n\n<p>Via:</p>\n\n<ul>\n<li><code class=\"param\">threshold</code> Number of milliseconds of distance required before reacting/resetting.</li>\n<li><code class=\"param\">execAsap</code> Whether the execution should happen at begin.</li>\n</ul>\n", 
      "visibility": "public", 
      "summary": "Debounces the given method.", 
      "returns": [
        {
          "linkable": true, 
          "builtin": true, 
          "name": "Function"
        }
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            {
              "linkable": true, 
              "name": "Integer"
            }
          ], 
          "name": "threshold"
        }, 
        {
          "default": "false", 
          "position": 1, 
          "optional": true, 
          "name": "execAsap", 
          "type": [
            {
              "builtin": true, 
              "name": "Boolean"
            }
          ]
        }
      ], 
      "sourceLink": "source:ext.sugar.Function~26", 
      "line": 26, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "main": {
    "name": "Function", 
    "extension": true, 
    "tags": [], 
    "doc": "<p>Adds useful non-standard extensions to the <code>Function.prototype</code> like <a href=\"#~debounce\"><code>debounce</code></a>.</p>\n", 
    "summary": "Adds useful non-standard extensions to the Function.prototype like debounce.", 
    "line": 11, 
    "type": "core.Main"
  }, 
  "id": "ext.sugar.Function", 
  "size": {
    "zipped": 153, 
    "optimized": 207, 
    "compressed": 331
  }
},'ext.sugar.Function');