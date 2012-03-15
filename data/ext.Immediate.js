apibrowser.callback({
  "statics": [
    {
      "name": "clearImmediate", 
      "sourceLink": "source:ext.Immediate~64", 
      "visibility": "public", 
      "summary": "This method clears the action specified by setImmediate via the given handle.", 
      "params": [
        {
          "position": 0, 
          "type": [
            "var"
          ], 
          "name": "handle"
        }
      ], 
      "doc": "<p>This method clears the action specified by <a href=\"#~setImmediate\"><code>setImmediate</code></a> via the given <code class=\"param\">handle</code>.</p>\n\n<p>See also: <a href=\"https://developer.mozilla.org/en/Document_Object_Model_(DOM)/window.clearImmediate\">https://developer.mozilla.org/en/Document_Object_Model_(DOM)/window.clearImmediate</a></p>\n", 
      "line": 64, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "setImmediate", 
      "doc": "<p>This method is used to break-up long running operations and run a callback <code class=\"param\">func</code> immediately after the browser\nhas completed other operations such as events and display updates.</p>\n\n<p>See also: <a href=\"https://developer.mozilla.org/en/Document_Object_Model_(DOM)/window.setImmediate\">https://developer.mozilla.org/en/Document_Object_Model_(DOM)/window.setImmediate</a></p>\n", 
      "visibility": "public", 
      "summary": "This method is used to break-up long running operations and run a callback func immediately after the browser has completed other operations such as events and display updates.", 
      "returns": [
        "Identifier"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "Function"
          ], 
          "name": "func"
        }
      ], 
      "sourceLink": "source:ext.Immediate~52", 
      "line": 52, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "ext", 
  "basename": "Immediate", 
  "permutations": [], 
  "uses": [
    "core.Main"
  ], 
  "main": {
    "name": "global", 
    "extension": true, 
    "tags": [], 
    "doc": "<p>Adds non-standard methods <code>setImmediate</code> and <code>clearImmediate</code> which were introduced by Firefox to the global object.</p>\n", 
    "line": 44, 
    "type": "core.Main"
  }, 
  "id": "ext.Immediate", 
  "size": {
    "zipped": 288, 
    "optimized": 536, 
    "compressed": 699
  }
},'ext.Immediate');