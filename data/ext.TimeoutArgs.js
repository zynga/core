apibrowser.callback({
  "statics": [
    {
      "name": "setInterval", 
      "doc": "<p>Executes the <code class=\"param\">callback</code> repeatedly, with a fixed time <code class=\"param\">delay</code> between each call to that function.</p>\n\n<p>See also: <a href=\"https://developer.mozilla.org/en/DOM/window.setTimeout\">https://developer.mozilla.org/en/DOM/window.setTimeout</a></p>\n", 
      "visibility": "public", 
      "summary": "Executes the callback repeatedly, with a fixed time delay between each call to that function.", 
      "returns": [
        {
          "auto": true, 
          "pseudo": true, 
          "name": "var"
        }
      ], 
      "params": [
        {
          "position": 0, 
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
          "position": 1, 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "Number"
            }
          ], 
          "name": "delay"
        }
      ], 
      "sourceLink": "source:ext.TimeoutArgs~53", 
      "line": 53, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "setTimeout", 
      "doc": "<p>Executes the <code class=\"param\">callback</code> after specified <code class=\"param\">delay</code>.</p>\n\n<p>See also: <a href=\"https://developer.mozilla.org/en/DOM/window.setTimeout\">https://developer.mozilla.org/en/DOM/window.setTimeout</a></p>\n", 
      "visibility": "public", 
      "summary": "Executes the callback after specified delay.", 
      "returns": [
        {
          "auto": true, 
          "pseudo": true, 
          "name": "var"
        }
      ], 
      "params": [
        {
          "position": 0, 
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
          "position": 1, 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "Number"
            }
          ], 
          "name": "delay"
        }
      ], 
      "sourceLink": "source:ext.TimeoutArgs~44", 
      "line": 44, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "ext", 
  "basename": "TimeoutArgs", 
  "permutations": [
    "engine"
  ], 
  "uses": [
    "core.Env", 
    "core.Main"
  ], 
  "usedBy": [
    "core.Main"
  ], 
  "main": {
    "name": "global", 
    "extension": true, 
    "tags": [], 
    "doc": "<p>Overrides global <code>setTimeout</code> and <code>setInterval</code> with implementations which supports\nextra parameters - a feature already supported by most JavaScript engines.</p>\n", 
    "summary": "Overrides global setTimeout and setInterval with implementations which supports extra parameters - a feature already supported by most JavaScript engines.", 
    "line": 37, 
    "type": "core.Main"
  }, 
  "id": "ext.TimeoutArgs", 
  "size": {
    "zipped": 207, 
    "optimized": 318, 
    "compressed": 477
  }
},'ext.TimeoutArgs');