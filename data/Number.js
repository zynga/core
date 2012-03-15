apibrowser.callback({
  "package": "", 
  "basename": "Number", 
  "uses": [], 
  "members": [
    {
      "visibility": "public", 
      "fromLink": "member:ext.sugar.Number~hex", 
      "line": 35, 
      "isFunction": true, 
      "from": "ext.sugar.Number", 
      "name": "hex", 
      "sourceLink": "source:ext.sugar.Number~35", 
      "summary": "Converts the number to a hex string.", 
      "returns": [
        "String"
      ], 
      "doc": "<p>Converts the number to a hex string.</p>\n", 
      "type": "Function"
    }, 
    {
      "from": "ext.sugar.Number", 
      "name": "pad", 
      "doc": "<p>Pads the number to reach the given <code class=\"param\">length</code>.</p>\n", 
      "visibility": "public", 
      "summary": "Pads the number to reach the given length.", 
      "returns": [
        "String"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "Integer"
          ], 
          "name": "length"
        }
      ], 
      "sourceLink": "source:ext.sugar.Number~16", 
      "fromLink": "member:ext.sugar.Number~pad", 
      "line": 16, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "visibility": "public", 
      "fromLink": "member:ext.sugar.Number~times", 
      "line": 25, 
      "isFunction": true, 
      "from": "ext.sugar.Number", 
      "name": "times", 
      "doc": "<p>Executes the given <code class=\"param\">func</code> x-times.\nSupport an optional <code class=\"param\">context</code> for execution.</p>\n", 
      "summary": "Executes the given func x-times.", 
      "params": [
        {
          "position": 0, 
          "type": [
            "Function"
          ], 
          "name": "func"
        }, 
        {
          "position": 1, 
          "optional": true, 
          "name": "context", 
          "type": [
            "Object"
          ]
        }
      ], 
      "sourceLink": "source:ext.sugar.Number~25", 
      "type": "Function"
    }
  ], 
  "main": {
    "from": [
      "ext.sugar.Number"
    ], 
    "type": "Extend", 
    "name": "Number", 
    "doc": "Extensions for Number"
  }, 
  "id": "Number"
},'Number');