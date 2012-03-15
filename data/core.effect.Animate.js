apibrowser.callback({
  "statics": [
    {
      "name": "isRunning", 
      "doc": "<p>Whether the given animation via its <code class=\"param\">id</code> is still running.</p>\n", 
      "visibility": "public", 
      "summary": "Whether the given animation via its id is still running.", 
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
              "name": "Integer"
            }
          ], 
          "name": "id"
        }
      ], 
      "sourceLink": "source:core.effect.Animate~50", 
      "line": 50, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "start", 
      "doc": "<p>Start the animation. Returns the identifier of animation. Can be used to stop it any time.</p>\n\n<ul>\n<li><code class=\"param\">stepCallback</code> Pointer to function which is executed on every step.\nSignature of the method should be <code>function(percent, now, virtual) { return continueWithAnimation; }</code></li>\n<li><code class=\"param\">verifyCallback</code> Executed before every animation step.\nSignature of the method should be <code>function() { return continueWithAnimation; }</code></li>\n<li><code class=\"param\">completedCallback</code>\nSignature of the method should be <code>function(droppedFrames, finishedAnimation) &lt;a href=&quot;#&quot;&gt;&lt;code&gt;&lt;/code&gt;&lt;/a&gt;</code></li>\n<li><code class=\"param\">duration</code> Milliseconds to run the animation</li>\n<li><code class=\"param\">easingMethod</code> Pointer to easing function\nSignature of the method should be <code>function(percent) { return modifiedValue; }</code></li>\n<li><code class=\"param\">root</code> Render root, when available. Used for internal\nusage of requestAnimationFrame.</li>\n</ul>\n", 
      "visibility": "public", 
      "summary": "Start the animation.", 
      "returns": [
        {
          "linkable": true, 
          "name": "Integer"
        }
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "Function"
            }
          ], 
          "name": "stepCallback"
        }, 
        {
          "position": 1, 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "Function"
            }
          ], 
          "name": "verifyCallback"
        }, 
        {
          "position": 2, 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "Function"
            }
          ], 
          "name": "completedCallback"
        }, 
        {
          "position": 3, 
          "type": [
            {
              "linkable": true, 
              "name": "Integer"
            }
          ], 
          "name": "duration"
        }, 
        {
          "position": 4, 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "Function"
            }
          ], 
          "name": "easingMethod"
        }, 
        {
          "default": "document.body", 
          "position": 5, 
          "optional": true, 
          "name": "root", 
          "type": [
            {
              "linkable": true, 
              "name": "Element"
            }
          ]
        }
      ], 
      "sourceLink": "source:core.effect.Animate~70", 
      "line": 70, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "stop", 
      "doc": "<p>Stops the given animation via its <code class=\"param\">id</code>. Returns whether the animation was stopped.</p>\n", 
      "visibility": "public", 
      "summary": "Stops the given animation via its id.", 
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
              "name": "Integer"
            }
          ], 
          "name": "id"
        }
      ], 
      "sourceLink": "source:core.effect.Animate~37", 
      "line": 37, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "core.effect", 
  "basename": "Animate", 
  "permutations": [], 
  "uses": [
    "core.Module", 
    "ext.RequestAnimationFrame"
  ], 
  "main": {
    "name": "core.effect.Animate", 
    "tags": [], 
    "doc": "<p>Generic animation class with support for dropped frames both optional easing and duration.</p>\n\n<p>Optional duration is useful when the lifetime is defined by another condition than time\ne.g. speed of an animating object, etc.</p>\n\n<p>Dropped frame logic allows to keep using the same updater logic independent from the actual\nrendering. This eases a lot of cases where it might be pretty complex to break down a state\nbased on the pure time difference.</p>\n\n<p>Requires <a href=\"#ext.RequestAnimationFrame\"><code>ext.RequestAnimationFrame</code></a> for cross browser support.</p>\n", 
    "summary": "Generic animation class with support for dropped frames both optional easing and duration.", 
    "line": 32, 
    "type": "core.Module"
  }, 
  "id": "core.effect.Animate", 
  "size": {
    "zipped": 427, 
    "optimized": 695, 
    "compressed": 1489
  }
},'core.effect.Animate');