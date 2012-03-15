apibrowser.callback({
  "statics": [
    {
      "name": "plural", 
      "doc": "<p>Applies the plural rule to the given <code class=\"param\">n</code> of the current locale and returns the\nfield index on the translation data (0-6). This is the data used\nby the classical GNU gettext tools. See also:\n<a href=\"http://www.gnu.org/software/hello/manual/gettext/Plural-forms.html\">http://www.gnu.org/software/hello/manual/gettext/Plural-forms.html</a></p>\n", 
      "visibility": "public", 
      "summary": "Applies the plural rule to the given n of the current locale and returns the field index on the translation data (0-6).", 
      "returns": [
        "Integer"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "Number"
          ], 
          "name": "n"
        }
      ], 
      "sourceLink": "source:core.locale.Translate~43", 
      "line": 43, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "template", 
      "doc": "<p>Quick and easy string templating using %1, %2, etc. as placeholders\nand an array for the data. You pass in the <code class=\"param\">message</code> and the <code class=\"param\">data</code>\nand an optional <code class=\"param\">start</code> to configure the initial array position to use.</p>\n", 
      "visibility": "public", 
      "summary": "Quick and easy string templating using %1, %2, etc.", 
      "returns": [
        "String"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "String"
          ], 
          "name": "message"
        }, 
        {
          "position": 1, 
          "type": [
            "Array"
          ], 
          "name": "data"
        }, 
        {
          "default": "-1", 
          "position": 2, 
          "optional": true, 
          "name": "start", 
          "type": [
            "Integer"
          ]
        }
      ], 
      "sourceLink": "source:core.locale.Translate~53", 
      "line": 53, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "tr", 
      "doc": "<p>Translates the given <code class=\"param\">message</code> and replaces any numeric placeholders\n(<code>%[0-9]</code>) with the corresponding number arguments passed via <code class=\"param\">varargs</code>.</p>\n", 
      "visibility": "public", 
      "summary": "Translates the given message and replaces any numeric placeholders (%[0-9]) with the corresponding number arguments passed via varargs.", 
      "returns": [
        "String"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "String"
          ], 
          "name": "message"
        }, 
        {
          "position": 1, 
          "dynamic": true, 
          "name": "varargs", 
          "optional": true, 
          "type": [
            "var"
          ]
        }
      ], 
      "sourceLink": "source:core.locale.Translate~76", 
      "line": 76, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "trc", 
      "doc": "<p>Translates the given <code class=\"param\">message</code> und while choosing the one which matches the\ngiven <code class=\"param\">hint</code> and replaces any numeric placeholders (<code>%[0-9]</code>) with the corresponding\nnumber arguments passed via <code class=\"param\">varargs</code>.</p>\n", 
      "visibility": "public", 
      "summary": "Translates the given message und while choosing the one which matches the given hint and replaces any numeric placeholders (%[0-9]) with the corresponding number arguments passed via varargs.", 
      "returns": [
        "String"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "String"
          ], 
          "name": "hint"
        }, 
        {
          "position": 1, 
          "type": [
            "String"
          ], 
          "name": "message"
        }, 
        {
          "position": 2, 
          "dynamic": true, 
          "name": "varargs", 
          "optional": true, 
          "type": [
            "var"
          ]
        }
      ], 
      "sourceLink": "source:core.locale.Translate~88", 
      "line": 88, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "trn", 
      "doc": "<p>Translates the given <code class=\"param\">messageSingular</code> or <code class=\"param\">messagePlural</code>\ndepending on the <code class=\"param\">number</code> passed to the method.\nLike the other methods it also supports replacing any numeric placeholders\n(<code>%[0-9]</code>) with the corresponding number arguments passed via <code class=\"param\">varargs</code>.</p>\n", 
      "visibility": "public", 
      "summary": "Translates the given messageSingular or messagePlural depending on the number passed to the method.", 
      "sourceLink": "source:core.locale.Translate~101", 
      "line": 101, 
      "type": "Boolean"
    }
  ], 
  "assets": [], 
  "package": "core.locale", 
  "basename": "Translate", 
  "permutations": [
    "translations"
  ], 
  "uses": [
    "core.Env", 
    "core.Module"
  ], 
  "main": {
    "doc": "<p>Developer interface to translation API of Core Library.</p>\n", 
    "line": 66, 
    "type": "core.Module", 
    "name": "core.locale.Translate", 
    "tags": []
  }, 
  "id": "core.locale.Translate", 
  "size": {
    "zipped": 432, 
    "optimized": 747, 
    "compressed": 1240
  }
},'core.locale.Translate');