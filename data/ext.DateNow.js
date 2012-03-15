apibrowser.callback({
  "statics": [
    {
      "name": "now", 
      "doc": "<p>Returns the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.</p>\n\n<p>See also: <a href=\"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/now\">https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/now</a></p>\n", 
      "visibility": "public", 
      "summary": "Returns the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.", 
      "returns": [
        {
          "linkable": true, 
          "builtin": true, 
          "name": "Number"
        }
      ], 
      "sourceLink": "source:ext.DateNow~16", 
      "line": 16, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "ext", 
  "basename": "DateNow", 
  "permutations": [], 
  "uses": [
    "core.Main"
  ], 
  "usedBy": [
    "core.Main"
  ], 
  "main": {
    "name": "Date", 
    "extension": true, 
    "tags": [], 
    "doc": "<p>Adds the pretty essential <code>Date.now()</code> method from ES5 if it is missing.</p>\n", 
    "summary": "Adds the pretty essential Date.now() method from ES5 if it is missing.", 
    "line": 9, 
    "type": "core.Main"
  }, 
  "id": "ext.DateNow", 
  "size": {
    "zipped": 75, 
    "optimized": 69, 
    "compressed": 69
  }
},'ext.DateNow');