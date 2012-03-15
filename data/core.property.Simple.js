apibrowser.callback({
  "statics": [
    {
      "name": "create", 
      "doc": "<p>Creates a new set of member methods for the given property <code class=\"param\">config</code>.</p>\n\n<p>Please note that you need to define one of &ldquo;init&rdquo; or &ldquo;nullable&rdquo;. Otherwise you\nmight get errors during runtime function calls.</p>\n", 
      "visibility": "public", 
      "summary": "Creates a new set of member methods for the given property config.", 
      "returns": [
        "Map"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "Map"
          ], 
          "name": "config"
        }
      ], 
      "sourceLink": "source:core.property.Simple~43", 
      "line": 43, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "core.property", 
  "basename": "Simple", 
  "permutations": [
    "debug"
  ], 
  "uses": [
    "core.Assert", 
    "core.Env", 
    "core.Module", 
    "core.property.Core", 
    "core.property.Debug", 
    "ext.sugar.Object"
  ], 
  "usedBy": [
    "core.Class"
  ], 
  "main": {
    "doc": "<p>Property handling for simple key/value like properties which might have an optional init value.</p>\n\n<p>Supports the following configuration keys:</p>\n\n<ul>\n<li><code>type</code>: Check the incoming value for the given type or function.</li>\n<li><code>apply</code>: Link to function to call after a new value has been stored. The signature of the method is\n<code>function(newValue, oldValue)</code></li>\n<li><code>event</code>: Event to fire after a new value has been stored (and apply has been called). The event\ntype is a <a href=\"#core.property.Event\"><code>core.property.Event</code></a> which contains both, the old and new value.</li>\n<li><code>init</code>: Init value for the property. If no value is set or the property gets reset, the getter\nwill return the <code>init</code> value.</li>\n<li><code>nullable</code>: Whether the property is able to store null values. This also allows the system to\nreturn <code>null</code> when no other value is available. Otherwise an error is thrown whenever no value is\navailable.</li>\n</ul>\n", 
    "line": 35, 
    "type": "core.Module", 
    "name": "core.property.Simple", 
    "tags": [
      {
        "name": "break", 
        "value": "core.property.Debug"
      }
    ]
  }, 
  "id": "core.property.Simple", 
  "size": {
    "zipped": 383, 
    "optimized": 714, 
    "compressed": 2666
  }
},'core.property.Simple');