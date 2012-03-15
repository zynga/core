apibrowser.callback({
  "statics": [
    {
      "name": "get", 
      "doc": "<p>Returns the value of the given property <code class=\"param\">name</code> on the given <code class=\"param\">element</code>. By\ndefault the method returns the locally applied property value but there is also support for figuring\nout the <code class=\"param\">computed</code> value by triggering the corresponding flag.</p>\n\n<p><strong>Note:</strong> In Internet Explorer there is no 100% possibility to have access to the computed value.\nWe fallback to the only supported thing: cascaded properties. These are the actual value\nof the property as applied - non interpreted. This means that units are not translated\nto pixels etc. like which is normally the case in computed properties.</p>\n", 
      "visibility": "public", 
      "summary": "Returns the value of the given property name on the given element.", 
      "returns": [
        {
          "linkable": true, 
          "builtin": true, 
          "name": "String"
        }
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            {
              "linkable": true, 
              "name": "Element"
            }
          ], 
          "name": "element"
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
          "name": "name"
        }, 
        {
          "default": "false", 
          "position": 2, 
          "optional": true, 
          "name": "computed", 
          "type": [
            {
              "builtin": true, 
              "name": "Boolean"
            }
          ]
        }
      ], 
      "sourceLink": "source:core.bom.Style~71", 
      "line": 71, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "getInteger", 
      "doc": "<p>Returns an integer representation of the given style property <code class=\"param\">name</code> on the\ngiven <code class=\"param\">element</code>. By default the method returns the locally applied property value\nbut there is also support for figuring out the <code class=\"param\">computed</code> value by triggering\nthe corresponding flag.</p>\n", 
      "visibility": "public", 
      "summary": "Returns an integer representation of the given style property name on the given element.", 
      "returns": [
        {
          "linkable": true, 
          "name": "Integer"
        }
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            {
              "linkable": true, 
              "name": "Element"
            }
          ], 
          "name": "element"
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
          "name": "name"
        }, 
        {
          "default": "false", 
          "position": 2, 
          "optional": true, 
          "name": "computed", 
          "type": [
            {
              "builtin": true, 
              "name": "Boolean"
            }
          ]
        }
      ], 
      "sourceLink": "source:core.bom.Style~99", 
      "line": 99, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "names", 
      "sourceLink": "source:core.bom.Style~11", 
      "visibility": "public", 
      "summary": "Caches CSS property names to browser specific names.", 
      "doc": "<p>Caches CSS property names to browser specific names. Can be used as a fast lookup alternative to <a href=\"#~property\"><code>property</code></a>.</p>\n", 
      "line": 11, 
      "type": "Map"
    }, 
    {
      "name": "property", 
      "doc": "<p>Returns the supported property (e.g. <code>WebkitTransform</code>) of the given standard CSS property\n<code class=\"param\">name</code> like <code>transform</code>. Returns <code>null</code> when the property is not supported.</p>\n", 
      "visibility": "public", 
      "summary": "Returns the supported property (e.g.", 
      "returns": [
        {
          "linkable": true, 
          "builtin": true, 
          "name": "String"
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
      "sourceLink": "source:core.bom.Style~28", 
      "line": 28, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "set", 
      "doc": "<p>Sets one or multiple style properties on the given <code class=\"param\">element</code>. If <code class=\"param\">name</code> is a <code>String</code>\nthe third parameter <code class=\"param\">value</code> defines the value to apply. Alternatively <code class=\"param\">name</code> can be a <code>Map</code> which defines\nall properties to set.</p>\n", 
      "visibility": "public", 
      "summary": "Sets one or multiple style properties on the given element.", 
      "params": [
        {
          "position": 0, 
          "type": [
            {
              "linkable": true, 
              "name": "Element"
            }
          ], 
          "name": "element"
        }, 
        {
          "position": 1, 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "String"
            }, 
            {
              "linkable": true, 
              "name": "Map"
            }
          ], 
          "name": "name"
        }, 
        {
          "position": 2, 
          "name": "value"
        }
      ], 
      "sourceLink": "source:core.bom.Style~109", 
      "line": 109, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "core.bom", 
  "basename": "Style", 
  "permutations": [
    "engine"
  ], 
  "uses": [
    "core.Env", 
    "core.Module"
  ], 
  "usedBy": [
    "core.bom.Position", 
    "core.bom.ScrollInto"
  ], 
  "main": {
    "name": "core.bom.Style", 
    "tags": [], 
    "doc": "<p>Utility class for working with HTML style properties (setting/getting). Automatically figures out the\ncorrect property name when the engine does not yet support the specified name, but a vendor prefixed one.</p>\n", 
    "summary": "Utility class for working with HTML style properties (setting/getting).", 
    "line": 55, 
    "type": "core.Module"
  }, 
  "id": "core.bom.Style", 
  "size": {
    "zipped": 463, 
    "optimized": 780, 
    "compressed": 1401
  }
},'core.bom.Style');