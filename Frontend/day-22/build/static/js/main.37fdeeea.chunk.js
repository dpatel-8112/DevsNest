(this["webpackJsonpday-22"]=this["webpackJsonpday-22"]||[]).push([[0],{23:function(t,e,n){},24:function(t,e,n){},3:function(t,e,n){t.exports={HomeContainer:"Style_HomeContainer__3fRKZ",MemesConstainer:"Style_MemesConstainer__2c3u_",GContainer:"Style_GContainer__uVSXt",InputContainer:"Style_InputContainer__34O-t",Input:"Style_Input__2UD4C",Button:"Style_Button__3QuDg"}},44:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),i=n(18),r=n.n(i),o=(n(23),n(4)),s=(n.p,n(24),n(7)),u=n.n(s),l=a.a.createContext(),j=l.Provider,d=(l.Consumer,n(3)),b=n.n(d),f=n(0);var m=function(t){var e=t.item,n=Object(c.useContext)(l),a=n.setActiveHandler,i=(n.active,n.setActiveHomeHandler);return Object(f.jsx)("div",{className:b.a.MemesConstainer,onClick:function(){a(e),i(!1)},children:Object(f.jsx)("img",{src:e.url,width:"500px",height:"500",alt:"",style:{cursor:"pointer",padding:"10px"}})})};var O=function(){var t=Object(c.useState)([]),e=Object(o.a)(t,2),n=e[0],a=e[1];return Object(c.useEffect)((function(){return u.a.get("https://api.imgflip.com/get_memes").then((function(t){a(t.data.data.memes)})).catch((function(t){console.log(t)})),function(){}}),[]),Object(f.jsx)("div",{className:b.a.HomeContainer,children:n?n.filter((function(t){return t.height,t})).map((function(t){return Object(f.jsx)(m,{item:t})})):""})},p=n(9);var h=function(){var t=Object(c.useState)([]),e=Object(o.a)(t,2),n=e[0],a=e[1],i=Object(c.useState)(""),r=Object(o.a)(i,2),s=r[0],j=r[1],d=Object(c.useState)(!1),m=Object(o.a)(d,2),O=m[0],h=m[1],v=Object(c.useContext)(l),x=(v.setActiveHandler,v.active),C=v.setActiveHomeHandler;return Object(c.useEffect)((function(){return j(x.url),function(){j(x.url)}}),[]),Object(c.useEffect)((function(){var t="https://api.imgflip.com/caption_image?template_id=".concat(x.id,"&username=DevarshiPatel&password=Abcd123@");return n.map((function(e,n){t+="&boxes[".concat(n,"][text] = ").concat(e)})),u.a.get(t).then((function(t){j(t.data.data.url)})).catch((function(t){console.log(t)})),function(){}}),[O]),Object(f.jsxs)("div",{className:b.a.GContainer,children:[Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:s||"",width:"400px",alt:""})}),Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:b.a.InputContainer,children:Object(p.a)(Array(x.box_count)).map((function(t,e){return Object(f.jsx)("input",{className:b.a.Input,type:"text",placeholder:"Text ".concat(e),onChange:function(t){var c=Object(p.a)(n);c[e]=t.target.value,a(c)}})}))}),Object(f.jsxs)("div",{children:[Object(f.jsx)("button",{className:b.a.Button,onClick:function(){return C(!0)},children:"Choose Template"}),Object(f.jsx)("button",{className:b.a.Button,onClick:function(){return h(!O)},children:"Generate"})]})]})]})};var v=function(){var t=Object(c.useState)(""),e=Object(o.a)(t,2),n=e[0],a=e[1],i=Object(c.useState)(!0),r=Object(o.a)(i,2),s=r[0],u=r[1];return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)("header",{className:"App-header",children:Object(f.jsx)(j,{value:{setActiveHandler:function(t){a(t)},active:n,setActive:a,setActiveHomeHandler:function(t){u(t)}},children:s?Object(f.jsx)(O,{}):Object(f.jsx)(h,{})})})})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),i(t),r(t)}))};r.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(v,{})}),document.getElementById("root")),x()}},[[44,1,2]]]);
//# sourceMappingURL=main.37fdeeea.chunk.js.map