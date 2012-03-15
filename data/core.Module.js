apibrowser.callback({
  "statics": [
    {
      "name": "getByName", 
      "doc": "<p>Resolves a given <code class=\"param\">name</code> and returns the stored module.</p>\n", 
      "visibility": "public", 
      "summary": "Resolves a given name and returns the stored module.", 
      "returns": [
        "core.Module"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "String"
          ], 
          "name": "name"
        }
      ], 
      "sourceLink": "source:core.Module~68", 
      "line": 68, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "isModule", 
      "doc": "<p>Whether the given object is a valid <code class=\"param\">module</code>.</p>\n", 
      "visibility": "public", 
      "summary": "Whether the given object is a valid module.", 
      "returns": [
        "Boolean"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "Object"
          ], 
          "name": "module"
        }
      ], 
      "sourceLink": "source:core.Module~84", 
      "line": 84, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "isModuleName", 
      "doc": "<p>Returns whether the given <code class=\"param\">name</code> is a valid module name.</p>\n", 
      "visibility": "public", 
      "summary": "Returns whether the given name is a valid module name.", 
      "returns": [
        "Boolean"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "String"
          ], 
          "name": "name"
        }
      ], 
      "sourceLink": "source:core.Module~77", 
      "line": 77, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "core", 
  "basename": "Module", 
  "permutations": [], 
  "construct": {
    "doc": "<p>Define a module with the given <code class=\"param\">name</code> with static <code class=\"param\">members</code> being attached.</p>\n", 
    "init": "core.Module", 
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
        "name": "members"
      }
    ], 
    "sourceLink": "source:core.Module~21", 
    "line": 21, 
    "isFunction": true
  }, 
  "uses": [
    "core.Main"
  ], 
  "usedBy": [
    "api.test.Module", 
    "core.Assert", 
    "core.Class", 
    "core.Env", 
    "core.Interface", 
    "core.bom.Caret", 
    "core.bom.ClassName", 
    "core.bom.Form", 
    "core.bom.FormItem", 
    "core.bom.FullScreen", 
    "core.bom.Offset", 
    "core.bom.Position", 
    "core.bom.Ready", 
    "core.bom.ScrollInto", 
    "core.bom.Style", 
    "core.bom.Text", 
    "core.bom.Viewport", 
    "core.crypt.Adler32", 
    "core.crypt.CRC32", 
    "core.crypt.MD5", 
    "core.crypt.SHA1", 
    "core.crypt.SHA256", 
    "core.crypt.Util", 
    "core.detect.ES5", 
    "core.detect.Engine", 
    "core.detect.Env", 
    "core.detect.Locale", 
    "core.detect.Object", 
    "core.detect.Param", 
    "core.detect.Platform", 
    "core.detect.System", 
    "core.dom.Node", 
    "core.effect.Animate", 
    "core.effect.Easing", 
    "core.io.Asset", 
    "core.io.Image", 
    "core.io.Jsonp", 
    "core.io.Network", 
    "core.io.Queue", 
    "core.io.Script", 
    "core.io.StyleSheet", 
    "core.io.Text", 
    "core.locale.Translate", 
    "core.property.Core", 
    "core.property.Debug", 
    "core.property.Group", 
    "core.property.Multi", 
    "core.property.Simple", 
    "core.template.Compiler", 
    "core.template.Parser", 
    "core.util.Id"
  ], 
  "main": {
    "doc": "<p>Declarations of simple modules with static members</p>\n", 
    "line": 11, 
    "type": "core.Main", 
    "name": "core.Module", 
    "tags": []
  }, 
  "id": "core.Module", 
  "size": {
    "zipped": 441, 
    "optimized": 840, 
    "compressed": 1132
  }
},'core.Module');