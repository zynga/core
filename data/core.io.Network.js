apibrowser.callback({
  "statics": [
    {
      "name": "isOnline", 
      "doc": "<p>Returns whether the client is online based on the last check</p>\n", 
      "visibility": "public", 
      "summary": "Returns whether the client is online based on the last check.", 
      "returns": [
        {
          "builtin": true, 
          "name": "Boolean"
        }
      ], 
      "sourceLink": "source:core.io.Network~81", 
      "line": 81, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "startMonitoring", 
      "doc": "<p>Starts the network monitoring with the given <code class=\"param\">interval</code> in milliseconds.</p>\n", 
      "visibility": "public", 
      "summary": "Starts the network monitoring with the given interval in milliseconds.", 
      "params": [
        {
          "default": "1000", 
          "position": 0, 
          "optional": true, 
          "name": "interval", 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "Number"
            }
          ]
        }
      ], 
      "sourceLink": "source:core.io.Network~89", 
      "line": 89, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "stopMonitoring", 
      "sourceLink": "source:core.io.Network~103", 
      "visibility": "public", 
      "summary": "Stop network monitoring.", 
      "doc": "<p>Stop network monitoring</p>\n", 
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
    "name": "core.io.Network", 
    "tags": [], 
    "doc": "<p>Generic network monitor and inspection</p>\n", 
    "summary": "Generic network monitor and inspection.", 
    "line": 76, 
    "type": "core.Module"
  }, 
  "id": "core.io.Network", 
  "size": {
    "zipped": 442, 
    "optimized": 754, 
    "compressed": 1262
  }
},'core.io.Network');