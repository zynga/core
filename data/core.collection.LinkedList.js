apibrowser.callback({
  "assets": [], 
  "package": "core.collection", 
  "basename": "LinkedList", 
  "permutations": [
    "debug"
  ], 
  "construct": {
    "doc": "<p>Native <code class=\"param\">array</code> like object to import</p>\n", 
    "init": "core.collection.LinkedList", 
    "params": [
      {
        "position": 0, 
        "type": [
          "Array"
        ], 
        "name": "array"
      }
    ], 
    "sourceLink": "source:core.collection.LinkedList~46", 
    "line": 46, 
    "isFunction": true
  }, 
  "uses": [
    "core.Assert", 
    "core.Class", 
    "core.Env"
  ], 
  "members": [
    {
      "name": "add", 
      "doc": "<p>Adds the given <code class=\"param\">obj</code> to the list</p>\n\n<p>Performance behavior: O(1)</p>\n", 
      "visibility": "public", 
      "returns": [
        "core.collection.LinkedList"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "Object"
          ], 
          "name": "obj"
        }
      ], 
      "sourceLink": "source:core.collection.LinkedList~100", 
      "line": 100, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "clear", 
      "doc": "<p>Clears the full list and returns the list object</p>\n\n<p>Performance behavior: O(n)</p>\n", 
      "visibility": "public", 
      "returns": [
        "core.collection.LinkedList"
      ], 
      "sourceLink": "source:core.collection.LinkedList~251", 
      "line": 251, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "getLength", 
      "doc": "<p>Returns the length of the list</p>\n\n<p>Performance behavior: O(1)</p>\n", 
      "visibility": "public", 
      "returns": [
        "Integer"
      ], 
      "sourceLink": "source:core.collection.LinkedList~241", 
      "line": 241, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "has", 
      "doc": "<p>Returns whether the list contains the given <code class=\"param\">obj</code></p>\n\n<p>Performance behavior: O(1)</p>\n", 
      "visibility": "public", 
      "returns": [
        "Boolean"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "Object"
          ], 
          "name": "obj"
        }
      ], 
      "sourceLink": "source:core.collection.LinkedList~191", 
      "line": 191, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "indexOf", 
      "doc": "<p>Returns the position of the <code class=\"param\">obj</code> in the list</p>\n\n<p>Performance behavior: O(n); in negative cases just O(1)</p>\n", 
      "visibility": "public", 
      "returns": [
        "Integer"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "Object"
          ], 
          "name": "obj"
        }
      ], 
      "sourceLink": "source:core.collection.LinkedList~201", 
      "line": 201, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "isEmpty", 
      "doc": "<p>Returns whether the list is empty</p>\n\n<p>Performance behavior: O(1)</p>\n", 
      "visibility": "public", 
      "returns": [
        "Boolean"
      ], 
      "sourceLink": "source:core.collection.LinkedList~231", 
      "line": 231, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "remove", 
      "doc": "<p>Removes the given <code class=\"param\">obj</code> from the list</p>\n\n<p>Performance behavior: O(1)</p>\n", 
      "visibility": "public", 
      "returns": [
        "core.collection.LinkedList"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "Object"
          ], 
          "name": "obj"
        }
      ], 
      "sourceLink": "source:core.collection.LinkedList~138", 
      "line": 138, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "toArray", 
      "doc": "<p>Returns an array copy of the list</p>\n\n<p>Performance behavior: O(n)</p>\n", 
      "visibility": "public", 
      "returns": [
        "Array"
      ], 
      "sourceLink": "source:core.collection.LinkedList~277", 
      "line": 277, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "main": {
    "doc": "<p>A LinkedList implemented in pure JavaScript.</p>\n\n<p>Use this class when adding/removing/contains is more performance critical to you than iterating.\nLinkedLists beat native array performance especially on checking for containment and removing of objects.\nIt adds somewhat of a memory overhead though as every object refers the previous/next objects.\nThrough the nature of having fast contains checks and position storage it can be used when both\npositions and fast containsment checks are required (a mix of array/hashmap).</p>\n\n<p>The implementation is a doubly linked list which stores references on the objects which are stored. So\nthese objects are modified. Iterating through this objects will show the keys added by the LinkedList!</p>\n\n<p><strong>Wikipedia on LinkedList</strong></p>\n\n<p>The principal benefit of a linked list over a conventional array is that the list elements can easily\nbe inserted or removed without reallocation or reorganization of the entire structure because the data\nitems need not be stored contiguously in memory or on disk. Linked lists allow insertion and removal\nof nodes at any point in the list, and can do so with a constant number of operations if the link\nprevious to the link being added or removed is maintained during list traversal.</p>\n\n<p>On the other hand, simple linked lists by themselves do not allow random access to the data, or any form\nof efficient indexing. Thus, many basic operations \u2014 such as obtaining the last node of the list\n(assuming that the last node is not maintained as separate node reference in the list structure), or\nfinding a node that contains a given datum, or locating the place where a new node should be inserted \u2014\nmay require scanning most or all of the list elements.</p>\n\n<p>For more info: <a href=\"http://en.wikipedia.org/wiki/Linked_list\">http://en.wikipedia.org/wiki/Linked_list</a></p>\n", 
    "line": 41, 
    "type": "core.Class", 
    "name": "core.collection.LinkedList", 
    "tags": []
  }, 
  "id": "core.collection.LinkedList", 
  "size": {
    "zipped": 628, 
    "optimized": 1310, 
    "compressed": 1916
  }
},'core.collection.LinkedList');