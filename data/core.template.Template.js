apibrowser.callback({
  "assets": [], 
  "package": "core.template", 
  "basename": "Template", 
  "permutations": [
    "debug"
  ], 
  "construct": {
    "doc": "<p>Creates a template instance with the given <code class=\"param\">render</code> method. Best way to work with\nthe template class is to create one using the <a href=\"#core.template.Compiler~compile\"><code>core.template.Compiler#compile</code></a> method.</p>\n", 
    "init": "core.template.Template", 
    "params": [
      {
        "position": 0, 
        "type": [
          "Function"
        ], 
        "name": "render"
      }
    ], 
    "sourceLink": "source:core.template.Template~75", 
    "line": 75, 
    "isFunction": true
  }, 
  "uses": [
    "core.Assert", 
    "core.Class", 
    "core.Env"
  ], 
  "members": [
    {
      "name": "render", 
      "doc": "<p>Public render method which transforms the stored template text using the <code class=\"param\">data</code>\nand runtime specific <code class=\"param\">partials</code>.</p>\n", 
      "visibility": "public", 
      "summary": "Public render method which transforms the stored template text using the data and runtime specific partials.", 
      "returns": [
        "String"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "Map"
          ], 
          "name": "data"
        }, 
        {
          "default": "null", 
          "position": 1, 
          "optional": true, 
          "name": "partials", 
          "type": [
            "Map"
          ]
        }
      ], 
      "sourceLink": "source:core.template.Template~90", 
      "line": 90, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "usedBy": [
    "core.template.Compiler"
  ], 
  "main": {
    "doc": "<p>This is the template class which is typically initialized and configured using the <a href=\"#core.template.Compiler~compile\"><code>core.template.Compiler#compile</code></a> method.</p>\n", 
    "line": 69, 
    "type": "core.Class", 
    "name": "core.template.Template", 
    "tags": []
  }, 
  "id": "core.template.Template", 
  "size": {
    "zipped": 484, 
    "optimized": 890, 
    "compressed": 1683
  }
},'core.template.Template');