apibrowser.callback({
  "statics": [
    {
      "name": "assertIsNode", 
      "sourceLink": "source:core.dom.Node~17", 
      "visibility": "public", 
      "summary": "Throws an exception when node is not a valid DOM node.", 
      "params": [
        {
          "position": 0, 
          "type": [
            "var"
          ], 
          "name": "node"
        }, 
        {
          "position": 1, 
          "type": [
            "String"
          ], 
          "name": "message"
        }
      ], 
      "doc": "<p>Throws an exception when <code class=\"param\">node</code> is not a valid DOM node.\nThe exception <code class=\"param\">message</code> can be customized via the parameter.</p>\n", 
      "line": 17, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "closest", 
      "doc": "<p>Finds the closest parent of <code class=\"param\">start</code> which is\nsuccessfully tested against the given <code class=\"param\">test</code>.</p>\n", 
      "visibility": "public", 
      "summary": "Finds the closest parent of start which is successfully tested against the given test.", 
      "returns": [
        "Element"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "Element"
          ], 
          "name": "start"
        }, 
        {
          "position": 1, 
          "type": [
            "Function"
          ], 
          "name": "test"
        }
      ], 
      "sourceLink": "source:core.dom.Node~29", 
      "line": 29, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "contains", 
      "doc": "<p>Returns whether the given <code class=\"param\">parent</code> contains the\ngiven <code class=\"param\">child</code>.</p>\n", 
      "visibility": "public", 
      "summary": "Returns whether the given parent contains the given child.", 
      "returns": [
        "Boolean"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "Element"
          ], 
          "name": "parent"
        }, 
        {
          "position": 1, 
          "type": [
            "Element"
          ], 
          "name": "child"
        }
      ], 
      "sourceLink": "source:core.dom.Node~46", 
      "line": 46, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "core.dom", 
  "basename": "Node", 
  "permutations": [], 
  "uses": [
    "core.Module"
  ], 
  "usedBy": [
    "api.Browser", 
    "core.bom.ClassName", 
    "core.bom.Form", 
    "core.bom.FormItem", 
    "core.bom.Position"
  ], 
  "main": {
    "doc": "<p>DOM utility methods</p>\n", 
    "line": 11, 
    "type": "core.Module", 
    "name": "core.dom.Node", 
    "tags": []
  }, 
  "id": "core.dom.Node", 
  "size": {
    "zipped": 271, 
    "optimized": 479, 
    "compressed": 605
  }
},'core.dom.Node');