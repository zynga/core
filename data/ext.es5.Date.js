apibrowser.callback({
  "assets": [], 
  "package": "ext.es5", 
  "basename": "Date", 
  "permutations": [], 
  "uses": [
    "core.Main"
  ], 
  "members": [
    {
      "name": "toISOString", 
      "doc": "<p>Converts the <code>Date</code> instance to an ISO string representation.</p>\n\n<ul>\n<li>ES5 15.9.5.43: <a href=\"http://es5.github.com/#x15.9.5.43\">http://es5.github.com/#x15.9.5.43</a></li>\n</ul>\n\n<p>This function returns a String value represent the instance in time\nrepresented by this Date object. The format of the String is the Date Time\nstring format defined in 15.9.1.15. All fields are present in the String.\nThe time zone is always UTC, denoted by the suffix Z. If the time value of\nthis object is not a finite Number a RangeError exception is thrown.</p>\n", 
      "visibility": "public", 
      "summary": "Converts the Date instance to an ISO string representation.", 
      "returns": [
        {
          "linkable": true, 
          "auto": true, 
          "builtin": true, 
          "name": "String"
        }
      ], 
      "sourceLink": "source:ext.es5.Date~27", 
      "line": 27, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "toJSON", 
      "doc": "<p>Converts the <code>Date</code> instance to a JSON representation.</p>\n\n<ul>\n<li><code class=\"param\">key</code> is currently unused.</li>\n<li>ES5 15.9.5.44</li>\n</ul>\n", 
      "visibility": "public", 
      "summary": "Converts the Date instance to a JSON representation.", 
      "returns": [
        {
          "auto": true, 
          "pseudo": true, 
          "name": "var"
        }
      ], 
      "params": [
        {
          "position": 0, 
          "name": "key"
        }
      ], 
      "sourceLink": "source:ext.es5.Date~61", 
      "line": 61, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "usedBy": [
    "core.Class"
  ], 
  "main": {
    "name": "Date", 
    "extension": true, 
    "tags": [], 
    "doc": "<p>Adds ES5 Date methods if these are not implemented by the engine.</p>\n", 
    "summary": "Adds ES5 Date methods if these are not implemented by the engine.", 
    "line": 14, 
    "type": "core.Main"
  }, 
  "id": "ext.es5.Date", 
  "size": {
    "zipped": 354, 
    "optimized": 580, 
    "compressed": 690
  }
},'ext.es5.Date');