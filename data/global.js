apibrowser.callback({
  "statics": [
    {
      "from": "ext.Base64", 
      "name": "atob", 
      "doc": "<p>Decodes a <code class=\"param\">string</code> of data which has been encoded using base-64 encoding.</p>\n\n<p>See also: <a href=\"https://developer.mozilla.org/en/DOM/window.atob\">https://developer.mozilla.org/en/DOM/window.atob</a></p>\n", 
      "visibility": "public", 
      "summary": "Decodes a string of data which has been encoded using base-64 encoding.", 
      "returns": [
        "String"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "String"
          ], 
          "name": "string"
        }
      ], 
      "sourceLink": "source:ext.Base64~70", 
      "fromLink": "static:ext.Base64~atob", 
      "line": 70, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "from": "ext.Base64", 
      "name": "btoa", 
      "doc": "<p>Creates a base-64 encoded ASCII string from a <code class=\"param\">string</code> of binary data.</p>\n\n<p>See also: <a href=\"https://developer.mozilla.org/en/DOM/window.btoa\">https://developer.mozilla.org/en/DOM/window.btoa</a></p>\n", 
      "visibility": "public", 
      "summary": "Creates a base-64 encoded ASCII string from a string of binary data.", 
      "returns": [
        "String"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "String"
          ], 
          "name": "string"
        }
      ], 
      "sourceLink": "source:ext.Base64~36", 
      "fromLink": "static:ext.Base64~btoa", 
      "line": 36, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "visibility": "public", 
      "fromLink": "static:ext.RequestAnimationFrame~cancelRequestAnimationFrame", 
      "line": 92, 
      "isFunction": true, 
      "from": "ext.RequestAnimationFrame", 
      "name": "cancelRequestAnimationFrame", 
      "doc": "<p>Stops the animation scheduled under the given <code class=\"param\">handle</code>.</p>\n\n<p>See also: <a href=\"https://developer.mozilla.org/en/DOM/window.requestAnimationFrame\">https://developer.mozilla.org/en/DOM/window.requestAnimationFrame</a></p>\n", 
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
      "sourceLink": "source:ext.RequestAnimationFrame~92", 
      "type": "Function"
    }, 
    {
      "visibility": "public", 
      "fromLink": "static:ext.Immediate~clearImmediate", 
      "line": 64, 
      "isFunction": true, 
      "from": "ext.Immediate", 
      "name": "clearImmediate", 
      "doc": "<p>This method clears the action specified by <a href=\"#~setImmediate\"><code>setImmediate</code></a> via the given <code class=\"param\">handle</code>.</p>\n\n<p>See also: <a href=\"https://developer.mozilla.org/en/Document_Object_Model_(DOM)/window.clearImmediate\">https://developer.mozilla.org/en/Document_Object_Model_(DOM)/window.clearImmediate</a></p>\n", 
      "summary": "This method clears the action specified by setImmediate via the given handle.", 
      "params": [
        {
          "position": 0, 
          "type": [
            "var"
          ], 
          "name": "handle"
        }
      ], 
      "sourceLink": "source:ext.Immediate~64", 
      "type": "Function"
    }, 
    {
      "from": "ext.ExecScript", 
      "name": "execScript", 
      "doc": "<p>Executes the specified script <code class=\"param\">expression</code> in global context.</p>\n\n<p>This emulates the global <code>execScript</code> function of Internet Explorer for other browsers.\nSee also: <a href=\"http://msdn.microsoft.com/en-us/library/ms536420(v=vs.85).aspx\">http://msdn.microsoft.com/en-us/library/ms536420(v=vs.85).aspx</a></p>\n", 
      "visibility": "public", 
      "summary": "Executes the specified script expression in global context.", 
      "returns": [
        "null"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "String"
          ], 
          "name": "expression"
        }
      ], 
      "sourceLink": "source:ext.ExecScript~43", 
      "fromLink": "static:ext.ExecScript~execScript", 
      "line": 43, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "from": "ext.RequestAnimationFrame", 
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
      "fromLink": "static:ext.RequestAnimationFrame~requestAnimationFrame", 
      "line": 57, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "from": "ext.Immediate", 
      "name": "setImmediate", 
      "doc": "<p>This method is used to break-up long running operations and run a callback <code class=\"param\">func</code> immediately after the browser\nhas completed other operations such as events and display updates.</p>\n\n<p>See also: <a href=\"https://developer.mozilla.org/en/Document_Object_Model_(DOM)/window.setImmediate\">https://developer.mozilla.org/en/Document_Object_Model_(DOM)/window.setImmediate</a></p>\n", 
      "visibility": "public", 
      "summary": "This method is used to break-up long running operations and run a callback func immediately after the browser has completed other operations such as events and display updates.", 
      "returns": [
        "Identifier"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "Function"
          ], 
          "name": "func"
        }
      ], 
      "sourceLink": "source:ext.Immediate~52", 
      "fromLink": "static:ext.Immediate~setImmediate", 
      "line": 52, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "from": "ext.TimeoutArgs", 
      "name": "setInterval", 
      "doc": "<p>Executes the <code class=\"param\">callback</code> repeatedly, with a fixed time <code class=\"param\">delay</code> between each call to that function.</p>\n\n<p>See also: <a href=\"https://developer.mozilla.org/en/DOM/window.setTimeout\">https://developer.mozilla.org/en/DOM/window.setTimeout</a></p>\n", 
      "visibility": "public", 
      "summary": "Executes the callback repeatedly, with a fixed time delay between each call to that function.", 
      "returns": [
        "Call"
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
          "type": [
            "Number"
          ], 
          "name": "delay"
        }
      ], 
      "sourceLink": "source:ext.TimeoutArgs~53", 
      "fromLink": "static:ext.TimeoutArgs~setInterval", 
      "line": 53, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "from": "ext.TimeoutArgs", 
      "name": "setTimeout", 
      "doc": "<p>Executes the <code class=\"param\">callback</code> after specified <code class=\"param\">delay</code>.</p>\n\n<p>See also: <a href=\"https://developer.mozilla.org/en/DOM/window.setTimeout\">https://developer.mozilla.org/en/DOM/window.setTimeout</a></p>\n", 
      "visibility": "public", 
      "summary": "Executes the callback after specified delay.", 
      "returns": [
        "Call"
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
          "type": [
            "Number"
          ], 
          "name": "delay"
        }
      ], 
      "sourceLink": "source:ext.TimeoutArgs~44", 
      "fromLink": "static:ext.TimeoutArgs~setTimeout", 
      "line": 44, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "package": "", 
  "basename": "global", 
  "uses": [], 
  "main": {
    "from": [
      "ext.Base64", 
      "ext.Immediate", 
      "ext.TimeoutArgs", 
      "ext.ExecScript", 
      "ext.RequestAnimationFrame"
    ], 
    "type": "Extend", 
    "name": "global", 
    "doc": "Extensions for global"
  }, 
  "id": "global"
},'global');