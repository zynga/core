## MVC

### Collections

Sind Container für Modelle… also eine Art Array.
Vorteil ist aber, dass diese Modell-Instanzen automatisch erzeugen, wenn nur die Configuration (als Map) reingereicht wird. Nett zur Deserialisierung.
Kombiniert außerdem alle Events der Einzel-Modell-Instanzen. Cool!

### Views

Der Teil der Oberflächen via Templates erzeugt und die eigentlichen UI-Events in diesem Bereich automatisiert. Enthält ein Top-Level-Element.

### Models

Backbone attributes = Class properties
Constructor bekommt Map als ersten Parameter und passt das durch set()
MGeneric wird inkludiert in Model-Class
Validation erlaubt eine weitergehende Konfiguration von Properties (validate-Methode) Also so Sachen wie required-Felder und valide E-Mail-Adressen.

- http://codebrief.com/2012/01/the-top-10-javascript-mvc-frameworks-reviewed/
- Beste scheinen zu sein: Ember.js und Batman.js und Angular





## Promises

Sehr gute Idee.

https://github.com/briancavalier/when.js/wiki/Using-with-jQuery

http://blogs.msdn.com/b/ie/archive/2011/09/11/asynchronous-programming-in-javascript-with-promises.aspx
http://blogs.msdn.com/b/rbuckton/archive/2011/08/15/promise-js-2-0-promise-framework-for-javascript.aspx
https://github.com/coolaj86/futures
http://dailyjs.com/2011/06/02/framework-65/
https://github.com/kriszyp/node-promise

http://msdn.microsoft.com/en-us/scriptjunkie/gg723713
https://github.com/kriskowal/q
http://api.jquery.com/jQuery.when/
https://github.com/briancavalier/when.js/blob/master/when.js
https://github.com/caolan/async

http://www.slideshare.net/domenicdenicola/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript


## Polyfill

### QuerySelectorAll

Sizzle oder was anderes?

### MatchesSelector Support

### ES.Next

http://www.2ality.com/2011/07/array-from.html
http://blogs.msdn.com/b/ie/archive/2011/11/22/evolving-ecmascript.aspx

### HTML5 Support

https://github.com/aFarkas/html5shiv/blob/master/src/html5shiv.js

### ES6

https://brendaneich.com/2012/10/harmony-of-dreams-come-true/
http://kangax.github.com/es5-compat-table/es6/



## Storage

### Synchronous

https://github.com/frankkohlhepp/store-js

### Asynchronous

Done by Andrea: https://github.com/WebReflection/db.git (Port to Core)

- Permanent Synchronous: LocalStorage -> WidgetPreferences -> UserData -> cookies
- Permanent Asynchronous: IndexedDB -> WebSQL/AirSQL -> FileAPI/PhoneGapFileAPI
- Session: Session Storage -> window Name -> InMemory(only local)





## IO

### XHR + Formdata

http://hacks.mozilla.org/2010/05/formdata-interface-coming-to-firefox/






## Core

### Function.bind()

http://webreflection.blogspot.com/2012/01/improving-functionprototypebind.html

### Inheritance

Single Inheritance == Use Prototype Inheritance 
Vielleicht sogar immer für erstes Item in der Liste?

### Super Calls

Wie in Ruby mit Mixins supported?
https://gist.github.com/1354486

### ES6 Collections

https://github.com/WebReflection/es6-collections





## DOM

### Page Visibility

https://gist.github.com/1122546
http://blog.jasoncust.com/2012/01/can-you-see-me-can-you-see-me-now.html

### Insert HTML APIs

Speed-Test: http://jsperf.com/insertadjacenthtml
http://hacks.mozilla.org/2011/11/insertadjacenthtml-enables-faster-html-snippet-injection/

Supported ab IE4 und Firefox 8.0

### Full Screen API

http://johndyer.name/native-fullscreen-javascript-api-plus-jquery-plugin/

### Touch Support

http://mud.mitplw.com/JSGestureRecognizer/
http://labs.skinkers.com/touchSwipe/

### Viewport Size

http://responsejs.com/labs/dimensions/






## Events

Soll alle möglichen Events-Targets supporten:
* DOM Nodes
* DOM Collections
* DOM Selectors (mit Root-Node)
* Eigene Objekt-Events
* Eigenes Bubbling
* Coordinaten-basiertes Mapping (ab zu definierender Root-Node)
* Eigenes Mapping (ab zu definierender Root-Node)

* Capture und Bubbling Support
* Capturing Support
* KeyIdentifier Support
* Touch/Mouse Normalisierung

* Raffiniert: http://webreflection.blogspot.com/2012/01/introducing-objecthandler.html

* Pointer Events (ala IE10)
http://blogs.msdn.com/b/ie/archive/2011/09/20/touch-input-for-ie10-and-metro-style-apps.aspx

* Dojos neues System: http://docs.dojocampus.org/dojo/on

* Memory-Leak frei ohne unload Listener:
  http://www.reigndropsfall.net/2011/01/05/internet-explorer-event-handler-leaks/
  http://laurens.vd.oever.nl/weblog/items2005/closures/

http://ajaxian.com/archives/an-alternative-way-to-addeventlistener

Input-Events für jQuery (adaptieren?)
http://whattheheadsaid.com/projects/input-special-event

Keyboard Events:
http://unixpapa.com/js/key.html

I discovered the mouseenter and mouseleave events back in, I don’t know, 2002 or so, and immediately understood they’re WAY better than mouseover and mouseout because they don’t bubble up. Event bubbling is a good idea in general, but a bad idea when it comes to mouseover and mouseout. (http://www.quirksmode.org/blog/archives/2011/09/event_compatibi_1.html)

http://webreflection.blogspot.com/2012/01/on-eventemitter-in-nodejs.html
https://github.com/hij1nx/EventEmitter2

http://www.elijahmanor.com/2012/02/differences-between-jquery-bind-vs-live.html



