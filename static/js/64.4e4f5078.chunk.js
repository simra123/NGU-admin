(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[64],{1921:function(e,a,t){"use strict";t.r(a);var s=t(15),c=t(0),r=t(81),n=t.n(r),l=t(58),i=t.n(l),o=t(892),d=t(475),b=t(82),j=t(493),m=t(1040),u=t(1083),h=t(1013),O=t(1104),p=t(1060),g=t(1061),x=t(1054),f=t(1122),N=t(1074),v=t(465),y=t(990),T=t(471),C=t(472),M=t(988),w=t(480),P=t(469),k=t(470),z=t(604),E=t(473),R=t(968),D=t(1288),F=t(972),S=t(982),G=t(485),H=t(956),W=t(985),A=t(953),B=t(463),L=(t(736),t(6));a.default=function(){var e=Object(c.useState)(null),a=Object(s.a)(e,2),t=a[0],r=a[1];Object(c.useEffect)((function(){n.a.get("/blog/list/data/detail").then((function(e){return r(e.data)}))}),[]);var l={Quote:"light-info",Fashion:"light-primary",Gaming:"light-danger",Video:"light-warning",Food:"light-success"};return Object(L.jsxs)(c.Fragment,{children:[Object(L.jsx)(v.a,{breadCrumbTitle:"Blog Details",breadCrumbParent:"Pages",breadCrumbParent2:"Blog",breadCrumbActive:"Details"}),Object(L.jsxs)("div",{className:"blog-wrapper",children:[Object(L.jsx)("div",{className:"content-detached content-left",children:Object(L.jsx)("div",{className:"content-body",children:null!==t?Object(L.jsxs)(P.a,{children:[Object(L.jsx)(k.a,{sm:"12",children:Object(L.jsxs)(T.a,{className:"mb-3",children:[Object(L.jsx)(z.a,{src:t.blog.img,className:"img-fluid",top:!0}),Object(L.jsxs)(C.a,{children:[Object(L.jsx)(E.a,{tag:"h4",children:t.blog.title}),Object(L.jsxs)(M.a,{children:[Object(L.jsx)(d.a,{className:"mr-50",img:t.blog.avatar,imgHeight:"24",imgWidth:"24"}),Object(L.jsxs)(M.a,{body:!0,children:[Object(L.jsx)("small",{className:"text-muted mr-25",children:"by"}),Object(L.jsx)("small",{children:Object(L.jsx)("a",{className:"text-body",href:"/",onClick:function(e){return e.preventDefault()},children:t.blog.userFullName})}),Object(L.jsx)("span",{className:"text-muted ml-50 mr-25",children:"|"}),Object(L.jsx)("small",{className:"text-muted",children:t.blog.createdTime})]})]}),Object(L.jsx)("div",{className:"my-1 py-25",children:t.blog.tags.map((function(e,a){return Object(L.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:Object(L.jsx)(y.a,{className:i()({"mr-50":a!==t.blog.tags.length-1}),color:l[e],pill:!0,children:e})},a)}))}),Object(L.jsx)("div",{dangerouslySetInnerHTML:{__html:t.blog.content}}),Object(L.jsxs)(M.a,{children:[Object(L.jsx)(d.a,{img:b.default,className:"mr-2",imgHeight:60,imgWidth:60}),Object(L.jsxs)(M.a,{body:!0,children:[Object(L.jsx)("h6",{className:"font-weight-bolder",children:"Willie Clark"}),Object(L.jsx)(w.a,{className:"mb-0",children:"Based in London, Uncode is a blog by Willie Clark. His posts explore modern design trends through photos and quotes by influential creatives and web designer around the world."})]})]}),Object(L.jsx)("hr",{className:"my-2"}),Object(L.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[Object(L.jsxs)("div",{className:"d-flex align-items-center",children:[Object(L.jsxs)("div",{className:"d-flex align-items-center mr-1",children:[Object(L.jsx)("a",{className:"mr-50",href:"/",onClick:function(e){return e.preventDefault()},children:Object(L.jsx)(u.a,{size:21,className:"text-body align-middle"})}),Object(L.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:Object(L.jsx)("div",{className:"text-body align-middle",children:Object(j.g)(t.blog.comments)})})]}),Object(L.jsxs)("div",{className:"d-flex align-items-cente",children:[Object(L.jsx)("a",{className:"mr-50",href:"/",onClick:function(e){return e.preventDefault()},children:Object(L.jsx)(h.a,{size:21,className:"text-body align-middle"})}),Object(L.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:Object(L.jsx)("div",{className:"text-body align-middle",children:t.blog.bookmarked})})]})]}),Object(L.jsxs)(R.a,{className:"dropdown-icon-wrapper",children:[Object(L.jsx)(D.a,{tag:"span",children:Object(L.jsx)(O.a,{size:21,className:"text-body cursor-pointer"})}),Object(L.jsxs)(F.a,{right:!0,children:[Object(L.jsx)(S.a,{className:"py-50 px-1",children:Object(L.jsx)(p.a,{size:18})}),Object(L.jsx)(S.a,{className:"py-50 px-1",children:Object(L.jsx)(g.a,{size:18})}),Object(L.jsx)(S.a,{className:"py-50 px-1",children:Object(L.jsx)(x.a,{size:18})}),Object(L.jsx)(S.a,{className:"py-50 px-1",children:Object(L.jsx)(f.a,{size:18})}),Object(L.jsx)(S.a,{className:"py-50 px-1",children:Object(L.jsx)(N.a,{size:18})})]})]})]})]})]})}),Object(L.jsxs)(k.a,{sm:"12",children:[Object(L.jsx)("h6",{className:"section-label",children:"Comment"}),t.comments.map((function(e){return Object(L.jsx)(T.a,{className:"mb-3",children:Object(L.jsx)(C.a,{children:Object(L.jsxs)(M.a,{children:[Object(L.jsx)(d.a,{className:"mr-75",img:e.avatar,width:"38",height:"38"}),Object(L.jsxs)(M.a,{body:!0,children:[Object(L.jsx)("h6",{className:"font-weight-bolder mb-25",children:e.userFullName}),Object(L.jsx)(w.a,{children:e.commentedAt}),Object(L.jsx)(w.a,{children:e.commentText}),Object(L.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:Object(L.jsxs)("div",{className:"d-inline-flex align-items-center",children:[Object(L.jsx)(m.a,{size:18,className:"mr-50"}),Object(L.jsx)("span",{children:"Reply"})]})})]})]})})},e.userFullName)}))]}),Object(L.jsxs)(k.a,{sm:"12",children:[Object(L.jsx)("h6",{className:"section-label",children:"Leave a Comment"}),Object(L.jsx)(T.a,{children:Object(L.jsx)(C.a,{children:Object(L.jsx)(G.a,{className:"form",onSubmit:function(e){return e.preventDefault()},children:Object(L.jsxs)(P.a,{children:[Object(L.jsx)(k.a,{sm:"6",children:Object(L.jsx)(H.a,{className:"mb-2",children:Object(L.jsx)(W.a,{placeholder:"Name"})})}),Object(L.jsx)(k.a,{sm:"6",children:Object(L.jsx)(H.a,{className:"mb-2",children:Object(L.jsx)(W.a,{type:"email",placeholder:"Email"})})}),Object(L.jsx)(k.a,{sm:"6",children:Object(L.jsx)(H.a,{className:"mb-2",children:Object(L.jsx)(W.a,{type:"url",placeholder:"Website"})})}),Object(L.jsx)(k.a,{sm:"12",children:Object(L.jsx)(H.a,{className:"mb-2",children:Object(L.jsx)(W.a,{className:"mb-2",type:"textarea",rows:"4",placeholder:"Comment"})})}),Object(L.jsx)(k.a,{sm:"12",children:Object(L.jsx)(A.a,{className:"mb-2",type:"checkbox",id:"exampleCustomCheckbox4",label:"Save my name, email, and website in this browser for the next time I comment.",htmlFor:"exampleCustomCheckbox4"})}),Object(L.jsx)(k.a,{sm:"12",children:Object(L.jsx)(B.a.Ripple,{color:"primary",children:"Post Comment"})})]})})})})]})]}):null})}),Object(L.jsx)(o.a,{})]})]})}},465:function(e,a,t){"use strict";var s=t(466),c=t(1062),r=t(1019),n=t(1083),l=t(1078),i=t(1016),o=t(477),d=t(478),b=t(479),j=t(1288),m=t(972),u=t(982),h=t(6);a.a=function(e){var a=e.breadCrumbTitle,t=e.breadCrumbParent,O=e.breadCrumbParent2,p=e.breadCrumbParent3,g=e.breadCrumbActive;return Object(h.jsxs)("div",{className:"content-header row",children:[Object(h.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(h.jsx)("div",{className:"row breadcrumbs-top",children:Object(h.jsxs)("div",{className:"col-12",children:[a?Object(h.jsx)("h2",{className:"content-header-title float-left mb-0",children:a}):"",Object(h.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(h.jsxs)(o.a,{children:[Object(h.jsx)(d.a,{tag:"li",children:Object(h.jsx)(s.b,{to:"/",children:"Home"})}),Object(h.jsx)(d.a,{tag:"li",className:"text-primary",children:t}),O?Object(h.jsx)(d.a,{tag:"li",className:"text-primary",children:O}):"",p?Object(h.jsx)(d.a,{tag:"li",className:"text-primary",children:p}):"",Object(h.jsx)(d.a,{tag:"li",active:!0,children:g})]})})]})})}),Object(h.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(h.jsx)("div",{className:"form-group breadcrum-right dropdown",children:Object(h.jsxs)(b.a,{children:[Object(h.jsx)(j.a,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle",children:Object(h.jsx)(c.a,{size:14})}),Object(h.jsxs)(m.a,{tag:"ul",right:!0,children:[Object(h.jsxs)(u.a,{tag:s.b,to:"/apps/chat",children:[Object(h.jsx)(r.a,{className:"mr-1",size:14}),Object(h.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(h.jsxs)(u.a,{tag:s.b,to:"/apps/chat",children:[Object(h.jsx)(n.a,{className:"mr-1",size:14}),Object(h.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(h.jsxs)(u.a,{tag:s.b,to:"/apps/email",children:[Object(h.jsx)(l.a,{className:"mr-1",size:14}),Object(h.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(h.jsxs)(u.a,{tag:s.b,to:"/apps/calendar",children:[Object(h.jsx)(i.a,{className:"mr-1",size:14}),Object(h.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},468:function(e,a,t){"use strict";var s=t(14),c=t(0),r=t.n(c),n=t(5),l=t.n(n),i=t(476),o={children:l.a.node},d=function(e){return r.a.createElement(i.a,Object(s.a)({group:!0},e))};d.propTypes=o,a.a=d},469:function(e,a,t){"use strict";var s=t(14),c=t(20),r=t(0),n=t.n(r),l=t(5),i=t.n(l),o=t(58),d=t.n(o),b=t(80),j=i.a.oneOfType([i.a.number,i.a.string]),m={tag:b.tagPropType,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:j,sm:j,md:j,lg:j,xl:j},u={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e){var a=e.className,t=e.cssModule,r=e.noGutters,l=e.tag,i=e.form,o=e.widths,j=Object(c.a)(e,["className","cssModule","noGutters","tag","form","widths"]),m=[];o.forEach((function(a,t){var s=e[a];if(delete j[a],s){var c=!t;m.push(c?"row-cols-"+s:"row-cols-"+a+"-"+s)}}));var u=Object(b.mapToCssModules)(d()(a,r?"no-gutters":null,i?"form-row":"row",m),t);return n.a.createElement(l,Object(s.a)({},j,{className:u}))};h.propTypes=m,h.defaultProps=u,a.a=h},470:function(e,a,t){"use strict";var s=t(14),c=t(20),r=t(0),n=t.n(r),l=t(5),i=t.n(l),o=t(58),d=t.n(o),b=t(80),j=i.a.oneOfType([i.a.number,i.a.string]),m=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:j,offset:j})]),u={tag:b.tagPropType,xs:m,sm:m,md:m,lg:m,xl:m,className:i.a.string,cssModule:i.a.object,widths:i.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},O=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},p=function(e){var a=e.className,t=e.cssModule,r=e.widths,l=e.tag,i=Object(c.a)(e,["className","cssModule","widths","tag"]),o=[];r.forEach((function(a,s){var c=e[a];if(delete i[a],c||""===c){var r=!s;if(Object(b.isObject)(c)){var n,l=r?"-":"-"+a+"-",j=O(r,a,c.size);o.push(Object(b.mapToCssModules)(d()(((n={})[j]=c.size||""===c.size,n["order"+l+c.order]=c.order||0===c.order,n["offset"+l+c.offset]=c.offset||0===c.offset,n)),t))}else{var m=O(r,a,c);o.push(m)}}})),o.length||o.push("col");var j=Object(b.mapToCssModules)(d()(a,o),t);return n.a.createElement(l,Object(s.a)({},i,{className:j}))};p.propTypes=u,p.defaultProps=h,a.a=p},471:function(e,a,t){"use strict";var s=t(14),c=t(20),r=t(0),n=t.n(r),l=t(5),i=t.n(l),o=t(58),d=t.n(o),b=t(80),j={tag:b.tagPropType,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},m=function(e){var a=e.className,t=e.cssModule,r=e.color,l=e.body,i=e.inverse,o=e.outline,j=e.tag,m=e.innerRef,u=Object(c.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),h=Object(b.mapToCssModules)(d()(a,"card",!!i&&"text-white",!!l&&"card-body",!!r&&(o?"border":"bg")+"-"+r),t);return n.a.createElement(j,Object(s.a)({},u,{className:h,ref:m}))};m.propTypes=j,m.defaultProps={tag:"div"},a.a=m},472:function(e,a,t){"use strict";var s=t(14),c=t(20),r=t(0),n=t.n(r),l=t(5),i=t.n(l),o=t(58),d=t.n(o),b=t(80),j={tag:b.tagPropType,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},m=function(e){var a=e.className,t=e.cssModule,r=e.innerRef,l=e.tag,i=Object(c.a)(e,["className","cssModule","innerRef","tag"]),o=Object(b.mapToCssModules)(d()(a,"card-body"),t);return n.a.createElement(l,Object(s.a)({},i,{className:o,ref:r}))};m.propTypes=j,m.defaultProps={tag:"div"},a.a=m},473:function(e,a,t){"use strict";var s=t(14),c=t(20),r=t(0),n=t.n(r),l=t(5),i=t.n(l),o=t(58),d=t.n(o),b=t(80),j={tag:b.tagPropType,className:i.a.string,cssModule:i.a.object},m=function(e){var a=e.className,t=e.cssModule,r=e.tag,l=Object(c.a)(e,["className","cssModule","tag"]),i=Object(b.mapToCssModules)(d()(a,"card-title"),t);return n.a.createElement(r,Object(s.a)({},l,{className:i}))};m.propTypes=j,m.defaultProps={tag:"div"},a.a=m},477:function(e,a,t){"use strict";var s=t(14),c=t(20),r=t(0),n=t.n(r),l=t(5),i=t.n(l),o=t(58),d=t.n(o),b=t(80),j={tag:b.tagPropType,listTag:b.tagPropType,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,children:i.a.node,"aria-label":i.a.string},m=function(e){var a=e.className,t=e.listClassName,r=e.cssModule,l=e.children,i=e.tag,o=e.listTag,j=e["aria-label"],m=Object(c.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),u=Object(b.mapToCssModules)(d()(a),r),h=Object(b.mapToCssModules)(d()("breadcrumb",t),r);return n.a.createElement(i,Object(s.a)({},m,{className:u,"aria-label":j}),n.a.createElement(o,{className:h},l))};m.propTypes=j,m.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=m},478:function(e,a,t){"use strict";var s=t(14),c=t(20),r=t(0),n=t.n(r),l=t(5),i=t.n(l),o=t(58),d=t.n(o),b=t(80),j={tag:b.tagPropType,active:i.a.bool,className:i.a.string,cssModule:i.a.object},m=function(e){var a=e.className,t=e.cssModule,r=e.active,l=e.tag,i=Object(c.a)(e,["className","cssModule","active","tag"]),o=Object(b.mapToCssModules)(d()(a,!!r&&"active","breadcrumb-item"),t);return n.a.createElement(l,Object(s.a)({},i,{className:o,"aria-current":r?"page":void 0}))};m.propTypes=j,m.defaultProps={tag:"li"},a.a=m},479:function(e,a,t){"use strict";t.d(a,"a",(function(){return h}));var s=t(467),c=t(14),r=t(120),n=t(119),l=t(0),i=t.n(l),o=t(5),d=t.n(o),b=t(468),j=t(80);function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}var u=["defaultOpen"],h=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={isOpen:a.defaultOpen||!1},t.toggle=t.toggle.bind(Object(r.a)(t)),t}Object(n.a)(a,e);var t=a.prototype;return t.toggle=function(){this.setState({isOpen:!this.state.isOpen})},t.render=function(){return i.a.createElement(b.a,Object(c.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(j.omit)(this.props,u)))},a}(l.Component);h.propTypes=function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){Object(s.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({defaultOpen:d.a.bool},b.a.propTypes)},480:function(e,a,t){"use strict";var s=t(14),c=t(20),r=t(0),n=t.n(r),l=t(5),i=t.n(l),o=t(58),d=t.n(o),b=t(80),j={tag:b.tagPropType,className:i.a.string,cssModule:i.a.object},m=function(e){var a=e.className,t=e.cssModule,r=e.tag,l=Object(c.a)(e,["className","cssModule","tag"]),i=Object(b.mapToCssModules)(d()(a,"card-text"),t);return n.a.createElement(r,Object(s.a)({},l,{className:i}))};m.propTypes=j,m.defaultProps={tag:"p"},a.a=m},485:function(e,a,t){"use strict";var s=t(14),c=t(20),r=t(120),n=t(119),l=t(0),i=t.n(l),o=t(5),d=t.n(o),b=t(58),j=t.n(b),m=t(80),u={children:d.a.node,inline:d.a.bool,tag:m.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(n.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,n=e.tag,l=e.innerRef,o=Object(c.a)(e,["className","cssModule","inline","tag","innerRef"]),d=Object(m.mapToCssModules)(j()(a,!!r&&"form-inline"),t);return i.a.createElement(n,Object(s.a)({},o,{ref:l,className:d}))},a}(l.Component);h.propTypes=u,h.defaultProps={tag:"form"},a.a=h},604:function(e,a,t){"use strict";var s=t(14),c=t(20),r=t(0),n=t.n(r),l=t(5),i=t.n(l),o=t(58),d=t.n(o),b=t(80),j={tag:b.tagPropType,top:i.a.bool,bottom:i.a.bool,className:i.a.string,cssModule:i.a.object},m=function(e){var a=e.className,t=e.cssModule,r=e.top,l=e.bottom,i=e.tag,o=Object(c.a)(e,["className","cssModule","top","bottom","tag"]),j="card-img";r&&(j="card-img-top"),l&&(j="card-img-bottom");var m=Object(b.mapToCssModules)(d()(a,j),t);return n.a.createElement(i,Object(s.a)({},o,{className:m}))};m.propTypes=j,m.defaultProps={tag:"img"},a.a=m},736:function(e,a,t){},892:function(e,a,t){"use strict";var s=t(15),c=t(0),r=t(81),n=t.n(r),l=t(58),i=t.n(l),o=t(464),d=t(997),b=t(475),j=t(466),m=t(988),u=t(983),h=t(985),O=t(984),p=t(808),g=t(6);a.a=function(){var e=Object(c.useState)(null),a=Object(s.a)(e,2),t=a[0],r=a[1];Object(c.useEffect)((function(){n.a.get("/blog/list/data/sidebar").then((function(e){return r(e.data)}))}),[]);var l={Quote:"light-info",Fashion:"light-primary",Gaming:"light-danger",Video:"light-warning",Food:"light-success"};return Object(g.jsx)("div",{className:"sidebar-detached sidebar-right",children:Object(g.jsx)("div",{className:"sidebar",children:Object(g.jsx)("div",{className:"blog-sidebar right-sidebar my-2 my-lg-0",children:Object(g.jsxs)("div",{className:"right-sidebar-content",children:[Object(g.jsx)("div",{className:"blog-search",children:Object(g.jsxs)(u.a,{className:"input-group-merge",children:[Object(g.jsx)(h.a,{placeholder:"Search here"}),Object(g.jsx)(O.a,{addonType:"append",children:Object(g.jsx)(p.a,{children:Object(g.jsx)(d.a,{size:14})})})]})}),null!==t?Object(g.jsxs)(c.Fragment,{children:[Object(g.jsxs)("div",{className:"blog-recent-posts mt-3",children:[Object(g.jsx)("h6",{className:"section-label",children:"Recent Posts"}),Object(g.jsx)("div",{className:"mt-75",children:t.recentPosts.map((function(e,a){return Object(g.jsxs)(m.a,{className:i()({"mb-2":a!==t.recentPosts.length-1}),children:[Object(g.jsx)(j.b,{className:"mr-2",to:"/pages/blog/detail/".concat(e.id),children:Object(g.jsx)("img",{className:"rounded",src:e.img,alt:e.title,width:"100",height:"70"})}),Object(g.jsxs)(m.a,{body:!0,children:[Object(g.jsx)("h6",{className:"blog-recent-post-title",children:Object(g.jsx)(j.b,{className:"text-body-heading",to:"/pages/blog/detail/".concat(e.id),children:e.title})}),Object(g.jsx)("div",{className:"text-muted mb-0",children:e.createdTime})]})]},a)}))})]}),Object(g.jsxs)("div",{className:"blog-categories mt-3",children:[Object(g.jsx)("h6",{className:"section-label",children:"Categories"}),Object(g.jsx)("div",{className:"mt-1",children:t.categories.map((function(e,a){var s=o[e.icon];return Object(g.jsxs)("div",{className:i()("d-flex justify-content-start align-items-center",{"mb-75":a!==t.categories.length-1}),children:[Object(g.jsx)("a",{className:"mr-75",href:"/",onClick:function(e){return e.preventDefault()},children:Object(g.jsx)(b.a,{className:"rounded",color:l[e.category],icon:Object(g.jsx)(s,{size:15})})}),Object(g.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:Object(g.jsx)("div",{className:"blog-category-title text-body",children:e.category})})]},a)}))})]})]}):null]})})})})}}}]);
//# sourceMappingURL=64.4e4f5078.chunk.js.map