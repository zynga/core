apibrowser.callback({
  "statics": [
    {
      "name": "checkGetter", 
      "sourceLink": "source:core.property.Debug~106", 
      "visibility": "public", 
      "params": [
        {
          "position": 0, 
          "type": [
            "Object"
          ], 
          "name": "obj"
        }, 
        {
          "position": 1, 
          "type": [
            "Map"
          ], 
          "name": "config"
        }, 
        {
          "position": 2, 
          "type": [
            "arguments"
          ], 
          "name": "args"
        }
      ], 
      "doc": "<p>Validates the incoming parameters of a getter method</p>\n\n<ul>\n<li><code class=\"param\">obj</code> Object which is queried</li>\n<li><code class=\"param\">config</code> Property configuration</li>\n<li><code class=\"param\">args</code> List of all arguments send to the setter</li>\n</ul>\n", 
      "line": 106, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "checkResetter", 
      "sourceLink": "source:core.property.Debug~91", 
      "visibility": "public", 
      "params": [
        {
          "position": 0, 
          "type": [
            "Object"
          ], 
          "name": "obj"
        }, 
        {
          "position": 1, 
          "type": [
            "Map"
          ], 
          "name": "config"
        }, 
        {
          "position": 2, 
          "type": [
            "arguments"
          ], 
          "name": "args"
        }
      ], 
      "doc": "<p>Validates the incoming parameters of a resetter method</p>\n\n<ul>\n<li><code class=\"param\">obj</code> Object which is modified</li>\n<li><code class=\"param\">config</code> Property configuration</li>\n<li><code class=\"param\">args</code> List of all arguments send to the setter</li>\n</ul>\n", 
      "line": 91, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "checkSetter", 
      "sourceLink": "source:core.property.Debug~23", 
      "visibility": "public", 
      "params": [
        {
          "position": 0, 
          "type": [
            "Object"
          ], 
          "name": "obj"
        }, 
        {
          "position": 1, 
          "type": [
            "Map"
          ], 
          "name": "config"
        }, 
        {
          "position": 2, 
          "type": [
            "arguments"
          ], 
          "name": "args"
        }
      ], 
      "doc": "<p>Validates the incoming parameters of a setter method</p>\n\n<ul>\n<li><code class=\"param\">obj</code> Object which is modified</li>\n<li><code class=\"param\">config</code> Property configuration</li>\n<li><code class=\"param\">args</code> List of all arguments send to the setter</li>\n</ul>\n", 
      "line": 23, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "core.property", 
  "basename": "Debug", 
  "permutations": [], 
  "uses": [
    "core.Assert", 
    "core.Class", 
    "core.Interface", 
    "core.Main", 
    "core.Module"
  ], 
  "usedBy": [
    "core.property.Multi", 
    "core.property.Simple"
  ], 
  "main": {
    "doc": "<p>This helper class is only included into debug builds and do the\ngeneric property checks defined using the property configuration.</p>\n\n<p>It&#39;s used by both standard property system: core.property.Simple and core.property.Multi.</p>\n", 
    "line": 14, 
    "type": "core.Module", 
    "name": "core.property.Debug", 
    "tags": []
  }, 
  "id": "core.property.Debug", 
  "size": {
    "zipped": 559, 
    "optimized": 1406, 
    "compressed": 1634
  }
},'core.property.Debug');