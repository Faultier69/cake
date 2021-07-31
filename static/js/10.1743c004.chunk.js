(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[10],{1375:function(e,t,n){"use strict";n.r(t);var r,c,o,a,s,i,u,b,j,l,d,p=n(11),O=n(0),f=n(3),x=n(7),h=n(87),m=n(16),g=n(235),v=Object(x.e)(f.ab)(r||(r=Object(p.a)(["\n  display: none;\n\n  "," {\n    display: block;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),y=n(1),C=Object(x.e)(f.m)(c||(c=Object(p.a)(["\n  background: ",";\n  padding-bottom: 32px;\n  padding-top: 32px;\n"])),(function(e){return e.theme.colors.gradients.bubblegum})),w=function(){var e=Object(m.b)().t;return Object(y.jsx)(C,{children:Object(y.jsx)(g.a,{children:Object(y.jsxs)(f.U,{alignItems:"center",justifyContent:"space-between",children:[Object(y.jsxs)(f.m,{pr:"32px",children:[Object(y.jsx)(f.W,{as:"h1",scale:"xxl",color:"secondary",mb:"16px",children:e("Voting")}),Object(y.jsx)(f.W,{as:"h3",scale:"lg",mb:"16px",children:e("Have your say in the future of the PancakeSwap Ecosystem")}),Object(y.jsx)(f.q,{startIcon:Object(y.jsx)(f.Kb,{color:"currentColor",width:"24px"}),as:h.a,to:"/voting/proposal/create",children:e("Make a Proposal")})]}),Object(y.jsx)(v,{src:"/images/voting/voting-presents.png",width:361,height:214})]})})})},k=Object(x.e)(f.m)(o||(o=Object(p.a)(["\n  background: ",";\n  padding-bottom: 32px;\n  padding-top: 32px;\n"])),(function(e){return e.theme.colors.gradients.bubblegum})),I=function(){var e=Object(m.b)().t;return Object(y.jsx)(k,{children:Object(y.jsx)(g.a,{children:Object(y.jsxs)(f.U,{alignItems:"center",justifyContent:"space-between",children:[Object(y.jsxs)(f.m,{pr:"32px",children:[Object(y.jsx)(f.W,{as:"h2",scale:"lg",mb:"16px",children:e("Got a suggestion?")}),Object(y.jsx)(f.ac,{as:"p",children:e("Community proposals are a great way to see how the community feels about your ideas.")}),Object(y.jsx)(f.ac,{as:"p",mb:"16px",children:e("They won't necessarily be implemented if the community votes successful, but suggestions with a lot of community support may be made into Core proposals.")}),Object(y.jsx)(f.q,{startIcon:Object(y.jsx)(f.Kb,{color:"currentColor",width:"24px"}),as:h.a,to:"/voting/proposal/create",children:e("Make a Proposal")})]}),Object(y.jsx)(v,{src:"/images/voting/voting-bunny.png",width:173,height:234})]})})})},S=n(9),E=n(13),L=n(70),T=n(363),N=n(812),A=n(65),D=n(777),U=n(843),M=n(813),P=n.n(M),W=n(781),V=Object(x.e)(f.U)(a||(a=Object(p.a)(["\n  border-bottom: 1px solid ",";\n"])),(function(e){return e.theme.colors.cardBorder})),B=x.e.div(s||(s=Object(p.a)(["\n  ",":last-child {\n    border-bottom: 0;\n  }\n"])),V),G=function(){return Object(y.jsx)(B,{children:P()(W.d).map((function(e){return Object(y.jsxs)(V,{alignItems:"center",justifyContent:"space-between",py:"16px",px:"24px",children:[Object(y.jsxs)(f.m,{style:{flex:1},children:[Object(y.jsx)(f.Ob,{height:"21px",width:"70%",mb:"4px"}),Object(y.jsx)(f.Ob,{height:"21px",width:"30%",mb:"4px"}),Object(y.jsx)(f.Ob,{height:"21px",width:"40%"})]}),Object(y.jsx)(f.Ob,{height:"32px",width:"32px"})]},e)}))})},H=x.e.div(i||(i=Object(p.a)(["\n  background-color: ",";\n  padding-top: 16px;\n"])),(function(e){return e.theme.colors.input})),J=function(e){switch(e){case A.e.COMMUNITY:return 1;case A.e.ALL:return 2;case A.e.CORE:default:return 0}},R=function(e){var t=e.proposalType,n=e.onTypeChange,r=Object(m.b)().t;return Object(y.jsx)(H,{children:Object(y.jsxs)(f.Xb,{activeIndex:J(t),onItemClick:function(e){n(function(e){switch(e){case 1:return A.e.COMMUNITY;case 2:return A.e.ALL;default:return A.e.CORE}}(e))},children:[Object(y.jsx)(f.Wb,{children:Object(y.jsxs)(f.U,{alignItems:"center",children:[Object(y.jsx)(f.lc,{color:"currentColor",mr:"4px"}),r("Core")]})}),Object(y.jsxs)(f.Wb,{children:[" ",Object(y.jsxs)(f.U,{alignItems:"center",children:[Object(y.jsx)(f.N,{color:"currentColor",mr:"4px"}),r("Community")]})]}),Object(y.jsx)(f.Wb,{children:"All"})]})})},F=n(23),K=n(751),Y=function(e){var t=Object(F.default)(1e3*e);return Object(K.default)(t,"MMM do, yyyy HH:mm")},q=function(e){var t=e.startDate,n=e.endDate,r=e.proposalState,c=Object(m.b)().t,o={fontSize:"16px",color:"textSubtle",ml:"8px"};return r===A.d.CLOSED?Object(y.jsx)(f.ac,Object(S.a)(Object(S.a)({},o),{},{children:c("Ended %date%",{date:Y(n)})})):r===A.d.PENDING?Object(y.jsx)(f.ac,Object(S.a)(Object(S.a)({},o),{},{children:c("Starts %date%",{date:Y(t)})})):Object(y.jsx)(f.ac,Object(S.a)(Object(S.a)({},o),{},{children:c("Ends %date%",{date:Y(n)})}))},_=n(824),z=Object(x.e)(h.a)(u||(u=Object(p.a)(["\n  align-items: center;\n  border-bottom: 1px solid ",";\n  display: flex;\n  padding: 16px 24px;\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.colors.cardBorder}),(function(e){return e.theme.colors.dropdown})),Q=function(e){var t=e.proposal,n="/voting/proposal/".concat(t.id);return Object(y.jsxs)(z,{to:n,children:[Object(y.jsxs)(f.m,{as:"span",style:{flex:1},children:[Object(y.jsx)(f.ac,{bold:!0,mb:"8px",children:t.title}),Object(y.jsx)(f.U,{alignItems:"center",mb:"8px",children:Object(y.jsx)(q,{startDate:t.start,endDate:t.end,proposalState:t.state})}),Object(y.jsxs)(f.U,{alignItems:"center",children:[Object(y.jsx)(_.a,{proposalState:t.state}),Object(y.jsx)(_.b,{isCoreProposal:Object(D.h)(t),ml:"8px"})]})]}),Object(y.jsx)(f.Z,{variant:"text",children:Object(y.jsx)(f.e,{width:"24px"})})]})},X=Object(x.e)(f.U).attrs({alignItems:"center"})(b||(b=Object(p.a)(["\n  border-bottom: 1px solid ",";\n  padding: 16px 24px;\n"])),(function(e){return e.theme.colors.cardBorder})),Z=x.e.label(j||(j=Object(p.a)(["\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  margin-right: 16px;\n"]))),$=[{value:A.d.ACTIVE,label:"Vote Now"},{value:A.d.PENDING,label:"Soon"},{value:A.d.CLOSED,label:"Closed"}],ee=function(e){var t=e.filterState,n=e.onFilterChange,r=e.isLoading,c=Object(m.b)().t;return Object(y.jsx)(X,{children:$.map((function(e){var o=e.value,a=e.label;return Object(y.jsxs)(Z,{children:[Object(y.jsx)(f.Lb,{scale:"sm",value:o,checked:t===o,onChange:function(e){var t=e.currentTarget.value;n(t)},disabled:r}),Object(y.jsx)(f.ac,{ml:"8px",children:c(a)})]},a)}))})},te=function(){var e=Object(m.b)().t,t=Object(O.useState)({proposalType:A.e.CORE,filterState:A.d.ACTIVE}),n=Object(E.a)(t,2),r=n[0],c=n[1],o=Object(N.b)(),a=Object(N.c)(),s=Object(L.b)(),i=r.proposalType,u=r.filterState,b=o===A.g.LOADING,j=o===A.g.IDLE;Object(O.useEffect)((function(){s(Object(T.c)({first:1e3,state:u}))}),[u,s]);var l=Object(D.b)(Object(D.c)(a,i),u);return Object(y.jsxs)(g.a,{py:"40px",children:[Object(y.jsx)(f.m,{mb:"48px",children:Object(y.jsxs)(f.n,{children:[Object(y.jsx)(U.a,{to:"/",children:e("Home")}),Object(y.jsx)(f.ac,{children:e("Voting")})]})}),Object(y.jsx)(f.W,{as:"h2",scale:"xl",mb:"32px",children:e("Proposals")}),Object(y.jsxs)(f.u,{children:[Object(y.jsx)(R,{proposalType:i,onTypeChange:function(e){c((function(t){return Object(S.a)(Object(S.a)({},t),{},{proposalType:e})}))}}),Object(y.jsx)(ee,{filterState:u,onFilterChange:function(e){c((function(t){return Object(S.a)(Object(S.a)({},t),{},{filterState:e})}))},isLoading:b}),b&&Object(y.jsx)(G,{}),j&&l.length>0&&l.map((function(e){return Object(y.jsx)(Q,{proposal:e},e.id)})),j&&0===l.length&&Object(y.jsx)(f.U,{alignItems:"center",justifyContent:"center",p:"32px",children:Object(y.jsx)(f.W,{as:"h5",children:e("No proposals found")})})]})]})},ne=x.e.div(l||(l=Object(p.a)(["\n  flex: none;\n"]))),re=x.e.div(d||(d=Object(p.a)(["\n  flex: 1;\n  height: 100%;\n"])));t.default=function(){return Object(y.jsxs)(f.U,{flexDirection:"column",minHeight:"calc(100vh - 64px)",children:[Object(y.jsx)(ne,{children:Object(y.jsx)(w,{})}),Object(y.jsx)(re,{children:Object(y.jsx)(te,{})}),Object(y.jsx)(ne,{children:Object(y.jsx)(I,{})})]})}},777:function(e,t,n){"use strict";n.d(t,"h",(function(){return x})),n.d(t,"c",(function(){return h})),n.d(t,"b",(function(){return m})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return v})),n.d(t,"i",(function(){return y})),n.d(t,"g",(function(){return C})),n.d(t,"a",(function(){return w})),n.d(t,"f",(function(){return k}));var r=n(22),c=n(39),o=n(9),a=n(4),s=n.n(a),i=n(14),u=n(19),b=n.n(u),j=n(26),l=n(100),d=n(35),p=n(65),O=n(98),f=n(781),x=function(e){return e.author.toLowerCase()===f.a.toLowerCase()},h=function(e,t){switch(t){case p.e.COMMUNITY:return e.filter((function(e){return!x(e)}));case p.e.CORE:return e.filter((function(e){return x(e)}));case p.e.ALL:default:return e}},m=function(e,t){return e.filter((function(e){return e.state===t}))},g=function(){return{plugins:{},network:56,strategies:[{name:"cake",params:{symbol:"CAKE",address:Object(j.f)(),decimals:18}}]}},v=function(){return{version:f.e,timestamp:(Date.now()/1e3).toFixed(),space:f.c}},y=function(){var e=Object(i.a)(s.a.mark((function e(t){var n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(l.e,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 2:if((n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:throw r=e.sent,new Error(null===r||void 0===r?void 0:r.error_description);case 8:return e.next=10,n.json();case 10:return c=e.sent,e.abrupt("return",c);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(i.a)(s.a.mark((function e(t,n,r){var c,o,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=r,e.t0){e.next=5;break}return e.next=4,O.a.getBlockNumber();case 4:e.t0=e.sent;case 5:return c=e.t0,e.next=8,fetch("".concat(l.f,"/power"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({address:t,block:c,poolAddresses:n})});case 8:return o=e.sent,e.next=11,o.json();case 11:return a=e.sent,e.abrupt("return",a.data);case 13:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),w=function(e){return e.reduce((function(e,t){var n=t.proposal.choices[t.choice-1];return Object(o.a)(Object(o.a)({},e),{},Object(r.a)({},n,e[n]?[].concat(Object(c.a)(e[n]),[t]):[t]))}),{})},k=function(e){return e.reduce((function(e,t){var n,r=new b.a(null===(n=t.metadata)||void 0===n?void 0:n.votingPower);return e.plus(r)}),d.d)}},781:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"e",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"f",(function(){return i}));var r=10,c="0x6eaf1b33b8672c5dc40aB8f4bA3A0111723126c7",o="https://gateway.ipfs.io/ipfs",a="0.1.3",s="cake.eth",i=10},812:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return i}));var r=n(37),c=function(){var e=Object(r.c)((function(e){return e.voting.proposals}));return Object.values(e)},o=function(e){return Object(r.c)((function(t){return t.voting.proposals[e]}))},a=function(e){var t=Object(r.c)((function(t){return t.voting.votes[e]}));return t?t.filter((function(e){return!0!==e._inValid})):[]},s=function(){return Object(r.c)((function(e){return e.voting.voteLoadingStatus}))},i=function(){return Object(r.c)((function(e){return e.voting.proposalLoadingStatus}))}},813:function(e,t,n){var r=n(471),c=n(844),o=n(845),a=4294967295,s=Math.min;e.exports=function(e,t){if((e=o(e))<1||e>9007199254740991)return[];var n=a,i=s(e,a);t=c(t),e-=a;for(var u=r(i,t);++n<e;)t(n);return u}},824:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return j}));var r=n(9),c=n(55),o=(n(0),n(183)),a=n(65),s=n(1),i=["proposalState"],u=["isCoreProposal"],b=function(e){var t=e.proposalState,n=Object(c.a)(e,i);return t===a.d.ACTIVE?Object(s.jsx)(o.h,Object(r.a)({},n)):t===a.d.PENDING?Object(s.jsx)(o.g,Object(r.a)({},n)):Object(s.jsx)(o.a,Object(r.a)({},n))},j=function(e){var t=e.isCoreProposal,n=Object(c.a)(e,u);return t?Object(s.jsx)(o.d,Object(r.a)({},n)):Object(s.jsx)(o.b,Object(r.a)({},n))}},843:function(e,t,n){"use strict";var r,c=n(11),o=n(87),a=n(7),s=Object(a.e)(o.a)(r||(r=Object(c.a)(["\n  color: ",";\n"])),(function(e){return e.theme.colors.primaryBright}));t.a=s},844:function(e,t,n){var r=n(167);e.exports=function(e){return"function"==typeof e?e:r}},845:function(e,t,n){var r=n(472);e.exports=function(e){var t=r(e),n=t%1;return t===t?n?t-n:t:0}}}]);
//# sourceMappingURL=10.1743c004.chunk.js.map