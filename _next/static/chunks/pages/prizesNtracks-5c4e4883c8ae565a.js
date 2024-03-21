(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[870],{1063:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/prizesNtracks",function(){return r(9851)}])},9228:function(e,t,r){"use strict";r.d(t,{P:function(){return N}});var a=r(5893),n=r(512),o=r(7294),i=r(8565),s=r(7045),l=r(9429),c=r(3637),d=r(7187),m=r(987),p=r(9581),u=r(7731),h=r(3362),v={root:"m-9814e45f"};let g={zIndex:(0,s.w)("modal")},f=(0,c.Z)((e,{gradient:t,color:r,backgroundOpacity:a,blur:n,radius:o,zIndex:s})=>({root:{"--overlay-bg":t||(void 0!==r||void 0!==a)&&(0,d.m)(r||"#000",a??.6)||void 0,"--overlay-filter":n?`blur(${(0,i.h)(n)})`:void 0,"--overlay-radius":void 0===o?void 0:(0,l.H5)(o),"--overlay-z-index":s?.toString()}})),y=(0,h.b)((e,t)=>{let r=(0,m.w)("Overlay",g,e),{classNames:a,className:n,style:i,styles:s,unstyled:l,vars:c,fixed:d,center:h,children:y,radius:x,zIndex:b,gradient:w,blur:_,color:k,backgroundOpacity:j,mod:N,...z}=r,E=(0,p.y)({name:"Overlay",props:r,classes:v,className:n,style:i,classNames:a,styles:s,unstyled:l,vars:c,varsResolver:f});return o.createElement(u.x,{ref:t,...E("root"),mod:[{center:h,fixed:d},N],...z},y)});y.classes=v,y.displayName="@mantine/core/Overlay";var x=r(8008),b=r(3078),w=r(4410),_=r(4920),k=r(4139),j=r.n(k);function N(){return(0,a.jsxs)("div",{className:j().wrapper,children:[(0,a.jsx)(y,{color:"#000",opacity:.65,zIndex:1}),(0,a.jsxs)("div",{className:j().inner,children:[(0,a.jsx)(x.D,{className:j().title,children:"NeurIPS 2024 LLM Privacy Challenge"}),(0,a.jsx)(b.W,{size:640,children:(0,a.jsx)(w.x,{size:"lg",className:j().description,children:"In the AI era, Large Language Models (LLMs) drive many applications, yet their use of extensive data poses privacy risks. This competition seeks to pinpoint these risks across LLM stages and develop strategies for preserving privacy."})}),(0,a.jsxs)("div",{className:j().controls,children:[(0,a.jsx)(_.z,{className:j().control,variant:"white",size:"lg",children:"Get started"}),(0,a.jsx)(_.z,{className:(0,n.Z)(j().control,j().secondaryControl),size:"lg",children:"Live demo"})]})]})]})}},9851:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ea}});var a=r(5893),n=r(9228),o=r(3078),i=r(8008),s=r(4920),l=r(7294),c=r(3637),d=r(987),m=r(9581),p=r(3491),u=r(7731),h=r(9535);let[v,g]=(0,r(679).R)("Grid component was not found in tree");var f=r(512),y=r(3877),x=r(8626),b=r(5541);function w(e,t){let r=e.map(e=>({value:e,px:e in t.breakpoints?(0,b.px)(t.breakpoints[e]):(0,b.px)(e)}));return r.sort((e,t)=>e.px-t.px),r}function _(e){return"object"==typeof e&&null!==e?"base"in e?e.base:void 0:e}var k=r(5984),j=r(954);let N=(e,t)=>"content"===e?"auto":"auto"===e?"0rem":e?`${100/(t/e)}%`:void 0,z=(e,t,r)=>r||"auto"===e?"100%":"content"===e?"unset":N(e,t),E=(e,t)=>{if(e)return"auto"===e||t?"1":"auto"},L=(e,t)=>0===e?"0":e?`${100/(t/e)}%`:void 0;function M({span:e,order:t,offset:r,selector:a}){let n=(0,k.rZ)(),o=g(),i=void 0===_(e)?12:_(e),s=(0,x.L)({"--col-order":_(t)?.toString(),"--col-flex-grow":E(i,o.grow),"--col-flex-basis":N(i,o.columns),"--col-width":"content"===i?"auto":void 0,"--col-max-width":z(i,o.columns,o.grow),"--col-offset":L(_(r),o.columns)}),c=(0,y.X)(n.breakpoints).reduce((a,n)=>(a[n]||(a[n]={}),"object"==typeof t&&void 0!==t[n]&&(a[n]["--col-order"]=t[n]?.toString()),"object"==typeof e&&void 0!==e[n]&&(a[n]["--col-flex-grow"]=E(e[n],o.grow),a[n]["--col-flex-basis"]=N(e[n],o.columns),a[n]["--col-width"]="content"===e[n]?"auto":void 0,a[n]["--col-max-width"]=z(e[n],o.columns,o.grow)),"object"==typeof r&&void 0!==r[n]&&(a[n]["--col-offset"]=L(r[n],o.columns)),a),{}),d=w((0,y.X)(c),n).filter(e=>(0,y.X)(c[e.value]).length>0).map(e=>({query:`(min-width: ${n.breakpoints[e.value]})`,styles:c[e.value]}));return l.createElement(j.f,{styles:s,media:d,selector:a})}var T={root:"m-410352e9",inner:"m-dee7bd2f",col:"m-96bdd299"};let C={span:12},G=(0,h.d)((e,t)=>{let{classNames:r,className:a,style:n,styles:o,vars:i,span:s,order:c,offset:m,...h}=(0,d.w)("GridCol",C,e),v=g(),y=(0,p.m)();return l.createElement(l.Fragment,null,l.createElement(M,{selector:`.${y}`,span:s,order:c,offset:m}),l.createElement(u.x,{ref:t,...v.getStyles("col",{className:(0,f.Z)(a,y),style:n,classNames:r,styles:o}),...h}))});G.classes=T,G.displayName="@mantine/core/GridCol";var S=r(9429);function I({gutter:e,selector:t}){let r=(0,k.rZ)(),a=(0,x.L)({"--grid-gutter":(0,S.bG)(_(e))}),n=(0,y.X)(r.breakpoints).reduce((t,r)=>(t[r]||(t[r]={}),"object"==typeof e&&void 0!==e[r]&&(t[r]["--grid-gutter"]=(0,S.bG)(e[r])),t),{}),o=w((0,y.X)(n),r).filter(e=>(0,y.X)(n[e.value]).length>0).map(e=>({query:`(min-width: ${r.breakpoints[e.value]})`,styles:n[e.value]}));return l.createElement(j.f,{styles:a,media:o,selector:t})}let P={gutter:"md",grow:!1,columns:12},B=(0,c.Z)((e,{justify:t,align:r,overflow:a})=>({root:{"--grid-justify":t,"--grid-align":r,"--grid-overflow":a}})),$=(0,h.d)((e,t)=>{let r=(0,d.w)("Grid",P,e),{classNames:a,className:n,style:o,styles:i,unstyled:s,vars:c,grow:h,gutter:g,columns:f,align:y,justify:x,children:b,...w}=r,_=(0,m.y)({name:"Grid",classes:T,props:r,className:n,style:o,classNames:a,styles:i,unstyled:s,vars:c,varsResolver:B}),k=(0,p.m)();return l.createElement(v,{value:{getStyles:_,grow:h,columns:f}},l.createElement(I,{selector:`.${k}`,...r}),l.createElement(u.x,{ref:t,..._("root",{className:k}),...w},l.createElement("div",{..._("inner")},b)))});$.classes=T,$.displayName="@mantine/core/Grid",$.Col=G;var Z=r(5592),D=r.n(Z),H=r(8565),W=r(4410);function X({spacing:e,verticalSpacing:t,cols:r,selector:a}){let n=(0,k.rZ)(),o=void 0===t?e:t,i=(0,x.L)({"--sg-spacing-x":(0,S.bG)(_(e)),"--sg-spacing-y":(0,S.bG)(_(o)),"--sg-cols":_(r)?.toString()}),s=(0,y.X)(n.breakpoints).reduce((t,a)=>(t[a]||(t[a]={}),"object"==typeof e&&void 0!==e[a]&&(t[a]["--sg-spacing-x"]=(0,S.bG)(e[a])),"object"==typeof o&&void 0!==o[a]&&(t[a]["--sg-spacing-y"]=(0,S.bG)(o[a])),"object"==typeof r&&void 0!==r[a]&&(t[a]["--sg-cols"]=r[a]),t),{}),c=w((0,y.X)(s),n).filter(e=>(0,y.X)(s[e.value]).length>0).map(e=>({query:`(min-width: ${n.breakpoints[e.value]})`,styles:s[e.value]}));return l.createElement(j.f,{styles:i,media:c,selector:a})}var R={root:"m-2415a157"};let F={cols:1,spacing:"md"},O=(0,h.d)((e,t)=>{let r=(0,d.w)("SimpleGrid",F,e),{classNames:a,className:n,style:o,styles:i,unstyled:s,vars:c,cols:h,verticalSpacing:v,spacing:g,...f}=r,y=(0,m.y)({name:"SimpleGrid",classes:R,props:r,className:n,style:o,classNames:a,styles:i,unstyled:s,vars:c}),x=(0,p.m)();return l.createElement(l.Fragment,null,l.createElement(X,{...r,selector:`.${x}`}),l.createElement(u.x,{ref:t,...y("root",{className:x}),...f}))});O.classes=R,O.displayName="@mantine/core/SimpleGrid";var A=r(3733),K=(0,A.Z)("outline","certificate","IconCertificate",[["path",{d:"M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",key:"svg-0"}],["path",{d:"M13 17.5v4.5l2 -1.5l2 1.5v-4.5",key:"svg-1"}],["path",{d:"M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73",key:"svg-2"}],["path",{d:"M6 9l12 0",key:"svg-3"}],["path",{d:"M6 12l3 0",key:"svg-4"}],["path",{d:"M6 15l2 0",key:"svg-5"}]]),q=(0,A.Z)("outline","coin","IconCoin",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1",key:"svg-1"}],["path",{d:"M12 7v10",key:"svg-2"}]]),V=(0,A.Z)("outline","rocket","IconRocket",[["path",{d:"M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3",key:"svg-0"}],["path",{d:"M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3",key:"svg-1"}],["path",{d:"M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}]]),J=r(2486),Y=r.n(J);function Q(e){let{icon:t,title:r,description:n,className:o,...i}=e;return(0,a.jsxs)("div",{className:Y().feature,...i,children:[(0,a.jsx)("div",{className:Y().overlay}),(0,a.jsxs)("div",{className:Y().content,children:[(0,a.jsx)(t,{style:{width:(0,H.h)(38),height:(0,H.h)(38)},className:Y().icon,stroke:1.5}),(0,a.jsx)(W.x,{fw:700,fz:"lg",mb:"xs",mt:5,className:Y().title,children:r}),(0,a.jsx)(W.x,{c:"dimmed",fz:"sm",children:n})]})]})}let U=[{icon:K,title:"Best Accuracy Award",description:"1st/2en/3rd place for each track with based on the attack/ accuracy."},{icon:q,title:"Minimum Costs Award",description:"Special awards for the approaches with minimum costs in each track."},{icon:V,title:"Best Performance Award",description:"Special awards for the attack/defend approaches that can achieve the best performance when tested with the top-3 defend/attack approaches in the opposite track."}];function ee(){let e=U.map(e=>(0,l.createElement)(Q,{...e,key:e.title}));return(0,a.jsx)(o.W,{mt:30,mb:30,size:"lg",children:(0,a.jsx)(O,{cols:{base:1,sm:3},spacing:50,children:e})})}/**
 * @license @tabler/icons-react v3.1.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var et=(0,A.Z)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]]);let er={red:{title:"Red Team Track",development:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{children:"participants develop solutions based on the provided LLMs and data."}),(0,a.jsx)("p",{children:"We will split the dataset into train/test with different data distributions, domains, and tasks."}),(0,a.jsx)("p",{children:"The participants will only see the train subset."}),(0,a.jsx)("p",{children:"If we study the privacy of finetuned data: we will provide our finetuned LLMs"}),(0,a.jsx)("p",{children:"If we study the privacy of the prompt: we will provide the API access of our deployed LLMs employed with the private system/user prompts (which are hidden from participants)"})]}),test:(0,a.jsx)(a.Fragment,{children:"test the accuracy of the solutions with LLMs on test data."})},blue:{title:"Blue Team Track",development:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("p",{children:"participants develop solutions based on the provided LLMs and data."})}),test:(0,a.jsx)(a.Fragment,{children:"test the accuracy of the solutions with LLMs based on Red-Team’s attack algorithms"})}};function ea(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.P,{}),(0,a.jsxs)(o.W,{size:"lg",className:D().wrapper,children:[(0,a.jsx)(i.D,{order:1,ta:"center",className:D().title,children:"Prizes"}),"We may provide cash award and credit for accessing LLMs for:",(0,a.jsx)(ee,{}),(0,a.jsx)(s.z,{variant:"light",leftSection:(0,a.jsx)(et,{size:14}),size:"xl",radius:"md",mb:"lg",fullWidth:!0,children:"Register the challenge now!"}),(0,a.jsx)(i.D,{order:1,ta:"center",className:D().title,children:"Tracks"}),(0,a.jsxs)($,{children:[(0,a.jsx)($.Col,{span:6,className:D().redTeam,children:(0,a.jsx)(i.D,{children:er.red.title})}),(0,a.jsx)($.Col,{span:6,className:D().blueTeam,children:(0,a.jsx)(i.D,{children:er.blue.title})})]}),(0,a.jsxs)($,{children:[(0,a.jsxs)($.Col,{span:6,className:D().redTeam,children:[(0,a.jsx)(i.D,{order:2,children:"Development Phase"}),er.red.development]}),(0,a.jsxs)($.Col,{span:6,className:D().blueTeam,children:[(0,a.jsx)(i.D,{order:2,children:"Development Phase"}),er.blue.development]})]}),(0,a.jsxs)($,{children:[(0,a.jsxs)($.Col,{span:6,className:D().redTeam,children:[(0,a.jsx)(i.D,{order:2,children:"Test Phase"}),er.red.test]}),(0,a.jsxs)($.Col,{span:6,className:D().blueTeam,children:[(0,a.jsx)(i.D,{order:2,children:"Test Phase"}),er.blue.test]})]})]})]})}},4139:function(e){e.exports={wrapper:"HeroImageBackground_wrapper__BLYTl",inner:"HeroImageBackground_inner__KsyhK",title:"HeroImageBackground_title__7O5UW",highlight:"HeroImageBackground_highlight__w7sSp",description:"HeroImageBackground_description__RSezQ",controls:"HeroImageBackground_controls__VSR8r",control:"HeroImageBackground_control__VikmJ",secondaryControl:"HeroImageBackground_secondaryControl__NVsh5"}},2486:function(e){e.exports={feature:"Prizes_feature__K_l__",overlay:"Prizes_overlay__Zf0DC",content:"Prizes_content__SiFvr",icon:"Prizes_icon__WzhSn",title:"Prizes_title__KGgho"}},5592:function(e){e.exports={wrapper:"prizesNtracks_wrapper__Jrcxe",title:"prizesNtracks_title__4_5ii",phase:"prizesNtracks_phase__Ybpil",redTeam:"prizesNtracks_redTeam__yh7KC",blueTeam:"prizesNtracks_blueTeam__0mgl0"}},4920:function(e,t,r){"use strict";r.d(t,{z:function(){return _}});var a=r(7294),n=r(8565),o=r(9429),i=r(3637),s=r(987),l=r(9581),c=r(7731),d=r(3362),m=r(6556),p=r(427),u=r(1166),h=r(9535),v={root:"m-77c9d27d",inner:"m-80f1301b",label:"m-811560b9",section:"m-a74036a",loader:"m-a25b86ee",group:"m-80d6d844"};let g={orientation:"horizontal"},f=(0,i.Z)((e,{borderWidth:t})=>({group:{"--button-border-width":(0,n.h)(t)}})),y=(0,h.d)((e,t)=>{let r=(0,s.w)("ButtonGroup",g,e),{className:n,style:o,classNames:i,styles:d,unstyled:m,orientation:p,vars:u,borderWidth:h,variant:y,mod:x,...b}=(0,s.w)("ButtonGroup",g,e),w=(0,l.y)({name:"ButtonGroup",props:r,classes:v,className:n,style:o,classNames:i,styles:d,unstyled:m,vars:u,varsResolver:f,rootSelector:"group"});return a.createElement(c.x,{...w("group"),ref:t,variant:y,mod:[{"data-orientation":p},x],role:"group",...b})});y.classes=v,y.displayName="@mantine/core/ButtonGroup";let x={in:{opacity:1,transform:`translate(-50%, calc(-50% + ${(0,n.h)(1)}))`},out:{opacity:0,transform:"translate(-50%, -200%)"},common:{transformOrigin:"center"},transitionProperty:"transform, opacity"},b={},w=(0,i.Z)((e,{radius:t,color:r,gradient:a,variant:n,size:i,justify:s,autoContrast:l})=>{let c=e.variantColorResolver({color:r||e.primaryColor,theme:e,gradient:a,variant:n||"filled",autoContrast:l});return{root:{"--button-justify":s,"--button-height":(0,o.ap)(i,"button-height"),"--button-padding-x":(0,o.ap)(i,"button-padding-x"),"--button-fz":i?.includes("compact")?(0,o.yv)(i.replace("compact-","")):(0,o.yv)(i),"--button-radius":void 0===t?void 0:(0,o.H5)(t),"--button-bg":r||n?c.background:void 0,"--button-hover":r||n?c.hover:void 0,"--button-color":c.color,"--button-bd":r||n?c.border:void 0,"--button-hover-color":r||n?c.hoverColor:void 0}}}),_=(0,d.b)((e,t)=>{let r=(0,s.w)("Button",b,e),{style:n,vars:o,className:i,color:d,disabled:h,children:g,leftSection:f,rightSection:y,fullWidth:_,variant:k,radius:j,loading:N,loaderProps:z,gradient:E,classNames:L,styles:M,unstyled:T,"data-disabled":C,autoContrast:G,mod:S,...I}=r,P=(0,l.y)({name:"Button",props:r,classes:v,className:i,style:n,classNames:L,styles:M,unstyled:T,vars:o,varsResolver:w}),B=!!f,$=!!y;return a.createElement(u.k,{ref:t,...P("root",{active:!h&&!N&&!C}),unstyled:T,variant:k,disabled:h||N,mod:[{disabled:h||C,loading:N,block:_,"with-left-section":B,"with-right-section":$},S],...I},a.createElement(p.u,{mounted:!!N,transition:x,duration:150},e=>a.createElement(c.x,{component:"span",...P("loader",{style:e}),"aria-hidden":!0},a.createElement(m.a,{color:"var(--button-color)",size:"calc(var(--button-height) / 1.8)",...z}))),a.createElement("span",{...P("inner")},f&&a.createElement(c.x,{component:"span",...P("section"),mod:{position:"left"}},f),a.createElement(c.x,{component:"span",mod:{loading:N},...P("label")},g),y&&a.createElement(c.x,{component:"span",...P("section"),mod:{position:"right"}},y)))});_.classes=v,_.displayName="@mantine/core/Button",_.Group=y},8008:function(e,t,r){"use strict";r.d(t,{D:function(){return h}});var a=r(7294),n=r(3637),o=r(987),i=r(9581),s=r(7731),l=r(9535),c=r(8565);let d=["h1","h2","h3","h4","h5","h6"];var m={root:"m-8a5d1357"};let p={order:1},u=(0,n.Z)((e,{order:t,size:r,lineClamp:a,textWrap:n})=>{let o=function(e,t){let r=void 0!==t?t:`h${e}`;return d.includes(r)?{fontSize:`var(--mantine-${r}-font-size)`,fontWeight:`var(--mantine-${r}-font-weight)`,lineHeight:`var(--mantine-${r}-line-height)`}:{fontSize:(0,c.h)(r),fontWeight:`var(--mantine-h${e}-font-weight)`,lineHeight:`var(--mantine-h${e}-line-height)`}}(t,r);return{root:{"--title-fw":o.fontWeight,"--title-lh":o.lineHeight,"--title-fz":o.fontSize,"--title-line-clamp":"number"==typeof a?a.toString():void 0,"--title-text-wrap":n}}}),h=(0,l.d)((e,t)=>{let r=(0,o.w)("Title",p,e),{classNames:n,className:l,style:c,styles:d,unstyled:h,order:v,vars:g,size:f,variant:y,lineClamp:x,textWrap:b,mod:w,..._}=r,k=(0,i.y)({name:"Title",props:r,classes:m,className:l,style:c,classNames:n,styles:d,unstyled:h,vars:g,varsResolver:u});return[1,2,3,4,5,6].includes(v)?a.createElement(s.x,{...k("root"),component:`h${v}`,variant:y,ref:t,mod:[{order:v,"data-line-clamp":"number"==typeof x},w],size:f,..._}):null});h.classes=m,h.displayName="@mantine/core/Title"}},function(e){e.O(0,[888,774,179],function(){return e(e.s=1063)}),_N_E=e.O()}]);