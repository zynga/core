apibrowser.callback({
  "package": "", 
  "basename": "RegExp", 
  "construct": {
    "sourceLink": "source:api.mdn.RegExp~6", 
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
    "tags": [
      {
        "name": "main"
      }
    ], 
    "doc": "<p>Creates a regular expression object for matching text with a <code class=\"param\">pattern</code> and optional <code class=\"param\">flags</code>.</p>\n", 
    "line": 6, 
    "isFunction": true, 
    "summary": "Creates a regular expression object for matching text with a pattern and optional flags."
  }, 
  "uses": [], 
  "members": [
    {
      "from": "api.mdn.RegExp", 
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
      "fromLink": "member:api.mdn.RegExp~exec", 
      "line": 26, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "from": "api.mdn.RegExp", 
      "name": "global", 
      "doc": "<p>Whether to test the regular expression against all possible matches in a string, or only against the first.</p>\n", 
      "fromLink": "member:api.mdn.RegExp~global", 
      "sourceLink": "source:api.mdn.RegExp~11", 
      "line": 11, 
      "type": "Boolean", 
      "visibility": "public", 
      "summary": "Whether to test the regular expression against all possible matches in a string, or only against the first."
    }, 
    {
      "from": "api.mdn.RegExp", 
      "name": "ignoreCase", 
      "doc": "<p>Whether to ignore case while attempting a match in a string.</p>\n", 
      "fromLink": "member:api.mdn.RegExp~ignoreCase", 
      "sourceLink": "source:api.mdn.RegExp~14", 
      "line": 14, 
      "type": "Boolean", 
      "visibility": "public", 
      "summary": "Whether to ignore case while attempting a match in a string."
    }, 
    {
      "from": "api.mdn.RegExp", 
      "name": "lastIndex", 
      "doc": "<p>The index at which to start the next match.</p>\n", 
      "fromLink": "member:api.mdn.RegExp~lastIndex", 
      "sourceLink": "source:api.mdn.RegExp~17", 
      "line": 17, 
      "type": "Integer", 
      "visibility": "public", 
      "summary": "The index at which to start the next match."
    }, 
    {
      "from": "api.mdn.RegExp", 
      "name": "multiline", 
      "doc": "<p>Whether or not to search in strings across multiple lines.</p>\n", 
      "fromLink": "member:api.mdn.RegExp~multiline", 
      "sourceLink": "source:api.mdn.RegExp~20", 
      "line": 20, 
      "type": "Boolean", 
      "visibility": "public", 
      "summary": "Whether or not to search in strings across multiple lines."
    }, 
    {
      "from": "api.mdn.RegExp", 
      "name": "source", 
      "doc": "<p>The text of the pattern.</p>\n", 
      "fromLink": "member:api.mdn.RegExp~source", 
      "sourceLink": "source:api.mdn.RegExp~23", 
      "line": 23, 
      "type": "String", 
      "visibility": "public", 
      "summary": "The text of the pattern."
    }, 
    {
      "from": "api.mdn.RegExp", 
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
      "fromLink": "member:api.mdn.RegExp~test", 
      "line": 29, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "visibility": "public", 
      "fromLink": "member:api.mdn.RegExp~toSource", 
      "line": 32, 
      "isFunction": true, 
      "from": "api.mdn.RegExp", 
      "name": "toSource", 
      "sourceLink": "source:api.mdn.RegExp~32", 
      "summary": "Returns an object literal representing the specified object; you can use this value to create a new object.", 
      "returns": [
        {
          "linkable": true, 
          "name": "Map"
        }
      ], 
      "doc": "<p>Returns an object literal representing the specified object; you can use this value to create a new object.</p>\n", 
      "type": "Function"
    }, 
    {
      "visibility": "public", 
      "fromLink": "member:api.mdn.RegExp~toString", 
      "line": 35, 
      "isFunction": true, 
      "from": "api.mdn.RegExp", 
      "name": "toString", 
      "sourceLink": "source:api.mdn.RegExp~35", 
      "summary": "Returns a string representing the specified object.", 
      "returns": [
        {
          "linkable": true, 
          "builtin": true, 
          "name": "String"
        }
      ], 
      "doc": "<p>Returns a string representing the specified object.</p>\n", 
      "type": "Function"
    }
  ], 
  "main": {
    "from": [
      "api.mdn.RegExp"
    ], 
    "type": "Extend", 
    "name": "RegExp", 
    "doc": "<p>Creates a regular expression object for matching text with a <code class=\"param\">pattern</code> and optional <code class=\"param\">flags</code>.</p>\n"
  }, 
  "id": "RegExp"
},'RegExp');