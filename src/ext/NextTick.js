// Gist: https://gist.github.com/2953527
!function (window) {"use strict";
  // by WebReflection - WTFPL License
  var
    prefixes = "r webkitR mozR msR oR".split(" "),
    process = "process",
    nextTick = "nextTick",
    i = 0,
    p = window[process] || (window[process] = {})
  ;
  while (!p[nextTick] && i < prefixes.length)
    p[nextTick] = window[prefixes[i++] + "equestAnimationFrame"]
  ;
  p[nextTick] || (p[nextTick] = window.setImmediate || window.setTimeout);
}(this);