apibrowser.callback({
  "statics": [
    {
      "name": "assert", 
      "sourceLink": "source:core.Interface~80", 
      "visibility": "public", 
      "summary": "Verifies whether the given objectOrClass implements the given iface.", 
      "params": [
        {
          "position": 0, 
          "type": [
            "Object", 
            "core.Class"
          ], 
          "name": "objectOrClass"
        }, 
        {
          "default": "this", 
          "position": 1, 
          "optional": true, 
          "name": "iface", 
          "type": [
            "core.Interface"
          ]
        }
      ], 
      "doc": "<p>Verifies whether the given <code class=\"param\">objectOrClass</code> implements the given <code class=\"param\">iface</code>.</p>\n\n<ul>\n<li>Tests all members of being defined and being the same type (based on Object.toString).</li>\n<li>Tests all properties regarding existance. Also checks whether the outer visible aspects: events, group, themeable and inheritable are identical.</li>\n<li>Tests all events regarding existance and whether there EventClass - if defined - is identical.</li>\n</ul>\n\n<p>Throws whenever the object or class does not implements the interface.</p>\n", 
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
        "core.Interface"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "String"
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
        "Boolean"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "core.Interface"
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
    "sourceLink": "source:core.Interface~25", 
    "init": "core.Interface", 
    "params": [
      {
        "position": 0, 
        "type": [
          "String"
        ], 
        "name": "name"
      }, 
      {
        "position": 1, 
        "type": [
          "Map"
        ], 
        "name": "config"
      }
    ], 
    "doc": "<p>Define an interface with <code class=\"param\">name</code> using <code class=\"param\">config</code> which can be used for validation of class instances.</p>\n", 
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
    "doc": "<p>Returns a string representing the Interface.</p>\n", 
    "line": 14, 
    "type": "core.Main", 
    "name": "core.Interface", 
    "tags": []
  }, 
  "id": "core.Interface", 
  "size": {
    "zipped": 916, 
    "optimized": 2674, 
    "compressed": 3967
  }
},'core.Interface');