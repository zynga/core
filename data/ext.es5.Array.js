apibrowser.callback({
  "assets": [], 
  "package": "ext.es5", 
  "basename": "Array", 
  "permutations": [], 
  "uses": [
    "core.Main"
  ], 
  "members": [
    {
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
      "line": 144, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
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
      "line": 111, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "forEach", 
      "sourceLink": "source:ext.es5.Array~55", 
      "visibility": "public", 
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
      "doc": "<p>Executes a provided function <code class=\"param\">fun</code> once per array element.</p>\n\n<p>ES5 15.4.4.18: <a href=\"http://es5.github.com/#x15.4.4.18\">http://es5.github.com/#x15.4.4.18</a>\n<a href=\"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/array/forEach\">https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/array/forEach</a></p>\n", 
      "line": 55, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
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
      "line": 310, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
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
      "line": 344, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
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
      "line": 83, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
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
      "line": 199, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
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
      "line": 255, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
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
      "line": 171, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "usedBy": [
    "core.Class", 
    "ext.sugar.Array"
  ], 
  "main": {
    "name": "Array", 
    "extension": true, 
    "tags": [], 
    "doc": "<p>Adds ES5 Array methods if these are not implemented by the engine.</p>\n", 
    "line": 47, 
    "type": "core.Main"
  }, 
  "id": "ext.es5.Array", 
  "size": {
    "zipped": 756, 
    "optimized": 2448, 
    "compressed": 3205
  }
},'ext.es5.Array');