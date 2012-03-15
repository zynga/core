apibrowser.callback({
  "statics": [
    {
      "name": "create", 
      "doc": "<p>Creates a new property group with the given <code class=\"param\">config</code> and returns the corresponding methods.</p>\n", 
      "visibility": "public", 
      "summary": "Creates a new property group with the given config and returns the corresponding methods.", 
      "returns": [
        "Map"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "Map"
          ], 
          "name": "config"
        }
      ], 
      "sourceLink": "source:core.property.Group~60", 
      "line": 60, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "core.property", 
  "basename": "Group", 
  "permutations": [], 
  "uses": [
    "core.Module"
  ], 
  "usedBy": [
    "core.Class"
  ], 
  "main": {
    "doc": "<p>Internal class for handling of dynamic property groups. Should only be used\nthrough the methods provided by <a href=\"#core.Class\"><code>core.Class</code></a>.</p>\n\n<p>Property groups are defined in a similar way but support a different set of keys:</p>\n\n<table>\n  <tr><th>Name</th><th>Type</th><th>Description</th></tr>\n  <tr><th>group</th><td>String[]</td><td>\n    A list of property names which should be set using the propery group.\n  </td></tr>\n  <tr><th>themeable</th><td>Boolean</td><td>\n    Whether this property can be set using themes.\n  </td></tr>\n  <tr><th>shorthand</th><td>Boolean</td><td>\n    If enabled, the properties can be set using a CSS like shorthand mode e.g.\n    expanding two given values into 4 applied values.\n  </td></tr>\n</table>\n", 
    "line": 55, 
    "type": "core.Module", 
    "name": "core.property.Group", 
    "tags": []
  }, 
  "id": "core.property.Group", 
  "size": {
    "zipped": 281, 
    "optimized": 432, 
    "compressed": 604
  }
},'core.property.Group');