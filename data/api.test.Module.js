apibrowser.callback({
  "statics": [
    {
      "name": "method1", 
      "doc": "<p>This method compares <code class=\"param\">data</code> and <code class=\"param\">data2</code>,\nif it is equals, it returns <code>true</code>. If it is not equals,\nit returns <code>false</code>.</p>\n\n<p>If any of <code class=\"param\">data</code> or <code class=\"param\">data2</code> is missing, it will return <code>null</code>.</p>\n\n<p>Hint: The opposite of <a href=\"#~method1\"><code>method1</code></a> is <a href=\"#~method2\"><code>method2</code></a>.</p>\n", 
      "visibility": "public", 
      "summary": "This method compares data and data2, if it is equals, it returns true.", 
      "returns": [
        "Boolean", 
        "null"
      ], 
      "params": [
        {
          "position": 0, 
          "name": "data"
        }, 
        {
          "position": 1, 
          "name": "data2"
        }
      ], 
      "sourceLink": "source:api.test.Module~15", 
      "line": 15, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "method2", 
      "doc": "<p>This method is the opposite to <a href=\"#~method1\"><code>method1</code></a> and\ncompares <code class=\"param\">data</code> and <code class=\"param\">data2</code></p>\n\n<p>It returns <code>false</code> if it is equals and <code>true</code> if\nboth parameters are not equals.</p>\n", 
      "visibility": "public", 
      "summary": "This method is the opposite to method1 and compares data and data2  It returns false if it is equals and true if both parameters are not equals.", 
      "returns": [
        "Boolean", 
        "null"
      ], 
      "params": [
        {
          "position": 0, 
          "name": "data"
        }, 
        {
          "position": 1, 
          "name": "data2"
        }
      ], 
      "sourceLink": "source:api.test.Module~32", 
      "line": 32, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "api.test", 
  "basename": "Module", 
  "permutations": [], 
  "uses": [
    "core.Module"
  ], 
  "main": {
    "doc": "<p>Just a simple test module</p>\n", 
    "line": 2, 
    "type": "core.Module", 
    "name": "api.test.Module", 
    "tags": []
  }, 
  "id": "api.test.Module", 
  "size": {
    "zipped": 113, 
    "optimized": 198, 
    "compressed": 242
  }
},'api.test.Module');