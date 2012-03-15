apibrowser.callback({
  "statics": [
    {
      "name": "checkGetter", 
      "doc": "<p>Validates the incoming parameters of a getter method</p>\n\n<ul>\n<li><code class=\"param\">obj</code> Object which is queried</li>\n<li><code class=\"param\">config</code> Property configuration</li>\n<li><code class=\"param\">args</code> List of all arguments send to the setter</li>\n</ul>\n", 
      "visibility": "public", 
      "summary": "Validates the incoming parameters of a getter method   obj Object which is queried config Property configuration args List of all arguments send to the setter.", 
      "params": [
        {
          "position": 0, 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "Object"
            }
          ], 
          "name": "obj"
        }, 
        {
          "position": 1, 
          "type": [
            {
              "linkable": true, 
              "name": "Map"
            }
          ], 
          "name": "config"
        }, 
        {
          "position": 2, 
          "type": [
            {
              "pseudo": true, 
              "name": "arguments"
            }
          ], 
          "name": "args"
        }
      ], 
      "sourceLink": "source:core.property.Debug~106", 
      "line": 106, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "checkResetter", 
      "doc": "<p>Validates the incoming parameters of a resetter method</p>\n\n<ul>\n<li><code class=\"param\">obj</code> Object which is modified</li>\n<li><code class=\"param\">config</code> Property configuration</li>\n<li><code class=\"param\">args</code> List of all arguments send to the setter</li>\n</ul>\n", 
      "visibility": "public", 
      "summary": "Validates the incoming parameters of a resetter method   obj Object which is modified config Property configuration args List of all arguments send to the setter.", 
      "params": [
        {
          "position": 0, 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "Object"
            }
          ], 
          "name": "obj"
        }, 
        {
          "position": 1, 
          "type": [
            {
              "linkable": true, 
              "name": "Map"
            }
          ], 
          "name": "config"
        }, 
        {
          "position": 2, 
          "type": [
            {
              "pseudo": true, 
              "name": "arguments"
            }
          ], 
          "name": "args"
        }
      ], 
      "sourceLink": "source:core.property.Debug~91", 
      "line": 91, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "checkSetter", 
      "doc": "<p>Validates the incoming parameters of a setter method</p>\n\n<ul>\n<li><code class=\"param\">obj</code> Object which is modified</li>\n<li><code class=\"param\">config</code> Property configuration</li>\n<li><code class=\"param\">args</code> List of all arguments send to the setter</li>\n</ul>\n", 
      "visibility": "public", 
      "summary": "Validates the incoming parameters of a setter method   obj Object which is modified config Property configuration args List of all arguments send to the setter.", 
      "params": [
        {
          "position": 0, 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "Object"
            }
          ], 
          "name": "obj"
        }, 
        {
          "position": 1, 
          "type": [
            {
              "linkable": true, 
              "name": "Map"
            }
          ], 
          "name": "config"
        }, 
        {
          "position": 2, 
          "type": [
            {
              "pseudo": true, 
              "name": "arguments"
            }
          ], 
          "name": "args"
        }
      ], 
      "sourceLink": "source:core.property.Debug~23", 
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
    "name": "core.property.Debug", 
    "tags": [], 
    "doc": "<p>This helper class is only included into debug builds and do the\ngeneric property checks defined using the property configuration.</p>\n\n<p>It&#39;s used by both standard property system: core.property.Simple and core.property.Multi.</p>\n", 
    "summary": "This helper class is only included into debug builds and do the generic property checks defined using the property configuration.", 
    "line": 14, 
    "type": "core.Module"
  }, 
  "id": "core.property.Debug", 
  "size": {
    "zipped": 559, 
    "optimized": 1406, 
    "compressed": 1634
  }
},'core.property.Debug');