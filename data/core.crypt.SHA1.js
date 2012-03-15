apibrowser.callback({
  "statics": [
    {
      "name": "checksum", 
      "doc": "<p>Returns the SHA1 checksum of the given <code class=\"param\">str</code> as a raw string.</p>\n", 
      "visibility": "public", 
      "summary": "Returns the SHA1 checksum of the given str as a raw string.", 
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
      "sourceLink": "source:core.crypt.SHA1~24", 
      "line": 24, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "hmac", 
      "doc": "<p>Returns a HMAC (Hash-based Message Authentication Code) using the SHA1 hash function as a raw string.</p>\n\n<p>HMAC is a specific construction for calculating a message authentication code (MAC) involving a\ncryptographic hash function in combination with a secret key.</p>\n\n<ul>\n<li><code class=\"param\">key</code> The secret key for verifying authenticity</li>\n<li><code class=\"param\">str</code> Message to compute the HMAC for</li>\n</ul>\n", 
      "visibility": "public", 
      "summary": "Returns a HMAC (Hash-based Message Authentication Code) using the SHA1 hash function as a raw string.", 
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
      "sourceLink": "source:core.crypt.SHA1~42", 
      "line": 42, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "core.crypt", 
  "basename": "SHA1", 
  "permutations": [], 
  "uses": [
    "core.Module", 
    "core.crypt.Util"
  ], 
  "usedBy": [
    "core.Env"
  ], 
  "main": {
    "doc": "<p>A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined in FIPS 180-1</p>\n", 
    "line": 19, 
    "type": "core.Module", 
    "name": "core.crypt.SHA1", 
    "tags": []
  }, 
  "id": "core.crypt.SHA1", 
  "size": {
    "zipped": 679, 
    "optimized": 1191, 
    "compressed": 1644
  }
},'core.crypt.SHA1');