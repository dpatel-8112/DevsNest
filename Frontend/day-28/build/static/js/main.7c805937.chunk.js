(this["webpackJsonpday-28"]=this["webpackJsonpday-28"]||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},46:function(e,t){},48:function(e,t){},81:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n.n(c),i=n(34),s=n.n(i),u=(n(39),n.p,n(40),n(9)),r=(n(41),n(13)),o=n.n(r),l=n(0);var j=function(){var e=Object(c.useState)(null),t=Object(u.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)("Select"),s=Object(u.a)(i,2),r=s[0],j=s[1],d=Object(c.useState)("Select"),b=Object(u.a)(d,2),f=b[0],h=b[1],O=Object(c.useState)(null),p=Object(u.a)(O,2),v=p[0],x=p[1];return Object(c.useEffect)((function(){return o.a.get("https://rest-sandbox.coinapi.io/v1/assets?apikey=712B1681-2520-4461-A856-6F67CED4F57C").then((function(e){a(e)})),function(){}}),[]),Object(c.useEffect)((function(){return o.a.get("https://rest-sandbox.coinapi.io/v1/exchangerate/".concat(r,"/").concat(f,"?apikey=712B1681-2520-4461-A856-6F67CED4F57C")).then((function(e){console.log(e),x(e)})),function(){}}),[r,f]),Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"Home"}),Object(l.jsx)("select",{value:r,onChange:function(e){return j(e.target.value)},children:n?n.data.slice(0,100).map((function(e){return Object(l.jsx)("option",{value:e.asset_id,children:e.name})})):null}),Object(l.jsx)("select",{value:f,onChange:function(e){return h(e.target.value)},children:n?n.data.slice(0,100).filter((function(e){return e.asset_id!==r})).map((function(e){return Object(l.jsx)("option",{value:e.asset_id,children:e.name})})):null}),Object(l.jsx)("div",{children:v?Object(l.jsx)("div",{children:v.data.rate}):null})]})};var d=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)("header",{className:"App-header",children:Object(l.jsx)(j,{})})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,82)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),b()}},[[81,1,2]]]);
//# sourceMappingURL=main.7c805937.chunk.js.map