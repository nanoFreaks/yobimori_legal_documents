import{S as t,i as e,s as n,e as r,t as s,c as o,a,g as c,d as l,b as i,f,D as h,h as u,E as d,H as p}from"../chunks/vendor-acd2b515.js";import{b as m}from"../chunks/paths-45dac81d.js";function v(t,e,n){const r=t.slice();return r[1]=e[n],r}function g(t){let e,n,d,p,v=t[1].title+"";return{c(){e=r("h3"),n=r("a"),d=s(v),this.h()},l(t){e=o(t,"H3",{});var r=a(e);n=o(r,"A",{href:!0});var s=a(n);d=c(s,v),s.forEach(l),r.forEach(l),this.h()},h(){i(n,"href",p=m+"/"+t[1].href)},m(t,r){f(t,e,r),h(e,n),h(n,d)},p(t,e){1&e&&v!==(v=t[1].title+"")&&u(d,v),1&e&&p!==(p=m+"/"+t[1].href)&&i(n,"href",p)},d(t){t&&l(e)}}}function x(t){let e,n=t[0],s=[];for(let r=0;r<n.length;r+=1)s[r]=g(v(t,n,r));return{c(){e=r("main");for(let t=0;t<s.length;t+=1)s[t].c()},l(t){e=o(t,"MAIN",{});var n=a(e);for(let e=0;e<s.length;e+=1)s[e].l(n);n.forEach(l)},m(t,n){f(t,e,n);for(let r=0;r<s.length;r+=1)s[r].m(e,null)},p(t,[r]){if(1&r){let o;for(n=t[0],o=0;o<n.length;o+=1){const a=v(t,n,o);s[o]?s[o].p(a,r):(s[o]=g(a),s[o].c(),s[o].m(e,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},i:d,o:d,d(t){t&&l(e),p(s,t)}}}var y=function(t,e,n,r){return new(n||(n=Promise))((function(s,o){function a(t){try{l(r.next(t))}catch(e){o(e)}}function c(t){try{l(r.throw(t))}catch(e){o(e)}}function l(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}l((r=r.apply(t,e||[])).next())}))};const E=({fetch:t})=>y(void 0,void 0,void 0,(function*(){const e=yield t("/getDocuments");return{props:{articles:yield e.json()}}}));function b(t,e,n){let{articles:r}=e;return t.$$set=t=>{"articles"in t&&n(0,r=t.articles)},[r]}export default class extends t{constructor(t){super(),e(this,t,b,x,n,{articles:0})}}export{E as load};
