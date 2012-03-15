apibrowser.callback({
  "package": "", 
  "basename": "ext", 
  "content": [
    {
      "link": "ext.Base64", 
      "name": "Base64", 
      "summary": "Polyfill for Base64 support which is natively implemented in most recent browsers."
    }, 
    {
      "link": "ext.Console", 
      "name": "Console"
    }, 
    {
      "link": "ext.DateNow", 
      "name": "DateNow", 
      "summary": "Adds the pretty essential Date.now() method from ES5 if it is missing."
    }, 
    {
      "link": "ext.DocumentHead", 
      "name": "DocumentHead"
    }, 
    {
      "link": "ext.ExecScript", 
      "name": "ExecScript", 
      "summary": "Adds a method for executing aribritary script content in global context."
    }, 
    {
      "link": "ext.FunctionBind", 
      "name": "FunctionBind", 
      "summary": "Adds missing ES5 Function.prototype.bind when not implemented natively by the browser engine."
    }, 
    {
      "link": "ext.HTML5Markup", 
      "name": "HTML5Markup"
    }, 
    {
      "link": "ext.IEDOM", 
      "name": "IEDOM"
    }, 
    {
      "link": "ext.Immediate", 
      "name": "Immediate", 
      "summary": "Adds non-standard methods setImmediate and clearImmediate which were introduced by Firefox to the global object."
    }, 
    {
      "link": "ext.IsArray", 
      "name": "IsArray", 
      "summary": "Adds the pretty essential Array.isArray() method from ES5 if it is missing."
    }, 
    {
      "link": "ext.LocalStorage", 
      "name": "LocalStorage", 
      "summary": "Emulation for localStorage object to store text data on the browser."
    }, 
    {
      "link": "ext.RequestAnimationFrame", 
      "name": "RequestAnimationFrame", 
      "summary": "Adds new style requestAnimationFrame API to browser engines which are missing it."
    }, 
    {
      "link": "ext.StringTrim", 
      "name": "StringTrim", 
      "summary": "Adds ES5 String methods if these are not implemented by the engine."
    }, 
    {
      "link": "ext.TimeoutArgs", 
      "name": "TimeoutArgs", 
      "summary": "Overrides global setTimeout and setInterval with implementations which supports extra parameters - a feature already supported by most JavaScript engines."
    }, 
    {
      "link": "ext.es5", 
      "name": "es5", 
      "summary": "Contains polyfills for missing ES5 features (matching specification)."
    }, 
    {
      "link": "ext.sugar", 
      "name": "sugar", 
      "summary": "Contains extensions for native objects to improved user friendliness of the JavaScript API."
    }
  ], 
  "uses": [], 
  "main": {
    "doc": "<p>Fixes and enhancements for native objects as well as polyfills to fix missing features.</p>\n", 
    "type": "Package", 
    "name": "ext"
  }, 
  "id": "ext"
},'ext');