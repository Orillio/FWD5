import{S as D,i as H,s as M,e as w,t as O,c as E,a as A,h as P,d as u,b as d,g as C,F as g,j as G,n as T,x,k as I,y,m as B,z as N,r as $,p as _,C as z,G as J,H as K,I as R,J as Y}from"../chunks/index-2908ee93.js";import{b as L}from"../chunks/paths-396f020f.js";function Q(s){let e,r,t;return{c(){e=w("a"),r=O(s[0]),this.h()},l(n){e=E(n,"A",{href:!0,class:!0});var a=A(e);r=P(a,s[0]),a.forEach(u),this.h()},h(){d(e,"href",t=L+"/"+s[1]),d(e,"class","nav_link")},m(n,a){C(n,e,a),g(e,r)},p(n,[a]){a&1&&G(r,n[0]),a&2&&t!==(t=L+"/"+n[1])&&d(e,"href",t)},i:T,o:T,d(n){n&&u(e)}}}function U(s,e,r){let{linkName:t}=e,{link:n=""}=e;return s.$$set=a=>{"linkName"in a&&r(0,t=a.linkName),"link"in a&&r(1,n=a.link)},[t,n]}class q extends D{constructor(e){super(),H(this,e,U,Q,M,{linkName:0,link:1})}}function W(s){let e,r;return{c(){e=w("a"),r=O(s[0]),this.h()},l(t){e=E(t,"A",{href:!0,class:!0});var n=A(e);r=P(n,s[0]),n.forEach(u),this.h()},h(){d(e,"href",L+"/"),d(e,"class","logo")},m(t,n){C(t,e,n),g(e,r)},p(t,[n]){n&1&&G(r,t[0])},i:T,o:T,d(t){t&&u(e)}}}function X(s,e,r){let{logoName:t}=e;return s.$$set=n=>{"logoName"in n&&r(0,t=n.logoName)},[t]}class Z extends D{constructor(e){super(),H(this,e,X,W,M,{logoName:0})}}function ee(s){let e,r,t,n,a,l,h,o,i,f,k,v,p,c;return n=new Z({props:{logoName:"Yan Kozyrenko"}}),h=new q({props:{link:"about",linkName:"About"}}),i=new q({props:{linkName:"Photos"}}),k=new q({props:{linkName:"Portfolio"}}),p=new q({props:{linkName:"Contact me"}}),{c(){e=w("header"),r=w("div"),t=w("div"),x(n.$$.fragment),a=I(),l=w("nav"),x(h.$$.fragment),o=I(),x(i.$$.fragment),f=I(),x(k.$$.fragment),v=I(),x(p.$$.fragment),this.h()},l(m){e=E(m,"HEADER",{});var j=A(e);r=E(j,"DIV",{class:!0});var b=A(r);t=E(b,"DIV",{class:!0});var V=A(t);y(n.$$.fragment,V),a=B(V),l=E(V,"NAV",{class:!0});var S=A(l);y(h.$$.fragment,S),o=B(S),y(i.$$.fragment,S),f=B(S),y(k.$$.fragment,S),v=B(S),y(p.$$.fragment,S),S.forEach(u),V.forEach(u),b.forEach(u),j.forEach(u),this.h()},h(){d(l,"class","nav_bar"),d(t,"class","bar"),d(r,"class","container")},m(m,j){C(m,e,j),g(e,r),g(r,t),N(n,t,null),g(t,a),g(t,l),N(h,l,null),g(l,o),N(i,l,null),g(l,f),N(k,l,null),g(l,v),N(p,l,null),c=!0},p:T,i(m){c||($(n.$$.fragment,m),$(h.$$.fragment,m),$(i.$$.fragment,m),$(k.$$.fragment,m),$(p.$$.fragment,m),c=!0)},o(m){_(n.$$.fragment,m),_(h.$$.fragment,m),_(i.$$.fragment,m),_(k.$$.fragment,m),_(p.$$.fragment,m),c=!1},d(m){m&&u(e),z(n),z(h),z(i),z(k),z(p)}}}class te extends D{constructor(e){super(),H(this,e,null,ee,M,{})}}function ne(s){let e,r;return{c(){e=w("a"),this.h()},l(t){e=E(t,"A",{target:!0,href:!0,class:!0}),A(e).forEach(u),this.h()},h(){d(e,"target","_blank"),d(e,"href",s[1]),d(e,"class",r="sm_link "+s[0])},m(t,n){C(t,e,n)},p(t,[n]){n&2&&d(e,"href",t[1]),n&1&&r!==(r="sm_link "+t[0])&&d(e,"class",r)},i:T,o:T,d(t){t&&u(e)}}}function ae(s,e,r){let{mediaName:t}=e,{url:n}=e;return s.$$set=a=>{"mediaName"in a&&r(0,t=a.mediaName),"url"in a&&r(1,n=a.url)},[t,n]}class F extends D{constructor(e){super(),H(this,e,ae,ne,M,{mediaName:0,url:1})}}function re(s){let e,r,t,n,a,l,h,o,i,f,k,v,p;return l=new F({props:{mediaName:"tg",url:"https://t.me/y_kozyrenko"}}),o=new F({props:{mediaName:"vk",url:"https://vk.com/yan.kozyrenko"}}),f=new F({props:{mediaName:"gh",url:"https://github.com/Orillio"}}),v=new F({props:{mediaName:"inst",url:"https://instagram.com/yankozyrenko"}}),{c(){e=w("section"),r=w("h2"),t=O("Social Media links"),n=I(),a=w("div"),x(l.$$.fragment),h=I(),x(o.$$.fragment),i=I(),x(f.$$.fragment),k=I(),x(v.$$.fragment),this.h()},l(c){e=E(c,"SECTION",{class:!0});var m=A(e);r=E(m,"H2",{class:!0});var j=A(r);t=P(j,"Social Media links"),j.forEach(u),n=B(m),a=E(m,"DIV",{class:!0});var b=A(a);y(l.$$.fragment,b),h=B(b),y(o.$$.fragment,b),i=B(b),y(f.$$.fragment,b),k=B(b),y(v.$$.fragment,b),b.forEach(u),m.forEach(u),this.h()},h(){d(r,"class","sm_caption"),d(a,"class","sm_links"),d(e,"class","links")},m(c,m){C(c,e,m),g(e,r),g(r,t),g(e,n),g(e,a),N(l,a,null),g(a,h),N(o,a,null),g(a,i),N(f,a,null),g(a,k),N(v,a,null),p=!0},p:T,i(c){p||($(l.$$.fragment,c),$(o.$$.fragment,c),$(f.$$.fragment,c),$(v.$$.fragment,c),p=!0)},o(c){_(l.$$.fragment,c),_(o.$$.fragment,c),_(f.$$.fragment,c),_(v.$$.fragment,c),p=!1},d(c){c&&u(e),z(l),z(o),z(f),z(v)}}}class ie extends D{constructor(e){super(),H(this,e,null,re,M,{})}}function se(s){let e,r,t,n,a,l;e=new te({});const h=s[1].default,o=J(h,s,s[0],null);return a=new ie({}),{c(){x(e.$$.fragment),r=I(),t=w("main"),o&&o.c(),n=I(),x(a.$$.fragment),this.h()},l(i){y(e.$$.fragment,i),r=B(i),t=E(i,"MAIN",{class:!0});var f=A(t);o&&o.l(f),n=B(f),y(a.$$.fragment,f),f.forEach(u),this.h()},h(){d(t,"class","svelte-dzz1z9")},m(i,f){N(e,i,f),C(i,r,f),C(i,t,f),o&&o.m(t,null),g(t,n),N(a,t,null),l=!0},p(i,[f]){o&&o.p&&(!l||f&1)&&K(o,h,i,i[0],l?Y(h,i[0],f,null):R(i[0]),null)},i(i){l||($(e.$$.fragment,i),$(o,i),$(a.$$.fragment,i),l=!0)},o(i){_(e.$$.fragment,i),_(o,i),_(a.$$.fragment,i),l=!1},d(i){z(e,i),i&&u(r),i&&u(t),o&&o.d(i),z(a)}}}function le(s,e,r){let{$$slots:t={},$$scope:n}=e;return s.$$set=a=>{"$$scope"in a&&r(0,n=a.$$scope)},[n,t]}class fe extends D{constructor(e){super(),H(this,e,le,se,M,{})}}export{fe as default};
