"use strict";(self.webpackChunkreact_complete_guide=self.webpackChunkreact_complete_guide||[]).push([[884],{995:function(e,n,t){var r=t(861),s=t(152),u=t(757),a=t.n(u),c=t(791);n.Z=function(e){var n=(0,c.useState)({sending:!1,error:!1,success:!1,data:null}),t=(0,s.Z)(n,2),u=t[0],o=t[1],i=(0,c.useCallback)(function(){var n=(0,r.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o((function(e){return{sending:!0,error:!1,success:!1,data:null}})),n.prev=1,n.next=4,e(t);case 4:r=n.sent,o((function(e){return{sending:!1,error:!1,success:!0,data:r}})),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),o((function(e){return{sending:!1,error:!0,success:!1,data:null}}));case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}(),[e]);return[i,u.sending,u.error,u.success,u.data]}},853:function(e,n,t){t.d(n,{Ir:function(){return h},KP:function(){return l},Lf:function(){return o},h_:function(){return m},jR:function(){return f}});var r=t(683),s=t(861),u=t(757),a=t.n(u),c="https://quotes-335ea-default-rtdb.firebaseio.com";function o(){return i.apply(this,arguments)}function i(){return(i=(0,s.Z)(a().mark((function e(){var n,t,s,u;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(c,"/quotes.json"));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Cannot get quotes!");case 5:return e.next=7,n.json();case 7:for(u in t=e.sent,s=[],t)s.push((0,r.Z)((0,r.Z)({},t[u]),{},{id:u}));return e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return p.apply(this,arguments)}function p(){return(p=(0,s.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(c,"/quotes/").concat(n,".json"));case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Cannot get quote!");case 5:return e.next=7,t.json();case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=(0,s.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(c,"/quotes.json"),{method:"POST",body:JSON.stringify(n),headers:{"Content-type":"application/json"}});case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Cannot add quote!");case 5:return e.next=7,t.json();case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return x.apply(this,arguments)}function x(){return(x=(0,s.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(c,"/comments/").concat(n.quoteId,".json"),{method:"POST",body:JSON.stringify(n),headers:{"Content-type":"application/json"}});case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Cannot add comment!");case 5:return e.next=7,t.json();case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return v.apply(this,arguments)}function v(){return(v=(0,s.Z)(a().mark((function e(n){var t,s,u,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(c,"/comments/").concat(n,".json"));case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Cannot load comments!");case 5:return e.next=7,t.json();case 7:for(o in s=e.sent,u=[],s)u.push((0,r.Z)((0,r.Z)({},s[o]),{},{id:o}));return e.abrupt("return",u);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},884:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var r=t(861),s=t(152),u=t(757),a=t.n(u),c=t(791),o=t(931),i="Card_card__KNLnn",f=t(184),p=function(e){return(0,f.jsx)("div",{className:i,children:e.children})},l=t(556),d="QuoteForm_form__OIegU",h="QuoteForm_loading__YkA-l",x="QuoteForm_control__rrQOm",m="QuoteForm_actions__FwnTk",v=function(e){var n=(0,c.useRef)(),t=(0,c.useRef)(),r=(0,c.useState)(!1),u=(0,s.Z)(r,2),a=u[0],i=u[1];return(0,f.jsxs)(p,{children:[(0,f.jsx)(o.NL,{when:a,message:function(e){return"Are you sure?"}}),(0,f.jsxs)("form",{onFocus:function(){i(!0)},className:d,onSubmit:function(r){r.preventDefault();var s=n.current.value,u=t.current.value;e.onAddQuote({author:s,text:u,publishedOn:Date.now()})&&e.redirect()},children:[e.isLoading&&(0,f.jsx)("div",{className:h,children:(0,f.jsx)(l.Z,{})}),(0,f.jsxs)("div",{className:x,children:[(0,f.jsx)("label",{htmlFor:"author",children:"Author"}),(0,f.jsx)("input",{type:"text",id:"author",ref:n})]}),(0,f.jsxs)("div",{className:x,children:[(0,f.jsx)("label",{htmlFor:"text",children:"Text"}),(0,f.jsx)("textarea",{id:"text",rows:"5",ref:t})]}),(0,f.jsx)("div",{className:m,children:(0,f.jsx)("button",{className:"btn",onClick:function(){i(!1)},children:"Add Quote"})})]})]})},j=t(995),w=t(853);var k=function(){var e=(0,j.Z)(w.KP),n=(0,s.Z)(e,5),t=n[0],u=n[1],i=n[2],p=n[3],d=n[4],h=(0,o.k6)();function x(){return x=(0,r.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t(n);case 3:return e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e,null,[[0,6]])}))),x.apply(this,arguments)}var m=(0,c.useCallback)((function(){p&&h.replace("/quotes")}),[h,p]);return(0,c.useEffect)((function(){m()}),[d,m]),(0,f.jsxs)(c.Fragment,{children:[(0,f.jsx)("h1",{children:"New Quote"}),u&&(0,f.jsx)(l.Z,{}),i&&(0,f.jsx)("h3",{className:"error",children:"Could not add quote. Please try again later."}),(0,f.jsx)(v,{onAddQuote:function(e){return x.apply(this,arguments)},redirect:m})]})}}}]);
//# sourceMappingURL=884.0eabb788.chunk.js.map