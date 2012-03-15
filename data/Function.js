apibrowser.callback({
  "package": "", 
  "basename": "Function", 
  "uses": [], 
  "members": [
    {
      "from": "ext.FunctionBind", 
      "name": "bind", 
      "doc": "<p>Binds the function to the specific <code class=\"param\">context</code> with optionally bound arbitrary number of <code class=\"param\">varargs</code>.</p>\n\n<p>See also: <a href=\"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/bind\">https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/bind</a></p>\n", 
      "visibility": "public", 
      "summary": "Binds the function to the specific context with optionally bound arbitrary number of varargs.", 
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
              "builtin": true, 
              "name": "Object"
            }
          ], 
          "name": "context"
        }, 
        {
          "position": 1, 
          "dynamic": true, 
          "name": "varargs", 
          "optional": true, 
          "type": [
            {
              "pseudo": true, 
              "name": "var"
            }
          ]
        }
      ], 
      "sourceLink": "source:ext.FunctionBind~23", 
      "fromLink": "member:ext.FunctionBind~bind", 
      "line": 23, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "from": "ext.sugar.Function", 
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
      "fromLink": "member:ext.sugar.Function~debounce", 
      "line": 26, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "main": {
    "from": [
      "ext.FunctionBind", 
      "ext.sugar.Function"
    ], 
    "type": "Extend", 
    "name": "Function", 
    "doc": "Extensions for Function"
  }, 
  "id": "Function"
},'Function');