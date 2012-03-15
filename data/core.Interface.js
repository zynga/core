apibrowser.callback({
  "statics": [
    {
      "name": "assert", 
      "doc": "<p>Verifies whether the given <code class=\"param\">objectOrClass</code> implements the given <code class=\"param\">iface</code>.</p>\n\n<ul>\n<li>Tests all members of being defined and being the same type (based on Object.toString).</li>\n<li>Tests all properties regarding existance. Also checks whether the outer visible aspects: events, group, themeable and inheritable are identical.</li>\n<li>Tests all events regarding existance and whether there EventClass - if defined - is identical.</li>\n</ul>\n\n<p>Throws whenever the object or class does not implements the interface.</p>\n", 
      "visibility": "public", 
      "summary": "Verifies whether the given objectOrClass implements the given iface.", 
      "params": [
        {
          "position": 0, 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "Object"
            }, 
            {
              "linkable": true, 
              "name": "core.Class"
            }
          ], 
          "name": "objectOrClass"
        }, 
        {
          "default": "this", 
          "position": 1, 
          "optional": true, 
          "name": "iface", 
          "type": [
            {
              "linkable": true, 
              "name": "core.Interface"
            }
          ]
        }
      ], 
      "sourceLink": "source:core.Interface~80", 
      "line": 80, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "getByName", 
      "doc": "<p>Resolves a given <code class=\"param\">interfaceName</code>.</p>\n", 
      "visibility": "public", 
      "summary": "Resolves a given interfaceName.", 
      "returns": [
        {
          "linkable": true, 
          "name": "core.Interface"
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
            }
          ], 
          "name": "interfaceName"
        }
      ], 
      "sourceLink": "source:core.Interface~60", 
      "line": 60, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "isInterface", 
      "doc": "<p>Whether the given object is a <code class=\"param\">iface</code>.</p>\n", 
      "visibility": "public", 
      "summary": "Whether the given object is a iface.", 
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
              "name": "core.Interface"
            }
          ], 
          "name": "iface"
        }
      ], 
      "sourceLink": "source:core.Interface~206", 
      "line": 206, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "core", 
  "basename": "Interface", 
  "permutations": [
    "debug"
  ], 
  "construct": {
    "tags": [
      {
        "name": "break", 
        "value": "core.Class"
      }
    ], 
    "doc": "<p>Define an interface with <code class=\"param\">name</code> using <code class=\"param\">config</code> which can be used for validation of class instances.</p>\n", 
    "summary": "Define an interface with name using config which can be used for validation of class instances.", 
    "init": "core.Interface", 
    "params": [
      {
        "position": 0, 
        "type": [
          {
            "builtin": true, 
            "name": "String"
          }
        ], 
        "name": "name"
      }, 
      {
        "position": 1, 
        "type": [
          {
            "name": "Map"
          }
        ], 
        "name": "config"
      }
    ], 
    "sourceLink": "source:core.Interface~25", 
    "line": 25, 
    "isFunction": true
  }, 
  "uses": [
    "core.Assert", 
    "core.Class", 
    "core.Env", 
    "core.Main", 
    "core.Module"
  ], 
  "usedBy": [
    "api.test.Mammalian", 
    "core.Class", 
    "core.property.Debug", 
    "core.property.IEvent", 
    "core.property.IInheritable", 
    "core.property.IThemeable"
  ], 
  "main": {
    "name": "core.Interface", 
    "tags": [], 
    "doc": "<p>Returns a string representing the Interface.</p>\n", 
    "summary": "Returns a string representing the Interface.", 
    "line": 14, 
    "type": "core.Main"
  }, 
  "id": "core.Interface", 
  "size": {
    "zipped": 916, 
    "optimized": 2674, 
    "compressed": 3967
  }
},'core.Interface');