"use strict";(self.webpackChunkreact_complete_guide=self.webpackChunkreact_complete_guide||[]).push([[776],{995:function(n,t,e){var r=e(861),s=e(152),c=e(757),o=e.n(c),a=e(791);t.Z=function(n){var t=(0,a.useState)({sending:!1,error:!1,success:!1,data:null}),e=(0,s.Z)(t,2),c=e[0],u=e[1],i=(0,a.useCallback)(function(){var t=(0,r.Z)(o().mark((function t(e){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u((function(n){return{sending:!0,error:!1,success:!1,data:null}})),t.prev=1,t.next=4,n(e);case 4:r=t.sent,u((function(n){return{sending:!1,error:!1,success:!0,data:r}})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),u((function(n){return{sending:!1,error:!0,success:!1,data:null}}));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(n){return t.apply(this,arguments)}}(),[n]);return[i,c.sending,c.error,c.success,c.data]}},853:function(n,t,e){e.d(t,{Ir:function(){return h},KP:function(){return m},Lf:function(){return u},h_:function(){return x},jR:function(){return l}});var r=e(683),s=e(861),c=e(757),o=e.n(c),a="https://quotes-335ea-default-rtdb.firebaseio.com";function u(){return i.apply(this,arguments)}function i(){return(i=(0,s.Z)(o().mark((function n(){var t,e,s,c;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"/quotes.json"));case 2:if((t=n.sent).ok){n.next=5;break}throw new Error("Cannot get quotes!");case 5:return n.next=7,t.json();case 7:for(c in e=n.sent,s=[],e)s.push((0,r.Z)((0,r.Z)({},e[c]),{},{id:c}));return n.abrupt("return",s);case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return f.apply(this,arguments)}function f(){return(f=(0,s.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"/quotes/").concat(t,".json"));case 2:if((e=n.sent).ok){n.next=5;break}throw new Error("Cannot get quote!");case 5:return n.next=7,e.json();case 7:return r=n.sent,n.abrupt("return",r);case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return d.apply(this,arguments)}function d(){return(d=(0,s.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"/quotes.json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json"}});case 2:if((e=n.sent).ok){n.next=5;break}throw new Error("Cannot add quote!");case 5:return n.next=7,e.json();case 7:return r=n.sent,n.abrupt("return",r);case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return p.apply(this,arguments)}function p(){return(p=(0,s.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"/comments/").concat(t.quoteId,".json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json"}});case 2:if((e=n.sent).ok){n.next=5;break}throw new Error("Cannot add comment!");case 5:return n.next=7,e.json();case 7:return r=n.sent,n.abrupt("return",r);case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return j.apply(this,arguments)}function j(){return(j=(0,s.Z)(o().mark((function n(t){var e,s,c,u;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"/comments/").concat(t,".json"));case 2:if((e=n.sent).ok){n.next=5;break}throw new Error("Cannot load comments!");case 5:return n.next=7,e.json();case 7:for(u in s=n.sent,c=[],s)c.push((0,r.Z)((0,r.Z)({},s[u]),{},{id:u}));return n.abrupt("return",c);case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},776:function(n,t,e){e.r(t),e.d(t,{default:function(){return g}});var r=e(861),s=e(152),c=e(757),o=e.n(c),a=e(791),u=e(931),i=e(523),l="Comments_comments__bGxcL",f=e(995),m=e(853),d=e(556),h="NewCommentForm_form__BGBDU",p="NewCommentForm_control__zcmbu",x="NewCommentForm_actions__ME663",j=e(184),w=function(n){var t=(0,a.useRef)(),e=(0,u.$B)(),r=(0,f.Z)(m.Ir),c=(0,s.Z)(r,4),o=c[0],i=c[1],l=c[2],w=c[3],b=function(n){n.preventDefault(),o({text:t.current.value,quoteId:e.url.split("/")[2]})};return(0,j.jsxs)(a.Fragment,{children:[(0,j.jsxs)("form",{className:h,onSubmit:b,children:[(0,j.jsxs)("div",{className:p,onSubmit:b,children:[(0,j.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),(0,j.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),(0,j.jsx)("div",{className:x,children:(0,j.jsx)("button",{className:"btn",children:"Add Comment"})})]}),i&&(0,j.jsx)(d.Z,{}),w&&(0,j.jsx)(u.l_,{to:e.url}),l&&(0,j.jsx)("h3",{className:"error",children:"Failed to add comment!"})]})},b=function(){var n=(0,a.useState)(!1),t=(0,s.Z)(n,2),e=t[0],r=t[1];return(0,j.jsxs)("section",{className:l,children:[(0,j.jsx)("h2",{children:"User Comments"}),!e&&(0,j.jsx)("button",{className:"btn",onClick:function(){r(!0)},children:"Add a Comment"}),e&&(0,j.jsx)(w,{}),(0,j.jsx)("p",{children:"Comments..."})]})},v="HighlightedQuote_quote__IYyqg",_=function(n){return(0,j.jsxs)("figure",{className:v,children:[(0,j.jsx)("p",{children:n.text}),(0,j.jsx)("figcaption",{children:n.author})]})},k="CommentItem_item__FB82z",C=function(n){return(0,j.jsx)("li",{className:k,children:(0,j.jsx)("p",{children:n.text})})},Z="CommentsList_comments__lCAFO",y=function(n){return(0,j.jsx)("ul",{className:Z,children:n.comments.map((function(n){return(0,j.jsx)(C,{text:n.text},n.id)}))})};var g=function(){var n=(0,u.UO)(),t=(0,f.Z)(m.jR),e=(0,s.Z)(t,5),c=e[0],l=e[1],h=e[2],p=e[3],x=e[4],w=(0,f.Z)(m.h_),v=(0,s.Z)(w,5),k=v[0],C=v[1],Z=v[2],g=v[3],N=v[4],q=(0,u.$B)();return(0,a.useEffect)((function(){function t(){return(t=(0,r.Z)(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c(n.quoteId);case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[c,k]),(0,a.useEffect)((function(){function t(){return(t=(0,r.Z)(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(n.quoteId);case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[k,n]),(0,j.jsxs)(a.Fragment,{children:[(0,j.jsx)("h1",{children:"Quote Detail"}),l&&(0,j.jsx)(d.Z,{}),h&&(0,j.jsx)("h3",{className:"error",children:"Could not find quote!"}),p&&(0,j.jsxs)(a.Fragment,{children:[(0,j.jsx)(_,{id:x.id,text:x.text,author:x.author}),(0,j.jsx)(u.AW,{path:"".concat(q.url),exact:!0,children:(0,j.jsx)(i.rU,{className:"btn--flat",to:"".concat(q.url,"/comments"),children:"Load comments..."})}),(0,j.jsxs)(u.AW,{path:"".concat(q.url,"/comments"),children:[(0,j.jsx)(b,{}),g&&(0,j.jsx)(y,{comments:N}),C&&(0,j.jsx)(d.Z,{}),Z&&(0,j.jsx)("h3",{className:"error",children:"Error loading comments!"}),(0,j.jsx)(i.rU,{className:"btn--flat",to:"".concat(q.url),children:"Back"})]})]})]})}}}]);
//# sourceMappingURL=776.b68b9675.chunk.js.map