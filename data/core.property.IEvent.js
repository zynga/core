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
      "doc": "<p>Fires the given event <code class=\"param\">type</code> with the data of the properties\ncurrent <code class=\"param\">value</code> and <code class=\"param\">old</code> value to the object&#39;s event system.</p>\n", 
      "visibility": "public", 
      "summary": "Fires the given event type with the data of the properties current value and old value to the object&#39;s event system.", 
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
          "name": "type"
        }, 
        {
          "position": 1, 
          "type": [
            {
              "pseudo": true, 
              "name": "var"
            }
          ], 
          "name": "value"
        }, 
        {
          "position": 2, 
          "type": [
            {
              "pseudo": true, 
              "name": "var"
            }
          ], 
          "name": "old"
        }
      ], 
      "sourceLink": "source:core.property.IEvent~19", 
      "line": 19, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "usedBy": [
    "core.Class"
  ], 
  "main": {
    "name": "core.property.IEvent", 
    "tags": [], 
    "doc": "<p>For classes which use event firing properties.</p>\n", 
    "summary": "For classes which use event firing properties.", 
    "line": 11, 
    "type": "core.Interface"
  }, 
  "id": "core.property.IEvent", 
  "size": {
    "zipped": 76, 
    "optimized": 74, 
    "compressed": 74
  }
},'core.property.IEvent');