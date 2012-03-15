apibrowser.callback({
  "statics": [
    {
      "name": "execScript", 
      "doc": "<p>Executes the specified script <code class=\"param\">expression</code> in global context.</p>\n\n<p>This emulates the global <code>execScript</code> function of Internet Explorer for other browsers.\nSee also: <a href=\"http://msdn.microsoft.com/en-us/library/ms536420(v=vs.85).aspx\">http://msdn.microsoft.com/en-us/library/ms536420(v=vs.85).aspx</a></p>\n", 
      "visibility": "public", 
      "summary": "Executes the specified script expression in global context.", 
      "returns": [
        {
          "pseudo": true, 
          "name": "null"
        }
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "String"
            }
          ], 
          "name": "expression"
        }
      ], 
      "sourceLink": "source:ext.ExecScript~43", 
      "line": 43, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "ext", 
  "basename": "ExecScript", 
  "permutations": [], 
  "uses": [
    "core.Main"
  ], 
  "main": {
    "name": "global", 
    "extension": true, 
    "tags": [], 
    "doc": "<p>Adds a method for executing aribritary script content in global context.</p>\n", 
    "summary": "Adds a method for executing aribritary script content in global context.", 
    "line": 35, 
    "type": "core.Main"
  }, 
  "id": "ext.ExecScript", 
  "size": {
    "zipped": 147, 
    "optimized": 193, 
    "compressed": 237
  }
},'ext.ExecScript');