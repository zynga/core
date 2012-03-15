apibrowser.callback({
  "statics": [
    {
      "name": "reset", 
      "sourceLink": "source:core.bom.Position~72", 
      "visibility": "public", 
      "summary": "Resets the position of the given element.", 
      "params": [
        {
          "position": 0, 
          "type": [
            "Element"
          ], 
          "name": "element"
        }
      ], 
      "doc": "<p>Resets the position of the given <code class=\"param\">element</code>.</p>\n", 
      "line": 72, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "set", 
      "sourceLink": "source:core.bom.Position~52", 
      "visibility": "public", 
      "summary": "Positions the given element on coordinates x, y and z.", 
      "params": [
        {
          "position": 0, 
          "type": [
            "Element"
          ], 
          "name": "element"
        }, 
        {
          "position": 1, 
          "type": [
            "Number"
          ], 
          "name": "x"
        }, 
        {
          "position": 2, 
          "type": [
            "Number"
          ], 
          "name": "y"
        }, 
        {
          "default": "null", 
          "position": 3, 
          "optional": true, 
          "name": "z", 
          "type": [
            "Integer"
          ]
        }, 
        {
          "default": "1", 
          "position": 4, 
          "optional": true, 
          "name": "zoom", 
          "type": [
            "Number"
          ]
        }
      ], 
      "doc": "<p>Positions the given <code class=\"param\">element</code> on coordinates <code class=\"param\">x</code>, <code class=\"param\">y</code> and <code class=\"param\">z</code>.\nOptionally supports zooming using the <code class=\"param\">zoom</code> parameter as well.</p>\n", 
      "line": 52, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "core.bom", 
  "basename": "Position", 
  "permutations": [
    "debug"
  ], 
  "uses": [
    "core.Assert", 
    "core.Env", 
    "core.Module", 
    "core.bom.Style", 
    "core.dom.Node"
  ], 
  "main": {
    "doc": "<p>High performance DOM node positioning with stacking and zooming support</p>\n", 
    "line": 157, 
    "type": "core.Module", 
    "name": "core.bom.Position", 
    "tags": []
  }, 
  "id": "core.bom.Position", 
  "size": {
    "zipped": 381, 
    "optimized": 777, 
    "compressed": 1815
  }
},'core.bom.Position');