apibrowser.callback({
  "assets": [], 
  "package": "ext", 
  "basename": "FunctionBind", 
  "permutations": [], 
  "uses": [
    "core.Main"
  ], 
  "members": [
    {
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
      "line": 23, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "usedBy": [
    "core.Main"
  ], 
  "main": {
    "name": "Function", 
    "extension": true, 
    "tags": [], 
    "doc": "<p>Adds missing ES5 <code>Function.prototype.bind</code> when not implemented natively by the browser engine.</p>\n", 
    "summary": "Adds missing ES5 Function.prototype.bind when not implemented natively by the browser engine.", 
    "line": 16, 
    "type": "core.Main"
  }, 
  "id": "ext.FunctionBind", 
  "size": {
    "zipped": 210, 
    "optimized": 343, 
    "compressed": 450
  }
},'ext.FunctionBind');