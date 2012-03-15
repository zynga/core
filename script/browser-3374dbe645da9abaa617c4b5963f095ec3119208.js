(function(a){core.Module("core.bom.Offset",{get:function(e){var b=e.getBoundingClientRect(),c=a.pageXOffset,d=a.pageYOffset;
b.left+=c;
b.top+=d;
b.right+=c;
b.bottom+=d;
return b}})})(this);
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
(function(){var c=/(\{\{[^\{\}}]*\}\})/,b=/^\{\{\s*([#\^\/\?\!\<\>\$\&]?)\s*([^\{\}}]*?)\s*\}\}$/;
function a(e,d){var c=[],f=null,b=null;
while(e.length>0){b=e.shift();
if(b.tag=="#"||b.tag=="^"||b.tag=="?")d.push(b),
b.nodes=a(e,d),
c.push(b);
else{if(b.tag=="/"){f=d.pop();
return c}c.push(b)}}return c}core.Module("core.template.Parser",{tokenize:function(h,l){if(l){for(var e=h.split("\n"),a=0,j=e.length,g,k,f,d,i;
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
core.Module("core.property.Core",{ID:1});
(function(a){core.Module("core.bom.Viewport",{getWidth:function(){return a.innerWidth},
getHeight:function(){return a.innerHeight},
isLandscape:function(){return global.outerWidth>global.outerHeight},
isPortrait:function(){return global.outerWidth<global.outerHeight},
getOrientation:function(){var a=global.orientation;
a!=null;
return a}})})(this);
(function(){var e=function(a){return typeof a=="string"&&a.length!=0&&!/\s/.test(a)},d,c,b,f,a;
"classList"in document.createElement("div")?(d=function(a,b){a.classList.add(b)},
c=function(a,b){a.classList.remove(b)},
b=function(a,b){return a.classList.contains(b)},
f=function(a,b){a.classList.toggle(b)}):(a=" ",
d=function(c,d){b(c,d)||(c.className+=a+d)},
c=function(b,c){b.className=(a+b.className+a).replace(c,"")},
b=function(b,c){return b.className&&(b.className==c||(a+b.className+a).indexOf(a+c+a)!==-1)},
f=function(d,e){b(d,e)?c(d,e):(d.className+=a+e)});
core.Module("core.bom.ClassName",{isValid:e,
add:d,
remove:c,
contains:b,
toggle:f})})();
(function(d,a){var c={},b="$$data";
core.Module("core.property.Simple",{create:function(f){var j=f.name,d,h,g,e,i;
f.nullable;
d=f.init;
f.type;
h=f.fire,
g=f.apply,
e=c[j];
e||(e=c[j]=core.property.Core.ID++);
i={};
i.get=function(){var g,f,c;
g=this;
f=g[b];
f&&(c=f[e]);
if(c===a){if(d!==a)return d;
c=null}return c};
d!==a&&(i.init=function(){var c=this,f=c[b];
(!f||f[e]===a)&&(g&&g.call(c,d,a),
h&&c.fireEvent(h,d,a))});
i.set=function(f){var j=this,i,c;
i=j[b];
i?(c=i[e]):(i=j[b]={});
f!==c&&(c===a&&d!==a&&(c=d),
i[e]=f,
g&&g.call(j,f,c),
h&&j.fireEvent(h,f,c));
return f};
i.reset=function(){var f,j,i,c;
f=this;
j=f[b];
if(!j)return;
i=j[e];
c=a;
i!==c&&(j[e]=c,
d!==a&&(c=d),
g&&g.call(f,c,i),
h&&f.fireEvent(h,c,i))};
return i}})})(this);
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
(function(f,e){var c=function(){return"[class "+this.className+"]"},b={},a,d;
core.Main.declareNamespace("core.Class",function(j,i){var d=i.construct||function(){},C,k,o,l,n,D,q,v,a,B,p,z,h,r,y,f,g,x,m,s,w,A,t,u;
d.className=j;
d.displayName=j;
d.__onc3V=true;
d.toString=c;
d.valueOf=c;
C=d.__lILNE=i.events||{},
k=d.__DsYAO=i.properties||{},
o=d.prototype,
l=i.include;
if(l){d.__s1olS=l;
for(n=0,
D=l.length;
n<D;
n++){q=l[n],
v=q.prototype;
for(a in v)o[a]=v[a];
B=q.__DsYAO;
for(a in B){p={},
z=B[a];
for(h in z)p[h]=z[h];
r=k&&k[a];
if(r)for(h in r)p[h]=r[h];
k[a]=p}y=q.__lILNE;
for(a in y)C[a]=y[a]}}for(f in k){g=k[f];
g.name=f;
x=g.group?core.property.Group.create(g):g.themeable||g.inheritable?core.property.Multi.create(g):core.property.Simple.create(g);
m=b[f];
m===e&&(m=f.charAt(0).toUpperCase()+f.slice(1),
b[f]=m);
for(s in x)w=s+m,
A=x[s],
o[w]=A,
A.displayName=j+"."+w}t=i.members;
if(t)for(a in t)u=o[a]=t[a],
u instanceof Function&&(u.displayName=j+"."+a);
core.Main.declareNamespace(j,d)});
core.Class;
a=function(a){return!!(a&&typeof a=="function"&&a.__onc3V)},
d=function(b,c){if(!a(b))throw new Error(c||"Invalid class: "+b)};
core.Main.addStatics("core.Class",{isClass:a,
assertIsClass:d,
getByName:function(c){var b=core.Main.resolveNamespace(c);
return a(b)?b:null},
getEvents:function(a){return a.__lILNE},
getProperties:function(a){return a.__DsYAO},
getPropertyFeatures:function(e){var b={},c=e.__DsYAO,d,f,a;
for(d in c){f=c[d];
for(a in f)b[a]||(b[a]=true)}return b},
includesClass:function(b,a){return b.__s1olS.indexOf(a)!=-1}})})(this);
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
core.Class("core.template.Template",{construct:function(a){this.__lzYeh=a},
members:{render:function(a,b){return this.__lzYeh(a,b)},
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