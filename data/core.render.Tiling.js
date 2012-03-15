apibrowser.callback({
  "assets": [], 
  "package": "core.render", 
  "basename": "Tiling", 
  "permutations": [], 
  "uses": [
    "core.Class"
  ], 
  "members": [
    {
      "name": "render", 
      "sourceLink": "source:core.render.Tiling~47", 
      "visibility": "public", 
      "summary": "Renders the given location on the area defined by setup by calling paint(row, column, left, top, width, height, zoom) as needed.", 
      "params": [
        {
          "position": 0, 
          "type": [
            "Number"
          ], 
          "name": "left"
        }, 
        {
          "position": 1, 
          "type": [
            "Number"
          ], 
          "name": "top"
        }, 
        {
          "position": 2, 
          "type": [
            "Number"
          ], 
          "name": "zoom"
        }, 
        {
          "position": 3, 
          "type": [
            "Function"
          ], 
          "name": "paint"
        }
      ], 
      "doc": "<p>Renders the given location on the area defined by <a href=\"#~setup\"><code>setup</code></a> by calling\n<code>paint(row, column, left, top, width, height, zoom)</code> as needed.</p>\n\n<ul>\n<li><code class=\"param\">left</code> Left position to render</li>\n<li><code class=\"param\">top</code> Top position to render</li>\n<li><code class=\"param\">zoom</code> Current zoom level (should be applied to <code>left</code> and <code>top</code> already)</li>\n<li><code class=\"param\">paint</code> Callback method for every cell to paint.</li>\n</ul>\n", 
      "line": 47, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "setup", 
      "sourceLink": "source:core.render.Tiling~26", 
      "visibility": "public", 
      "summary": "This method is required to being called every time the cell, outer or inner dimensions are being modified.", 
      "params": [
        {
          "position": 0, 
          "type": [
            "Number"
          ], 
          "name": "clientWidth"
        }, 
        {
          "position": 1, 
          "type": [
            "Number"
          ], 
          "name": "clientHeight"
        }, 
        {
          "position": 2, 
          "type": [
            "Number"
          ], 
          "name": "contentWidth"
        }, 
        {
          "position": 3, 
          "type": [
            "Number"
          ], 
          "name": "contentHeight"
        }, 
        {
          "position": 4, 
          "type": [
            "Number"
          ], 
          "name": "cellWidth"
        }, 
        {
          "position": 5, 
          "type": [
            "Number"
          ], 
          "name": "cellHeight"
        }
      ], 
      "doc": "<p>This method is required to being called every time the cell, outer or inner dimensions are being modified.</p>\n\n<ul>\n<li><code class=\"param\">clientWidth</code> Inner width of container</li>\n<li><code class=\"param\">clientHeight</code> Inner height of container</li>\n<li><code class=\"param\">contentWidth</code> Outer width of content</li>\n<li><code class=\"param\">contentHeight</code> Outer height of content</li>\n<li><code class=\"param\">cellWidth</code> Width of each cell to render</li>\n<li><code class=\"param\">cellHeight</code> Height of each cell to render</li>\n</ul>\n", 
      "line": 26, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "main": {
    "doc": "<p>Helper class for doing cell tiling and distribution. Uses a paint callbacks on a\npredefined area when location to render is being modified.</p>\n", 
    "line": 12, 
    "type": "core.Class", 
    "name": "core.render.Tiling", 
    "tags": []
  }, 
  "id": "core.render.Tiling", 
  "size": {
    "zipped": 357, 
    "optimized": 610, 
    "compressed": 1406
  }
},'core.render.Tiling');