apibrowser.callback({
  "statics": [
    {
      "name": "getImageSize", 
      "doc": "<p>Returns the dimensions of the given image <code class=\"param\">id</code> with the keys <code>width</code> and <code>height</code>.</p>\n", 
      "visibility": "public", 
      "summary": "Returns the dimensions of the given image id with the keys width and height.", 
      "returns": [
        {
          "linkable": true, 
          "name": "Map"
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
          "name": "id"
        }
      ], 
      "sourceLink": "source:core.io.Asset~106", 
      "line": 106, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "getImageSprite", 
      "doc": "<p>Returns sprite details for being used for the given image <code class=\"param\">id</code>.</p>\n", 
      "visibility": "public", 
      "summary": "Returns sprite details for being used for the given image id.", 
      "returns": [
        {
          "linkable": true, 
          "name": "Map"
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
          "name": "id"
        }
      ], 
      "sourceLink": "source:core.io.Asset~123", 
      "line": 123, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "has", 
      "doc": "<p>Whether the registry has information about the given asset <code class=\"param\">id</code>.</p>\n", 
      "visibility": "public", 
      "summary": "Whether the registry has information about the given asset id.", 
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
          "name": "id"
        }
      ], 
      "sourceLink": "source:core.io.Asset~62", 
      "line": 62, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "load", 
      "doc": "<p>Loads the given asset <code class=\"param\">ids</code> and optionally executes the given\n<code class=\"param\">callback</code> (in the given <code class=\"param\">context</code>) after all are completed.\nThe behavior is tweakable by enabling <code class=\"param\">nocache</code> to append a dynamic\n<code>GET</code> parameter and <code class=\"param\">type</code> to enforce a specific loader class.</p>\n", 
      "visibility": "public", 
      "summary": "Loads the given asset ids and optionally executes the given callback (in the given context) after all are completed.", 
      "returns": [
        {
          "auto": true, 
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
              "array": true, 
              "name": "String", 
              "builtin": true
            }
          ], 
          "name": "ids"
        }, 
        {
          "position": 1, 
          "optional": true, 
          "name": "callback", 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "Function"
            }
          ]
        }, 
        {
          "default": "global", 
          "position": 2, 
          "optional": true, 
          "name": "context", 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "Object"
            }
          ]
        }, 
        {
          "default": "false", 
          "position": 3, 
          "optional": true, 
          "name": "nocache", 
          "type": [
            {
              "builtin": true, 
              "name": "Boolean"
            }
          ]
        }, 
        {
          "position": 4, 
          "optional": true, 
          "name": "type", 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "String"
            }
          ]
        }
      ], 
      "sourceLink": "source:core.io.Asset~73", 
      "line": 73, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "toUri", 
      "doc": "<p>Converts the given asset <code class=\"param\">id</code> to a full qualified URI.\nThe method throws an error whenever an asset ID is unknown.</p>\n", 
      "visibility": "public", 
      "summary": "Converts the given asset id to a full qualified URI.", 
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
          "name": "id"
        }
      ], 
      "sourceLink": "source:core.io.Asset~156", 
      "line": 156, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "core.io", 
  "basename": "Asset", 
  "permutations": [
    "assets", 
    "debug"
  ], 
  "uses": [
    "core.Assert", 
    "core.Env", 
    "core.Module", 
    "core.io.Queue"
  ], 
  "usedBy": [
    "api.Browser"
  ], 
  "main": {
    "name": "core.io.Asset", 
    "tags": [], 
    "doc": "<p>Contains information about images (size, format, clipping, &hellip;) and\nother assets like CSS files, local data, &hellip;</p>\n", 
    "summary": "Contains information about images (size, format, clipping, &hellip;) and other assets like CSS files, local data, &hellip;.", 
    "line": 57, 
    "type": "core.Module"
  }, 
  "id": "core.io.Asset", 
  "size": {
    "zipped": 603, 
    "optimized": 1034, 
    "compressed": 2229
  }
},'core.io.Asset');