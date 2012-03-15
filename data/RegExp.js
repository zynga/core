apibrowser.callback({
  "package": "", 
  "basename": "RegExp", 
  "construct": {
    "init": "RegExp", 
    "doc": "<p>Creates a regular expression object for matching text with a <code class=\"param\">pattern</code> and optional <code class=\"param\">flags</code>.</p>\n", 
    "params": [
      {
        "position": 0, 
        "type": [
          "String"
        ], 
        "name": "pattern"
      }, 
      {
        "position": 1, 
        "type": [
          "String"
        ], 
        "name": "flags"
      }
    ], 
    "tags": [
      {
        "name": "main"
      }
    ], 
    "sourceLink": "source:api.mdn.RegExp~6", 
    "line": 6, 
    "isFunction": true
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
        "Object"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "String"
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
      "sourceLink": "source:api.mdn.RegExp~11", 
      "fromLink": "member:api.mdn.RegExp~global", 
      "doc": "<p>Whether to test the regular expression against all possible matches in a string, or only against the first.</p>\n", 
      "line": 11, 
      "type": "Boolean", 
      "visibility": "public", 
      "summary": "Whether to test the regular expression against all possible matches in a string, or only against the first."
    }, 
    {
      "from": "api.mdn.RegExp", 
      "name": "ignoreCase", 
      "sourceLink": "source:api.mdn.RegExp~14", 
      "fromLink": "member:api.mdn.RegExp~ignoreCase", 
      "doc": "<p>Whether to ignore case while attempting a match in a string.</p>\n", 
      "line": 14, 
      "type": "Boolean", 
      "visibility": "public", 
      "summary": "Whether to ignore case while attempting a match in a string."
    }, 
    {
      "from": "api.mdn.RegExp", 
      "name": "lastIndex", 
      "sourceLink": "source:api.mdn.RegExp~17", 
      "fromLink": "member:api.mdn.RegExp~lastIndex", 
      "doc": "<p>The index at which to start the next match.</p>\n", 
      "line": 17, 
      "type": "Integer", 
      "visibility": "public", 
      "summary": "The index at which to start the next match."
    }, 
    {
      "from": "api.mdn.RegExp", 
      "name": "multiline", 
      "sourceLink": "source:api.mdn.RegExp~20", 
      "fromLink": "member:api.mdn.RegExp~multiline", 
      "doc": "<p>Whether or not to search in strings across multiple lines.</p>\n", 
      "line": 20, 
      "type": "Boolean", 
      "visibility": "public", 
      "summary": "Whether or not to search in strings across multiple lines."
    }, 
    {
      "from": "api.mdn.RegExp", 
      "name": "source", 
      "sourceLink": "source:api.mdn.RegExp~23", 
      "fromLink": "member:api.mdn.RegExp~source", 
      "doc": "<p>The text of the pattern.</p>\n", 
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
        "Boolean"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "String"
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
        "Map"
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
        "String"
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