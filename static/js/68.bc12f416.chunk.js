(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[68],{1210:function(e,t,l){"use strict";l.r(t);var a=l(660),n=l(1),c=l.n(n),i=l(658),o=l(1211),r=l(18),s={lat:37.431489,lng:-122.163719},p=[{lat:37.431489,lng:-122.163719,label:"S",draggable:!1,title:"Stanford",www:"https://www.stanford.edu/"},{lat:37.394694,lng:-122.150333,label:"T",draggable:!1,title:"Tesla",www:"https://www.tesla.com/"},{lat:37.331681,lng:-122.0301,label:"A",draggable:!1,title:"Apple",www:"https://www.apple.com/"},{lat:37.484722,lng:-122.148333,label:"F",draggable:!1,title:"Facebook",www:"https://www.facebook.com/"}],w=function(){return p.map((function(e,t){return Object(r.jsx)(b,{location:e},t.toString())}))},b=function(e){var t=e.location,l=c.a.useState(!1),n=Object(a.a)(l,2),s=n[0],p=n[1];return Object(r.jsx)(o.Marker,{onClick:function(){return p(!s)},position:t,title:t.title,label:t.label,children:s&&Object(r.jsx)(o.InfoWindow,{onCloseClick:function(){return p(!1)},children:Object(r.jsx)(i.mb,{href:t.www,target:"_blank",children:t.title})})})},j=Object(o.withScriptjs)(Object(o.withGoogleMap)((function(){return Object(r.jsx)(o.GoogleMap,{defaultZoom:11,defaultCenter:s,children:Object(r.jsx)(w,{locations:p})})})));t.default=function(){return Object(r.jsxs)(i.j,{children:[Object(r.jsxs)(i.n,{children:["React Google Maps"," "]}),Object(r.jsx)(i.k,{children:Object(r.jsx)(j,{googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=".concat("AIzaSyASyYRBZmULmrmw_P9kgr7_266OhFNinPA"),loadingElement:Object(r.jsx)("div",{style:{height:"100%"}}),containerElement:Object(r.jsx)("div",{style:{height:"400px"}}),mapElement:Object(r.jsx)("div",{style:{height:"100%"}})},"map")})]})}}}]);
//# sourceMappingURL=68.bc12f416.chunk.js.map