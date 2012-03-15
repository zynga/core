apibrowser.callback({
  "assets": [], 
  "package": "api.test", 
  "basename": "Food", 
  "permutations": [], 
  "construct": {
    "doc": "<p>This is just generic food in kilograms,\nquantity is better than quality&hellip; or so</p>\n\n<p>That&#39;s why you feed the animals only with\nfood that has a given <code class=\"param\">weight</code>.</p>\n", 
    "init": "api.test.Food", 
    "params": [
      {
        "position": 0, 
        "type": [
          "Number"
        ], 
        "name": "weight"
      }
    ], 
    "sourceLink": "source:api.test.Food~21", 
    "line": 21, 
    "isFunction": true
  }, 
  "id": "api.test.Food", 
  "uses": [
    "core.Class"
  ], 
  "usedBy": [
    "api.test.Animal"
  ], 
  "main": {
    "doc": "<p>This is the generic Food class</p>\n\n<p>It has only a weight property to let\nanimals get fat while you overfeed them :)</p>\n\n<table class=\"highlighttable\"><tr><td class=\"linenos\"><div class=\"linenodiv\"><pre>1</pre></div></td><td class=\"code\"><div class=\"highlight\"><pre><span class=\"k\">new</span> <span class=\"nx\">api</span><span class=\"p\">.</span><span class=\"nx\">test</span><span class=\"p\">.</span><span class=\"nx\">Food</span><span class=\"p\">(</span><span class=\"mi\">20</span><span class=\"p\">);</span> <span class=\"c1\">// will produce 20kg of food</span>\n</pre></div>\n</td></tr></table>\n", 
    "line": 12, 
    "type": "core.Class", 
    "name": "api.test.Food", 
    "tags": []
  }, 
  "properties": [
    {
      "name": "weight", 
      "nullable": false, 
      "doc": "<p>This is the food&#39;s weight in kilograms</p>\n", 
      "init": "0", 
      "sourceLink": "source:api.test.Food~30", 
      "apply": true, 
      "line": 30, 
      "type": "Number"
    }
  ], 
  "size": {
    "zipped": 118, 
    "optimized": 133, 
    "compressed": 143
  }
},'api.test.Food');