apibrowser.callback({
  "statics": [
    {
      "name": "checksum", 
      "doc": "<p>Returns the MD5 checksum of the given <code class=\"param\">str</code> as a raw string.</p>\n", 
      "visibility": "public", 
      "summary": "Returns the MD5 checksum of the given str as a raw string.", 
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
          "name": "str"
        }
      ], 
      "sourceLink": "source:core.crypt.MD5~24", 
      "line": 24, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "hmac", 
      "doc": "<p>Returns a HMAC (Hash-based Message Authentication Code) using the MD5 hash function as a raw string.</p>\n\n<p>HMAC is a specific construction for calculating a message authentication code (MAC) involving a\ncryptographic hash function in combination with a secret key.</p>\n\n<ul>\n<li><code class=\"param\">key</code> The secret key for verifying authenticity</li>\n<li><code class=\"param\">str</code> Message to compute the HMAC for</li>\n</ul>\n", 
      "visibility": "public", 
      "summary": "Returns a HMAC (Hash-based Message Authentication Code) using the MD5 hash function as a raw string.", 
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
          "name": "key"
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
          "name": "str"
        }
      ], 
      "sourceLink": "source:core.crypt.MD5~42", 
      "line": 42, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "core.crypt", 
  "basename": "MD5", 
  "permutations": [], 
  "uses": [
    "core.Module", 
    "core.crypt.Util"
  ], 
  "main": {
    "name": "core.crypt.MD5", 
    "tags": [], 
    "doc": "<p>A JavaScript implementation of the RSA Data Security, Inc. MD5 Message Digest Algorithm, as defined in RFC 1321.</p>\n", 
    "summary": "A JavaScript implementation of the RSA Data Security, Inc.", 
    "line": 19, 
    "type": "core.Module"
  }, 
  "id": "core.crypt.MD5", 
  "size": {
    "zipped": 1325, 
    "optimized": 3325, 
    "compressed": 4053
  }
},'core.crypt.MD5');