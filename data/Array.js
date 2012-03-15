apibrowser.callback({
  "statics": [
    {
      "from": "ext.sugar.Array", 
      "name": "fromArguments", 
      "doc": "<p>Converts the given <code class=\"param\">args</code> into an array.</p>\n", 
      "visibility": "public", 
      "summary": "Converts the given args into an array.", 
      "returns": [
        "Array"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "arguments"
          ], 
          "name": "args"
        }
      ], 
      "sourceLink": "source:ext.sugar.Array~25", 
      "fromLink": "static:ext.sugar.Array~fromArguments", 
      "line": 25, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "from": "ext.IsArray", 
      "name": "isArray", 
      "doc": "<p>Implements ES5 <code>isArray</code> method to verify whether <code class=\"param\">value</code> is an <code>Array</code>.\nSee also: <a href=\"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray\">https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray</a></p>\n", 
      "visibility": "public", 
      "summary": "Implements ES5 isArray method to verify whether value is an Array.", 
      "returns": [
        "Boolean"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "var"
          ], 
          "name": "value"
        }
      ], 
      "sourceLink": "source:ext.IsArray~15", 
      "fromLink": "static:ext.IsArray~isArray", 
      "line": 15, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "package": "", 
  "basename": "Array", 
  "construct": {
    "init": "Array", 
    "doc": "<p>Creates a JavaScript Array.</p>\n\n<p>If the only argument passed to the Array constructor is an integer between 0 and 232-1 (inclusive),\na new JavaScript array is created with <code class=\"param\">arrayLength</code> number of elements.\nIf the argument is any other number, a RangeError exception is thrown.</p>\n\n<p>See also: <a href=\"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array\">MDN Documentation</a></p>\n", 
    "params": [
      {
        "position": 0, 
        "type": [
          "Integer"
        ], 
        "name": "arrayLength"
      }
    ], 
    "tags": [
      {
        "name": "main"
      }
    ], 
    "sourceLink": "source:api.mdn.Array~12", 
    "line": 12, 
    "isFunction": true
  }, 
  "uses": [], 
  "members": [
    {
      "from": "ext.sugar.Array", 
      "name": "at", 
      "doc": "<p>Returns the value at the given <code class=\"param\">position</code>. Supports negative indexes, too.</p>\n", 
      "visibility": "public", 
      "summary": "Returns the value at the given position.", 
      "returns": [
        "var"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "Integer"
          ], 
          "name": "position"
        }
      ], 
      "sourceLink": "source:ext.sugar.Array~166", 
      "fromLink": "member:ext.sugar.Array~at", 
      "line": 166, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "visibility": "public", 
      "fromLink": "member:ext.sugar.Array~clone", 
      "line": 85, 
      "isFunction": true, 
      "from": "ext.sugar.Array", 
      "name": "clone", 
      "sourceLink": "source:ext.sugar.Array~85", 
      "summary": "Clones the whole array and returns it.", 
      "returns": [
        "Array"
      ], 
      "doc": "<p>Clones the whole array and returns it.</p>\n", 
      "type": "Function"
    }, 
    {
      "from": "ext.sugar.Array", 
      "name": "compact", 
      "doc": "<p>Filters out sparse fields (including all null/undefined values if <code class=\"param\">nulls</code> is <code>true</code>) and returns a new compacted array.</p>\n", 
      "visibility": "public", 
      "summary": "Filters out sparse fields (including all null/undefined values if nulls is true) and returns a new compacted array.", 
      "returns": [
        "Array"
      ], 
      "params": [
        {
          "position": 0, 
          "name": "nulls"
        }
      ], 
      "sourceLink": "source:ext.sugar.Array~95", 
      "fromLink": "member:ext.sugar.Array~compact", 
      "line": 95, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "from": "ext.sugar.Array", 
      "name": "contains", 
      "doc": "<p>Whether the array contains the given <code class=\"param\">value</code>.</p>\n", 
      "visibility": "public", 
      "summary": "Whether the array contains the given value.", 
      "returns": [
        "Boolean"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "var"
          ], 
          "name": "value"
        }
      ], 
      "sourceLink": "source:ext.sugar.Array~77", 
      "fromLink": "member:ext.sugar.Array~contains", 
      "line": 77, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "from": "ext.es5.Array", 
      "name": "every", 
      "doc": "<p>Tests whether all elements in the array pass the test implemented by the provided function <code class=\"param\">fun</code>.</p>\n\n<ul>\n<li>ES5 15.4.4.16: <a href=\"http://es5.github.com/#x15.4.4.16\">http://es5.github.com/#x15.4.4.16</a></li>\n<li><a href=\"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/every\">https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/every</a></li>\n</ul>\n", 
      "visibility": "public", 
      "summary": "Tests whether all elements in the array pass the test implemented by the provided function fun.", 
      "returns": [
        "Boolean"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "Function"
          ], 
          "name": "fun"
        }
      ], 
      "sourceLink": "source:ext.es5.Array~144", 
      "fromLink": "member:ext.es5.Array~every", 
      "line": 144, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "from": "ext.es5.Array", 
      "name": "filter", 
      "doc": "<p>Creates a new array with all elements that pass the test implemented by the provided function <code class=\"param\">fun</code>.</p>\n\n<ul>\n<li>ES5 15.4.4.20: <a href=\"http://es5.github.com/#x15.4.4.20\">http://es5.github.com/#x15.4.4.20</a></li>\n<li><a href=\"https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/filter\">https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/filter</a></li>\n</ul>\n", 
      "visibility": "public", 
      "summary": "Creates a new array with all elements that pass the test implemented by the provided function fun.", 
      "returns": [
        "Array"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "Function"
          ], 
          "name": "fun"
        }
      ], 
      "sourceLink": "source:ext.es5.Array~111", 
      "fromLink": "member:ext.es5.Array~filter", 
      "line": 111, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "visibility": "public", 
      "fromLink": "member:ext.sugar.Array~flatten", 
      "line": 105, 
      "isFunction": true, 
      "from": "ext.sugar.Array", 
      "name": "flatten", 
      "sourceLink": "source:ext.sugar.Array~105", 
      "summary": "Returns a flattened, one-dimensional copy of the array.", 
      "returns": [
        "Array"
      ], 
      "doc": "<p>Returns a flattened, one-dimensional copy of the array.</p>\n", 
      "type": "Function"
    }, 
    {
      "visibility": "public", 
      "fromLink": "member:ext.es5.Array~forEach", 
      "line": 55, 
      "isFunction": true, 
      "from": "ext.es5.Array", 
      "name": "forEach", 
      "doc": "<p>Executes a provided function <code class=\"param\">fun</code> once per array element.</p>\n\n<p>ES5 15.4.4.18: <a href=\"http://es5.github.com/#x15.4.4.18\">http://es5.github.com/#x15.4.4.18</a>\n<a href=\"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/array/forEach\">https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/array/forEach</a></p>\n", 
      "summary": "Executes a provided function fun once per array element.", 
      "params": [
        {
          "position": 0, 
          "type": [
            "Function"
          ], 
          "name": "fun"
        }
      ], 
      "sourceLink": "source:ext.es5.Array~55", 
      "type": "Function"
    }, 
    {
      "from": "ext.es5.Array", 
      "name": "indexOf", 
      "doc": "<p>Returns the first index at which a given element <code class=\"param\">sought</code> can be found\nin the array, or -1 if it is not present.</p>\n\n<ul>\n<li>ES5 15.4.4.14: <a href=\"http://es5.github.com/#x15.4.4.14\">http://es5.github.com/#x15.4.4.14</a></li>\n<li><a href=\"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf\">https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf</a></li>\n</ul>\n", 
      "visibility": "public", 
      "summary": "Returns the first index at which a given element sought can be found in the array, or -1 if it is not present.", 
      "returns": [
        "Integer"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "var"
          ], 
          "name": "sought"
        }
      ], 
      "sourceLink": "source:ext.es5.Array~310", 
      "fromLink": "member:ext.es5.Array~indexOf", 
      "line": 310, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "from": "ext.sugar.Array", 
      "name": "insertAt", 
      "doc": "<p>Inserts and returns the given <code class=\"param\">value</code> at the given <code class=\"param\">position</code>.\nSupports negative position values, too. Appends to the end if no position is defined.</p>\n", 
      "visibility": "public", 
      "summary": "Inserts and returns the given value at the given position.", 
      "returns": [
        "var"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "var"
          ], 
          "name": "value"
        }, 
        {
          "default": "-1", 
          "position": 1, 
          "optional": true, 
          "name": "position", 
          "type": [
            "Integer"
          ]
        }
      ], 
      "sourceLink": "source:ext.sugar.Array~67", 
      "fromLink": "member:ext.sugar.Array~insertAt", 
      "line": 67, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "from": "ext.es5.Array", 
      "name": "lastIndexOf", 
      "doc": "<p>Returns the last index at which a given element <code class=\"param\">sought</code> can be found\nin the array, or <code>-1</code> if it is not present. The array is searched backwards, starting\nat <code>fromIndex</code> (second argument).</p>\n\n<ul>\n<li>ES5 15.4.4.15: <a href=\"http://es5.github.com/#x15.4.4.15\">http://es5.github.com/#x15.4.4.15</a></li>\n<li><a href=\"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/lastIndexOf\">https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/lastIndexOf</a></li>\n</ul>\n", 
      "visibility": "public", 
      "summary": "Returns the last index at which a given element sought can be found in the array, or -1 if it is not present.", 
      "returns": [
        "Integer"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "var"
          ], 
          "name": "sought"
        }
      ], 
      "sourceLink": "source:ext.es5.Array~344", 
      "fromLink": "member:ext.es5.Array~lastIndexOf", 
      "line": 344, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "from": "ext.es5.Array", 
      "name": "map", 
      "doc": "<p>Creates a new array with the results of calling a provided function <code class=\"param\">fun</code> on every element in this array.</p>\n\n<ul>\n<li>ES5 15.4.4.19: <a href=\"http://es5.github.com/#x15.4.4.19\">http://es5.github.com/#x15.4.4.19</a></li>\n<li><a href=\"https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/map\">https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/map</a></li>\n</ul>\n", 
      "visibility": "public", 
      "summary": "Creates a new array with the results of calling a provided function fun on every element in this array.", 
      "returns": [
        "Array"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "Function"
          ], 
          "name": "fun"
        }
      ], 
      "sourceLink": "source:ext.es5.Array~83", 
      "fromLink": "member:ext.es5.Array~map", 
      "line": 83, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "visibility": "public", 
      "fromLink": "member:ext.sugar.Array~max", 
      "line": 36, 
      "isFunction": true, 
      "from": "ext.sugar.Array", 
      "name": "max", 
      "sourceLink": "source:ext.sugar.Array~36", 
      "summary": "Returns the maximum number in the array.", 
      "returns": [
        "Number"
      ], 
      "doc": "<p>Returns the maximum number in the array.</p>\n", 
      "type": "Function"
    }, 
    {
      "visibility": "public", 
      "fromLink": "member:ext.sugar.Array~min", 
      "line": 44, 
      "isFunction": true, 
      "from": "ext.sugar.Array", 
      "name": "min", 
      "sourceLink": "source:ext.sugar.Array~44", 
      "summary": "Returns the minimum number in the array.", 
      "returns": [
        "Number"
      ], 
      "doc": "<p>Returns the minimum number in the array.</p>\n", 
      "type": "Function"
    }, 
    {
      "from": "ext.sugar.Array", 
      "name": "randomize", 
      "sourceLink": "source:ext.sugar.Array~125", 
      "fromLink": "member:ext.sugar.Array~randomize", 
      "doc": "<p>Randomizes the array via Fisher-Yates algorithm.</p>\n", 
      "line": 125, 
      "type": "Function", 
      "isFunction": true, 
      "visibility": "public", 
      "summary": "Randomizes the array via Fisher-Yates algorithm."
    }, 
    {
      "from": "ext.es5.Array", 
      "name": "reduce", 
      "doc": "<p>Apply a function <code class=\"param\">fun</code> against an accumulator and each value of the\narray (from left-to-right) as to reduce it to a single value.</p>\n\n<ul>\n<li>ES5 15.4.4.21: <a href=\"http://es5.github.com/#x15.4.4.21\">http://es5.github.com/#x15.4.4.21</a></li>\n<li><a href=\"https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduce\">https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduce</a></li>\n</ul>\n", 
      "visibility": "public", 
      "summary": "Apply a function fun against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.", 
      "returns": [
        "var"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "Function"
          ], 
          "name": "fun"
        }
      ], 
      "sourceLink": "source:ext.es5.Array~199", 
      "fromLink": "member:ext.es5.Array~reduce", 
      "line": 199, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "from": "ext.es5.Array", 
      "name": "reduceRight", 
      "doc": "<p>Apply a function <code class=\"param\">fun</code> simultaneously against two values of the\narray (from right-to-left) as to reduce it to a single value.</p>\n\n<ul>\n<li>ES5 15.4.4.22: <a href=\"http://es5.github.com/#x15.4.4.22\">http://es5.github.com/#x15.4.4.22</a></li>\n<li><a href=\"https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduceRight\">https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduceRight</a></li>\n</ul>\n", 
      "visibility": "public", 
      "summary": "Apply a function fun simultaneously against two values of the array (from right-to-left) as to reduce it to a single value.", 
      "returns": [
        "var"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "Function"
          ], 
          "name": "fun"
        }
      ], 
      "sourceLink": "source:ext.es5.Array~255", 
      "fromLink": "member:ext.es5.Array~reduceRight", 
      "line": 255, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "from": "ext.sugar.Array", 
      "name": "remove", 
      "doc": "<p>Removes the given <code class=\"param\">value</code> (first occourence only) from the array and returns it.</p>\n", 
      "visibility": "public", 
      "summary": "Removes the given value (first occourence only) from the array and returns it.", 
      "returns": [
        "var"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "var"
          ], 
          "name": "value"
        }
      ], 
      "sourceLink": "source:ext.sugar.Array~133", 
      "fromLink": "member:ext.sugar.Array~remove", 
      "line": 133, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "from": "ext.sugar.Array", 
      "name": "removeAt", 
      "doc": "<p>Removes and returns the value at the given <code class=\"param\">position</code>.</p>\n", 
      "visibility": "public", 
      "summary": "Removes and returns the value at the given position.", 
      "returns": [
        "var"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "Integer"
          ], 
          "name": "position"
        }
      ], 
      "sourceLink": "source:ext.sugar.Array~174", 
      "fromLink": "member:ext.sugar.Array~removeAt", 
      "line": 174, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "visibility": "public", 
      "fromLink": "member:ext.sugar.Array~removeRange", 
      "line": 186, 
      "isFunction": true, 
      "from": "ext.sugar.Array", 
      "name": "removeRange", 
      "doc": "<p>Removes a specific range (<code class=\"param\">from</code> &lt;-&gt; <code class=\"param\">to</code>) from the array. Supports negative indexes, too.</p>\n", 
      "summary": "Removes a specific range (from &lt;-&gt; to) from the array.", 
      "params": [
        {
          "position": 0, 
          "type": [
            "Integer"
          ], 
          "name": "from"
        }, 
        {
          "position": 1, 
          "type": [
            "Integer"
          ], 
          "name": "to"
        }
      ], 
      "sourceLink": "source:ext.sugar.Array~186", 
      "type": "Function"
    }, 
    {
      "from": "ext.es5.Array", 
      "name": "some", 
      "doc": "<p>Tests whether some element in the array passes the test implemented by the provided function <code class=\"param\">fun</code>.</p>\n\n<ul>\n<li>ES5 15.4.4.17: <a href=\"http://es5.github.com/#x15.4.4.17\">http://es5.github.com/#x15.4.4.17</a></li>\n<li><a href=\"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some\">https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some</a></li>\n</ul>\n", 
      "visibility": "public", 
      "summary": "Tests whether some element in the array passes the test implemented by the provided function fun.", 
      "returns": [
        "Boolean"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "Function"
          ], 
          "name": "fun"
        }
      ], 
      "sourceLink": "source:ext.es5.Array~171", 
      "fromLink": "member:ext.es5.Array~some", 
      "line": 171, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "visibility": "public", 
      "fromLink": "member:ext.sugar.Array~sum", 
      "line": 52, 
      "isFunction": true, 
      "from": "ext.sugar.Array", 
      "name": "sum", 
      "sourceLink": "source:ext.sugar.Array~52", 
      "summary": "Returns the sum of all values in the array.", 
      "returns": [
        "Number"
      ], 
      "doc": "<p>Returns the sum of all values in the array.</p>\n", 
      "type": "Function"
    }, 
    {
      "visibility": "public", 
      "fromLink": "member:ext.sugar.Array~unique", 
      "line": 151, 
      "isFunction": true, 
      "from": "ext.sugar.Array", 
      "name": "unique", 
      "sourceLink": "source:ext.sugar.Array~151", 
      "summary": "Returns a new array with all elements that are unique.", 
      "returns": [
        "Array"
      ], 
      "doc": "<p>Returns a new array with all elements that are unique.</p>\n\n<p>Comparison happens based on the toString() value! So numbers\nand booleans might be unified with strings with the same &ldquo;value&rdquo;.\nThis is mainly because of performance reasons.</p>\n", 
      "type": "Function"
    }
  ], 
  "main": {
    "from": [
      "ext.es5.Array", 
      "ext.sugar.Array", 
      "api.mdn.Array", 
      "ext.IsArray"
    ], 
    "type": "Extend", 
    "name": "Array", 
    "doc": "<p>Creates a JavaScript Array.</p>\n\n<p>If the only argument passed to the Array constructor is an integer between 0 and 232-1 (inclusive),\na new JavaScript array is created with <code class=\"param\">arrayLength</code> number of elements.\nIf the argument is any other number, a RangeError exception is thrown.</p>\n\n<p>See also: <a href=\"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array\">MDN Documentation</a></p>\n"
  }, 
  "id": "Array"
},'Array');