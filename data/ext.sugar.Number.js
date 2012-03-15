apibrowser.callback({
  "assets": [], 
  "package": "ext.sugar", 
  "basename": "Number", 
  "permutations": [], 
  "uses": [
    "core.Main"
  ], 
  "members": [
    {
      "name": "hex", 
      "doc": "<p>Converts the number to a hex string.</p>\n", 
      "visibility": "public", 
      "summary": "Converts the number to a hex string.", 
      "returns": [
        {
          "linkable": true, 
          "builtin": true, 
          "name": "String"
        }
      ], 
      "sourceLink": "source:ext.sugar.Number~35", 
      "line": 35, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "pad", 
      "doc": "<p>Pads the number to reach the given <code class=\"param\">length</code>.</p>\n", 
      "visibility": "public", 
      "summary": "Pads the number to reach the given length.", 
      "returns": [
        {
          "linkable": true, 
          "builtin": true, 
          "name": "String"
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
          "name": "length"
        }
      ], 
      "sourceLink": "source:ext.sugar.Number~16", 
      "line": 16, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "times", 
      "doc": "<p>Executes the given <code class=\"param\">func</code> x-times.\nSupport an optional <code class=\"param\">context</code> for execution.</p>\n", 
      "visibility": "public", 
      "summary": "Executes the given func x-times.", 
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
          "name": "func"
        }, 
        {
          "position": 1, 
          "optional": true, 
          "name": "context", 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "Object"
            }
          ]
        }
      ], 
      "sourceLink": "source:ext.sugar.Number~25", 
      "line": 25, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "main": {
    "name": "Number", 
    "extension": true, 
    "tags": [], 
    "doc": "<p>Adds useful non-standard extensions to the <code>Number.prototype</code> like <a href=\"#~pad\"><code>pad</code></a>, <a href=\"#~times\"><code>times</code></a> and <a href=\"#~hex\"><code>hex</code></a>.</p>\n", 
    "summary": "Adds useful non-standard extensions to the Number.prototype like pad, times and hex.", 
    "line": 11, 
    "type": "core.Main"
  }, 
  "id": "ext.sugar.Number", 
  "size": {
    "zipped": 152, 
    "optimized": 188, 
    "compressed": 232
  }
},'ext.sugar.Number');