apibrowser.callback({
  "package": "ext", 
  "basename": "es5", 
  "content": [
    {
      "link": "ext.es5.Array", 
      "name": "Array", 
      "summary": "Adds ES5 Array methods if these are not implemented by the engine."
    }, 
    {
      "link": "ext.es5.Date", 
      "name": "Date", 
      "summary": "Adds ES5 Date methods if these are not implemented by the engine."
    }, 
    {
      "link": "ext.es5.JSON", 
      "name": "JSON"
    }, 
    {
      "link": "ext.es5.Object", 
      "name": "Object", 
      "summary": "Adds missing ES5 Object.keys to the Object constructor when not implemented natively by the browser engine."
    }
  ], 
  "uses": [], 
  "main": {
    "doc": "<p>Contains polyfills for missing ES5 features (matching specification). These automatically only apply modifications when needed. They could be loaded based on feature test {core.detect.ES5}</p>\n", 
    "type": "Package", 
    "name": "ext.es5"
  }, 
  "id": "ext.es5"
},'ext.es5');