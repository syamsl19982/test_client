(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[34],{1107:function(e,t,n){"use strict";n.r(t);var a=n(22),r=n(30),c=n(1),s=n(174),i=n(51),u=n(39),o=n(184),l=n(260),d=n(7);t.default=function(e){var t=e.history,n=e.match,b=Object(u.c)((function(e){return Object(r.a)({},e)})).user,h=Object(c.useState)(""),m=Object(a.a)(h,2),j=m[0],p=m[1],f=Object(c.useState)(!1),x=Object(a.a)(f,2),O=x[0],v=x[1];Object(c.useEffect)((function(){g()}),[]);var g=function(){return Object(o.c)(n.params.slug).then((function(e){return p(e.data.name)}))};return Object(d.jsx)("div",{className:"container-fluid mt-5",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-2",children:Object(d.jsx)(s.a,{})}),Object(d.jsxs)("div",{className:"col-md-10",children:[O?Object(d.jsx)("h4",{className:"text-danger",children:"Loading..."}):Object(d.jsx)("h4",{children:"Update category"}),Object(d.jsx)(l.a,{handleSubmit:function(e){v(!0),Object(o.f)(n.params.slug,{name:j},b.token).then((function(e){console.log(e),v(!1),p(""),i.b.success("".concat(e.data.name," is updated")),t.push("/admin/category")})).catch((function(e){v(!1),400===e.response.status&&i.b.error(e.response.data)}))},name:j,setName:p}),Object(d.jsx)("hr",{})]})]})})}},174:function(e,t,n){"use strict";n(1);var a=n(44),r=n(7);t.a=function(){return Object(r.jsx)("nav",{children:Object(r.jsxs)("ul",{className:"nav flex-column",children:[Object(r.jsx)("li",{className:"nav-item btn btn-raised grad",children:Object(r.jsx)(a.b,{to:"/admin/dashboard",className:"nav-link text-white shaw",children:"Dashboard"})}),Object(r.jsx)("li",{className:"nav-item btn btn-raised grad",children:Object(r.jsx)(a.b,{to:"/admin/order-management",className:"nav-link text-white shaw",children:"Order Management"})}),Object(r.jsx)("li",{className:"nav-item btn btn-raised grad",children:Object(r.jsx)(a.b,{to:"/admin/user-management",className:"nav-link text-white shaw",children:"User Management"})}),Object(r.jsx)("li",{className:"nav-item btn btn-raised grad",children:Object(r.jsx)(a.b,{to:"/admin/products",className:"nav-link text-white shaw",children:"Product Management"})}),Object(r.jsx)("li",{className:"nav-item btn btn-raised grad",children:Object(r.jsx)(a.b,{to:"/admin/category",className:"nav-link text-white shaw ",children:"Category Management"})}),Object(r.jsx)("li",{className:"nav-item btn btn-raised grad",children:Object(r.jsx)(a.b,{to:"/admin/offer-management",className:"nav-link text-white shaw",children:"Offer Management"})}),Object(r.jsx)("li",{className:"nav-item btn btn-raised grad",children:Object(r.jsx)(a.b,{to:"/admin/sales",className:"nav-link text-white shaw",children:"Sales"})}),Object(r.jsx)("li",{className:"nav-item btn btn-raised grad",children:Object(r.jsx)(a.b,{to:"/admin/coupon",className:"nav-link text-white shaw",children:"Coupon"})})]})})}},184:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return o})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return d})),n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return h}));var a=n(0),r=n.n(a),c=n(3),s=n(38),i=n.n(s),u=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("".concat("http://localhost:8000/api","/categories"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("".concat("http://localhost:8000/api","/category/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.delete("".concat("http://localhost:8000/api","/category/").concat(t),{headers:{authtoken:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(r.a.mark((function e(t,n,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.put("".concat("http://localhost:8000/api","/category/").concat(t),n,{headers:{authtoken:a}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),b=function(){var e=Object(c.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("".concat("http://localhost:8000/api","/category"),t,{headers:{authtoken:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("".concat("http://localhost:8000/api","/category/subs/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},260:function(e,t,n){"use strict";n(1);var a=n(7);t.a=function(e){var t=e.handleSubmit,n=e.name,r=e.setName;return Object(a.jsx)("form",{children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Name"}),Object(a.jsx)("input",{id:"cat-name",type:"text",className:"form-control",onChange:function(e){return r(e.target.value)},value:n,autoFocus:!0}),Object(a.jsx)("span",{id:"errName",className:"text-danger"}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{className:"btn btn-raised btn-info",onClick:function(e){e.preventDefault();var n=document.getElementById("cat-name"),a=!1;""===n.value?(document.getElementById("errName").innerText="This field cannot be empty!",a=!1):n.value.length<4?(document.getElementById("errName").innerText="Name should have atleast 4 characters.",a=!1):(document.getElementById("errName").style.display="none",a=!0),a&&t()},children:"SAVE"})]})})}}}]);
//# sourceMappingURL=34.095915f4.chunk.js.map