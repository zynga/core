apibrowser.callback({
  "statics": [
    {
      "name": "parse", 
      "doc": "<p>Returns the token tree of the given template <code class=\"param\">text</code>.</p>\n\n<p>A token holds the following information:</p>\n\n<ul>\n<li><code>tag</code>: tag of the token</li>\n<li><code>name</code>: name of the token</li>\n<li><code>nodes</code>: children of the node</li>\n</ul>\n\n<p>Optionally you can remove white spaces (line breaks,\nleading, trailing, etc.) by enabling <code class=\"param\">strip</code>.</p>\n", 
      "visibility": "public", 
      "summary": "Returns the token tree of the given template text.", 
      "returns": [
        "String[]"
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
      "sourceLink": "source:core.template.Parser~126", 
      "line": 126, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "tokenize", 
      "doc": "<p>Tokenizer for template <code class=\"param\">text</code>. Returns an array of tokens\nwhere tags are returned as an object with the keys <code>tag</code> and <code>name</code> while\nnormal strings are kept as strings.</p>\n\n<p>Optionally you can remove white spaces (line breaks,\nleading, trailing, etc.) by enabling <code class=\"param\">strip</code>.</p>\n", 
      "visibility": "public", 
      "summary": "Tokenizer for template text.", 
      "returns": [
        "String[]"
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
      "sourceLink": "source:core.template.Parser~71", 
      "line": 71, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "core.template", 
  "basename": "Parser", 
  "permutations": [
    "debug"
  ], 
  "uses": [
    "core.Env", 
    "core.Module"
  ], 
  "usedBy": [
    "core.template.Compiler"
  ], 
  "main": {
    "doc": "<p>This is the Parser of the template engine and transforms the template text into a tree of tokens.</p>\n", 
    "line": 61, 
    "type": "core.Module", 
    "name": "core.template.Parser", 
    "tags": []
  }, 
  "id": "core.template.Parser", 
  "size": {
    "zipped": 411, 
    "optimized": 670, 
    "compressed": 1414
  }
},'core.template.Parser');