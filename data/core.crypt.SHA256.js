apibrowser.callback({
  "statics": [
    {
      "name": "checksum", 
      "doc": "<p>Returns the SHA256 checksum of the given <code class=\"param\">str</code> as a raw string.</p>\n", 
      "visibility": "public", 
      "summary": "Returns the SHA256 checksum of the given str as a raw string.", 
      "returns": [
        "String"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "String"
          ], 
          "name": "str"
        }
      ], 
      "sourceLink": "source:core.crypt.SHA256~25", 
      "line": 25, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "hmac", 
      "doc": "<p>Returns a HMAC (Hash-based Message Authentication Code) using the SHA256 hash function as a raw string.</p>\n\n<p>HMAC is a specific construction for calculating a message authentication code (MAC) involving a\ncryptographic hash function in combination with a secret key.</p>\n\n<ul>\n<li><code class=\"param\">key</code> The secret key for verifying authenticity</li>\n<li><code class=\"param\">str</code> Message to compute the HMAC for</li>\n</ul>\n", 
      "visibility": "public", 
      "summary": "Returns a HMAC (Hash-based Message Authentication Code) using the SHA256 hash function as a raw string.", 
      "returns": [
        "String"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "String"
          ], 
          "name": "key"
        }, 
        {
          "position": 1, 
          "type": [
            "String"
          ], 
          "name": "str"
        }
      ], 
      "sourceLink": "source:core.crypt.SHA256~43", 
      "line": 43, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "core.crypt", 
  "basename": "SHA256", 
  "permutations": [], 
  "uses": [
    "core.Module", 
    "core.crypt.Util"
  ], 
  "main": {
    "doc": "<p>A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined in FIPS 180-2.</p>\n", 
    "line": 20, 
    "type": "core.Module", 
    "name": "core.crypt.SHA256", 
    "tags": []
  }, 
  "id": "core.crypt.SHA256", 
  "size": {
    "zipped": 1199, 
    "optimized": 2207, 
    "compressed": 2913
  }
},'core.crypt.SHA256');