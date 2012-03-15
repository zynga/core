apibrowser.callback({
  "statics": [
    {
      "constant": true, 
      "name": "CHECKSUM", 
      "doc": "<p>Holds the checksum for the current permutation which is auto detected by features or by compiled-in data</p>\n", 
      "visibility": "public", 
      "summary": "Holds the checksum for the current permutation which is auto detected by features or by compiled-in data.", 
      "sourceLink": "source:core.Env~85", 
      "line": 85, 
      "type": "Number"
    }, 
    {
      "constant": true, 
      "name": "SELECTED", 
      "doc": "<p>Currently selected fields from Env data</p>\n", 
      "visibility": "public", 
      "summary": "Currently selected fields from Env data.", 
      "sourceLink": "source:core.Env~31", 
      "line": 31, 
      "type": "Map"
    }, 
    {
      "name": "define", 
      "doc": "<p>Configure environment data dynamically via setting a field <code class=\"param\">name</code> and its <code class=\"param\">value</code>.</p>\n", 
      "visibility": "public", 
      "summary": "Configure environment data dynamically via setting a field name and its value.", 
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
          "name": "name"
        }, 
        {
          "position": 1, 
          "type": [
            {
              "pseudo": true, 
              "name": "var"
            }
          ], 
          "name": "value"
        }
      ], 
      "sourceLink": "source:core.Env~113", 
      "line": 113, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "getValue", 
      "doc": "<p>Returns the value of the field with the given <code class=\"param\">name</code>.</p>\n", 
      "visibility": "public", 
      "summary": "Returns the value of the field with the given name.", 
      "returns": [
        {
          "pseudo": true, 
          "name": "var"
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
          "name": "name"
        }
      ], 
      "sourceLink": "source:core.Env~139", 
      "line": 139, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "isSet", 
      "doc": "<p>Whether the field with the given <code class=\"param\">name</code> was set to the given <code class=\"param\">value</code>.</p>\n\n<p>Boolean fields could also be checked without a given value as the value\ndefaults to <code>true</code>.</p>\n", 
      "visibility": "public", 
      "summary": "Whether the field with the given name was set to the given value.", 
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
          "name": "name"
        }, 
        {
          "default": "true", 
          "position": 1, 
          "optional": true, 
          "name": "value", 
          "type": [
            {
              "pseudo": true, 
              "name": "var"
            }
          ]
        }
      ], 
      "sourceLink": "source:core.Env~124", 
      "line": 124, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "select", 
      "doc": "<p>Selects and returns the current value of the field with the given\n<code class=\"param\">name</code> from the given <code class=\"param\">map</code>.</p>\n", 
      "visibility": "public", 
      "summary": "Selects and returns the current value of the field with the given name from the given map.", 
      "returns": [
        {
          "pseudo": true, 
          "name": "var"
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
          "name": "name"
        }, 
        {
          "position": 1, 
          "type": [
            {
              "linkable": true, 
              "name": "Map"
            }
          ], 
          "name": "map"
        }
      ], 
      "sourceLink": "source:core.Env~148", 
      "line": 148, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "core", 
  "basename": "Env", 
  "permutations": [
    "fields"
  ], 
  "uses": [
    "core.Module", 
    "core.crypt.SHA1", 
    "ext.sugar.String"
  ], 
  "usedBy": [
    "core.Class", 
    "core.Interface", 
    "core.bom.ClassName", 
    "core.bom.Form", 
    "core.bom.FormItem", 
    "core.bom.FullScreen", 
    "core.bom.Position", 
    "core.bom.Style", 
    "core.collection.LinkedList", 
    "core.detect.System", 
    "core.io.Asset", 
    "core.io.Image", 
    "core.io.Queue", 
    "core.io.Script", 
    "core.io.StyleSheet", 
    "core.io.Text", 
    "core.locale.Translate", 
    "core.property.MGeneric", 
    "core.property.Multi", 
    "core.property.Simple", 
    "core.template.Parser", 
    "core.template.Template", 
    "core.util.Id", 
    "ext.TimeoutArgs", 
    "ext.sugar.Array"
  ], 
  "main": {
    "name": "core.Env", 
    "tags": [], 
    "doc": "<p>This class is the client-side representation for the permutation features of\nJasy and supports features like auto-selecting builds based on specific feature sets.</p>\n", 
    "summary": "This class is the client-side representation for the permutation features of Jasy and supports features like auto-selecting builds based on specific feature sets.", 
    "line": 104, 
    "type": "core.Module"
  }, 
  "id": "core.Env", 
  "size": {
    "zipped": 451, 
    "optimized": 710, 
    "compressed": 1105
  }
},'core.Env');