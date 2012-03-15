apibrowser.callback({
  "statics": [
    {
      "constant": true, 
      "name": "VALUE", 
      "doc": "<p>System identification</p>\n", 
      "visibility": "public", 
      "summary": "System identification.", 
      "sourceLink": "source:core.detect.System~176", 
      "line": 176, 
      "type": "String"
    }
  ], 
  "assets": [], 
  "package": "core.detect", 
  "basename": "System", 
  "permutations": [
    "platform"
  ], 
  "uses": [
    "core.Env", 
    "core.Module"
  ], 
  "main": {
    "name": "core.detect.System", 
    "tags": [], 
    "doc": "<p>Detects the system where the application is running on. This is more detailed\nthan just the platform as on most of them it includes the specific version\ne.g. Windows XP or a specific variant e.g. Android.</p>\n\n<p>The listed constants are automatically filled on the initialization\nphase of the class. The defaults listed in the API viewer need not\nto be identical to the values at runtime.</p>\n", 
    "summary": "Detects the system where the application is running on.", 
    "line": 173, 
    "type": "core.Module"
  }, 
  "id": "core.detect.System", 
  "size": {
    "zipped": 642, 
    "optimized": 1382, 
    "compressed": 1931
  }
},'core.detect.System');