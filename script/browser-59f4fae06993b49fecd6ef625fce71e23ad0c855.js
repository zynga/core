(function(){var c=/(\{\{[^\{\}}]*\}\})/,b=/^\{\{\s*([#\^\/\?\!\<\>\$\&]?)\s*([^\{\}}]*?)\s*\}\}$/;
function a(f,c){var d=[],e=null,b=null;
while(f.length>0){b=f.shift();
if(b.tag=="#"||b.tag=="^"||b.tag=="?")c.push(b),
b.nodes=a(f,c),
d.push(b);
else{if(b.tag=="/"){if(true&&c.length===0)throw new Error("Closing tag without opener: /"+b.name);
e=c.pop();
if(true&&b.name!=e.name)throw new Error("Nesting error: "+e.name+" vs. "+b.name);
return d}d.push(b)}}if(true&&c.length>0)throw new Error("Missing closing tag: "+c.pop().name);
return d}core.Module("core.template.Parser",{tokenize:function(h,l){if(l){for(var e=h.split("\n"),a=0,j=e.length,g,k,f,d,i;
a<j;
a++)e[a]=e[a].trim();
h=e.join("")}g=[],
k=h.split(c),
a=0,
j=k.length;
for(;
a<j;
a++)d=k[a],
d.charAt(0)=="{"&&(f=b.exec(d))?(i=f[1]||"$",
i!="!"&&g.push({tag:i,
name:f[2]})):d!=""&&g.push(d);
return g},
parse:function(c,b){return a(this.tokenize(c,b),[])}})})();
core.Main.addStatics("Object",{fromArray:function(d,b){arguments.length==1&&(b=true);
for(var c={},a=0,e=d.length;
a<e;
a++)c[d[a]]=b;
return c},
isEmpty:function(a){var b;
for(b in a)return false;
return Object.keys(a).length==0},
values:function(a){return Object.keys(a).map(function(b){return a[b]})},
validateKeys:function(h,b){for(var g={},a=0,e=b.length,f,d,c;
a<e;
a++)g[b[a]]=true;
f=Object.keys(h),
d=[],
a=0,
e=f.length;
for(;
a<e;
a++)c=f[a],
g[c]||d.push(c);
return d}});
(function(){function a(a){throw new Error(a)}core.Module("core.Assert",{equal:function(c,b,d){c!=b&&a(d||"Values must be equal: "+c+" and "+b+"!")},
notEqual:function(c,b,d){c==b&&a(d||"Values must not be equal: "+c+" and "+b+"!")},
identical:function(c,b,d){c!==b&&a(d||"Values must be identical: "+c+" and "+b+"!")},
notIdentical:function(c,b,d){c===b&&a(d||"Values must not be identical: "+c+" and "+b+"!")},
isTrue:function(b,c){b!=true&&a(c||"Value must be true: "+b+"!")},
isFalse:function(b,c){b!=false&&a(c||"Value must be false: "+b+"!")},
isNull:function(b,c){b==null&&a(c||"Value "+b+" must be null!")},
isNotNull:function(b,c){b==null&&a(c||"Value "+b+" must not be null!")},
isIn:function(c,b,d){(c in b||b.indexOf&&b.indexOf(c)!=-1)||a(d||"Value "+c+" is not in given object!")},
isNotIn:function(c,b,d){(c in b||b.indexOf&&b.indexOf(c)!=-1)&&a(d||"Value "+c+" must not be in given object!")},
matches:function(c,b,d){b.match(c)||a(d||"Value "+c+" must match "+b)},
notMatches:function(c,b,d){b.match(c)&&a(d||"Value "+c+" must not match "+b)},
isType:function(c,b,d){core.Main.isTypeOf(c,b)||a(d||"Value "+c+" must match type: "+b)},
isNotType:function(c,b,d){core.Main.isTypeOf(c,b)&&a(d||"Value "+c+" must not match type: "+b)}})})();
(function(){var a={},d=document.createElement("div"),b=d.style,f,e=core.Env.select("engine",{trident:"ms",
gecko:"Moz",
webkit:"Webkit",
presto:"O"}),c=function(c){if(c in b)return c;
var g=a[c],d;
if(g!==f)return g;
d=e+c.charAt(0).toUpperCase()+c.slice(1);
if(d in b)return a[c]=d;
return null};
core.Module("core.bom.Style",{names:a,
property:c,
get:function(d,e,h){var f=e in b&&e||a[e]||c(e),g;
if(!h)return d.style[f];
g=d.ownerDocument.defaultView;
if(g)return g.getComputedStyle(d,null)[f];
if(d.currentStyle)return d.currentStyle[f]},
getInteger:function(c,a,b){return parseInt(this.get(c,a,b),10)||0},
set:function(i,d,g){var h=i.style,e,f;
if(typeof d==="string")e=d in b&&d||a[d]||c(d),
e&&(h[e]=g==null?"":g);
else for(f in d)g=d[f],
e=f in b&&f||a[f]||c(f),
e&&(h[e]=g==null?"":g)}})})();
(function(a){core.Module("core.bom.Offset",{get:function(e){var b=e.getBoundingClientRect(),c=a.pageXOffset,d=a.pageYOffset;
b.left+=c;
b.top+=d;
b.right+=c;
b.bottom+=d;
return b}})})(this);
core.Module("core.property.Core",{ID:1});
(function(a){core.Module("core.bom.Viewport",{getWidth:function(){return a.innerWidth},
getHeight:function(){return a.innerHeight},
isLandscape:function(){return global.outerWidth>global.outerHeight},
isPortrait:function(){return global.outerWidth<global.outerHeight},
getOrientation:function(){var a=global.orientation;
a!=null;
return a}})})(this);
(function(a){var b=function(a){switch(a.length){case 1:a[1]=a[2]=a[3]=a[0];
break;
case 2:a[2]=a[0];
case 3:a[3]=a[1]}return a};
core.Module("core.property.Group",{create:function(d){var f=d.shorthand,c=d.group,e=c.length;
return{set:function(i){var g=arguments.length>1?arguments:i,h,d;
f&&(g=b(a.call(g)));
h={},
d=0;
for(;
d<e;
d++)h[c[d]]=g[d];
this.set(h)},
get:function(){for(var a=0;
a<e;
a++)this.reset(c[a])}}}})})(Array.prototype.slice);
core.Module("core.dom.Node",{assertIsNode:function(a,b){if(typeof a!="object"||a.nodeType==null)throw new Error(b||"Invalid DOM node: "+a)},
closest:function(a,b){while(a&&a.nodeType!=9){if(b(a))return a;
a=a.parentNode}},
contains:function(a,b){if(a.nodeType==9)return b.ownerDocument===a;
if(a.contains)return a.contains(b);
if(a.compareDocumentPosition)return!!(a.compareDocumentPosition(b)&16);
while(target){if(element==target)return true;
target=target.parentNode}return false}});
(function(){var a=function(){return"[interface "+this.interfaceName+"]"},b=!(function(){}).length;
core.Main.declareNamespace("core.Interface",function(b,c){{if(!core.Module.isModuleName(b))throw new Error("Invalid interface name "+b+"!");
core.Assert.isType(c,"Map","Invalid interface configuration in "+b)}var d={__DsYAO:c.properties,
__lILNE:c.events,
__oVi8k:c.members,
__GWPZE:true,
interfaceName:b,
toString:a,
valueOf:a,
assert:core.Interface.assert};
core.Main.declareNamespace(b,d)});
core.Main.addStatics("core.Interface",{getByName:function(a){core.Assert.isType(a,"String");
var b=core.Main.resolveNamespace(a);
return core.Interface.isInterface(b)?b:null},
assert:function(g,e){if(!g)throw new Error("Invalid class or object to verify interface with: "+g);
var i=typeof g=="object"?g.constructor:g,l,k,n,c,o,a,d,j,m,f,h,p;
if(!core.Class.isClass(i))throw new Error("Invalid class or object to verify interface with: "+g);
!e&&this.__GWPZE&&(e=this);
if(!core.Interface.isInterface(e))throw new Error("Invalid interface "+e);
l=e.__oVi8k,
k=e.__DsYAO,
n=e.__lILNE,
c="Class "+i.className+" does not implement interface "+e.interfaceName+": ";
if(l){o=i.prototype;
for(a in l){if(!(a in o))throw new Error(c+"Missing member: "+a+"!");
d=l[a],
j=o[a];
if(typeof d==typeof j){if(d==null)continue;
if(j==null)throw new Error(c+"Missing member: "+a+"!");
if(Object.prototype.toString.call(d).slice(8,-1)!=Object.prototype.toString.call(j).slice(8,-1))throw new Error(c+"Invalid member type in :"+a+"! Expecting: "+Object.prototype.toString.call(d).slice(8,-1).toLowerCase());
if(d instanceof Function){if(!(j instanceof Function))throw new Error(c+"Different member types in: "+a+"! Expecting a function!");
if(!b&&d.length!=j.length)throw new Error(c+"Different number of arguments in function '"+a+"'. Expecting "+d.length+"!")}}else throw new Error(c+"Different member types in: "+a+"! Expecting type "+typeof d)}}if(k){m=core.Class.getProperties(i);
for(a in k){if(!(a in m))throw new Error(c+"Missing property: "+a+"!");
f=k[a],
h=m[a];
if(f.type!==h.type)throw new Error(c+"Invalid property: "+a+"! Different types! Expecting "+f.type+"!");
if("nullable"in f&&!("nullable"in h))throw new Error(c+"Invalid property: "+a+"! Missing 'nullable' definition!");
if("fire"in f&&!("fire"in h))throw new Error(c+"Invalid property: "+a+"! Missing 'fire' definition!");
if("group"in f&&!("group"in h))throw new Error(c+"Invalid property: "+a+"! Missing 'group' definition!");
if("themeable"in f&&!("themeable"in h))throw new Error(c+"Invalid property: "+a+"! Missing 'themeable' definition!");
if("inheritable"in f&&!("inheritable"in h))throw new Error(c+"Invalid property: "+a+"! Missing 'inheritable' definition!")}}if(n){p=core.Class.getEvents(i);
for(a in n)if(!(a in p))throw new Error(c+"Missing event: "+a+"!")}},
isInterface:function(a){return!!(a&&typeof a=="object"&&a.__GWPZE)}})})();
core.Interface("core.property.IInheritable",{members:{getInheritedValue:function(){}}});
core.Interface("core.property.IEvent",{members:{fireEvent:function(){}}});
core.Interface("core.property.IThemeable",{members:{getThemedValue:function(){}}});
(function(d,a){var c={},b="$$data";
core.Module("core.property.Simple",{create:function(d){var i=d.name,k=d.nullable,e=d.init,m=d.type,h=d.fire,g=d.apply,l,f,j;
{l=Object.validateKeys(d,"name,nullable,init,type,fire,apply".split(","));
if(l.length>0)throw new Error("Property declaration of "+i+" contains invalid configuration keys: "+l.join(", ")+"!");
core.Assert.isType(i,"String");
k!==a&&core.Assert.isType(k,"Boolean");
m;
h&&core.Assert.isType(h,"String");
g&&core.Assert.isType(g,"Function")}f=c[i];
f||(f=c[i]=core.property.Core.ID++);
j={};
j.get=function(){var g,h,c;
g=this;
core.property.Debug.checkGetter(g,d,arguments);
h=g[b];
h&&(c=h[f]);
if(c===a){if(e!==a)return e;
k||g.error("Missing value for: "+i+" (during get())");
c=null}return c};
e!==a&&(j.init=function(){var c=this,d=c[b];
(!d||d[f]===a)&&(g&&g.call(c,e,a),
h&&c.fireEvent(h,e,a))});
j.set=function(i){var j=this,k,c;
core.property.Debug.checkSetter(j,d,arguments);
k=j[b];
k?(c=k[f]):(k=j[b]={});
i!==c&&(c===a&&e!==a&&(c=e),
k[f]=i,
g&&g.call(j,i,c),
h&&j.fireEvent(h,i,c));
return i};
j.reset=function(){var j,m,l,c;
j=this;
core.property.Debug.checkResetter(j,d,arguments);
m=j[b];
if(!m)return;
l=m[f];
c=a;
l!==c&&(m[f]=c,
e!==a?(c=e):k||j.error("Missing value for: "+i+" (during reset())"),
g&&g.call(j,c,l),
h&&j.fireEvent(h,c,l))};
return j}})})(this);
(function(j,i){var c=function(){return"[class "+this.className+"]"},h,f,d,b,e,a,g;
h=function(h,c,g){c||(c={});
for(var d={},f=0,k=h.length,b,i,e,j,a;
f<k;
f++){b=h[f],
i=Object.keys(b.prototype),
e=0,
j=i.length;
for(;
e<j;
e++){a=i[e];
if(c.hasOwnProperty(a))if(a.substring(0,2)=="__")throw new Error("Included class "+b.className+" overwrites private member of class "+g);
if(d.hasOwnProperty(a)){if(a.substring(0,2)=="__")throw new Error("Included class "+b.className+" overwrites private member of other included class "+d[a].className+" in class "+g);
if(!(a in c&&c[a] instanceof Function&&b.prototype[a] instanceof Function&&d[a] instanceof Function))throw new Error("Included class "+b.className+" overwrites member "+a+" of other included class "+d[a].className+" in class "+g)}d[a]=b}}},
f=function(e,i,h){for(var c={},b=0,g=e.length,d,f,a;
b<g;
b++){d=e[b],
f=d.__lILNE;
for(a in f){if(a in c)throw new Error("Included class "+d.className+" overwrites event of other included class "+c[a].className+" in class "+h);
c[a]=d}}},
d=function(e,i,h){for(var c={},d=0,g=e.length,b,f,a;
d<g;
d++){b=e[d],
f=b.__DsYAO;
for(a in f){if(a in c)throw new Error("Included class "+b.className+" overwrites event of other included class "+c[a].className+" in class "+h);
c[a]=b}}};
b={};
core.Main.declareNamespace("core.Class",function(g,a){{if(!core.Module.isModuleName(g))throw new Error("Invalid class name "+g+"!");
core.Assert.isType(a,"Map","Invalid class configuration in "+g);
var I=Object.validateKeys(a,"construct,events,members,properties,include,implement".split(",")),j,L,q,z,m,l,w,x,E,k,D,u,J,p,y,H,n,o,G,t,A,F,K,B,C,v,r,s;
if(I.length>0)throw new Error("Class declaration of "+g+" contains invalid configuration keys: "+I.join(", ")+"!");
"construct"in a&&core.Assert.isType(a.construct,"Function","Invalid constructor in class "+g+"!");
"events"in a&&core.Assert.isType(a.events,"Map","Invalid event data in class "+g+"!");
"members"in a&&core.Assert.isType(a.members,"Map","Invalid member section in class "+g);
"properties"in a&&core.Assert.isType(a.properties,"Map","Invalid properties section in class "+g);
"include"in a&&core.Assert.isType(a.include,"Array","Invalid include list in class "+g);
"implement"in a&&core.Assert.isType(a.implement,"Array","Invalid implement list in class "+g)}j=a.construct||function(){};
j.className=g;
j.displayName=g;
j.__onc3V=true;
j.toString=c;
j.valueOf=c;
L=j.__lILNE=a.events||{},
q=j.__DsYAO=a.properties||{},
z=j.prototype,
m=a.include;
if(m){{for(l=0,
w=m.length;
l<w;
l++)core.Class.assertIsClass(m[l],"Class "+g+" includes invalid class "+m[l]+" at position: "+l+"!");
h(m,a.members,g);
f(m,a.events,g);
d(m,a.properties,g)}j.__s1olS=m;
for(l=0,
w=m.length;
l<w;
l++){x=m[l],
E=x.prototype;
for(k in E)z[k]=E[k];
D=x.__DsYAO;
for(k in D){u={},
J=D[k];
for(p in J)u[p]=J[p];
y=q&&q[k];
if(y)for(p in y)u[p]=y[p];
q[k]=u}H=x.__lILNE;
for(k in H)L[k]=H[k]}}for(n in q){o=q[n];
o.name=n;
G=o.group?core.property.Group.create(o):o.themeable||o.inheritable?core.property.Multi.create(o):core.property.Simple.create(o);
t=b[n];
t===i&&(t=n.charAt(0).toUpperCase()+n.slice(1),
b[n]=t);
for(A in G)F=A+t,
K=G[A],
z[F]=K,
K.displayName=g+"."+F}B=a.members;
if(B)for(k in B)C=z[k]=B[k],
C instanceof Function&&(C.displayName=g+"."+k);
{v=a.implement;
if(v){l=0,
w=v.length;
for(;
l<w;
l++){r=v[l];
if(!r)throw new Error("Class "+g+" implements invalid interface "+r+" at position: "+l);
try{core.Interface.assert(j,r)}catch(M){throw new Error("Class "+g+" fails to implement given interface: "+r+": "+M)}}}s=e.getPropertyFeatures(j);
s&&(s.fire&&core.Interface.assert(j,core.property.IEvent),
s.themeable&&core.Interface.assert(j,core.property.IThemeable),
s.inheritable&&core.Interface.assert(j,core.property.IInheritable))}core.Main.declareNamespace(g,j)});
e=core.Class,
a=function(a){return!!(a&&typeof a=="function"&&a.__onc3V)},
g=function(b,c){if(!a(b))throw new Error(c||"Invalid class: "+b)};
core.Main.addStatics("core.Class",{isClass:a,
assertIsClass:g,
getByName:function(c){core.Assert.isType(c,"String");
var b=core.Main.resolveNamespace(c);
return a(b)?b:null},
getEvents:function(a){core.Class.assertIsClass(a);
return a.__lILNE},
getProperties:function(a){core.Class.assertIsClass(a);
return a.__DsYAO},
getPropertyFeatures:function(e){var b={},c=e.__DsYAO,d,f,a;
for(d in c){f=c[d];
for(a in f)b[a]||(b[a]=true)}return b},
includesClass:function(b,a){core.Class.assertIsClass(b,"Class to check for including class is itself not a class!"),
core.Class.assertIsClass(a,"Class to check for being included is not a class!");
return b.__s1olS.indexOf(a)!=-1}})})(this);
core.Module("core.property.Debug",{checkSetter:function(d,e,f){var c=e.name,b,a;
if(f.length==0)throw new Error("Called set() method of property "+c+" on object "+d+" with no arguments!");
if(f.length>1)throw new Error("Called set() method of property "+c+" on object "+d+" with too many arguments!");
b=f[0];
if(b==null){if(b!==null)throw new Error("Property "+c+" in object "+d+" got invalid undefined value during set!");
if(!e.nullable)throw new Error("Property "+c+" in object "+d+" is not nullable!")}else{a=e.type;
if(a)try{if(a instanceof Array){if(a.indexOf(b)==-1)throw new Error("Value of property must be one of "+a+". Invalid value: "+b)}else if(core.Class.isClass(a)){if(!(b instanceof a))throw new Error("Value of property "+c+" must be instance of "+a+". Invalid value: "+b)}else core.Interface.isInterface(a)?core.Interface.assert(b,a):core.Main.TYPES.indexOf(a)!=-1?core.Assert.isType(b,a):console.warn("Unsupported property type: "+a+" in "+c+"! Property types are equal to documentation types. See also: core.Main#isTypeOf().")}catch(g){throw new Error("Could not set() property "+c+" of object "+d+": "+g)}}},
checkResetter:function(c,a,b){if(b.length!=0)throw new Error("Called reset method of property "+a.name+" on "+c+" with too many arguments!")},
checkGetter:function(c,a,b){if(b.length!=0)throw new Error("Called get method of property "+a.name+" on "+c+" with too many arguments!")}});
(function(){var e=function(a){return typeof a=="string"&&a.length!=0&&!/\s/.test(a)},a,f,d,c,g,b;
a=function(a){core.Assert.equal(a.length,2);
core.dom.Node.assertIsNode(a[0]);
core.Assert.isTrue(e(a[1],"Invalid CSS class name!"))};
"classList"in document.createElement("div")?(f=function(b,c){a(arguments);
b.classList.add(c)},
d=function(b,c){a(arguments);
b.classList.remove(c)},
c=function(b,c){a(arguments);
return b.classList.contains(c)},
g=function(b,c){a(arguments);
b.classList.toggle(c)}):(b=" ",
f=function(d,e){a(arguments);
c(d,e)||(d.className+=b+e)},
d=function(c,d){a(arguments);
c.className=(b+c.className+b).replace(d,"")},
c=function(c,d){a(arguments);
return c.className&&(c.className==d||(b+c.className+b).indexOf(b+d+b)!==-1)},
g=function(e,f){a(arguments);
c(e,f)?d(e,f):(e.className+=b+f)});
core.Module("core.bom.ClassName",{isValid:e,
add:f,
remove:d,
contains:c,
toggle:g})})();
core.Module("core.bom.ScrollInto",{scrollX:function(d,o){var a=d.parentNode,v=d.ownerDocument,t=v.body,n,h,m,g,c,p,k,f,j,l,r,s,q,i,e,b,w=o==="left",u=o==="right";
while(a&&a.nodeType!=9)a.scrollWidth>a.clientWidth&&(a===t||core.bom.Style.get(a,"overflowX",true)!="visible")&&(a===t?(h=a.scrollLeft,
g=core.bom.Viewport.getWidth(),
m=h+g,
c=a.clientWidth,
p=a.scrollWidth,
k=0,
f=0,
j=0):(n=core.bom.Offset.get(a),
h=n.left,
m=n.right,
g=a.offsetWidth,
c=a.clientWidth,
p=a.scrollWidth,
k=core.bom.Style.getInteger(a,"borderLeftWidth",true),
f=core.bom.Style.getInteger(a,"borderRightWidth",true),
j=g-c-k-f),
l=core.bom.Offset.get(d),
r=l.left,
s=l.right,
q=d.offsetWidth,
i=r-h-k,
e=s-m+f,
b=0,
w?(b=i):u?(b=e+j):i<0||q>c?(b=i):e>0&&(b=e+j),
a.scrollLeft+=b),
a=a.parentNode},
scrollY:function(d,q){var a=d.parentNode,v=d.ownerDocument,t=v.body,m,k,n,c,g,r,f,j,e,l,o,p,s,h,i,b,w=q==="top",u=q==="bottom";
while(a&&a.nodeType!=9)a.scrollHeight>a.clientHeight&&(a===t||core.bom.Style.get(a,"overflowY",true)!="visible")&&(a===t?(k=a.scrollTop,
c=core.bom.Viewport.getHeight(),
n=k+c,
g=a.clientHeight,
r=a.scrollHeight,
f=0,
j=0,
e=0):(m=core.bom.Offset.get(a),
k=m.top,
n=m.bottom,
c=a.offsetHeight,
g=a.clientHeight,
r=a.scrollHeight,
f=core.bom.Style.getInteger(a,"borderTopWidth",true),
j=core.bom.Style.getInteger(a,"borderBottomWidth",true),
e=c-g-f-j),
l=core.bom.Offset.get(d),
o=l.top,
p=l.bottom,
s=d.offsetHeight,
h=o-k-f,
i=p-n+j,
b=0,
w?(b=h):u?(b=i+e):h<0||s>g?(b=h):i>0&&(b=i+e),
a.scrollTop+=b),
a=a.parentNode},
scroll:function(a,b,c){this.scrollX(a,b);
this.scrollY(a,c)}});
(function(){var b=Object.prototype.hasOwnProperty,f,e=/[&<>\"\']/g,c={"&":"&amp;",
"<":"&lt;",
">":"&gt;",
"'":"&#39;",
"\"":"&quot;"},d=function(a){return c[a]},a={2:function(b,a){return a},
1:function(e,a){if(e==".")return a;
for(var d=e.split("."),c=0,g=d.length,f;
c<g;
c++){f=d[c];
if(!b.call(a,f))return;
a=a[f]}return a},
0:function(a,c){if(b.call(c,a))return c[a]}};
core.Class("core.template.Template",{construct:function(a){core.Assert.isType(a,"Function","Missing valid render method!");
this.__lzYeh=a},
members:{render:function(a,b){core.Assert.isType(a,"Map","Invalid data to render"),
arguments.length>1&&core.Assert.isType(b,"Map","Invalid partials");
return this.__lzYeh(a,b)},
_data:function(i,f,g,h){var b=a[f](i,g),c=b==null?"":""+b;
return h?c.replace(e,d):c},
_partial:function(c,d,a){return a&&b.call(a,c)?a[c].__lzYeh(d,a):""},
_section:function(i,g,h,d,e){var b=a[g](i,h),c,j;
if(b instanceof Array)for(c=0,
j=b.length;
c<j;
c++)e.call(this,b[c],d);
else b!==f&&e.call(this,b,d)},
_has:function(c,d,e){var b=a[d](c,e);
return b instanceof Array?b.length>0:b===""||!!b}}})})();
(function(){var b=/[\\\"\n\r]/g,e={"\\":"\\\\",
"\"":"\\\"",
"\n":"\\n",
"\r":"\\r"},c=function(a){return e[a]},f={"#":1,
"?":1,
"^":1,
"&":1,
$:1},d={"#":1,
"?":1,
"^":1};
function a(n){for(var g="",k=0,p=n.length,i,e,l,m,o,h,j;
k<p;
k++)i=n[k],
e=i.tag,
e==null?(g+="buf+=\""+i.replace(b,c)+"\";"):(l=i.name,
m=l.replace(b,c),
e in f?(o=l=="."?2:~l.indexOf(".")?1:0,
h="\""+m+"\","+o+",data",
e in d&&(j=a(i.nodes)),
e=="?"?(g+="if(this._has("+h+")){"+j+"}"):e=="^"?(g+="if(!this._has("+h+")){"+j+"}"):e=="#"?(g+="this._section("+h+",partials,function(data,partials){"+j+"});"):e=="&"?(g+="buf+=this._data("+h+");"):e=="$"&&(g+="buf+=this._data("+h+", true);")):e==">"?(g+="buf+=this._partial(\""+m+"\",data,partials);"):e=="\n"&&(g+="buf+=\"\\n\";"));
return g}core.Module("core.template.Compiler",{compile:function(b,c){var d=core.template.Parser.parse(b,c),e="var buf=\"\";"+a(d)+"return buf;";
return new core.template.Template(new Function("data","partials",e),b)}})})();
core.Class("api.Browser",{construct:function(){this.__rHIOe=document.createElement("div");
this.__rHIOe.id="head";
this.__rHIOe.innerHTML="API Documentation";
this.__sE7nG=document.createElement("div");
this.__sE7nG.id="tree";
this.__HBgbF=document.createElement("div");
this.__HBgbF.id="content";
document.body.appendChild(this.__rHIOe);
document.body.appendChild(this.__sE7nG);
document.body.appendChild(this.__HBgbF);
core.io.Queue.load([core.io.Asset.toUri("api/icon/stylesheet.css"),core.io.Asset.toUri("api/reset.css"),core.io.Asset.toUri("api/style.css"),core.io.Asset.toUri("api/syntax.css"),"tmpl/main.js","tmpl/entry.js","tmpl/type.js","tmpl/params.js","tmpl/info.js","tmpl/origin.js","tmpl/tags.js","tmpl/error.js","data/meta-index.js","data/meta-search.js"],this.__k81qy,this);
this.__gbAHU={};
this.__h09U7={};
this.__po0qc={type:"",
file:"",
item:"",
html:"",
hash:""}},
members:{__k81qy:function(){document.body.addEventListener("click",function(b){var a=b.target,d,c,e;
if(a){a=core.dom.Node.closest(a,function(a){return a.tagName=="LI"||a.tagName=="A"});
if(!a)return;
if(a.tagName==="LI")a.id&&(a.id.match(/-/)?(d=a.id.split(/-/)[0],
c=a.id.split(/-/)[1]):(c=a.id),
this.open(this.buildHash(d,null,c),b.target.tagName=="LI")),
b.preventDefault();
else if(a.tagName==="A"){if(a.getAttribute("href")){e=a.getAttribute("href");
if(e.charAt(0)==="#")this.open(e.slice(1));
else return}b.preventDefault()}}}.bind(this),true);
window.addEventListener("hashchange",function(){var a=location.hash.slice(1);
a!==this.__po0qc.hash&&this.open(a)}.bind(this),true);
this.open(location.hash.slice(1))},
callback:function(b,a){if(a.endsWith(".mustache")){var c=a.substring(0,a.indexOf(".mustache")),d;
this.__gbAHU[c]=core.template.Compiler.compile(b.template,true)}else a=="meta-index"?(this.__sE7nG.innerHTML="<ul>"+this.__B4UgP(b,"")+"</ul>"):a=="meta-search"?(this.__lu1lx=b):(this.__h09U7[a]=this.__gbAHU.main.render(b,this.__gbAHU),
this.__po0qc.file===a&&(d=this.buildHash(this.__po0qc.type,this.__po0qc.file,this.__po0qc.item),
this.open(d)))},
__B4UgP:function(a,g){for(var d="",i=function(a){return a.charAt(0)!="$"},k=function(c,b){if(a[c].$type!=a[b].$type){if(a[c].$type=="Package")return-1;
if(a[b].$type=="Package")return 1}return c==b?0:c>b?1:-1},h=Object.keys(a).filter(i).sort(k),f=0,j=h.length,b,e,c;
f<j;
f++)b=h[f],
e=a[b],
c=g?g+"."+b:b,
this.__h09U7[c]===undefined&&(this.__h09U7[c]=null),
d+=e.$type=="Package"?"<li><a class=\"tree-package\" href=\"#"+c+"\">"+b+"</a><ul>"+this.__B4UgP(e,c)+"</ul></li>":"<li><a data-type=\""+e.$type+"\" class=\"tree-item\" href=\"#"+c+"\">"+b+"</a></li>";
return d},
buildHash:function(a,d,c){a=a||null;
d=d||null;
c=c||null;
var b="";
(c===null||a===null)&&(a="");
a&&(b+=a+":");
b+=d?d:this.__po0qc.file||"";
c&&(b+="~"+c);
return b},
parseHash:function(c){var d=new RegExp("((source|static|member|property|event)\\:)?([A-Za-z0-9_\\.]+)?(\\~([A-Za-z0-9_]+))"),a=c.split(d),b={type:null,
file:null,
item:null};
if(a.length===1){a[0]&&(b.file=a[0]);
return b}a[2]&&(b.type=a[2]);
a[3]&&(b.file=a[3]);
a[5]&&(b.item=a[5]);
return b},
open:function(b,c){b.charAt(0)==="!"&&(b=b.slice(1));
var a=this.parseHash(b);
if(a.type==="source")return this.__CVHFt(a);
this.__tiakK(a,c);
this.__HUezn(a,c);
(this.__po0qc.type!==a.type||this.__po0qc.file!==a.file||this.__po0qc.item!==a.item)&&(this.__po0qc.type=a.type,
this.__po0qc.file=a.file||this.__po0qc.file,
this.__po0qc.item=a.item,
this.__po0qc.hash=this.buildHash(this.__po0qc.type,this.__po0qc.file,this.__po0qc.item),
location.hash=this.__po0qc.hash)},
__tiakK:function(g){if(!g.file)return;
for(var e=g.file.split("."),c="",f=document.querySelectorAll("#tree .active"),d=0,a,h,b;
d<f.length;
d++)core.bom.ClassName.remove(f[d],"active");
for(a=0,
h=e.length;
a<h;
a++)c+=e[a],
b=document.querySelector("#tree a[href='#"+c+"']"),
b!=null&&(core.bom.ClassName.add(b.parentNode,"open"),
a===e.length-1&&(core.bom.ClassName.add(b.parentNode,"active"),
core.bom.ScrollInto.scrollY(b))),
c+="."},
__HUezn:function(a,j){if(a.file){var d=document.getElementById("content"),e=this.__h09U7[a.file],i=this.__po0qc.html!==a.file,b,h,c,k,g,f;
if(e===null){core.io.Script.load("data/"+a.file+".js",function(c,b){b===true&&(d.innerHTML=this.__gbAHU.error.render({name:"404 - Not Found",
description:"The selected file \""+a.file+"\" was not found."},this.__gbAHU),
this.__po0qc.html=a.file)},this);
return}if(e==null){d.innerHTML=this.__gbAHU.error.render({name:"404 - Not Found",
description:"The selected File \""+a.file+"\" was not found."},this.__gbAHU);
this.__po0qc.html=a.file;
return}i&&(d.innerHTML=e,
this.__po0qc.html=a.file)}if(a.item){a.type!==null&&(b=document.getElementById(a.type+"-"+a.item));
if(!b||!a.type){h=["static","member","property","event"],
c=0,
k=h.length;
for(;
c<k;
c++){a.type=h[c];
b=document.getElementById(a.type+"-"+a.item);
if(b)break}}g=document.querySelectorAll("#content li.open"),
f=0;
for(;
f<g.length;
f++)core.bom.ClassName.remove(g[f],"active");
b&&(j?core.bom.ClassName.toggle(b,"open"):core.bom.ClassName.add(b,"open"),
core.bom.ClassName.add(b,"active"),
core.bom.ScrollInto.scrollY(b,i?"top":null))}},
__CVHFt:function(a){if(a.type!=="source")return false;
var d="data/"+a.file+".html#line-"+a.item,c="Source of "+a.file,b=window.open(d,c,"");
b.focus()}}});
apibrowser=new api.Browser();