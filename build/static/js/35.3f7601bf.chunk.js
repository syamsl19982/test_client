(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[35],{1101:function(t,e,n){"use strict";n.r(e);var r=n(30),a=n(22),c=n(1),s=n(252),u=n(201),i=n(39),o=n(44),p=n(281),d=n(7);e.default=function(){var t=Object(c.useState)([]),e=Object(a.a)(t,2),n=e[0],f=e[1],h=Object(i.c)((function(t){return Object(r.a)({},t)})).user;Object(c.useEffect)((function(){l()}),[]);var l=function(){return Object(u.n)(h.token).then((function(t){f(t.data.wishlist)}))};return Object(d.jsx)("div",{className:"container-fluid mt-5",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-2",children:Object(d.jsx)(s.a,{})}),Object(d.jsxs)("div",{className:"col-md-10",children:[Object(d.jsx)("h2",{className:"text-secondary text-center mt-4 shaw mb-4",children:Object(d.jsx)("b",{children:"Wishlist"})}),n.map((function(t){return Object(d.jsxs)("div",{className:" col alert grad p-4 ",children:[Object(d.jsx)(o.b,{to:"/product/".concat(t.slug),className:"text-secondary textlg",children:t.title}),Object(d.jsx)("span",{onClick:function(){return e=t._id,Object(u.o)(e,h.token).then((function(t){l()}));var e},className:"btn btn-lg float-right d-flex align-items-center",children:Object(d.jsx)(p.a,{className:"text-danger"})})]},t._id)}))]})]})})}},201:function(t,e,n){"use strict";n.d(e,"p",(function(){return i})),n.d(e,"k",(function(){return o})),n.d(e,"j",(function(){return p})),n.d(e,"c",(function(){return d})),n.d(e,"f",(function(){return f})),n.d(e,"m",(function(){return h})),n.d(e,"n",(function(){return l})),n.d(e,"o",(function(){return b})),n.d(e,"a",(function(){return j})),n.d(e,"e",(function(){return v})),n.d(e,"g",(function(){return x})),n.d(e,"b",(function(){return m})),n.d(e,"l",(function(){return w})),n.d(e,"i",(function(){return O})),n.d(e,"h",(function(){return k})),n.d(e,"d",(function(){return y}));var r=n(0),a=n.n(r),c=n(3),s=n(38),u=n.n(s),i=function(){var t=Object(c.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.post("".concat("/api","/user/cart"),{cart:e},{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),o=function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("".concat("/api","/user/cart"),{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.put("".concat("/api","/user/cart"),{},{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(c.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.post("".concat("/api","/user/cart/coupon"),{coupon:n},{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),f=function(){var t=Object(c.a)(a.a.mark((function t(e,n,r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.post("".concat("/api","/user/order"),{stripeResponse:e,deliverAddress:r},{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),h=function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("".concat("/api","/user/orders "),{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("".concat("/api","/user/wishlist "),{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=Object(c.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.put("".concat("/api","/user/wishlist/").concat(e," "),{},{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),j=function(){var t=Object(c.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.post("".concat("/api","/user/wishlist "),{productId:e},{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),v=function(){var t=Object(c.a)(a.a.mark((function t(e,n,r,c){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.post("".concat("/api","/user/cash-order"),{couponApplied:r,COD:n,deliverAddress:c},{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r,a){return t.apply(this,arguments)}}(),x=function(){var t=Object(c.a)(a.a.mark((function t(e,n,r,c){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.post("".concat("/api","/user/paypal-order"),{couponApplied:r,paymentId:n,deliverAddress:c},{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r,a){return t.apply(this,arguments)}}(),m=function(){var t=Object(c.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.post("".concat("/api","/user/imageupload"),{image:n},{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),w=function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("".concat("/api","/user/details"),{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(){var t=Object(c.a)(a.a.mark((function t(e,n,r,c){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.post("".concat("/api","/user/details"),{name:n,mobile:r,address:c},{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r,a){return t.apply(this,arguments)}}(),k=function(){var t=Object(c.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.post("".concat("/api","/user/delete-address"),{id:n},{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),y=function(){var t=Object(c.a)(a.a.mark((function t(e,n,r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.put("".concat("/api","/user/order-status"),{orderId:e,orderStatus:n},{headers:{authtoken:r}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},252:function(t,e,n){"use strict";n(1);var r=n(44),a=n(7);e.a=function(){return Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{className:"nav flex-column",children:[Object(a.jsx)("li",{className:"nav-item btn btn-raised grad",children:Object(a.jsx)(r.b,{to:"/user/history",className:"nav-link text-white shaw",children:"History"})}),Object(a.jsx)("li",{className:"nav-item btn btn-raised grad",children:Object(a.jsx)(r.b,{to:"/user/profile",className:"nav-link text-white shaw",children:"User Profile"})}),Object(a.jsx)("li",{className:"nav-item btn btn-raised grad",children:Object(a.jsx)(r.b,{to:"/user/password",className:"nav-link text-white shaw",children:"Password"})}),Object(a.jsx)("li",{className:"nav-item btn btn-raised grad",children:Object(a.jsx)(r.b,{to:"/user/wishlist",className:"nav-link text-white shaw",children:"Wishlist"})})]})})}},281:function(t,e,n){"use strict";var r=n(43),a=n(1),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},s=n(147),u=function(t,e){return a.createElement(s.a,Object(r.a)(Object(r.a)({},t),{},{ref:e,icon:c}))};u.displayName="DeleteOutlined";e.a=a.forwardRef(u)}}]);
//# sourceMappingURL=35.3f7601bf.chunk.js.map