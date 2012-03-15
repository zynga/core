apibrowser.callback({
  "statics": [
    {
      "constant": true, 
      "name": "TYPES", 
      "doc": "<p>Set of types which are supported</p>\n", 
      "visibility": "public", 
      "summary": "Set of types which are supported.", 
      "sourceLink": "source:core.Main~94", 
      "line": 94, 
      "type": "Array"
    }, 
    {
      "name": "addMembers", 
      "doc": "<p>Add <code class=\"param\">members</code> to the prototype of the object found under the given <code class=\"param\">name</code>.\nIt is possible to control whether to <code class=\"param\">keep</code> existing members.</p>\n", 
      "visibility": "public", 
      "summary": "Add members to the prototype of the object found under the given name.", 
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
          "name": "members"
        }, 
        {
          "default": "false", 
          "position": 2, 
          "optional": true, 
          "name": "keep", 
          "type": [
            {
              "builtin": true, 
              "name": "Boolean"
            }
          ]
        }
      ], 
      "sourceLink": "source:core.Main~228", 
      "line": 228, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "addStatics", 
      "doc": "<p>Add <code class=\"param\">statics</code> to the object found under the given <code class=\"param\">name</code>.\nIt is possible to control whether to <code class=\"param\">keep</code> existing statics.</p>\n", 
      "visibility": "public", 
      "summary": "Add statics to the object found under the given name.", 
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
          "name": "statics"
        }, 
        {
          "default": "false", 
          "position": 2, 
          "optional": true, 
          "name": "keep", 
          "type": [
            {
              "builtin": true, 
              "name": "Boolean"
            }
          ]
        }
      ], 
      "sourceLink": "source:core.Main~205", 
      "line": 205, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "clearNamespace", 
      "doc": "<p>Clears the object under the given <code class=\"param\">name</code> (including name cache) and returns if that was successful.</p>\n", 
      "visibility": "public", 
      "summary": "Clears the object under the given name (including name cache) and returns if that was successful.", 
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
        }
      ], 
      "sourceLink": "source:core.Main~147", 
      "line": 147, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "declareNamespace", 
      "doc": "<p>Declares the given <code class=\"param\">name</code> and stores the given <code class=\"param\">object</code> onto it.</p>\n", 
      "visibility": "public", 
      "summary": "Declares the given name and stores the given object onto it.", 
      "returns": [
        {
          "linkable": true, 
          "builtin": true, 
          "name": "Object"
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
              "builtin": true, 
              "name": "Object"
            }, 
            {
              "linkable": true, 
              "builtin": true, 
              "name": "Function"
            }
          ], 
          "name": "object"
        }
      ], 
      "sourceLink": "source:core.Main~52", 
      "line": 52, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "isTypeOf", 
      "doc": "<p>Whether the given <code class=\"param\">value</code> is of the given <code class=\"param\">type</code>.</p>\n\n<p>Supports these types:</p>\n\n<ul>\n<li><code>Null</code></li>\n<li><code>Array</code></li>\n<li><code>Function</code></li>\n<li><code>RegExp</code></li>\n<li><code>Object</code></li>\n<li><code>Date</code></li>\n<li><code>Number</code></li>\n<li><code>String</code></li>\n<li><code>Boolean</code></li>\n<li><code>Map</code></li>\n<li><code>Integer</code></li>\n<li><code>Primitive</code></li>\n</ul>\n", 
      "visibility": "public", 
      "summary": "Whether the given value is of the given type.", 
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
              "pseudo": true, 
              "name": "var"
            }
          ], 
          "name": "value"
        }, 
        {
          "position": 1, 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "String"
            }
          ], 
          "name": "type"
        }
      ], 
      "sourceLink": "source:core.Main~114", 
      "line": 114, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "resolveNamespace", 
      "doc": "<p>Resolves a given <code class=\"param\">name</code> into the item stored unter it.</p>\n", 
      "visibility": "public", 
      "summary": "Resolves a given name into the item stored unter it.", 
      "returns": [
        {
          "linkable": true, 
          "builtin": true, 
          "name": "Object"
        }, 
        {
          "linkable": true, 
          "builtin": true, 
          "name": "Function"
        }, 
        {
          "linkable": true, 
          "builtin": true, 
          "name": "Array"
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
      "sourceLink": "source:core.Main~176", 
      "line": 176, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "core", 
  "basename": "Main", 
  "permutations": [], 
  "uses": [
    "ext.Console", 
    "ext.DateNow", 
    "ext.DocumentHead", 
    "ext.FunctionBind", 
    "ext.HTML5Markup", 
    "ext.IsArray", 
    "ext.StringTrim", 
    "ext.TimeoutArgs"
  ], 
  "usedBy": [
    "api.custom.CSSClassName", 
    "api.custom.Integer", 
    "api.custom.Map", 
    "api.mdn.Array", 
    "api.mdn.Element", 
    "api.mdn.Node", 
    "api.mdn.RegExp", 
    "core.Assert", 
    "core.Class", 
    "core.Interface", 
    "core.Module", 
    "core.property.Debug", 
    "ext.Base64", 
    "ext.DateNow", 
    "ext.ExecScript", 
    "ext.FunctionBind", 
    "ext.Immediate", 
    "ext.IsArray", 
    "ext.LocalStorage", 
    "ext.RequestAnimationFrame", 
    "ext.StringTrim", 
    "ext.TimeoutArgs", 
    "ext.es5.Array", 
    "ext.es5.Date", 
    "ext.es5.Object", 
    "ext.sugar.Array", 
    "ext.sugar.Function", 
    "ext.sugar.Number", 
    "ext.sugar.Object", 
    "ext.sugar.String"
  ], 
  "main": {
    "name": "core.Main", 
    "tags": [], 
    "doc": "<p>Useful root methods to add members to objects</p>\n\n<p>Loading this class also adds a few essential fixes for different engines.</p>\n", 
    "summary": "Useful root methods to add members to objects  Loading this class also adds a few essential fixes for different engines.", 
    "line": 88, 
    "type": "core.Main"
  }, 
  "id": "core.Main", 
  "size": {
    "zipped": 798, 
    "optimized": 1579, 
    "compressed": 2619
  }
},'core.Main');