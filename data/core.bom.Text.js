apibrowser.callback({
  "statics": [
    {
      "name": "measure", 
      "doc": "<p>Returns the <code>width</code> and <code>height</code> of the given <code class=\"param\">text</code> with the given\n<code class=\"param\">styles</code> (supports <code>fontFamily</code>, <code>fontSize</code>, <code>fontStyle</code> and <code>lineHeight</code>).\nSupports optional maximum <code class=\"param\">width</code> for supporting text wrapping.</p>\n", 
      "visibility": "public", 
      "summary": "Returns the width and height of the given text with the given styles (supports fontFamily, fontSize, fontStyle and lineHeight).", 
      "returns": [
        "Map"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "String"
          ], 
          "name": "text"
        }, 
        {
          "position": 1, 
          "type": [
            "Map"
          ], 
          "name": "styles"
        }, 
        {
          "default": "\"auto\"", 
          "position": 2, 
          "optional": true, 
          "name": "width", 
          "type": [
            "Number"
          ]
        }
      ], 
      "sourceLink": "source:core.bom.Text~35", 
      "line": 35, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "core.bom", 
  "basename": "Text", 
  "permutations": [], 
  "uses": [
    "core.Module"
  ], 
  "main": {
    "doc": "<p>Utility class to work with text e.g. measuring, formatting, etc.</p>\n", 
    "line": 28, 
    "type": "core.Module", 
    "name": "core.bom.Text", 
    "tags": []
  }, 
  "id": "core.bom.Text", 
  "size": {
    "zipped": 295, 
    "optimized": 495, 
    "compressed": 770
  }
},'core.bom.Text');