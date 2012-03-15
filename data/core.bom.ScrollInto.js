apibrowser.callback({
  "statics": [
    {
      "name": "scroll", 
      "sourceLink": "source:core.bom.ScrollInto~205", 
      "visibility": "public", 
      "summary": "The method scrolls the element into view with optionally configured enforced alignments using alignX and alignY.", 
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
          "optional": true, 
          "name": "alignX", 
          "type": [
            "String"
          ]
        }, 
        {
          "position": 2, 
          "optional": true, 
          "name": "alignY", 
          "type": [
            "String"
          ]
        }
      ], 
      "doc": "<p>The method scrolls the <code class=\"param\">element</code> into view with\noptionally configured enforced alignments using <code class=\"param\">alignX</code>\nand <code class=\"param\">alignY</code>.</p>\n", 
      "line": 205, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "scrollX", 
      "sourceLink": "source:core.bom.ScrollInto~21", 
      "visibility": "public", 
      "summary": "Scrolls the element into view (x-axis only).", 
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
          "optional": true, 
          "name": "align", 
          "type": [
            "String"
          ]
        }
      ], 
      "doc": "<p>Scrolls the <code class=\"param\">element</code> into view (x-axis only).\nThe optional <code class=\"param\">align</code> could be configured with\n<code>left</code> or <code>right</code> to enforce alignment. The default behavior\nis to scroll with the minimum effort to make the element visible.</p>\n", 
      "line": 21, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "scrollY", 
      "sourceLink": "source:core.bom.ScrollInto~113", 
      "visibility": "public", 
      "summary": "Scrolls the element into view (y-axis only).", 
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
          "optional": true, 
          "name": "align", 
          "type": [
            "String"
          ]
        }
      ], 
      "doc": "<p>Scrolls the <code class=\"param\">element</code> into view (y-axis only).\nThe optional <code class=\"param\">align</code> could be configured with\n<code>top</code> or <code>bottom</code> to enforce alignment. The default behavior\nis to scroll with the minimum effort to make the element visible.</p>\n", 
      "line": 113, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "core.bom", 
  "basename": "ScrollInto", 
  "permutations": [], 
  "uses": [
    "core.Module", 
    "core.bom.Offset", 
    "core.bom.Style", 
    "core.bom.Viewport"
  ], 
  "usedBy": [
    "api.Browser"
  ], 
  "main": {
    "doc": "<p>Offers a cross browser solution for <code>scrollIntoView</code> with good support\nfor doing a minimum effort scrolling which is not supported by native\nmethods.</p>\n", 
    "line": 13, 
    "type": "core.Module", 
    "name": "core.bom.ScrollInto", 
    "tags": []
  }, 
  "id": "core.bom.ScrollInto", 
  "size": {
    "zipped": 618, 
    "optimized": 1536, 
    "compressed": 3904
  }
},'core.bom.ScrollInto');