// (C) WebReflection - Mit Style License
// http://webreflection.blogspot.de/2012/06/working-with-queues.html

function Queue(q) {"use strict";
  
  var
    next = function next() {
      return (callback = q.shift()) ? !!callback(q) || !0 : !1;
    },
    callback
  ;
  (q.wait = function wait(condition, delay) {
    condition || callback && q.unshift(callback);
    setTimeout(q.next = next, delay || 0);
  })(1);
  return q;
}