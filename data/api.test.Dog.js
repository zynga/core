apibrowser.callback({
  "implements": [
    "api.test.Mammalian"
  ], 
  "assets": [], 
  "includes": [
    "api.test.Animal"
  ], 
  "package": "api.test", 
  "basename": "Dog", 
  "permutations": [], 
  "construct": {
    "doc": "<p>This will create a new Dog for your Tamagochi environment.</p>\n\n<p>The <code class=\"param\">color</code> will set the fur color, the <code class=\"param\">hungry</code>\nflag lets him be hungry or not (hungry is defaulted with <code>true</code>).</p>\n\n<p>The dog has also a <code class=\"param\">weight</code> that you can set. It is used\nto calculate when it&#39;s hungry again if you walk the dog and it\ngets tired or an empty stomach.</p>\n\n<p>The last, optional flag <code class=\"param\">nakedDog</code> lets you have a naked\nugly dog, just like those for VIP females.</p>\n", 
    "init": "api.test.Dog", 
    "params": [
      {
        "position": 0, 
        "type": [
          "String"
        ], 
        "name": "color"
      }, 
      {
        "position": 1, 
        "type": [
          "Boolean"
        ], 
        "name": "hungry"
      }, 
      {
        "position": 2, 
        "type": [
          "Number"
        ], 
        "name": "weight"
      }, 
      {
        "position": 3, 
        "type": [
          "Boolean"
        ], 
        "name": "nakedDog"
      }
    ], 
    "sourceLink": "source:api.test.Dog~38", 
    "line": 38, 
    "isFunction": true
  }, 
  "id": "api.test.Dog", 
  "uses": [
    "api.test.Animal", 
    "api.test.Mammalian", 
    "core.Class"
  ], 
  "members": [
    {
      "constant": true, 
      "name": "FAT", 
      "doc": "<p>Enum about a dog being fat</p>\n", 
      "value": "3", 
      "visibility": "public", 
      "sourceLink": "source:api.test.Dog~100", 
      "line": 100, 
      "type": "Number"
    }, 
    {
      "constant": true, 
      "name": "NORMAL", 
      "doc": "<p>Enum about a dog being normal</p>\n", 
      "value": "2", 
      "visibility": "public", 
      "sourceLink": "source:api.test.Dog~102", 
      "line": 102, 
      "type": "Number"
    }, 
    {
      "constant": true, 
      "name": "SLIM", 
      "doc": "<p>Enum about a dog being slim</p>\n", 
      "value": "1", 
      "visibility": "public", 
      "sourceLink": "source:api.test.Dog~104", 
      "line": 104, 
      "type": "Number"
    }, 
    {
      "origin": [
        {
          "link": "member:api.test.Animal~feed", 
          "name": "api.test.Animal"
        }
      ], 
      "name": "feed", 
      "doc": "<p>This method feeds the animal with <code class=\"param\">food</code>.\nRemember to not overfeed your animal, because it gains <a href=\"#property:~weight\"><code>weight</code></a>\neverytime you feed it.</p>\n", 
      "visibility": "public", 
      "summary": "This method feeds the animal with food.", 
      "returns": [
        "Boolean"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "api.test.Food"
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
      "name": "fireEvent", 
      "sourceLink": "source:api.test.Dog~125", 
      "visibility": "public", 
      "summary": "This method is required for firing events on the dog itself.", 
      "params": [
        {
          "position": 0, 
          "type": [
            "String"
          ], 
          "name": "type"
        }, 
        {
          "position": 1, 
          "type": [
            "var"
          ], 
          "name": "value"
        }, 
        {
          "position": 2, 
          "type": [
            "var"
          ], 
          "name": "old"
        }
      ], 
      "doc": "<p>This method is required for firing events on the dog itself.</p>\n\n<p>The event <code class=\"param\">type</code>, the <code class=\"param\">value</code> and the <code class=\"param\">old</code> value.</p>\n", 
      "line": 125, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "origin": [
        {
          "link": "member:api.test.Animal~isHungry", 
          "name": "api.test.Animal"
        }
      ], 
      "returns": [
        "Boolean"
      ], 
      "name": "isHungry", 
      "sourceLink": "source:api.test.Animal~49", 
      "doc": "<p>This method returns whether the animal is hungry or not.</p>\n", 
      "line": 49, 
      "type": "Function", 
      "isFunction": true, 
      "visibility": "public", 
      "summary": "This method returns whether the animal is hungry or not."
    }, 
    {
      "name": "play", 
      "tags": [
        {
          "name": "cute"
        }
      ], 
      "doc": "<p>Play with the dog using arbitrary number of <code class=\"param\">objects</code>.</p>\n", 
      "visibility": "public", 
      "summary": "Play with the dog using arbitrary number of objects.", 
      "params": [
        {
          "position": 0, 
          "dynamic": true, 
          "name": "objects", 
          "type": [
            "Object"
          ]
        }
      ], 
      "sourceLink": "source:api.test.Dog~111", 
      "line": 111, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "train", 
      "tags": [
        {
          "name": "deprecated"
        }
      ], 
      "sourceLink": "source:api.test.Dog~116", 
      "visibility": "public", 
      "summary": "Train the dog.", 
      "doc": "<p>Train the dog.</p>\n", 
      "line": 116, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "walk", 
      "doc": "<p>This method will walk the Dog <code class=\"param\">meters</code></p>\n\n<p>The dog will loose <a href=\"#property:~weight\"><code>weight</code></a>, so don&#39;t\nlet it be <a href=\"#property:~hungry\"><code>hungry</code></a> for a too long time.</p>\n", 
      "visibility": "public", 
      "summary": "This method will walk the Dog meters  The dog will loose weight, so don&#39;t let it be hungry for a too long time.", 
      "returns": [
        "Boolean"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "Number"
          ], 
          "name": "meters"
        }
      ], 
      "sourceLink": "source:api.test.Dog~135", 
      "line": 135, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "main": {
    "doc": "<p>This Dog class lets you create a Dog that you\ncan feed, walk and just do things that you\nare used to while playing Tamagotchi. :)</p>\n\n<p>This example shows how to handle a brown dog that\nis hungry and weights 40kg (and is not naked):</p>\n\n<table class=\"highlighttable\"><tr><td class=\"linenos\"><div class=\"linenodiv\"><pre>1\n2\n3</pre></div></td><td class=\"code\"><div class=\"highlight\"><pre><span class=\"kd\">var</span> <span class=\"nx\">myDog</span> <span class=\"o\">=</span> <span class=\"k\">new</span> <span class=\"nx\">api</span><span class=\"p\">.</span><span class=\"nx\">test</span><span class=\"p\">.</span><span class=\"nx\">Dog</span><span class=\"p\">(</span><span class=\"s1\">&#39;brown&#39;</span><span class=\"p\">,</span> <span class=\"kc\">true</span><span class=\"p\">,</span> <span class=\"mi\">40</span><span class=\"p\">,</span> <span class=\"kc\">false</span><span class=\"p\">);</span>\n<span class=\"nx\">myDog</span><span class=\"p\">.</span><span class=\"nx\">feed</span><span class=\"p\">(</span><span class=\"k\">new</span> <span class=\"nx\">api</span><span class=\"p\">.</span><span class=\"nx\">test</span><span class=\"p\">.</span><span class=\"nx\">Food</span><span class=\"p\">(</span><span class=\"mi\">5</span><span class=\"p\">));</span> <span class=\"c1\">// 5kg, kinda American way!</span>\n<span class=\"nx\">myDog</span><span class=\"p\">.</span><span class=\"nx\">walk</span><span class=\"p\">(</span><span class=\"mi\">200</span><span class=\"p\">);</span> <span class=\"c1\">// lets him walk 200m</span>\n</pre></div>\n</td></tr></table>\n", 
    "line": 20, 
    "type": "core.Class", 
    "name": "api.test.Dog", 
    "tags": [
      {
        "name": "awesome"
      }, 
      {
        "name": "version", 
        "value": "1.0+1.1"
      }
    ]
  }, 
  "properties": [
    {
      "name": "bones", 
      "nullable": false, 
      "fire": "breakBones", 
      "sourceLink": "source:api.test.Dog~87", 
      "summary": "All Mammalians have bones.", 
      "defined": [
        {
          "link": "property:api.test.Mammalian~bones", 
          "name": "api.test.Mammalian"
        }
      ], 
      "init": "321", 
      "doc": "<p>All Mammalians have bones!</p>\n", 
      "apply": true, 
      "line": 87, 
      "type": "Number"
    }, 
    {
      "origin": [
        {
          "link": "property:api.test.Animal~color", 
          "name": "api.test.Animal"
        }
      ], 
      "sourceLink": "source:api.test.Animal~14", 
      "type": "String", 
      "name": "color", 
      "nullable": true, 
      "fire": "changeColor", 
      "doc": "<p>This will set the color of the animal</p>\n", 
      "line": 14, 
      "apply": true
    }, 
    {
      "name": "fur", 
      "nullable": true, 
      "fire": "changeFur", 
      "sourceLink": "source:api.test.Dog~68", 
      "summary": "All Mammalians have a fur.", 
      "defined": [
        {
          "link": "property:api.test.Mammalian~fur", 
          "name": "api.test.Mammalian"
        }
      ], 
      "doc": "<p>All Mammalians have a fur!</p>\n", 
      "apply": true, 
      "line": 68, 
      "type": "Object"
    }, 
    {
      "origin": [
        {
          "link": "property:api.test.Animal~hungry", 
          "name": "api.test.Animal"
        }
      ], 
      "name": "hungry", 
      "nullable": false, 
      "fire": "changeHungry", 
      "doc": "<p>This is the holder for the hungry state of the animal</p>\n", 
      "init": "true", 
      "sourceLink": "source:api.test.Animal~24", 
      "apply": true, 
      "line": 24, 
      "type": "Boolean"
    }, 
    {
      "name": "teeth", 
      "tags": [
        {
          "name": "wonderful"
        }
      ], 
      "fire": "looseTeeth", 
      "doc": "<p>Even dogs have teeth!</p>\n", 
      "nullable": false, 
      "summary": "Even dogs have teeth.", 
      "defined": [
        {
          "link": "property:api.test.Mammalian~teeth", 
          "name": "api.test.Mammalian"
        }
      ], 
      "init": "42", 
      "sourceLink": "source:api.test.Dog~78", 
      "apply": true, 
      "line": 78, 
      "type": "Number"
    }, 
    {
      "origin": [
        {
          "link": "property:api.test.Animal~weight", 
          "name": "api.test.Animal"
        }
      ], 
      "sourceLink": "source:api.test.Animal~35", 
      "type": "Number", 
      "name": "weight", 
      "nullable": true, 
      "fire": "changeWeight", 
      "doc": "<p>This represents the weight in kilograms of the animal</p>\n", 
      "line": 35, 
      "apply": true
    }
  ], 
  "size": {
    "zipped": 413, 
    "optimized": 780, 
    "compressed": 912
  }
},'api.test.Dog');