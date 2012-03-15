apibrowser.callback({
  "statics": [
    {
      "name": "fromArguments", 
      "doc": "<p>Converts the given <code class=\"param\">args</code> into an array.</p>\n", 
      "visibility": "public", 
      "summary": "Converts the given args into an array.", 
      "returns": [
        {
          "linkable": true, 
          "builtin": true, 
          "name": "Array"
        }
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            {
              "pseudo": true, 
              "name": "arguments"
            }
          ], 
          "name": "args"
        }
      ], 
      "sourceLink": "source:ext.sugar.Array~25", 
      "line": 25, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "ext.sugar", 
  "basename": "Array", 
  "permutations": [
    "es5"
  ], 
  "uses": [
    "core.Env", 
    "core.Main", 
    "ext.es5.Array"
  ], 
  "members": [
    {
      "name": "at", 
      "doc": "<p>Returns the value at the given <code class=\"param\">position</code>. Supports negative indexes, too.</p>\n", 
      "visibility": "public", 
      "summary": "Returns the value at the given position.", 
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
              "name": "Integer"
            }
          ], 
          "name": "position"
        }
      ], 
      "sourceLink": "source:ext.sugar.Array~166", 
      "line": 166, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "clone", 
      "doc": "<p>Clones the whole array and returns it.</p>\n", 
      "visibility": "public", 
      "summary": "Clones the whole array and returns it.", 
      "returns": [
        {
          "linkable": true, 
          "builtin": true, 
          "name": "Array"
        }
      ], 
      "sourceLink": "source:ext.sugar.Array~85", 
      "line": 85, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "compact", 
      "doc": "<p>Filters out sparse fields (including all null/undefined values if <code class=\"param\">nulls</code> is <code>true</code>) and returns a new compacted array.</p>\n", 
      "visibility": "public", 
      "summary": "Filters out sparse fields (including all null/undefined values if nulls is true) and returns a new compacted array.", 
      "returns": [
        {
          "linkable": true, 
          "builtin": true, 
          "name": "Array"
        }
      ], 
      "params": [
        {
          "position": 0, 
          "name": "nulls"
        }
      ], 
      "sourceLink": "source:ext.sugar.Array~95", 
      "line": 95, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "contains", 
      "doc": "<p>Whether the array contains the given <code class=\"param\">value</code>.</p>\n", 
      "visibility": "public", 
      "summary": "Whether the array contains the given value.", 
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
              "pseudo": true, 
              "name": "var"
            }
          ], 
          "name": "value"
        }
      ], 
      "sourceLink": "source:ext.sugar.Array~77", 
      "line": 77, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "flatten", 
      "doc": "<p>Returns a flattened, one-dimensional copy of the array.</p>\n", 
      "visibility": "public", 
      "summary": "Returns a flattened, one-dimensional copy of the array.", 
      "returns": [
        {
          "linkable": true, 
          "builtin": true, 
          "name": "Array"
        }
      ], 
      "sourceLink": "source:ext.sugar.Array~105", 
      "line": 105, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "insertAt", 
      "doc": "<p>Inserts and returns the given <code class=\"param\">value</code> at the given <code class=\"param\">position</code>.\nSupports negative position values, too. Appends to the end if no position is defined.</p>\n", 
      "visibility": "public", 
      "summary": "Inserts and returns the given value at the given position.", 
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
              "pseudo": true, 
              "name": "var"
            }
          ], 
          "name": "value"
        }, 
        {
          "default": "-1", 
          "position": 1, 
          "optional": true, 
          "name": "position", 
          "type": [
            {
              "linkable": true, 
              "name": "Integer"
            }
          ]
        }
      ], 
      "sourceLink": "source:ext.sugar.Array~67", 
      "line": 67, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "max", 
      "doc": "<p>Returns the maximum number in the array.</p>\n", 
      "visibility": "public", 
      "summary": "Returns the maximum number in the array.", 
      "returns": [
        {
          "linkable": true, 
          "builtin": true, 
          "name": "Number"
        }
      ], 
      "sourceLink": "source:ext.sugar.Array~36", 
      "line": 36, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "min", 
      "doc": "<p>Returns the minimum number in the array.</p>\n", 
      "visibility": "public", 
      "summary": "Returns the minimum number in the array.", 
      "returns": [
        {
          "linkable": true, 
          "builtin": true, 
          "name": "Number"
        }
      ], 
      "sourceLink": "source:ext.sugar.Array~44", 
      "line": 44, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "randomize", 
      "sourceLink": "source:ext.sugar.Array~125", 
      "visibility": "public", 
      "summary": "Randomizes the array via Fisher-Yates algorithm.", 
      "doc": "<p>Randomizes the array via Fisher-Yates algorithm.</p>\n", 
      "line": 125, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "remove", 
      "doc": "<p>Removes the given <code class=\"param\">value</code> (first occourence only) from the array and returns it.</p>\n", 
      "visibility": "public", 
      "summary": "Removes the given value (first occourence only) from the array and returns it.", 
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
              "pseudo": true, 
              "name": "var"
            }
          ], 
          "name": "value"
        }
      ], 
      "sourceLink": "source:ext.sugar.Array~133", 
      "line": 133, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "removeAt", 
      "doc": "<p>Removes and returns the value at the given <code class=\"param\">position</code>.</p>\n", 
      "visibility": "public", 
      "summary": "Removes and returns the value at the given position.", 
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
              "name": "Integer"
            }
          ], 
          "name": "position"
        }
      ], 
      "sourceLink": "source:ext.sugar.Array~174", 
      "line": 174, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "removeRange", 
      "doc": "<p>Removes a specific range (<code class=\"param\">from</code> &lt;-&gt; <code class=\"param\">to</code>) from the array. Supports negative indexes, too.</p>\n", 
      "visibility": "public", 
      "summary": "Removes a specific range (from &lt;-&gt; to) from the array.", 
      "params": [
        {
          "position": 0, 
          "type": [
            {
              "linkable": true, 
              "name": "Integer"
            }
          ], 
          "name": "from"
        }, 
        {
          "position": 1, 
          "type": [
            {
              "linkable": true, 
              "name": "Integer"
            }
          ], 
          "name": "to"
        }
      ], 
      "sourceLink": "source:ext.sugar.Array~186", 
      "line": 186, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "sum", 
      "doc": "<p>Returns the sum of all values in the array.</p>\n", 
      "visibility": "public", 
      "summary": "Returns the sum of all values in the array.", 
      "returns": [
        {
          "linkable": true, 
          "builtin": true, 
          "name": "Number"
        }
      ], 
      "sourceLink": "source:ext.sugar.Array~52", 
      "line": 52, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "unique", 
      "doc": "<p>Returns a new array with all elements that are unique.</p>\n\n<p>Comparison happens based on the toString() value! So numbers\nand booleans might be unified with strings with the same &ldquo;value&rdquo;.\nThis is mainly because of performance reasons.</p>\n", 
      "visibility": "public", 
      "summary": "Returns a new array with all elements that are unique.", 
      "returns": [
        {
          "linkable": true, 
          "builtin": true, 
          "name": "Array"
        }
      ], 
      "sourceLink": "source:ext.sugar.Array~151", 
      "line": 151, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "main": {
    "name": "Array", 
    "extension": true, 
    "tags": [], 
    "doc": "<p>Adds useful non-standard extensions to the <code>Array.prototype</code> like <a href=\"#~min\"><code>min</code></a>, <a href=\"#~contains\"><code>contains</code></a> and <a href=\"#~remove\"><code>remove</code></a>.</p>\n", 
    "summary": "Adds useful non-standard extensions to the Array.prototype like min, contains and remove.", 
    "line": 20, 
    "type": "core.Main"
  }, 
  "id": "ext.sugar.Array", 
  "size": {
    "zipped": 522, 
    "optimized": 1247, 
    "compressed": 1569
  }
},'ext.sugar.Array');