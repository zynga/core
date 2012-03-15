apibrowser.callback({
  "assets": [], 
  "package": "core.property", 
  "basename": "MGeneric", 
  "permutations": [
    "debug"
  ], 
  "uses": [
    "core.Assert", 
    "core.Class", 
    "core.Env"
  ], 
  "members": [
    {
      "name": "get", 
      "doc": "<p>Generic getter for <code class=\"param\">property</code>. Supports two possible use cases:</p>\n\n<table class=\"highlighttable\"><tr><td class=\"linenos\"><div class=\"linenodiv\"><pre>1\n2</pre></div></td><td class=\"code\"><div class=\"highlight\"><pre><span class=\"kd\">var</span> <span class=\"nx\">value</span> <span class=\"o\">=</span> <span class=\"nx\">get</span><span class=\"p\">(</span><span class=\"o\">&amp;</span><span class=\"nx\">quot</span><span class=\"p\">;</span><span class=\"nx\">property</span><span class=\"o\">&amp;</span><span class=\"nx\">quot</span><span class=\"p\">;);</span>\n<span class=\"kd\">var</span> <span class=\"nx\">values</span> <span class=\"o\">=</span> <span class=\"nx\">get</span><span class=\"p\">([</span><span class=\"o\">&amp;</span><span class=\"nx\">quot</span><span class=\"p\">;</span><span class=\"nx\">property1</span><span class=\"o\">&amp;</span><span class=\"nx\">quot</span><span class=\"p\">;,</span> <span class=\"o\">&amp;</span><span class=\"nx\">quot</span><span class=\"p\">;</span><span class=\"nx\">property2</span><span class=\"o\">&amp;</span><span class=\"nx\">quot</span><span class=\"p\">;]);</span>\n</pre></div>\n</td></tr></table>\n", 
      "visibility": "public", 
      "summary": "Generic getter for property.", 
      "returns": [
        {
          "pseudo": true, 
          "name": "var"
        }
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "String"
            }, 
            {
              "linkable": true, 
              "builtin": true, 
              "name": "Array"
            }
          ], 
          "name": "property"
        }
      ], 
      "sourceLink": "source:core.property.MGeneric~87", 
      "line": 87, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "set", 
      "doc": "<p>Generic setter. Supports two possible use cases for <code class=\"param\">property</code> and <code class=\"param\">value</code>:</p>\n\n<table class=\"highlighttable\"><tr><td class=\"linenos\"><div class=\"linenodiv\"><pre>1\n2\n3\n4\n5</pre></div></td><td class=\"code\"><div class=\"highlight\"><pre><span class=\"nx\">set</span><span class=\"p\">(</span><span class=\"o\">&amp;</span><span class=\"nx\">quot</span><span class=\"p\">;</span><span class=\"nx\">property</span><span class=\"o\">&amp;</span><span class=\"nx\">quot</span><span class=\"p\">;,</span> <span class=\"nx\">value</span><span class=\"p\">);</span>\n<span class=\"nx\">set</span><span class=\"p\">({</span>\n  <span class=\"nx\">property1</span><span class=\"o\">:</span> <span class=\"nx\">value1</span><span class=\"p\">,</span>\n  <span class=\"nx\">property2</span><span class=\"o\">:</span> <span class=\"nx\">value2</span>\n<span class=\"p\">});</span>\n</pre></div>\n</td></tr></table>\n\n<p>Returns the value from the setter (if single property is used)</p>\n", 
      "visibility": "public", 
      "summary": "Generic setter.", 
      "returns": [
        {
          "pseudo": true, 
          "name": "var"
        }
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "String"
            }, 
            {
              "linkable": true, 
              "name": "Map"
            }
          ], 
          "name": "property"
        }, 
        {
          "position": 1, 
          "optional": true, 
          "name": "value", 
          "type": [
            {
              "pseudo": true, 
              "name": "var"
            }
          ]
        }
      ], 
      "sourceLink": "source:core.property.MGeneric~39", 
      "line": 39, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "main": {
    "name": "core.property.MGeneric", 
    "tags": [], 
    "doc": "<p>Generic setter/getter support for property API.</p>\n\n<p>Include this if your class uses properties and want to be able to generically\nset/get them based on the property names</p>\n", 
    "summary": "Generic setter/getter support for property API.", 
    "line": 24, 
    "type": "core.Class"
  }, 
  "id": "core.property.MGeneric", 
  "size": {
    "zipped": 293, 
    "optimized": 483, 
    "compressed": 1512
  }
},'core.property.MGeneric');