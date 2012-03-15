apibrowser.callback({
  "statics": [
    {
      "name": "equal", 
      "doc": "<p>Raises an exception when the two values <code class=\"param\">a</code> and <code class=\"param\">b</code> are not equal (<code>!=</code>)\nCustomizable with a custom <code class=\"param\">message</code> for the exception text.</p>\n", 
      "visibility": "public", 
      "summary": "Raises an exception when the two values a and b are not equal (!=) Customizable with a custom message for the exception text.", 
      "params": [
        {
          "position": 0, 
          "type": [
            {
              "pseudo": true, 
              "name": "var"
            }
          ], 
          "name": "a"
        }, 
        {
          "position": 1, 
          "type": [
            {
              "pseudo": true, 
              "name": "var"
            }
          ], 
          "name": "b"
        }, 
        {
          "position": 2, 
          "optional": true, 
          "name": "message", 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "String"
            }
          ]
        }
      ], 
      "sourceLink": "source:core.Assert~25", 
      "line": 25, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "identical", 
      "doc": "<p>Raises an exception when the two values <code class=\"param\">a</code> and <code class=\"param\">b</code> are not identical (<code>!==</code>)\nCustomizable with a custom <code class=\"param\">message</code> for the exception text.</p>\n", 
      "visibility": "public", 
      "summary": "Raises an exception when the two values a and b are not identical (!==) Customizable with a custom message for the exception text.", 
      "params": [
        {
          "position": 0, 
          "type": [
            {
              "pseudo": true, 
              "name": "var"
            }
          ], 
          "name": "a"
        }, 
        {
          "position": 1, 
          "type": [
            {
              "pseudo": true, 
              "name": "var"
            }
          ], 
          "name": "b"
        }, 
        {
          "position": 2, 
          "optional": true, 
          "name": "message", 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "String"
            }
          ]
        }
      ], 
      "sourceLink": "source:core.Assert~47", 
      "line": 47, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "isFalse", 
      "doc": "<p>Raises an exception when the value <code class=\"param\">a</code> is not falsy (<code>!= false</code>).\nCustomizable with a custom <code class=\"param\">message</code> for the exception text.</p>\n", 
      "visibility": "public", 
      "summary": "Raises an exception when the value a is not falsy (!= false).", 
      "params": [
        {
          "position": 0, 
          "type": [
            {
              "pseudo": true, 
              "name": "var"
            }
          ], 
          "name": "a"
        }, 
        {
          "position": 1, 
          "optional": true, 
          "name": "message", 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "String"
            }
          ]
        }
      ], 
      "sourceLink": "source:core.Assert~80", 
      "line": 80, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "isIn", 
      "doc": "<p>Raises an exception when the value <code class=\"param\">a</code> is not in <code class=\"param\">object</code>.\nCustomizable with a custom <code class=\"param\">message</code> for the exception text.</p>\n", 
      "visibility": "public", 
      "summary": "Raises an exception when the value a is not in object.", 
      "params": [
        {
          "position": 0, 
          "type": [
            {
              "pseudo": true, 
              "name": "var"
            }
          ], 
          "name": "a"
        }, 
        {
          "position": 1, 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "Object"
            }, 
            {
              "linkable": true, 
              "builtin": true, 
              "name": "Array"
            }, 
            {
              "linkable": true, 
              "builtin": true, 
              "name": "String"
            }
          ], 
          "name": "object"
        }, 
        {
          "position": 2, 
          "optional": true, 
          "name": "message", 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "String"
            }
          ]
        }
      ], 
      "sourceLink": "source:core.Assert~113", 
      "line": 113, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "isNotIn", 
      "doc": "<p>Raises an exception when the value <code class=\"param\">a</code> is in <code class=\"param\">object</code>.\nCustomizable with a custom <code class=\"param\">message</code> for the exception text.</p>\n", 
      "visibility": "public", 
      "summary": "Raises an exception when the value a is in object.", 
      "params": [
        {
          "position": 0, 
          "type": [
            {
              "pseudo": true, 
              "name": "var"
            }
          ], 
          "name": "a"
        }, 
        {
          "position": 1, 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "Object"
            }, 
            {
              "linkable": true, 
              "builtin": true, 
              "name": "Array"
            }, 
            {
              "linkable": true, 
              "builtin": true, 
              "name": "String"
            }
          ], 
          "name": "object"
        }, 
        {
          "position": 2, 
          "optional": true, 
          "name": "message", 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "String"
            }
          ]
        }
      ], 
      "sourceLink": "source:core.Assert~124", 
      "line": 124, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "isNotNull", 
      "doc": "<p>Raises an exception when the value <code class=\"param\">a</code> is <code>null</code>.\nCustomizable with a custom <code class=\"param\">message</code> for the exception text.</p>\n", 
      "visibility": "public", 
      "summary": "Raises an exception when the value a is null.", 
      "params": [
        {
          "position": 0, 
          "type": [
            {
              "pseudo": true, 
              "name": "var"
            }
          ], 
          "name": "a"
        }, 
        {
          "position": 1, 
          "optional": true, 
          "name": "message", 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "String"
            }
          ]
        }
      ], 
      "sourceLink": "source:core.Assert~102", 
      "line": 102, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "isNotType", 
      "doc": "<p>Raises an exception when the value <code class=\"param\">a</code> is of <code class=\"param\">type</code> (checked via <a href=\"#core.Main~isTypeOf\"><code>core.Main#isTypeOf</code></a>)\nCustomizable with a custom <code class=\"param\">message</code> for the exception text.</p>\n", 
      "visibility": "public", 
      "summary": "Raises an exception when the value a is of type (checked via core.Main#isTypeOf) Customizable with a custom message for the exception text.", 
      "params": [
        {
          "position": 0, 
          "type": [
            {
              "pseudo": true, 
              "name": "var"
            }
          ], 
          "name": "a"
        }, 
        {
          "position": 1, 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "String"
            }
          ], 
          "name": "type"
        }, 
        {
          "position": 2, 
          "optional": true, 
          "name": "message", 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "String"
            }
          ]
        }
      ], 
      "sourceLink": "source:core.Assert~168", 
      "line": 168, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "isNull", 
      "doc": "<p>Raises an exception when the value <code class=\"param\">a</code> is not <code>null</code>.\nCustomizable with a custom <code class=\"param\">message</code> for the exception text.</p>\n", 
      "visibility": "public", 
      "summary": "Raises an exception when the value a is not null.", 
      "params": [
        {
          "position": 0, 
          "type": [
            {
              "pseudo": true, 
              "name": "var"
            }
          ], 
          "name": "a"
        }, 
        {
          "position": 1, 
          "optional": true, 
          "name": "message", 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "String"
            }
          ]
        }
      ], 
      "sourceLink": "source:core.Assert~91", 
      "line": 91, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "isTrue", 
      "doc": "<p>Raises an exception when the value <code class=\"param\">a</code> is not trueish (<code>!= true</code>).\nCustomizable with a custom <code class=\"param\">message</code> for the exception text.</p>\n", 
      "visibility": "public", 
      "summary": "Raises an exception when the value a is not trueish (!= true).", 
      "params": [
        {
          "position": 0, 
          "type": [
            {
              "pseudo": true, 
              "name": "var"
            }
          ], 
          "name": "a"
        }, 
        {
          "position": 1, 
          "optional": true, 
          "name": "message", 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "String"
            }
          ]
        }
      ], 
      "sourceLink": "source:core.Assert~69", 
      "line": 69, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "isType", 
      "doc": "<p>Raises an exception when the value <code class=\"param\">a</code> is not of <code class=\"param\">type</code> (checked via <a href=\"#core.Main~isTypeOf\"><code>core.Main#isTypeOf</code></a>)\nCustomizable with a custom <code class=\"param\">message</code> for the exception text.</p>\n", 
      "visibility": "public", 
      "summary": "Raises an exception when the value a is not of type (checked via core.Main#isTypeOf) Customizable with a custom message for the exception text.", 
      "params": [
        {
          "position": 0, 
          "type": [
            {
              "pseudo": true, 
              "name": "var"
            }
          ], 
          "name": "a"
        }, 
        {
          "position": 1, 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "String"
            }
          ], 
          "name": "type"
        }, 
        {
          "position": 2, 
          "optional": true, 
          "name": "message", 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "String"
            }
          ]
        }
      ], 
      "sourceLink": "source:core.Assert~157", 
      "line": 157, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "matches", 
      "doc": "<p>Raises an exception when the value <code class=\"param\">a</code> does not match the regular expression <code class=\"param\">regexp</code>.\nCustomizable with a custom <code class=\"param\">message</code> for the exception text.</p>\n", 
      "visibility": "public", 
      "summary": "Raises an exception when the value a does not match the regular expression regexp.", 
      "params": [
        {
          "position": 0, 
          "type": [
            {
              "pseudo": true, 
              "name": "var"
            }
          ], 
          "name": "a"
        }, 
        {
          "position": 1, 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "RegExp"
            }
          ], 
          "name": "regexp"
        }, 
        {
          "position": 2, 
          "optional": true, 
          "name": "message", 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "String"
            }
          ]
        }
      ], 
      "sourceLink": "source:core.Assert~135", 
      "line": 135, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "notEqual", 
      "doc": "<p>Raises an exception when the two values <code class=\"param\">a</code> and <code class=\"param\">b</code> are equal (<code>==</code>).\nCustomizable with a custom <code class=\"param\">message</code> for the exception text.</p>\n", 
      "visibility": "public", 
      "summary": "Raises an exception when the two values a and b are equal (==).", 
      "params": [
        {
          "position": 0, 
          "type": [
            {
              "pseudo": true, 
              "name": "var"
            }
          ], 
          "name": "a"
        }, 
        {
          "position": 1, 
          "type": [
            {
              "pseudo": true, 
              "name": "var"
            }
          ], 
          "name": "b"
        }, 
        {
          "position": 2, 
          "optional": true, 
          "name": "message", 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "String"
            }
          ]
        }
      ], 
      "sourceLink": "source:core.Assert~36", 
      "line": 36, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "notIdentical", 
      "doc": "<p>Raises an exception when the two values <code class=\"param\">a</code> and <code class=\"param\">b</code> are identical (<code>===</code>).\nCustomizable with a custom <code class=\"param\">message</code> for the exception text.</p>\n", 
      "visibility": "public", 
      "summary": "Raises an exception when the two values a and b are identical (===).", 
      "params": [
        {
          "position": 0, 
          "type": [
            {
              "pseudo": true, 
              "name": "var"
            }
          ], 
          "name": "a"
        }, 
        {
          "position": 1, 
          "type": [
            {
              "pseudo": true, 
              "name": "var"
            }
          ], 
          "name": "b"
        }, 
        {
          "position": 2, 
          "optional": true, 
          "name": "message", 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "String"
            }
          ]
        }
      ], 
      "sourceLink": "source:core.Assert~58", 
      "line": 58, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "notMatches", 
      "doc": "<p>Raises an exception when the value <code class=\"param\">a</code> matches the regular expression <code class=\"param\">regexp</code>.\nCustomizable with a custom <code class=\"param\">message</code> for the exception text.</p>\n", 
      "visibility": "public", 
      "summary": "Raises an exception when the value a matches the regular expression regexp.", 
      "params": [
        {
          "position": 0, 
          "type": [
            {
              "pseudo": true, 
              "name": "var"
            }
          ], 
          "name": "a"
        }, 
        {
          "position": 1, 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "RegExp"
            }
          ], 
          "name": "regexp"
        }, 
        {
          "position": 2, 
          "optional": true, 
          "name": "message", 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "String"
            }
          ]
        }
      ], 
      "sourceLink": "source:core.Assert~146", 
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
    "name": "core.Assert", 
    "tags": [], 
    "doc": "<p>Collection of assertions which could be used to verify incoming arguments, etc.</p>\n\n<p>Modelled after the Python API at <a href=\"http://docs.python.org/library/unittest.html\">http://docs.python.org/library/unittest.html</a></p>\n", 
    "summary": "Collection of assertions which could be used to verify incoming arguments, etc.", 
    "line": 19, 
    "type": "core.Module"
  }, 
  "id": "core.Assert", 
  "size": {
    "zipped": 362, 
    "optimized": 1238, 
    "compressed": 1623
  }
},'core.Assert');