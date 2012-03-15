apibrowser.callback({
  "assets": [], 
  "package": "ext.sugar", 
  "basename": "String", 
  "permutations": [], 
  "uses": [
    "core.Main", 
    "ext.Base64"
  ], 
  "members": [
    {
      "name": "camelize", 
      "doc": "<p>Camelizes this string.</p>\n", 
      "visibility": "public", 
      "summary": "Camelizes this string.", 
      "returns": [
        {
          "linkable": true, 
          "builtin": true, 
          "name": "String"
        }
      ], 
      "sourceLink": "source:ext.sugar.String~123", 
      "line": 123, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "compact", 
      "doc": "<p>Removes double spaces and line breaks.</p>\n", 
      "visibility": "public", 
      "summary": "Removes double spaces and line breaks.", 
      "returns": [
        {
          "linkable": true, 
          "builtin": true, 
          "name": "String"
        }
      ], 
      "sourceLink": "source:ext.sugar.String~102", 
      "line": 102, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "contains", 
      "doc": "<p>Whether the string contains the given <code class=\"param\">substring</code>.</p>\n", 
      "visibility": "public", 
      "summary": "Whether the string contains the given substring.", 
      "returns": [
        {
          "auto": true, 
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
          "name": "substring"
        }
      ], 
      "sourceLink": "source:ext.sugar.String~78", 
      "line": 78, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "decodeBase64", 
      "tags": [
        {
          "name": "require", 
          "value": "ext.Base64"
        }
      ], 
      "doc": "<p>Decodes the string from Base64.</p>\n", 
      "visibility": "public", 
      "summary": "Decodes the string from Base64.", 
      "returns": [
        {
          "linkable": true, 
          "builtin": true, 
          "name": "String"
        }
      ], 
      "sourceLink": "source:ext.sugar.String~32", 
      "line": 32, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "decodeUtf8", 
      "doc": "<p>Decodes the string from UTF-8.</p>\n\n<p>Via: <a href=\"http://ecmanaut.blogspot.com/2006/07/encoding-decoding-utf8-in-javascript.html\">http://ecmanaut.blogspot.com/2006/07/encoding-decoding-utf8-in-javascript.html</a></p>\n", 
      "visibility": "public", 
      "summary": "Decodes the string from UTF-8.", 
      "returns": [
        {
          "linkable": true, 
          "builtin": true, 
          "name": "String"
        }
      ], 
      "sourceLink": "source:ext.sugar.String~70", 
      "line": 70, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "encodeBase64", 
      "tags": [
        {
          "name": "require", 
          "value": "ext.Base64"
        }
      ], 
      "doc": "<p>Encodes the string as Base64.</p>\n", 
      "visibility": "public", 
      "summary": "Encodes the string as Base64.", 
      "returns": [
        {
          "linkable": true, 
          "builtin": true, 
          "name": "String"
        }
      ], 
      "sourceLink": "source:ext.sugar.String~22", 
      "line": 22, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "encodeUtf8", 
      "doc": "<p>Encodes the string as UTF-8.</p>\n\n<p>Via: <a href=\"http://ecmanaut.blogspot.com/2006/07/encoding-decoding-utf8-in-javascript.html\">http://ecmanaut.blogspot.com/2006/07/encoding-decoding-utf8-in-javascript.html</a></p>\n", 
      "visibility": "public", 
      "summary": "Encodes the string as UTF-8.", 
      "returns": [
        {
          "linkable": true, 
          "builtin": true, 
          "name": "String"
        }
      ], 
      "sourceLink": "source:ext.sugar.String~60", 
      "line": 60, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "endsWith", 
      "doc": "<p>Returns <code>true</code> if this string ends with the given substring <code class=\"param\">end</code></p>\n", 
      "visibility": "public", 
      "summary": "Returns true if this string ends with the given substring end.", 
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
          "name": "end"
        }
      ], 
      "sourceLink": "source:ext.sugar.String~152", 
      "line": 152, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "hyphenate", 
      "doc": "<p>Returns a hyphenated copy of the original string e.g.</p>\n\n<ul>\n<li>camelCase =&gt; camel-case</li>\n<li>HelloWorld =&gt; -hello-world</li>\n</ul>\n", 
      "visibility": "public", 
      "summary": "Returns a hyphenated copy of the original string e.g.", 
      "returns": [
        {
          "linkable": true, 
          "builtin": true, 
          "name": "String"
        }
      ], 
      "sourceLink": "source:ext.sugar.String~113", 
      "line": 113, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "isBlank", 
      "doc": "<p>Returns true if the string has a length of 0 or contains only whitespace.</p>\n", 
      "visibility": "public", 
      "summary": "Returns true if the string has a length of 0 or contains only whitespace.", 
      "returns": [
        {
          "builtin": true, 
          "name": "Boolean"
        }
      ], 
      "sourceLink": "source:ext.sugar.String~86", 
      "line": 86, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "repeat", 
      "doc": "<p>Returns a new string which is a <code class=\"param\">nr</code> repeated copy of the original one.</p>\n", 
      "visibility": "public", 
      "summary": "Returns a new string which is a nr repeated copy of the original one.", 
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
              "name": "Integer"
            }
          ], 
          "name": "nr"
        }
      ], 
      "sourceLink": "source:ext.sugar.String~134", 
      "line": 134, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "reverse", 
      "doc": "<p>Reverses the string</p>\n", 
      "visibility": "public", 
      "summary": "Reverses the string.", 
      "returns": [
        {
          "linkable": true, 
          "builtin": true, 
          "name": "String"
        }
      ], 
      "sourceLink": "source:ext.sugar.String~94", 
      "line": 94, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "startsWith", 
      "doc": "<p>Returns <code>true</code> if this string starts with the given substring <code class=\"param\">begin</code></p>\n", 
      "visibility": "public", 
      "summary": "Returns true if this string starts with the given substring begin.", 
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
          "name": "begin"
        }
      ], 
      "sourceLink": "source:ext.sugar.String~144", 
      "line": 144, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "toHex", 
      "doc": "<p>Converts the string into a hex string</p>\n", 
      "visibility": "public", 
      "summary": "Converts the string into a hex string.", 
      "returns": [
        {
          "linkable": true, 
          "builtin": true, 
          "name": "String"
        }
      ], 
      "sourceLink": "source:ext.sugar.String~40", 
      "line": 40, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "usedBy": [
    "core.Env"
  ], 
  "main": {
    "name": "String", 
    "extension": true, 
    "tags": [], 
    "doc": "<p>Adds useful non-standard extensions to the <code>String.prototype</code> like <a href=\"#~hyphenate\"><code>hyphenate</code></a>, <a href=\"#~startsWith\"><code>startsWith</code></a> and <a href=\"#~contains\"><code>contains</code></a>.</p>\n", 
    "summary": "Adds useful non-standard extensions to the String.prototype like hyphenate, startsWith and contains.", 
    "line": 15, 
    "type": "core.Main"
  }, 
  "id": "ext.sugar.String", 
  "size": {
    "zipped": 471, 
    "optimized": 990, 
    "compressed": 1095
  }
},'ext.sugar.String');