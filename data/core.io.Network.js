apibrowser.callback({
  "statics": [
    {
      "name": "isOnline", 
      "doc": "<p>Returns whether the client is online based on the last check</p>\n", 
      "visibility": "public", 
      "returns": [
        "Boolean"
      ], 
      "sourceLink": "source:core.io.Network~81", 
      "line": 81, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "startMonitoring", 
      "sourceLink": "source:core.io.Network~89", 
      "visibility": "public", 
      "summary": "Starts the network monitoring with the given interval in milliseconds.", 
      "params": [
        {
          "default": "1000", 
          "position": 0, 
          "optional": true, 
          "name": "interval", 
          "type": [
            "Number"
          ]
        }
      ], 
      "doc": "<p>Starts the network monitoring with the given <code class=\"param\">interval</code> in milliseconds.</p>\n", 
      "line": 89, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "stopMonitoring", 
      "doc": "<p>Stop network monitoring</p>\n", 
      "visibility": "public", 
      "sourceLink": "source:core.io.Network~103", 
      "line": 103, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "core.io", 
  "basename": "Network", 
  "permutations": [], 
  "uses": [
    "core.Module"
  ], 
  "main": {
    "doc": "<p>Generic network monitor and inspection</p>\n", 
    "line": 76, 
    "type": "core.Module", 
    "name": "core.io.Network", 
    "tags": []
  }, 
  "id": "core.io.Network", 
  "size": {
    "zipped": 442, 
    "optimized": 754, 
    "compressed": 1262
  }
},'core.io.Network');