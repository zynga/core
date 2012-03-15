apibrowser.callback({
  "statics": [
    {
      "name": "atob", 
      "doc": "<p>Decodes a <code class=\"param\">string</code> of data which has been encoded using base-64 encoding.</p>\n\n<p>See also: <a href=\"https://developer.mozilla.org/en/DOM/window.atob\">https://developer.mozilla.org/en/DOM/window.atob</a></p>\n", 
      "visibility": "public", 
      "summary": "Decodes a string of data which has been encoded using base-64 encoding.", 
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
          "name": "string"
        }
      ], 
      "sourceLink": "source:ext.Base64~70", 
      "line": 70, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "btoa", 
      "doc": "<p>Creates a base-64 encoded ASCII string from a <code class=\"param\">string</code> of binary data.</p>\n\n<p>See also: <a href=\"https://developer.mozilla.org/en/DOM/window.btoa\">https://developer.mozilla.org/en/DOM/window.btoa</a></p>\n", 
      "visibility": "public", 
      "summary": "Creates a base-64 encoded ASCII string from a string of binary data.", 
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
          "name": "string"
        }
      ], 
      "sourceLink": "source:ext.Base64~36", 
      "line": 36, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "ext", 
  "basename": "Base64", 
  "permutations": [], 
  "uses": [
    "core.Main"
  ], 
  "usedBy": [
    "ext.sugar.String"
  ], 
  "main": {
    "name": "global", 
    "extension": true, 
    "tags": [], 
    "doc": "<p>Polyfill for Base64 support which is natively implemented in most recent browsers.</p>\n", 
    "summary": "Polyfill for Base64 support which is natively implemented in most recent browsers.", 
    "line": 29, 
    "type": "core.Main"
  }, 
  "id": "ext.Base64", 
  "size": {
    "zipped": 470, 
    "optimized": 753, 
    "compressed": 1231
  }
},'ext.Base64');