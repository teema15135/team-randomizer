(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{176:function(t,e,n){var r=n(10);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},177:function(t,e,n){var content=n(182);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(49).default)("6759f5ab",content,!0,{sourceMap:!1})},178:function(t,e,n){"use strict";var strong=n(179),r=n(176);t.exports=n(180)("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return strong.def(r(this,"Set"),t=0===t?0:t,t)}},strong)},179:function(t,e,n){"use strict";var r=n(11).f,o=n(90),c=n(127),l=n(23),f=n(125),d=n(126),v=n(92),h=n(128),_=n(93),m=n(7),w=n(124).fastKey,x=n(176),y=m?"_s":"size",k=function(t,e){var n,r=w(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,v){var h=t((function(t,r){f(t,h,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[y]=0,null!=r&&d(r,n,t[v],t)}));return c(h.prototype,{clear:function(){for(var t=x(this,e),data=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete data[n.i];t._f=t._l=void 0,t[y]=0},delete:function(t){var n=x(this,e),r=k(n,t);if(r){var o=r.n,c=r.p;delete n._i[r.i],r.r=!0,c&&(c.n=o),o&&(o.p=c),n._f==r&&(n._f=o),n._l==r&&(n._l=c),n[y]--}return!!r},forEach:function(t){x(this,e);for(var n,r=l(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!k(x(this,e),t)}}),m&&r(h.prototype,"size",{get:function(){return x(this,e)[y]}}),h},def:function(t,e,n){var r,o,c=k(t,e);return c?c.v=n:(t._l=c={i:o=w(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=c),r&&(r.n=c),t[y]++,"F"!==o&&(t._i[o]=c)),t},getEntry:k,setStrong:function(t,e,n){v(t,e,(function(t,n){this._t=x(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this,e=t._k,n=t._l;n&&n.r;)n=n.p;return t._t&&(t._l=n=n?n.n:t._t._f)?h(0,"keys"==e?n.k:"values"==e?n.v:[n.k,n.v]):(t._t=void 0,h(1))}),n?"entries":"values",!n,!0),_(e)}}},180:function(t,e,n){"use strict";var r=n(5),o=n(4),c=n(12),l=n(127),meta=n(124),f=n(126),d=n(125),v=n(10),h=n(8),_=n(91),m=n(47),w=n(129);t.exports=function(t,e,n,x,y,k){var C=r[t],S=C,E=y?"set":"add",A=S&&S.prototype,j={},M=function(t){var e=A[t];c(A,t,"delete"==t||"has"==t?function(a){return!(k&&!v(a))&&e.call(this,0===a?0:a)}:"get"==t?function(a){return k&&!v(a)?void 0:e.call(this,0===a?0:a)}:"add"==t?function(a){return e.call(this,0===a?0:a),this}:function(a,b){return e.call(this,0===a?0:a,b),this})};if("function"==typeof S&&(k||A.forEach&&!h((function(){(new S).entries().next()})))){var O=new S,T=O[E](k?{}:-0,1)!=O,z=h((function(){O.has(1)})),B=_((function(t){new S(t)})),F=!k&&h((function(){for(var t=new S,e=5;e--;)t[E](e,e);return!t.has(-0)}));B||((S=e((function(e,n){d(e,S,t);var r=w(new C,e,S);return null!=n&&f(n,y,r[E],r),r}))).prototype=A,A.constructor=S),(z||F)&&(M("delete"),M("has"),y&&M("get")),(F||T)&&M(E),k&&A.clear&&delete A.clear}else S=x.getConstructor(e,t,y,E),l(S.prototype,n),meta.NEED=!0;return m(S,t),j[t]=S,o(o.G+o.W+o.F*(S!=C),j),k||x.setStrong(S,t,y),S}},181:function(t,e,n){"use strict";n(177)},182:function(t,e,n){var r=n(48)(!1);r.push([t.i,"#container{min-height:100vh;margin-left:auto;margin-right:auto;padding:3rem;grid-template-rows:1fr 1px 1fr}.team-container{padding:1.5rem 2rem;--text-opacity:1;color:#fefffe;color:rgba(254,255,254,var(--text-opacity));border-radius:1rem;box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06)}",""]),t.exports=r},183:function(t,e,n){"use strict";n.r(e);var r=n(84);var o=n(113),c=n(62);function l(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||Object(o.a)(t)||Object(c.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n(31),n(178),n(32),n(13),n(33),n(130),n(30);var f=n(1).a.extend({data:function(){return{nameString:""}},computed:{nameArray:function(){var t=l(new Set(this.nameString.split("\n"))).filter((function(t){return""!=t.trim()})).sort((function(){return Math.random()-.5})),e=Math.ceil(t.length/2);return{a:t.slice(0,e),b:t.slice(e)}}}}),d=(n(181),n(37)),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid gap-6 w-8/12 h-2/6",attrs:{id:"container"}},[n("div",{staticClass:"bg-white rounded-2xl p-8 w-full h-full col-span-2 shadow-md",attrs:{id:"input-container"}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.nameString,expression:"nameString"}],staticClass:"bg-transparent placeholder- text-prussianBlue resize-none overflow-auto focus:outline-none w-full h-full",attrs:{placeholder:"Enter name separate by new line..."},domProps:{value:t.nameString},on:{input:function(e){e.target.composing||(t.nameString=e.target.value)}}})]),t._v(" "),n("hr",{staticClass:"text-articLime border-articLime border-2 rounded-full col-span-2 shadow-md"}),t._v(" "),n("div",{staticClass:"team-container team-a bg-prussianBlue"},[n("h1",{staticClass:"bold"},[t._v("Team A")]),t._v(" "),n("hr",{staticClass:"text-white my-2"}),t._v(" "),n("ul",{attrs:{id:"team-a"}},t._l(t.nameArray.a,(function(e){return n("li",{key:e},[t._v(t._s(e))])})),0)]),t._v(" "),n("div",{staticClass:"team-container team-b bg-bittersweet"},[n("h1",{staticClass:"bold"},[t._v("Team B")]),t._v(" "),n("hr",{staticClass:"text-white my-2"}),t._v(" "),n("ul",{attrs:{id:"team-b"}},t._l(t.nameArray.b,(function(e){return n("li",{key:e},[t._v(t._s(e))])})),0)])])}),[],!1,null,null,null);e.default=component.exports}}]);