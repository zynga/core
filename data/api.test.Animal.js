apibrowser.callback({
  "includedBy": [
    "api.test.Dog"
  ], 
  "assets": [], 
  "package": "api.test", 
  "basename": "Animal", 
  "permutations": [], 
  "id": "api.test.Animal", 
  "uses": [
    "api.test.Food", 
    "core.Class"
  ], 
  "members": [
    {
      "name": "feed", 
      "doc": "<p>This method feeds the animal with <code class=\"param\">food</code>.\nRemember to not overfeed your animal, because it gains <a href=\"#property:~weight\"><code>weight</code></a>\neverytime you feed it.</p>\n", 
      "visibility": "public", 
      "summary": "This method feeds the animal with food.", 
      "returns": [
        {
          "builtin": true, 
          "name": "Boolean"
        }
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            {
              "linkable": true, 
              "name": "api.test.Food"
            }
          ], 
          "name": "food"
        }
      ], 
      "sourceLink": "source:api.test.Animal~59", 
      "line": 59, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "isHungry", 
      "doc": "<p>This method returns whether the animal is hungry or not.</p>\n", 
      "visibility": "public", 
      "summary": "This method returns whether the animal is hungry or not.", 
      "returns": [
        {
          "builtin": true, 
          "name": "Boolean"
        }
      ], 
      "sourceLink": "source:api.test.Animal~49", 
      "line": 49, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "usedBy": [
    "api.test.Dog"
  ], 
  "main": {
    "name": "api.test.Animal", 
    "tags": [], 
    "doc": "<p>This is the Base Class in the api Browser&#39;s\ndemos. It shows you how to use the <a href=\"#core\"><code>core</code></a>\nJavaScript framework.</p>\n", 
    "summary": "This is the Base Class in the api Browser&#39;s demos.", 
    "line": 7, 
    "type": "core.Class"
  }, 
  "properties": [
    {
      "name": "color", 
      "nullable": true, 
      "fire": "changeColor", 
      "doc": "<p>This will set the color of the animal</p>\n", 
      "summary": "This will set the color of the animal.", 
      "sourceLink": "source:api.test.Animal~14", 
      "apply": true, 
      "line": 14, 
      "type": "String"
    }, 
    {
      "name": "hungry", 
      "nullable": false, 
      "fire": "changeHungry", 
      "doc": "<p>This is the holder for the hungry state of the animal</p>\n", 
      "summary": "This is the holder for the hungry state of the animal.", 
      "init": "true", 
      "sourceLink": "source:api.test.Animal~24", 
      "apply": true, 
      "line": 24, 
      "type": "Boolean"
    }, 
    {
      "name": "weight", 
      "nullable": true, 
      "fire": "changeWeight", 
      "doc": "<p>This represents the weight in kilograms of the animal</p>\n", 
      "summary": "This represents the weight in kilograms of the animal.", 
      "sourceLink": "source:api.test.Animal~35", 
      "apply": true, 
      "line": 35, 
      "type": "Number"
    }
  ], 
  "size": {
    "zipped": 243, 
    "optimized": 446, 
    "compressed": 471
  }
},'api.test.Animal');