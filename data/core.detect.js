apibrowser.callback({
  "package": "core", 
  "basename": "detect", 
  "content": [
    {
      "link": "core.detect.ES5", 
      "name": "ES5", 
      "summary": "Checks whether the ES5 extensions should be loaded to fix missing engine functions."
    }, 
    {
      "link": "core.detect.Engine", 
      "name": "Engine", 
      "summary": "Detects the browser engine in which the script is executed."
    }, 
    {
      "link": "core.detect.Env", 
      "name": "Env", 
      "summary": "Holds basic informations about the environment the script is running in."
    }, 
    {
      "link": "core.detect.Locale", 
      "name": "Locale"
    }, 
    {
      "link": "core.detect.Object", 
      "name": "Object", 
      "summary": "Checks for existance of global API objects."
    }, 
    {
      "link": "core.detect.Param", 
      "name": "Param", 
      "summary": "Parses the URL of the location at loadtime into parameters and make them easily available via {#get()}."
    }, 
    {
      "link": "core.detect.Platform", 
      "name": "Platform", 
      "summary": "This class comes with all relevant information regarding the client&#39;s platform."
    }, 
    {
      "link": "core.detect.System", 
      "name": "System", 
      "summary": "Detects the system where the application is running on."
    }
  ], 
  "uses": [], 
  "main": {
    "doc": "<p>Feature detection classes. Mainly used by the permutation features of Jasy.</p>\n", 
    "type": "Package", 
    "name": "core.detect"
  }, 
  "id": "core.detect"
},'core.detect');