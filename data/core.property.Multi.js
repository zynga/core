apibrowser.callback({
  "statics": [
    {
      "name": "create", 
      "doc": "<p>Adds a new multi-field property with the given <code class=\"param\">name</code> (Camel-case and no special characters) and configuration (<code class=\"param\">config</code>) to the <code class=\"param\">clazz</code>.</p>\n\n<p>Please note that you need to define one of &ldquo;init&rdquo; or &ldquo;nullable&rdquo;. Otherwise you might get errors during runtime function calls.</p>\n", 
      "visibility": "public", 
      "summary": "Adds a new multi-field property with the given name (Camel-case and no special characters) and configuration (config) to the clazz.", 
      "returns": [
        {
          "linkable": true, 
          "auto": true, 
          "builtin": true, 
          "name": "Function"
        }
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            {
              "linkable": true, 
              "name": "Map"
            }
          ], 
          "name": "config"
        }
      ], 
      "sourceLink": "source:core.property.Multi~221", 
      "line": 221, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "getInheritableProperties", 
      "doc": "<p>Returns a list (a map type for faster lookup) of all inheritable properties supported by the given <code class=\"param\">clazz</code>.</p>\n\n<p>You may choose to access inheritable properties via:\n<code>obj.__inheritables || core.property.Multi.getInheritableProperties(obj)</code>\nfor better performance.</p>\n", 
      "visibility": "public", 
      "summary": "Returns a list (a map type for faster lookup) of all inheritable properties supported by the given clazz.", 
      "returns": [
        {
          "linkable": true, 
          "name": "Map"
        }
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            {
              "linkable": true, 
              "name": "core.Class"
            }
          ], 
          "name": "clazz"
        }
      ], 
      "sourceLink": "source:core.property.Multi~731", 
      "line": 731, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "getSingleValue", 
      "doc": "<p>Returns a value of the <code class=\"param\">obj</code> from a specific <code class=\"param\">field</code>\n(one of &ldquo;init&rdquo;, &ldquo;inheritance&rdquo;, &ldquo;theme&rdquo;, &ldquo;user&rdquo; or &ldquo;override&rdquo;) for the given <code class=\"param\">propertyName</code> -\nignoring any priorities.</p>\n", 
      "visibility": "public", 
      "summary": "Returns a value of the obj from a specific field (one of &ldquo;init&rdquo;, &ldquo;inheritance&rdquo;, &ldquo;theme&rdquo;, &ldquo;user&rdquo; or &ldquo;override&rdquo;) for the given propertyName - ignoring any priorities.", 
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
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "Object"
            }
          ], 
          "name": "obj"
        }, 
        {
          "position": 1, 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "String"
            }
          ], 
          "name": "propertyName"
        }, 
        {
          "position": 2, 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "String"
            }
          ], 
          "name": "field"
        }
      ], 
      "sourceLink": "source:core.property.Multi~552", 
      "line": 552, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "importData", 
      "doc": "<p>Imports a list of values. Useful for batch-applying a whole set of properties. Supports\n<code>undefined</code> values to reset properties.</p>\n\n<ul>\n<li><code class=\"param\">obj</code> Any object</li>\n<li><code class=\"param\">values</code> Map of properties to apply</li>\n<li><code class=\"param\">oldValues</code> Map of old property values. Just used for comparision. Required for theme changes. In case of a state change the old value is not available otherwise.</li>\n<li><code class=\"param\">field</code> Storage field to modify</li>\n</ul>\n", 
      "visibility": "public", 
      "summary": "Imports a list of values.", 
      "params": [
        {
          "position": 0, 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "Object"
            }
          ], 
          "name": "obj"
        }, 
        {
          "position": 1, 
          "type": [
            {
              "linkable": true, 
              "name": "Map"
            }
          ], 
          "name": "values"
        }, 
        {
          "position": 2, 
          "type": [
            {
              "linkable": true, 
              "name": "Map"
            }
          ], 
          "name": "oldValues"
        }, 
        {
          "position": 3, 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "String"
            }
          ], 
          "name": "field"
        }
      ], 
      "sourceLink": "source:core.property.Multi~575", 
      "line": 575, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "moveObject", 
      "doc": "<p>Process an object whenever the parent has changed.</p>\n\n<p>Should be called by the object itself which was modified. Required are both parents, the old and the new one\nto make this work correctly. All given objects need to support the &ldquo;$$parent&rdquo; and &ldquo;$$data&rdquo; object fields.</p>\n\n<p>This function is quite optimized for reduced additional function calls. The only expensive scenarios are when\na property is currently inherited or the new parent offers a value which needs to aquired using a get()\ncall (e.g. themed or itself inherited). This means it is basically cheap for initial application creation,\nbut is more expensive as soon as the application is running and objects are moved around dynamically.</p>\n\n<ul>\n<li><code class=\"param\">obj</code> The modified object</li>\n<li><code class=\"param\">newParent</code> The current parent</li>\n<li><code class=\"param\">oldParent</code> The new parent</li>\n</ul>\n", 
      "visibility": "public", 
      "summary": "Process an object whenever the parent has changed.", 
      "params": [
        {
          "position": 0, 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "Object"
            }
          ], 
          "name": "obj"
        }, 
        {
          "position": 1, 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "Object"
            }
          ], 
          "name": "newParent"
        }, 
        {
          "position": 2, 
          "type": [
            {
              "linkable": true, 
              "builtin": true, 
              "name": "Object"
            }
          ], 
          "name": "oldParent"
        }
      ], 
      "sourceLink": "source:core.property.Multi~775", 
      "line": 775, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "core.property", 
  "basename": "Multi", 
  "permutations": [
    "debug"
  ], 
  "uses": [
    "core.Env", 
    "core.Module", 
    "core.property.Core", 
    "core.property.Debug"
  ], 
  "main": {
    "name": "core.property.Multi", 
    "tags": [
      {
        "name": "break", 
        "value": "core.property.Debug"
      }
    ], 
    "doc": "<p>Multi-level property which support multiple values per property with integrated priorization. The following fields\nare available for properties depending on their configuration:</p>\n\n<ul>\n<li><code>inherited</code></li>\n<li><code>theme</code></li>\n<li><code>user</code></li>\n<li><code>override</code></li>\n</ul>\n\n<p>Higher values mean higher priority e.g. user values override themed values. There is an additional value\nwhich is the init value and is stored property-wide (read: class specific - not instance specific).</p>\n\n<p>Additional configuration flags (compared to simple properties):</p>\n\n<ul>\n<li><code>inheritable</code>: Whether the property value should be inheritable. If the property does not have a user defined or an init value, the property will try to get the value from the parent of the current object.</li>\n<li><code>themeable</code>: Whether the property allows a themable value read dynamically from a theming system.\nThe object containing this property needs to implement a method <code>getThemedValue</code>.</li>\n</ul>\n", 
    "summary": "Multi-level property which support multiple values per property with integrated priorization.", 
    "line": 208, 
    "type": "core.Module"
  }, 
  "id": "core.property.Multi", 
  "size": {
    "zipped": 1539, 
    "optimized": 3242, 
    "compressed": 10162
  }
},'core.property.Multi');