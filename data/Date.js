apibrowser.callback({
  "statics": [
    {
      "visibility": "public", 
      "fromLink": "static:ext.DateNow~now", 
      "line": 16, 
      "isFunction": true, 
      "from": "ext.DateNow", 
      "name": "now", 
      "sourceLink": "source:ext.DateNow~16", 
      "summary": "Returns the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.", 
      "returns": [
        {
          "linkable": true, 
          "builtin": true, 
          "name": "Number"
        }
      ], 
      "doc": "<p>Returns the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.</p>\n\n<p>See also: <a href=\"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/now\">https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/now</a></p>\n", 
      "type": "Function"
    }
  ], 
  "package": "", 
  "basename": "Date", 
  "uses": [], 
  "members": [
    {
      "visibility": "public", 
      "fromLink": "member:ext.es5.Date~toISOString", 
      "line": 27, 
      "isFunction": true, 
      "from": "ext.es5.Date", 
      "name": "toISOString", 
      "sourceLink": "source:ext.es5.Date~27", 
      "summary": "Converts the Date instance to an ISO string representation.", 
      "returns": [
        {
          "linkable": true, 
          "auto": true, 
          "builtin": true, 
          "name": "String"
        }
      ], 
      "doc": "<p>Converts the <code>Date</code> instance to an ISO string representation.</p>\n\n<ul>\n<li>ES5 15.9.5.43: <a href=\"http://es5.github.com/#x15.9.5.43\">http://es5.github.com/#x15.9.5.43</a></li>\n</ul>\n\n<p>This function returns a String value represent the instance in time\nrepresented by this Date object. The format of the String is the Date Time\nstring format defined in 15.9.1.15. All fields are present in the String.\nThe time zone is always UTC, denoted by the suffix Z. If the time value of\nthis object is not a finite Number a RangeError exception is thrown.</p>\n", 
      "type": "Function"
    }, 
    {
      "from": "ext.es5.Date", 
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
      "fromLink": "member:ext.es5.Date~toJSON", 
      "line": 61, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "main": {
    "from": [
      "ext.es5.Date", 
      "ext.DateNow"
    ], 
    "type": "Extend", 
    "name": "Date", 
    "doc": "Extensions for Date"
  }, 
  "id": "Date"
},'Date');