(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[45],{1099:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(3),c=a(22),o=a(1),i=a(54),l=a(56),u=a(51),d=a(39),m=a(55),b=a(7);t.default=function(e){var t=e.history,a=Object(o.useState)(""),r=Object(c.a)(a,2),p=r[0],j=r[1],f=Object(o.useState)(""),h=Object(c.a)(f,2),x=h[0],g=h[1],O=Object(d.b)();Object(o.useEffect)((function(){j(window.localStorage.getItem("emailForRegistration"))}),[]);var v=function(){var e=Object(s.a)(n.a.mark((function e(a){var r,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p&&x){e.next=3;break}return u.b.error("Email and Password is required"),e.abrupt("return");case 3:if(!(x.length<6)){e.next=6;break}return u.b.error("Password must be atleast 6 characters long"),e.abrupt("return");case 6:return e.prev=6,e.next=9,Object(l.f)(i.a,p,window.location.href);case 9:if(!e.sent.user.emailVerified){e.next=20;break}return window.localStorage.removeItem("emailForRegistration"),r=i.a.currentUser,e.next=15,Object(l.i)(r,x);case 15:return e.next=17,r.getIdTokenResult();case 17:s=e.sent,Object(m.a)(s.token).then((function(e){O({type:"LOGGED_IN_USER",payload:{name:e.data.name,email:e.data.email,token:s.token,role:e.data.role,_id:e.data._id}})})).catch((function(e){return console.log(e)})),t.push("/");case 20:e.next=25;break;case 22:e.prev=22,e.t0=e.catch(6),u.b.error(e.t0.message);case 25:case"end":return e.stop()}}),e,null,[[6,22]])})));return function(t){return e.apply(this,arguments)}}(),w=function(e){e.preventDefault();var t=document.getElementById("pass").value,a=!1;""==t?(document.getElementById("errPass").innerText="This field must not be empty",a=!1):!t.length>6?(document.getElementById("errPass").innerText="Password must be atleast 6 characters.",a=!1):(document.getElementById("errPass").style.display="none",a=!0),a&&v()};return Object(b.jsx)("div",{className:"container p-5",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col-md-6 offset-md-3 mt-5 ",children:[Object(b.jsx)("h4",{className:"text-center text-secondary shaw",children:"Register Complete"}),Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{type:"email",className:"form-control",value:p,disabled:!0}),Object(b.jsx)("input",{id:"pass",type:"password",className:"form-control grad-input",value:x,onChange:function(e){return g(e.target.value)},placeholder:"Password",autoFocus:!0}),Object(b.jsx)("span",{id:"errPass",className:"text-danger"}),Object(b.jsx)("div",{className:"d-flex justify-content-center",children:Object(b.jsx)("button",{onClick:w,className:"btn btn-raised p-2 grad-button text-white shaw",children:"Complete Registration"})})]})]})})})}}}]);
//# sourceMappingURL=45.4f24f612.chunk.js.map