apibrowser.callback({
  "statics": [
    {
      "constant": true, 
      "name": "TYPES", 
      "sourceLink": "source:core.Main~94", 
      "visibility": "public", 
      "doc": "<p>Set of types which are supported</p>\n", 
      "line": 94, 
      "type": "Array"
    }, 
    {
      "name": "addMembers", 
      "sourceLink": "source:core.Main~228", 
      "visibility": "public", 
      "summary": "Add members to the prototype of the object found under the given name.", 
      "params": [
        {
          "position": 0, 
          "type": [
            "String"
          ], 
          "name": "name"
        }, 
        {
          "position": 1, 
          "type": [
            "Map"
          ], 
          "name": "members"
        }, 
        {
          "default": "false", 
          "position": 2, 
          "optional": true, 
          "name": "keep", 
          "type": [
            "Boolean"
          ]
        }
      ], 
      "doc": "<p>Add <code class=\"param\">members</code> to the prototype of the object found under the given <code class=\"param\">name</code>.\nIt is possible to control whether to <code class=\"param\">keep</code> existing members.</p>\n", 
      "line": 228, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "addStatics", 
      "sourceLink": "source:core.Main~205", 
      "visibility": "public", 
      "summary": "Add statics to the object found under the given name.", 
      "params": [
        {
          "position": 0, 
          "type": [
            "String"
          ], 
          "name": "name"
        }, 
        {
          "position": 1, 
          "type": [
            "Map"
          ], 
          "name": "statics"
        }, 
        {
          "default": "false", 
          "position": 2, 
          "optional": true, 
          "name": "keep", 
          "type": [
            "Boolean"
          ]
        }
      ], 
      "doc": "<p>Add <code class=\"param\">statics</code> to the object found under the given <code class=\"param\">name</code>.\nIt is possible to control whether to <code class=\"param\">keep</code> existing statics.</p>\n", 
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
        "Boolean"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "String"
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
        "Object"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "String"
          ], 
          "name": "name"
        }, 
        {
          "position": 1, 
          "type": [
            "Object", 
            "Function"
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
        "Boolean"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "var"
          ], 
          "name": "value"
        }, 
        {
          "position": 1, 
          "type": [
            "String"
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
        "Object", 
        "Function", 
        "Array"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "String"
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
    "doc": "<p>Useful root methods to add members to objects</p>\n\n<p>Loading this class also adds a few essential fixes for different engines.</p>\n", 
    "line": 88, 
    "type": "core.Main", 
    "name": "core.Main", 
    "tags": []
  }, 
  "id": "core.Main", 
  "size": {
    "zipped": 798, 
    "optimized": 1579, 
    "compressed": 2619
  }
},'core.Main');