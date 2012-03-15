apibrowser.callback({
  "statics": [
    {
      "name": "cancelRequestAnimationFrame", 
      "sourceLink": "source:ext.RequestAnimationFrame~92", 
      "visibility": "public", 
      "summary": "Stops the animation scheduled under the given handle.", 
      "params": [
        {
          "position": 0, 
          "type": [
            "var"
          ], 
          "name": "handle"
        }
      ], 
      "doc": "<p>Stops the animation scheduled under the given <code class=\"param\">handle</code>.</p>\n\n<p>See also: <a href=\"https://developer.mozilla.org/en/DOM/window.requestAnimationFrame\">https://developer.mozilla.org/en/DOM/window.requestAnimationFrame</a></p>\n", 
      "line": 92, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "requestAnimationFrame", 
      "doc": "<p>Tells the browser that you wish to perform an animation; this requests that the browser schedule a\nrepaint of the window for the next animation frame. The method takes as an argument a <code class=\"param\">callback</code> to\nbe invoked before the repaint and a <code class=\"param\">root</code> to specifying the element that visually bounds the entire animation.\nReturns a handle to cancel the request using <a href=\"#~cancelRequestAnimationFrame\"><code>cancelRequestAnimationFrame</code></a>.</p>\n\n<p>See also: <a href=\"https://developer.mozilla.org/en/DOM/window.requestAnimationFrame\">https://developer.mozilla.org/en/DOM/window.requestAnimationFrame</a></p>\n", 
      "visibility": "public", 
      "summary": "Tells the browser that you wish to perform an animation; this requests that the browser schedule a repaint of the window for the next animation frame.", 
      "returns": [
        "var"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "Function"
          ], 
          "name": "callback"
        }, 
        {
          "position": 1, 
          "optional": true, 
          "name": "root", 
          "type": [
            "Element"
          ]
        }
      ], 
      "sourceLink": "source:ext.RequestAnimationFrame~57", 
      "line": 57, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "ext", 
  "basename": "RequestAnimationFrame", 
  "permutations": [], 
  "uses": [
    "core.Main"
  ], 
  "usedBy": [
    "core.effect.Animate"
  ], 
  "main": {
    "name": "global", 
    "extension": true, 
    "tags": [], 
    "doc": "<p>Adds new style <code>requestAnimationFrame</code> API to browser engines which are missing it.</p>\n", 
    "line": 47, 
    "type": "core.Main"
  }, 
  "id": "ext.RequestAnimationFrame", 
  "size": {
    "zipped": 366, 
    "optimized": 630, 
    "compressed": 1019
  }
},'ext.RequestAnimationFrame');