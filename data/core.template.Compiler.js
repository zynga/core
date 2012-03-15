apibrowser.callback({
  "statics": [
    {
      "name": "compile", 
      "doc": "<p>Translates the <code class=\"param\">code</code> tree from <a href=\"#core.template.Parser~parse\"><code>core.template.Parser#parse</code></a> into actual JavaScript\ncode (in form of a <a href=\"#core.template.Template\"><code>core.template.Template</code></a> instance) to insert dynamic data fields. It uses\nthe original <code class=\"param\">text</code> for template construction. Optionally you can remove white spaces (line breaks,\nleading, trailing, etc.) by enabling <code class=\"param\">strip</code>.</p>\n", 
      "visibility": "public", 
      "summary": "Translates the code tree from core.template.Parser#parse into actual JavaScript code (in form of a core.template.Template instance) to insert dynamic data fields.", 
      "returns": [
        "core.template.Template"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "String"
          ], 
          "name": "text"
        }, 
        {
          "default": "false", 
          "position": 1, 
          "optional": true, 
          "name": "strip", 
          "type": [
            "Boolean"
          ]
        }
      ], 
      "sourceLink": "source:core.template.Compiler~106", 
      "line": 106, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "core.template", 
  "basename": "Compiler", 
  "permutations": [], 
  "uses": [
    "core.Module", 
    "core.template.Parser", 
    "core.template.Template"
  ], 
  "usedBy": [
    "api.Browser"
  ], 
  "main": {
    "doc": "<p>This is the Compiler of the template engine and transforms the token tree into a compiled template instance.</p>\n", 
    "line": 98, 
    "type": "core.Module", 
    "name": "core.template.Compiler", 
    "tags": []
  }, 
  "id": "core.template.Compiler", 
  "size": {
    "zipped": 492, 
    "optimized": 957, 
    "compressed": 1455
  }
},'core.template.Compiler');