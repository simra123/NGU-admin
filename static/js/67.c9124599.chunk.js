(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[67],{1170:function(e,r,a){"use strict";a.r(r);var s=a(184),t=a(43),i=(a(1),a(658)),c=a(1353),n=a(1355),l=a(18),o=function(e){return n.b().shape({firstName:n.c().min(2,"First name has to be at least 2 characters").required("First name is required"),lastName:n.c().min(1,"Last name has to be at least 1 character").required("Last name is required"),userName:n.c().min(5,"Username has to be at least 5 characters").required("Username is required"),email:n.c().email("Invalid email address").required("Email is required!"),password:n.c().min(6,"Password has to be at least ".concat(6," characters!")).matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,"Password must contain: numbers, uppercase and lowercase letters\n").required("Password is required"),confirmPassword:n.c().oneOf([e.password],"Passwords must match").required("Password confirmation is required"),accept:n.a().required("* required").test("accept","You have to accept our Terms and Conditions!",(function(e){return!0===e}))})},d=function(e){return e.inner.reduce((function(e,r){return Object(t.a)(Object(t.a)({},e),{},Object(s.a)({},r.path,r.errors[0]))}),{})},m={firstName:"",lastName:"",userName:"",email:"",password:"",confirmPassword:"",accept:!1},u=function(e,r){var a=r.setSubmitting;r.setErrors;setTimeout((function(){alert(JSON.stringify(e,null,2)),a(!1)}),2e3)},j=function(e){!function(e,r){for(var a=document.forms[e],s=0;s<a.length;s++)if(r(a[s].name)){a[s].focus();break}}("simpleForm",(function(r){return Boolean(e[r])}))};r.default=function(){return Object(l.jsxs)(i.j,{children:[Object(l.jsx)(i.n,{children:"Form Validation"}),Object(l.jsxs)(i.k,{children:[Object(l.jsx)("a",{href:"https://github.com/jaredpalmer/formik",target:"_blank",rel:"noreferrer noopener",children:"Formik"})," ",Object(l.jsx)("cite",{children:"Build forms in React, without the tears"})," with",Object(l.jsx)("a",{href:"https://github.com/jquense/yup",target:"_blank",rel:"noreferrer noopener",children:"Yup"})," ",Object(l.jsx)("cite",{children:"Dead simple Object schema validation"}),Object(l.jsx)("hr",{}),Object(l.jsx)(c.a,{initialValues:m,validate:(e=o,function(r){var a=e(r);try{return a.validateSync(r,{abortEarly:!1}),{}}catch(s){return d(s)}}),onSubmit:u,children:function(e){var r=e.values,a=e.errors,s=e.touched,t=(e.status,e.dirty,e.handleChange),c=e.handleBlur,n=e.handleSubmit,o=e.isSubmitting,d=e.isValid,m=e.handleReset,u=e.setTouched;return Object(l.jsxs)(i.vb,{children:[Object(l.jsx)(i.u,{lg:"6",children:Object(l.jsxs)(i.J,{onSubmit:n,noValidate:!0,name:"simpleForm",children:[Object(l.jsxs)(i.K,{children:[Object(l.jsx)(i.bb,{htmlFor:"firstName",children:"First Name"}),Object(l.jsx)(i.R,{type:"text",name:"firstName",id:"firstName",placeholder:"First Name",autoComplete:"given-name",valid:!a.firstName,invalid:s.firstName&&!!a.firstName,autoFocus:!0,required:!0,onChange:t,onBlur:c,value:r.firstName}),Object(l.jsx)(i.Z,{children:a.firstName})]}),Object(l.jsxs)(i.K,{children:[Object(l.jsx)(i.bb,{htmlFor:"lastName",children:"Last Name"}),Object(l.jsx)(i.R,{type:"text",name:"lastName",id:"lastName",placeholder:"Last Name",autoComplete:"family-name",valid:!a.lastName,invalid:s.lastName&&!!a.lastName,required:!0,onChange:t,onBlur:c,value:r.lastName}),Object(l.jsx)(i.Z,{children:a.lastName})]}),Object(l.jsxs)(i.K,{children:[Object(l.jsx)(i.bb,{htmlFor:"userName",children:"User Name"}),Object(l.jsx)(i.R,{type:"text",name:"userName",id:"userName",placeholder:"User Name",autoComplete:"username",valid:!a.userName,invalid:s.userName&&!!a.userName,required:!0,onChange:t,onBlur:c,value:r.userName}),Object(l.jsx)(i.Z,{children:a.userName})]}),Object(l.jsxs)(i.K,{children:[Object(l.jsx)(i.bb,{htmlFor:"email",children:"Email"}),Object(l.jsx)(i.R,{type:"email",name:"email",id:"email",placeholder:"Email",autoComplete:"email",valid:!a.email,invalid:s.email&&!!a.email,required:!0,onChange:t,onBlur:c,value:r.email}),Object(l.jsx)(i.Z,{children:a.email})]}),Object(l.jsxs)(i.vb,{children:[Object(l.jsx)(i.u,{md:6,children:Object(l.jsxs)(i.K,{children:[Object(l.jsx)(i.bb,{htmlFor:"password",children:"Password"}),Object(l.jsx)(i.R,{type:"password",name:"password",id:"password",placeholder:"Password",autoComplete:"new-password",valid:!a.password,invalid:s.password&&!!a.password,required:!0,onChange:t,onBlur:c,value:r.password}),Object(l.jsx)(i.Z,{children:a.password})]})}),Object(l.jsx)(i.u,{md:6,children:Object(l.jsxs)(i.K,{children:[Object(l.jsx)(i.bb,{htmlFor:"confirmPassword",children:"Password"}),Object(l.jsx)(i.R,{type:"password",name:"confirmPassword",id:"confirmPassword",placeholder:"Confirm password",autoComplete:"new-password",valid:!a.confirmPassword,invalid:s.confirmPassword&&!!a.confirmPassword,required:!0,onChange:t,onBlur:c,value:r.confirmPassword}),Object(l.jsx)(i.Z,{children:a.confirmPassword})]})})]}),Object(l.jsxs)(i.K,{variant:"custom-checkbox",className:"pb-3",children:[Object(l.jsx)(i.S,{custom:!0,id:"accept",required:!0,valid:!a.accept,invalid:s.accept&&!!a.accept,onChange:t,onBlur:c}),Object(l.jsx)(i.bb,{variant:"custom-checkbox",htmlFor:"accept",children:"I accept the terms of use"}),Object(l.jsx)(i.Z,{children:a.accept})]}),Object(l.jsxs)(i.K,{children:[Object(l.jsx)(i.f,{type:"submit",color:"primary",className:"mr-1",disabled:o||!d,children:o?"Wait...":"Submit"}),Object(l.jsx)(i.f,{type:"button",color:"success",className:"mr-1",onClick:function(){return function(e,r){e({firstName:!0,lastName:!0,userName:!0,email:!0,password:!0,confirmPassword:!0,accept:!0}),j(r)}(u,a)},disabled:d,children:"Validate"}),Object(l.jsx)(i.f,{type:"reset",color:"danger",className:"mr-1",onClick:m,children:"Reset"})]})]})}),Object(l.jsx)(i.u,{lg:"6",children:Object(l.jsx)(i.j,{color:d?"gradient-info":"gradient-secondary",children:Object(l.jsxs)(i.k,{children:[Object(l.jsxs)("pre",{children:["values: ",JSON.stringify(r,null,2)]}),Object(l.jsxs)("pre",{children:["errors: ",JSON.stringify(a,null,2)]}),Object(l.jsxs)("pre",{children:["touched: ",JSON.stringify(s,null,2)]})]})})})]})}})]})]});var e}}}]);
//# sourceMappingURL=67.c9124599.chunk.js.map