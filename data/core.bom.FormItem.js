apibrowser.callback({
  "statics": [
    {
      "name": "isSuccessful", 
      "doc": "<p>Returns whether the form <code class=\"param\">item</code> is successful (should be submitted to the server)</p>\n", 
      "visibility": "public", 
      "summary": "Returns whether the form item is successful (should be submitted to the server).", 
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
              "name": "Element"
            }
          ], 
          "name": "item"
        }
      ], 
      "sourceLink": "source:core.bom.FormItem~16", 
      "line": 16, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "serialize", 
      "doc": "<p>Returns the serialized representation of the given form <code class=\"param\">item</code>.</p>\n", 
      "visibility": "public", 
      "summary": "Returns the serialized representation of the given form item.", 
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
              "name": "Element"
            }
          ], 
          "name": "item"
        }
      ], 
      "sourceLink": "source:core.bom.FormItem~50", 
      "line": 50, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "core.bom", 
  "basename": "FormItem", 
  "permutations": [
    "debug"
  ], 
  "uses": [
    "core.Assert", 
    "core.Env", 
    "core.Module", 
    "core.dom.Node"
  ], 
  "usedBy": [
    "core.bom.Form"
  ], 
  "main": {
    "name": "core.bom.FormItem", 
    "tags": [], 
    "doc": "<p>Collection of serialization methods for form items</p>\n", 
    "summary": "Collection of serialization methods for form items.", 
    "line": 11, 
    "type": "core.Module"
  }, 
  "id": "core.bom.FormItem", 
  "size": {
    "zipped": 231, 
    "optimized": 354, 
    "compressed": 615
  }
},'core.bom.FormItem');