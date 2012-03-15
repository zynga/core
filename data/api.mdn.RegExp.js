apibrowser.callback({
  "assets": [], 
  "package": "api.mdn", 
  "basename": "RegExp", 
  "permutations": [], 
  "construct": {
    "tags": [
      {
        "name": "main"
      }
    ], 
    "doc": "<p>Creates a regular expression object for matching text with a <code class=\"param\">pattern</code> and optional <code class=\"param\">flags</code>.</p>\n", 
    "summary": "Creates a regular expression object for matching text with a pattern and optional flags.", 
    "init": "RegExp", 
    "params": [
      {
        "position": 0, 
        "type": [
          {
            "builtin": true, 
            "name": "String"
          }
        ], 
        "name": "pattern"
      }, 
      {
        "position": 1, 
        "type": [
          {
            "builtin": true, 
            "name": "String"
          }
        ], 
        "name": "flags"
      }
    ], 
    "sourceLink": "source:api.mdn.RegExp~6", 
    "line": 6, 
    "isFunction": true
  }, 
  "uses": [
    "core.Main"
  ], 
  "members": [
    {
      "name": "exec", 
      "doc": "<p>Executes a search for a match in its <code class=\"param\">string</code> parameter.</p>\n", 
      "visibility": "public", 
      "summary": "Executes a search for a match in its string parameter.", 
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
          "name": "string"
        }
      ], 
      "sourceLink": "source:api.mdn.RegExp~26", 
      "line": 26, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "global", 
      "sourceLink": "source:api.mdn.RegExp~11", 
      "visibility": "public", 
      "summary": "Whether to test the regular expression against all possible matches in a string, or only against the first.", 
      "doc": "<p>Whether to test the regular expression against all possible matches in a string, or only against the first.</p>\n", 
      "line": 11, 
      "type": "Boolean"
    }, 
    {
      "name": "ignoreCase", 
      "sourceLink": "source:api.mdn.RegExp~14", 
      "visibility": "public", 
      "summary": "Whether to ignore case while attempting a match in a string.", 
      "doc": "<p>Whether to ignore case while attempting a match in a string.</p>\n", 
      "line": 14, 
      "type": "Boolean"
    }, 
    {
      "name": "lastIndex", 
      "sourceLink": "source:api.mdn.RegExp~17", 
      "visibility": "public", 
      "summary": "The index at which to start the next match.", 
      "doc": "<p>The index at which to start the next match.</p>\n", 
      "line": 17, 
      "type": "Integer"
    }, 
    {
      "name": "multiline", 
      "sourceLink": "source:api.mdn.RegExp~20", 
      "visibility": "public", 
      "summary": "Whether or not to search in strings across multiple lines.", 
      "doc": "<p>Whether or not to search in strings across multiple lines.</p>\n", 
      "line": 20, 
      "type": "Boolean"
    }, 
    {
      "name": "source", 
      "sourceLink": "source:api.mdn.RegExp~23", 
      "visibility": "public", 
      "summary": "The text of the pattern.", 
      "doc": "<p>The text of the pattern.</p>\n", 
      "line": 23, 
      "type": "String"
    }, 
    {
      "name": "test", 
      "doc": "<p>Tests for a match in its <code class=\"param\">string</code> parameter.</p>\n", 
      "visibility": "public", 
      "summary": "Tests for a match in its string parameter.", 
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
          "name": "string"
        }
      ], 
      "sourceLink": "source:api.mdn.RegExp~29", 
      "line": 29, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "toSource", 
      "doc": "<p>Returns an object literal representing the specified object; you can use this value to create a new object.</p>\n", 
      "visibility": "public", 
      "summary": "Returns an object literal representing the specified object; you can use this value to create a new object.", 
      "returns": [
        {
          "linkable": true, 
          "name": "Map"
        }
      ], 
      "sourceLink": "source:api.mdn.RegExp~32", 
      "line": 32, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "toString", 
      "doc": "<p>Returns a string representing the specified object.</p>\n", 
      "visibility": "public", 
      "summary": "Returns a string representing the specified object.", 
      "returns": [
        {
          "linkable": true, 
          "builtin": true, 
          "name": "String"
        }
      ], 
      "sourceLink": "source:api.mdn.RegExp~35", 
      "line": 35, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "main": {
    "name": "RegExp", 
    "extension": true, 
    "tags": [
      {
        "name": "main"
      }
    ], 
    "doc": "<p>Creates a regular expression object for matching text with a <code class=\"param\">pattern</code> and optional <code class=\"param\">flags</code>.</p>\n", 
    "summary": "Creates a regular expression object for matching text with a pattern and optional flags.", 
    "line": 6, 
    "type": "core.Main"
  }, 
  "id": "api.mdn.RegExp", 
  "size": {
    "zipped": 144, 
    "optimized": 233, 
    "compressed": 233
  }
},'api.mdn.RegExp');