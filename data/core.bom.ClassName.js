apibrowser.callback({
  "statics": [
    {
      "name": "add", 
      "sourceLink": "source:core.bom.ClassName~31", 
      "visibility": "public", 
      "summary": "Adds the className to the given elem.", 
      "params": [
        {
          "position": 0, 
          "type": [
            "Element"
          ], 
          "name": "elem"
        }, 
        {
          "position": 1, 
          "type": [
            "CSSClassName"
          ], 
          "name": "className"
        }
      ], 
      "doc": "<p>Adds the <code class=\"param\">className</code> to the given <code class=\"param\">elem</code>.</p>\n", 
      "line": 31, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "contains", 
      "doc": "<p>Returns whether <code class=\"param\">className</code> is applied to the given <code class=\"param\">elem</code>.</p>\n", 
      "visibility": "public", 
      "summary": "Returns whether className is applied to the given elem.", 
      "returns": [
        "Boolean"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "Element"
          ], 
          "name": "elem"
        }, 
        {
          "position": 1, 
          "type": [
            "CSSClassName"
          ], 
          "name": "className"
        }
      ], 
      "sourceLink": "source:core.bom.ClassName~49", 
      "line": 49, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "isValid", 
      "doc": "<p>Returns whether the given <code class=\"param\">string</code> is a valid <a href=\"#CSSClassName\"><code>CSSClassName</code></a>.</p>\n", 
      "visibility": "public", 
      "summary": "Returns whether the given string is a valid CSSClassName.", 
      "returns": [
        "Boolean"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "String"
          ], 
          "name": "string"
        }
      ], 
      "sourceLink": "source:core.bom.ClassName~13", 
      "line": 13, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "remove", 
      "sourceLink": "source:core.bom.ClassName~40", 
      "visibility": "public", 
      "summary": "Removes the className from the given elem.", 
      "params": [
        {
          "position": 0, 
          "type": [
            "Element"
          ], 
          "name": "elem"
        }, 
        {
          "position": 1, 
          "type": [
            "CSSClassName"
          ], 
          "name": "className"
        }
      ], 
      "doc": "<p>Removes the <code class=\"param\">className</code> from the given <code class=\"param\">elem</code>.</p>\n", 
      "line": 40, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "toggle", 
      "sourceLink": "source:core.bom.ClassName~58", 
      "visibility": "public", 
      "summary": "Toggles the className for the given elem.", 
      "params": [
        {
          "position": 0, 
          "type": [
            "Element"
          ], 
          "name": "elem"
        }, 
        {
          "position": 1, 
          "type": [
            "CSSClassName"
          ], 
          "name": "className"
        }
      ], 
      "doc": "<p>Toggles the <code class=\"param\">className</code> for the given <code class=\"param\">elem</code>.</p>\n", 
      "line": 58, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "core.bom", 
  "basename": "ClassName", 
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
    "api.Browser"
  ], 
  "main": {
    "doc": "<p>Managing class names on DOM nodes the easy way.</p>\n\n<p>Makes use of high-performance <code>classList</code> interface in modern browsers:\n<a href=\"https://developer.mozilla.org/en/DOM/element.classList\">https://developer.mozilla.org/en/DOM/element.classList</a></p>\n", 
    "line": 135, 
    "type": "core.Module", 
    "name": "core.bom.ClassName", 
    "tags": []
  }, 
  "id": "core.bom.ClassName", 
  "size": {
    "zipped": 325, 
    "optimized": 644, 
    "compressed": 1706
  }
},'core.bom.ClassName');