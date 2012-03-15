apibrowser.callback({
  "statics": [
    {
      "name": "equal", 
      "sourceLink": "source:core.Assert~25", 
      "visibility": "public", 
      "summary": "Raises an exception when the two values a and b are not equal (!=) Customizable with a custom message for the exception text.", 
      "params": [
        {
          "position": 0, 
          "type": [
            "var"
          ], 
          "name": "a"
        }, 
        {
          "position": 1, 
          "type": [
            "var"
          ], 
          "name": "b"
        }, 
        {
          "position": 2, 
          "optional": true, 
          "name": "message", 
          "type": [
            "String"
          ]
        }
      ], 
      "doc": "<p>Raises an exception when the two values <code class=\"param\">a</code> and <code class=\"param\">b</code> are not equal (<code>!=</code>)\nCustomizable with a custom <code class=\"param\">message</code> for the exception text.</p>\n", 
      "line": 25, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "identical", 
      "sourceLink": "source:core.Assert~47", 
      "visibility": "public", 
      "summary": "Raises an exception when the two values a and b are not identical (!==) Customizable with a custom message for the exception text.", 
      "params": [
        {
          "position": 0, 
          "type": [
            "var"
          ], 
          "name": "a"
        }, 
        {
          "position": 1, 
          "type": [
            "var"
          ], 
          "name": "b"
        }, 
        {
          "position": 2, 
          "optional": true, 
          "name": "message", 
          "type": [
            "String"
          ]
        }
      ], 
      "doc": "<p>Raises an exception when the two values <code class=\"param\">a</code> and <code class=\"param\">b</code> are not identical (<code>!==</code>)\nCustomizable with a custom <code class=\"param\">message</code> for the exception text.</p>\n", 
      "line": 47, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "isFalse", 
      "sourceLink": "source:core.Assert~80", 
      "visibility": "public", 
      "summary": "Raises an exception when the value a is not falsy (!= false).", 
      "params": [
        {
          "position": 0, 
          "type": [
            "var"
          ], 
          "name": "a"
        }, 
        {
          "position": 1, 
          "optional": true, 
          "name": "message", 
          "type": [
            "String"
          ]
        }
      ], 
      "doc": "<p>Raises an exception when the value <code class=\"param\">a</code> is not falsy (<code>!= false</code>).\nCustomizable with a custom <code class=\"param\">message</code> for the exception text.</p>\n", 
      "line": 80, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "isIn", 
      "sourceLink": "source:core.Assert~113", 
      "visibility": "public", 
      "summary": "Raises an exception when the value a is not in object.", 
      "params": [
        {
          "position": 0, 
          "type": [
            "var"
          ], 
          "name": "a"
        }, 
        {
          "position": 1, 
          "type": [
            "Object", 
            "Array", 
            "String"
          ], 
          "name": "object"
        }, 
        {
          "position": 2, 
          "optional": true, 
          "name": "message", 
          "type": [
            "String"
          ]
        }
      ], 
      "doc": "<p>Raises an exception when the value <code class=\"param\">a</code> is not in <code class=\"param\">object</code>.\nCustomizable with a custom <code class=\"param\">message</code> for the exception text.</p>\n", 
      "line": 113, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "isNotIn", 
      "sourceLink": "source:core.Assert~124", 
      "visibility": "public", 
      "summary": "Raises an exception when the value a is in object.", 
      "params": [
        {
          "position": 0, 
          "type": [
            "var"
          ], 
          "name": "a"
        }, 
        {
          "position": 1, 
          "type": [
            "Object", 
            "Array", 
            "String"
          ], 
          "name": "object"
        }, 
        {
          "position": 2, 
          "optional": true, 
          "name": "message", 
          "type": [
            "String"
          ]
        }
      ], 
      "doc": "<p>Raises an exception when the value <code class=\"param\">a</code> is in <code class=\"param\">object</code>.\nCustomizable with a custom <code class=\"param\">message</code> for the exception text.</p>\n", 
      "line": 124, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "isNotNull", 
      "sourceLink": "source:core.Assert~102", 
      "visibility": "public", 
      "summary": "Raises an exception when the value a is null.", 
      "params": [
        {
          "position": 0, 
          "type": [
            "var"
          ], 
          "name": "a"
        }, 
        {
          "position": 1, 
          "optional": true, 
          "name": "message", 
          "type": [
            "String"
          ]
        }
      ], 
      "doc": "<p>Raises an exception when the value <code class=\"param\">a</code> is <code>null</code>.\nCustomizable with a custom <code class=\"param\">message</code> for the exception text.</p>\n", 
      "line": 102, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "isNotType", 
      "sourceLink": "source:core.Assert~168", 
      "visibility": "public", 
      "summary": "Raises an exception when the value a is of type (checked via core.Main#isTypeOf) Customizable with a custom message for the exception text.", 
      "params": [
        {
          "position": 0, 
          "type": [
            "var"
          ], 
          "name": "a"
        }, 
        {
          "position": 1, 
          "type": [
            "String"
          ], 
          "name": "type"
        }, 
        {
          "position": 2, 
          "optional": true, 
          "name": "message", 
          "type": [
            "String"
          ]
        }
      ], 
      "doc": "<p>Raises an exception when the value <code class=\"param\">a</code> is of <code class=\"param\">type</code> (checked via <a href=\"#core.Main~isTypeOf\"><code>core.Main#isTypeOf</code></a>)\nCustomizable with a custom <code class=\"param\">message</code> for the exception text.</p>\n", 
      "line": 168, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "isNull", 
      "sourceLink": "source:core.Assert~91", 
      "visibility": "public", 
      "summary": "Raises an exception when the value a is not null.", 
      "params": [
        {
          "position": 0, 
          "type": [
            "var"
          ], 
          "name": "a"
        }, 
        {
          "position": 1, 
          "optional": true, 
          "name": "message", 
          "type": [
            "String"
          ]
        }
      ], 
      "doc": "<p>Raises an exception when the value <code class=\"param\">a</code> is not <code>null</code>.\nCustomizable with a custom <code class=\"param\">message</code> for the exception text.</p>\n", 
      "line": 91, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "isTrue", 
      "sourceLink": "source:core.Assert~69", 
      "visibility": "public", 
      "summary": "Raises an exception when the value a is not trueish (!= true).", 
      "params": [
        {
          "position": 0, 
          "type": [
            "var"
          ], 
          "name": "a"
        }, 
        {
          "position": 1, 
          "optional": true, 
          "name": "message", 
          "type": [
            "String"
          ]
        }
      ], 
      "doc": "<p>Raises an exception when the value <code class=\"param\">a</code> is not trueish (<code>!= true</code>).\nCustomizable with a custom <code class=\"param\">message</code> for the exception text.</p>\n", 
      "line": 69, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "isType", 
      "sourceLink": "source:core.Assert~157", 
      "visibility": "public", 
      "summary": "Raises an exception when the value a is not of type (checked via core.Main#isTypeOf) Customizable with a custom message for the exception text.", 
      "params": [
        {
          "position": 0, 
          "type": [
            "var"
          ], 
          "name": "a"
        }, 
        {
          "position": 1, 
          "type": [
            "String"
          ], 
          "name": "type"
        }, 
        {
          "position": 2, 
          "optional": true, 
          "name": "message", 
          "type": [
            "String"
          ]
        }
      ], 
      "doc": "<p>Raises an exception when the value <code class=\"param\">a</code> is not of <code class=\"param\">type</code> (checked via <a href=\"#core.Main~isTypeOf\"><code>core.Main#isTypeOf</code></a>)\nCustomizable with a custom <code class=\"param\">message</code> for the exception text.</p>\n", 
      "line": 157, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "matches", 
      "sourceLink": "source:core.Assert~135", 
      "visibility": "public", 
      "summary": "Raises an exception when the value a does not match the regular expression regexp.", 
      "params": [
        {
          "position": 0, 
          "type": [
            "var"
          ], 
          "name": "a"
        }, 
        {
          "position": 1, 
          "type": [
            "RegExp"
          ], 
          "name": "regexp"
        }, 
        {
          "position": 2, 
          "optional": true, 
          "name": "message", 
          "type": [
            "String"
          ]
        }
      ], 
      "doc": "<p>Raises an exception when the value <code class=\"param\">a</code> does not match the regular expression <code class=\"param\">regexp</code>.\nCustomizable with a custom <code class=\"param\">message</code> for the exception text.</p>\n", 
      "line": 135, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "notEqual", 
      "sourceLink": "source:core.Assert~36", 
      "visibility": "public", 
      "summary": "Raises an exception when the two values a and b are equal (==).", 
      "params": [
        {
          "position": 0, 
          "type": [
            "var"
          ], 
          "name": "a"
        }, 
        {
          "position": 1, 
          "type": [
            "var"
          ], 
          "name": "b"
        }, 
        {
          "position": 2, 
          "optional": true, 
          "name": "message", 
          "type": [
            "String"
          ]
        }
      ], 
      "doc": "<p>Raises an exception when the two values <code class=\"param\">a</code> and <code class=\"param\">b</code> are equal (<code>==</code>).\nCustomizable with a custom <code class=\"param\">message</code> for the exception text.</p>\n", 
      "line": 36, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "notIdentical", 
      "sourceLink": "source:core.Assert~58", 
      "visibility": "public", 
      "summary": "Raises an exception when the two values a and b are identical (===).", 
      "params": [
        {
          "position": 0, 
          "type": [
            "var"
          ], 
          "name": "a"
        }, 
        {
          "position": 1, 
          "type": [
            "var"
          ], 
          "name": "b"
        }, 
        {
          "position": 2, 
          "optional": true, 
          "name": "message", 
          "type": [
            "String"
          ]
        }
      ], 
      "doc": "<p>Raises an exception when the two values <code class=\"param\">a</code> and <code class=\"param\">b</code> are identical (<code>===</code>).\nCustomizable with a custom <code class=\"param\">message</code> for the exception text.</p>\n", 
      "line": 58, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "notMatches", 
      "sourceLink": "source:core.Assert~146", 
      "visibility": "public", 
      "summary": "Raises an exception when the value a matches the regular expression regexp.", 
      "params": [
        {
          "position": 0, 
          "type": [
            "var"
          ], 
          "name": "a"
        }, 
        {
          "position": 1, 
          "type": [
            "RegExp"
          ], 
          "name": "regexp"
        }, 
        {
          "position": 2, 
          "optional": true, 
          "name": "message", 
          "type": [
            "String"
          ]
        }
      ], 
      "doc": "<p>Raises an exception when the value <code class=\"param\">a</code> matches the regular expression <code class=\"param\">regexp</code>.\nCustomizable with a custom <code class=\"param\">message</code> for the exception text.</p>\n", 
      "line": 146, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "core", 
  "basename": "Assert", 
  "permutations": [], 
  "uses": [
    "core.Main", 
    "core.Module"
  ], 
  "usedBy": [
    "core.Class", 
    "core.Interface", 
    "core.bom.ClassName", 
    "core.bom.Form", 
    "core.bom.FormItem", 
    "core.bom.Position", 
    "core.collection.LinkedList", 
    "core.io.Asset", 
    "core.io.Image", 
    "core.io.Queue", 
    "core.io.Script", 
    "core.io.StyleSheet", 
    "core.property.Debug", 
    "core.property.MGeneric", 
    "core.property.Simple", 
    "core.template.Template"
  ], 
  "main": {
    "doc": "<p>Collection of assertions which could be used to verify incoming arguments, etc.</p>\n\n<p>Modelled after the Python API at <a href=\"http://docs.python.org/library/unittest.html\">http://docs.python.org/library/unittest.html</a></p>\n", 
    "line": 19, 
    "type": "core.Module", 
    "name": "core.Assert", 
    "tags": []
  }, 
  "id": "core.Assert", 
  "size": {
    "zipped": 362, 
    "optimized": 1238, 
    "compressed": 1623
  }
},'core.Assert');