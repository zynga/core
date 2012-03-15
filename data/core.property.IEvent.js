apibrowser.callback({
  "assets": [], 
  "package": "core.property", 
  "basename": "IEvent", 
  "permutations": [], 
  "uses": [
    "core.Interface"
  ], 
  "members": [
    {
      "name": "fireEvent", 
      "sourceLink": "source:core.property.IEvent~19", 
      "visibility": "public", 
      "summary": "Fires the given event type with the data of the properties current value and old value to the object&#39;s event system.", 
      "params": [
        {
          "position": 0, 
          "type": [
            "String"
          ], 
          "name": "type"
        }, 
        {
          "position": 1, 
          "type": [
            "var"
          ], 
          "name": "value"
        }, 
        {
          "position": 2, 
          "type": [
            "var"
          ], 
          "name": "old"
        }
      ], 
      "doc": "<p>Fires the given event <code class=\"param\">type</code> with the data of the properties\ncurrent <code class=\"param\">value</code> and <code class=\"param\">old</code> value to the object&#39;s event system.</p>\n", 
      "line": 19, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "usedBy": [
    "core.Class"
  ], 
  "main": {
    "doc": "<p>For classes which use event firing properties.</p>\n", 
    "line": 11, 
    "type": "core.Interface", 
    "name": "core.property.IEvent", 
    "tags": []
  }, 
  "id": "core.property.IEvent", 
  "size": {
    "zipped": 76, 
    "optimized": 74, 
    "compressed": 74
  }
},'core.property.IEvent');