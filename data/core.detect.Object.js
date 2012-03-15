apibrowser.callback({
  "statics": [
    {
      "name": "get", 
      "doc": "<p>Returns the whether the given <code class=\"param\">feature</code> is supported</p>\n", 
      "visibility": "public", 
      "summary": "Returns the whether the given feature is supported.", 
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
              "builtin": true, 
              "name": "String"
            }
          ], 
          "name": "feature"
        }
      ], 
      "sourceLink": "source:core.detect.Object~41", 
      "line": 41, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "core.detect", 
  "basename": "Object", 
  "permutations": [], 
  "uses": [
    "core.Module"
  ], 
  "main": {
    "name": "core.detect.Object", 
    "tags": [], 
    "doc": "<p>Checks for existance of global API objects.</p>\n\n<ul>\n<li>feature.appcache</li>\n<li>feature.worker</li>\n<li>feature.xhr</li>\n<li>feature.storage</li>\n<li>feature.gl</li>\n<li>feature.message</li>\n<li>feature.db</li>\n<li>feature.json</li>\n<li>feature.socket</li>\n</ul>\n", 
    "summary": "Checks for existance of global API objects.", 
    "line": 21, 
    "type": "core.Module"
  }, 
  "id": "core.detect.Object", 
  "size": {
    "zipped": 258, 
    "optimized": 414, 
    "compressed": 470
  }
},'core.detect.Object');