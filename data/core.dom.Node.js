apibrowser.callback({
  "statics": [
    {
      "name": "assertIsNode", 
      "doc": "<p>Throws an exception when <code class=\"param\">node</code> is not a valid DOM node.\nThe exception <code class=\"param\">message</code> can be customized via the parameter.</p>\n", 
      "visibility": "public", 
      "summary": "Throws an exception when node is not a valid DOM node.", 
      "params": [
        {
          "position": 0, 
          "type": [
            {
              "pseudo": true, 
              "name": "var"
            }
          ], 
          "name": "node"
        }, 
        {
          "position": 1, 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "String"
            }
          ], 
          "name": "message"
        }
      ], 
      "sourceLink": "source:core.dom.Node~17", 
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
        {
          "linkable": true, 
          "name": "Element"
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
          "name": "start"
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
          "name": "parent"
        }, 
        {
          "position": 1, 
          "type": [
            {
              "linkable": true, 
              "name": "Element"
            }
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
    "name": "core.dom.Node", 
    "tags": [], 
    "doc": "<p>DOM utility methods</p>\n", 
    "summary": "DOM utility methods.", 
    "line": 11, 
    "type": "core.Module"
  }, 
  "id": "core.dom.Node", 
  "size": {
    "zipped": 271, 
    "optimized": 479, 
    "compressed": 605
  }
},'core.dom.Node');