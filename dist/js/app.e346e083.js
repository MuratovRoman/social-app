(function(t){function e(e){for(var o,a,i=e[0],c=e[1],l=e[2],m=0,d=[];m<i.length;m++)a=i[m],n[a]&&d.push(n[a][0]),n[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],o=!0,i=1;i<s.length;i++){var c=s[i];0!==n[c]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=s[0]))}return t}var o={},n={app:0},r=[];function a(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=o,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(s,o,function(e){return t[e]}.bind(null,o));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},1543:function(t,e,s){"use strict";s.r(e),s.d(e,"db",function(){return a}),s.d(e,"auth",function(){return i}),s.d(e,"currentUser",function(){return c}),s.d(e,"usersCollection",function(){return u}),s.d(e,"postsCollection",function(){return m}),s.d(e,"commentsCollection",function(){return d}),s.d(e,"likesCollection",function(){return f});var o=s("8aa5"),n=s.n(o),r=(s("e71f"),{apiKey:"AIzaSyA_kLbBs7IpYbKWMupNvQVae55VPRxjI0Q",authDomain:"social-app-3c849.firebaseapp.com",databaseUrl:"https://social-app-3c849.firebaseio.com",projectId:"social-app-3c849",storageBucket:"",messagingSenderId:"99836641295",appId:"1:99836641295:web:81f6c6e307aacc9a"});n.a.initializeApp(r);var a=n.a.firestore(),i=n.a.auth(),c=i.currentUser,l={};a.settings(l);var u=a.collection("users"),m=a.collection("posts"),d=a.collection("comments"),f=a.collection("likes")},"2b95":function(t,e,s){},4678:function(t,e,s){var o={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=r(t);return s(e)}function r(t){var e=o[t];if(!(e+1)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e}n.keys=function(){return Object.keys(o)},n.resolve=r,t.exports=n,n.id="4678"},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var o=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[t.currentUser?s("Navigation"):t._e(),s("router-view")],1)},r=[],a=(s("8e6e"),s("ac6a"),s("456d"),s("bd86")),i=s("2f62"),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",[s("section",[s("div",{staticClass:"col1"},[s("router-link",{attrs:{to:"dashboard"}},[s("h3",[t._v("Vuegram")])]),s("ul",{staticClass:"inline"},[s("li",[s("router-link",{attrs:{to:"dashboard"}},[t._v("Dashboard")])],1),s("li",[s("router-link",{attrs:{to:"settings"}},[t._v("Settings")])],1),s("li",[s("a",{on:{click:t.logout}},[t._v("Logout")])])])],1)])])},l=[],u=s("1543"),m={methods:{logout:function(){var t=this;u.auth.signOut().then(function(){t.$store.dispatch("clearData"),t.$router.push("/login")}).catch(function(t){console.log(t)})}}},d=m,f=s("2877"),p=Object(f["a"])(d,c,l,!1,null,null,null),h=p.exports;function g(t,e){var s=Object.keys(t);return Object.getOwnPropertySymbols&&s.push.apply(s,Object.getOwnPropertySymbols(t)),e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s}function v(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?g(s,!0).forEach(function(e){Object(a["a"])(t,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):g(s).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}var b={components:{Navigation:h},computed:v({},Object(i["b"])(["currentUser"]))},j=b,w=Object(f["a"])(j,n,r,!1,null,null,null),_=w.exports,P=s("8c4f"),y=s("8aa5"),C=s.n(y),k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"login"}},[s("transition",{attrs:{name:"fade"}},[t.performingRequest?s("div",{staticClass:"loading"},[s("p",[t._v("Loading...")])]):t._e()]),s("section",[t._m(0),s("div",{staticClass:"col2",class:{"signup-form":!t.showLoginForm&&!t.showForgotPassword}},[t.showLoginForm?s("form",{on:{submit:function(t){t.preventDefault()}}},[s("h1",[t._v("Welcome back")]),s("label",{attrs:{for:"email1"}},[t._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.loginForm.email,expression:"loginForm.email",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"your@email.com",id:"email1"},domProps:{value:t.loginForm.email},on:{input:function(e){e.target.composing||t.$set(t.loginForm,"email",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),s("label",{attrs:{for:"password1"}},[t._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.loginForm.password,expression:"loginForm.password",modifiers:{trim:!0}}],attrs:{type:"password",placeholder:"******",id:"password1"},domProps:{value:t.loginForm.password},on:{input:function(e){e.target.composing||t.$set(t.loginForm,"password",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),s("button",{staticClass:"button",on:{click:t.login}},[t._v("Log In")]),s("div",{staticClass:"extras"},[s("a",{on:{click:t.togglePasswordReset}},[t._v("Forgot Password")]),s("a",{on:{click:t.toggleForm}},[t._v("Create an Account")])])]):t._e(),t.showLoginForm||t.showForgotPassword?t._e():s("form",{on:{submit:function(t){t.preventDefault()}}},[s("h1",[t._v("Get Started")]),s("label",{attrs:{for:"name"}},[t._v("Name")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.signupForm.name,expression:"signupForm.name",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"Name",id:"name"},domProps:{value:t.signupForm.name},on:{input:function(e){e.target.composing||t.$set(t.signupForm,"name",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),s("label",{attrs:{for:"title"}},[t._v("Title")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.signupForm.title,expression:"signupForm.title",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"Company",id:"title"},domProps:{value:t.signupForm.title},on:{input:function(e){e.target.composing||t.$set(t.signupForm,"title",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),s("label",{attrs:{for:"email2"}},[t._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.signupForm.email,expression:"signupForm.email",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"your@email.com",id:"email2"},domProps:{value:t.signupForm.email},on:{input:function(e){e.target.composing||t.$set(t.signupForm,"email",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),s("label",{attrs:{for:"password2"}},[t._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.signupForm.password,expression:"signupForm.password",modifiers:{trim:!0}}],attrs:{type:"password",placeholder:"******",id:"password2"},domProps:{value:t.signupForm.password},on:{input:function(e){e.target.composing||t.$set(t.signupForm,"password",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),s("button",{staticClass:"button",on:{click:t.signup}},[t._v("Sign Up")]),s("div",{staticClass:"extras"},[s("a",{on:{click:t.toggleForm}},[t._v("Back to Log In")])])]),t.showForgotPassword?s("form",{staticClass:"password-reset",on:{submit:function(t){t.preventDefault()}}},[t.passwordResetSuccess?s("div",[s("h1",[t._v("Email sent")]),s("p",[t._v("check your email for a link to reset your password")]),s("button",{staticClass:"button",on:{click:t.togglePasswordReset}},[t._v("Back to log In")])]):s("div",[s("h1",[t._v("Reset password")]),s("p",[t._v("We will send you email to reset your password")]),s("label",{attrs:{for:"email3"}},[t._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.passwordForm.email,expression:"passwordForm.email",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"your@email.com",id:"email3"},domProps:{value:t.passwordForm.email},on:{input:function(e){e.target.composing||t.$set(t.passwordForm,"email",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),s("button",{staticClass:"button",on:{click:t.resetPassword}},[t._v("Submit")]),s("div",{staticClass:"extras"},[s("a",{on:{click:t.togglePasswordReset}},[t._v("Back to Log In")])])])]):t._e(),s("transition",{attrs:{name:"fade"}},[""!==t.errorMessage?s("div",{staticClass:"error-msg"},[s("p",[t._v(t._s(t.errorMessage))])]):t._e()])],1)])],1)},O=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col1"},[s("h1",[t._v("Custom social network")]),s("p",[t._v("\n                Welcome to the sample social media web app powered by Vue.js and Firebase.\n            ")])])}],F=(s("7f7f"),s("1543")),U={data:function(){return{loginForm:{email:"",password:""},signupForm:{name:"",title:"",email:"",password:""},passwordForm:{email:""},showLoginForm:!0,showForgotPassword:!1,passwordResetSuccess:!1,performingRequest:!1,errorMessage:""}},methods:{toggleForm:function(){this.errorMessage="",this.showLoginForm=!this.showLoginForm},togglePasswordReset:function(){this.showForgotPassword?(this.errorMessage="",this.showLoginForm=!0,this.showForgotPassword=!1,this.passwordResetSuccess=!1):(this.showLoginForm=!1,this.showForgotPassword=!0)},login:function(){var t=this;this.performingRequest=!0,F.auth.signInWithEmailAndPassword(this.loginForm.email,this.loginForm.password).then(function(e){t.$store.commit("setCurrentUser",e.user),t.$store.dispatch("fetchUserProfile"),t.performingRequest=!1,t.$router.push("/dashboard")}).catch(function(e){console.log(e),t.performingRequest=!1,t.errorMessage=e.message})},signup:function(){var t=this;this.performingRequest=!0,F.auth.createUserWithEmailAndPassword(this.signupForm.email,this.signupForm.password).then(function(e){t.$store.commit("setCurrentUser",e.user),F.usersCollection.doc(e.user.uid).set({name:t.signupForm.name,title:t.signupForm.title}).then(function(){t.$store.dispatch("fetchUserProfile"),t.performingRequest=!1,t.$router.push("/dashboard")}).catch(function(e){console.log(e),t.performingRequest=!1,t.errorMessage=e.message})}).catch(function(e){console.log(e),t.performingRequest=!1,t.errorMessage=e.message})},resetPassword:function(){var t=this;this.performingRequest=!0,F.auth.sendPasswordResetEmail(this.passwordForm.email).then(function(){t.performingRequest=!1,t.passwordResetSuccess=!0,t.passwordForm.email=""}).catch(function(e){console.log(e),t.performingRequest=!1,t.errorMessage=e.message})}}},x=U,$=Object(f["a"])(x,k,O,!1,null,null,null),I=$.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"dashboard"}},[s("section",[s("div",{staticClass:"col1"},[s("div",{staticClass:"profile"},[s("h5",[t._v(t._s(t.userProfile.name))]),s("p",[t._v(t._s(t.userProfile.title))]),s("div",{staticClass:"create-post"},[s("p",[t._v("create a post")]),s("form",{on:{submit:function(t){t.preventDefault()}}},[s("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.post.content,expression:"post.content",modifiers:{trim:!0}}],domProps:{value:t.post.content},on:{input:function(e){e.target.composing||t.$set(t.post,"content",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),s("input",{ref:"postImages",attrs:{type:"file",multiple:""},on:{change:t.previewImages}}),s("button",{staticClass:"button",attrs:{disabled:""==t.post.content},on:{click:t.createPost}},[t._v("post")])])])])]),s("div",{staticClass:"col2"},[s("transition",{attrs:{name:"fade"}},[t.hiddenPosts.length?s("div",{staticClass:"hidden-post",on:{click:t.showNewPosts}},[s("p",[t._v("\n                        Click to show "),s("span",{staticClass:"new-posts"},[t._v(t._s(t.hiddenPosts.length))]),t._v("\n                        new "),t.hiddenPosts.length>1?s("span",[t._v("posts")]):s("span",[t._v("post")])])]):t._e()]),t.posts.length?s("div",t._l(t.posts,function(e){return s("div",{staticClass:"post"},[s("h5",[t._v(t._s(e.userName))]),s("span",[t._v(t._s(t._f("formatDate")(e.createdOn)))]),t._l(e.images,function(o){return e.images.length?s("div",{staticClass:"post__img"},[s("img",{attrs:{src:o,alt:"img"}})]):t._e()}),s("p",[t._v(t._s(t._f("trimLength")(e.content)))]),s("ul",[s("li",[s("a",{on:{click:function(s){return t.openCommentModal(e)}}},[t._v("comments "+t._s(e.comments))])]),s("li",[s("a",{on:{click:function(s){return t.likePost(e.id,e.likes)}}},[t._v("likes "+t._s(e.likes))])]),s("li",[s("a",{on:{click:function(s){return t.viewPost(e)}}},[t._v("view full post")])])])],2)}),0):s("div",[s("p",{staticClass:"no-results"},[t._v("There are currently no posts")])])],1)]),s("transition",{attrs:{name:"fade"}},[t.showCommentModal?s("div",{staticClass:"c-modal"},[s("div",{staticClass:"c-container"},[s("a",{on:{click:t.closeCommentModal}},[t._v("X")]),s("p",[t._v("add a comment")]),s("form",{on:{submit:function(t){t.preventDefault()}}},[s("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.comment.content,expression:"comment.content",modifiers:{trim:!0}}],domProps:{value:t.comment.content},on:{input:function(e){e.target.composing||t.$set(t.comment,"content",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),s("button",{staticClass:"button",attrs:{disabled:""==t.comment.content},on:{click:t.addComment}},[t._v("Add comment")])])])]):t._e()]),s("transition",{attrs:{name:"fade"}},[t.showPostModal?s("div",{staticClass:"p-modal"},[s("div",{staticClass:"p-container"},[s("a",{staticClass:"close",on:{click:t.closePostModal}},[t._v("X")]),s("div",{staticClass:"post"},[s("h5",[t._v(t._s(t.fullPost.userName))]),s("span",[t._v(t._s(t._f("formatDate")(t.fullPost.createdOn)))]),t._l(t.fullPost.images,function(e){return t.fullPost.images.length?s("div",{staticClass:"post__img"},[s("img",{attrs:{src:e,alt:"img"}})]):t._e()}),s("p",[t._v(t._s(t.fullPost.content))]),s("ul",[s("li",[s("a",[t._v("comments "+t._s(t.fullPost.comments))])]),s("li",[s("a",[t._v("likes "+t._s(t.fullPost.likes))])])])],2),s("div",{directives:[{name:"show",rawName:"v-show",value:t.postComments.length,expression:"postComments.length"}],staticClass:"comments"},t._l(t.postComments,function(e){return s("div",{staticClass:"comment"},[s("p",[t._v(t._s(e.userName))]),s("span",[t._v(t._s(t._f("formatDate")(e.createdOn)))]),s("p",[t._v(t._s(e.content))])])}),0)])]):t._e()])],1)},D=[],M=s("c1df"),N=s.n(M);function E(t,e){var s=Object.keys(t);return Object.getOwnPropertySymbols&&s.push.apply(s,Object.getOwnPropertySymbols(t)),e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s}function R(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?E(s,!0).forEach(function(e){Object(a["a"])(t,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):E(s).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}var z=s("1543"),L={data:function(){return{post:{content:"",images:[]},comment:{postId:"",userId:"",content:"",postComments:0},showCommentModal:!1,showPostModal:!1,fullPost:{},postComments:[]}},computed:R({},Object(i["b"])(["userProfile","currentUser","posts","hiddenPosts"])),methods:{createPost:function(){var t=this;z.postsCollection.add({createdOn:new Date,content:this.post.content,images:this.post.images,userId:this.currentUser.uid,userName:this.userProfile.name,comments:0,likes:0}).then(function(e){t.post.content="",t.$refs.postImages.files=null,t.$refs.postImages.value=""}).catch(function(t){console.log(t)})},previewImages:function(){var t=this,e=this.$refs.postImages.files;if(e.length)for(var s in e)e.hasOwnProperty(s)&&function(){var o=new FileReader;o.readAsDataURL(e[s]),o.onload=function(){t.post.images.push(o.result)}}()},showNewPosts:function(){var t=this.hiddenPosts.concat(this.posts);this.$store.commit("setHiddenPosts",null),this.$store.commit("setPosts",t)},openCommentModal:function(t){this.comment.postId=t.id,this.comment.userId=t.userId,this.comment.postComments=t.comments,this.showCommentModal=!0},closeCommentModal:function(){this.comment.postId="",this.comment.userId="",this.comment.content="",this.showCommentModal=!1},addComment:function(){var t=this,e=this.comment.postId,s=this.comment.postComments;z.commentsCollection.add({createdOn:new Date,content:this.comment.content,postId:e,userId:this.currentUser.uid,userName:this.userProfile.name}).then(function(o){z.postsCollection.doc(e).update({comments:s+1}).then(function(){t.closeCommentModal()})}).catch(function(t){console.log(t)})},likePost:function(t,e){var s=this,o="".concat(this.currentUser.uid,"_").concat(t);z.likesCollection.doc(o).get().then(function(n){n.exists||z.likesCollection.doc(o).set({postId:t,userId:s.currentUser.uid}).then(function(){z.postsCollection.doc(t).update({likes:e+1})})}).catch(function(t){console.log(t)})},viewPost:function(t){var e=this;z.commentsCollection.where("postId","==",t.id).get().then(function(s){var o=[];s.forEach(function(t){var e=t.data();e.id=t.id,o.push(e)}),e.postComments=o,e.fullPost=t,e.showPostModal=!0}).catch(function(t){console.log(t)})},closePostModal:function(){this.postComments=[],this.showPostModal=!1}},filters:{formatDate:function(t){if(!t)return"-";var e=t.toDate();return N()(e).fromNow()},trimLength:function(t){return t.length<200?t:"".concat(t.substring(0,200),"...")}}},q=L,A=Object(f["a"])(q,S,D,!1,null,null,null),T=A.exports,B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{attrs:{id:"settings"}},[s("div",{staticClass:"col1"},[s("h3",[t._v("Settings")]),s("p",[t._v("Update your profile")]),s("transition",{attrs:{name:"fade"}},[t.showSuccess?s("p",{staticClass:"success"},[t._v("profile update")]):t._e()]),s("form",{on:{submit:function(t){t.preventDefault()}}},[s("label",{attrs:{for:"name"}},[t._v("Name")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.name,expression:"name",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:t.userProfile.name,id:"name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),s("label",{attrs:{for:"title"}},[t._v("Job Title")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.title,expression:"title",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:t.userProfile.title,id:"title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),s("button",{staticClass:"button",on:{click:t.updateProfile}},[t._v("Update Profile")])])],1)])},W=[],V=s("5118");function G(t,e){var s=Object.keys(t);return Object.getOwnPropertySymbols&&s.push.apply(s,Object.getOwnPropertySymbols(t)),e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s}function H(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?G(s,!0).forEach(function(e){Object(a["a"])(t,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):G(s).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}var J={data:function(){return{name:"",title:"",showSuccess:!1}},computed:H({},Object(i["b"])(["userProfile"])),methods:{updateProfile:function(){var t=this;this.$store.dispatch("updateProfile",{name:""!==this.name?this.name:this.userProfile.name,title:""!==this.title?this.title:this.userProfile.title}),this.name="",this.title="",this.showSuccess=!0,Object(V["setTimeout"])(function(){t.showSuccess=!1},2e3)}}},K=J,Q=Object(f["a"])(K,B,W,!1,null,null,null),X=Q.exports;o["a"].use(P["a"]);var Y=new P["a"]({mode:"history",routes:[{path:"*",redirect:"/dashboard"},{path:"/login",name:"Login",component:I},{path:"/dashboard",name:"Dashboard",component:T,meta:{requiresAuth:!0}},{path:"/settings",name:"Settings",component:X,meta:{requiresAuth:!0}}]});Y.beforeEach(function(t,e,s){var o=t.matched.some(function(t){return t.meta.requiresAuth}),n=C.a.auth().currentUser;o&&!n?s("/login"):s()});var Z=Y,tt=s("1543");o["a"].use(i["a"]),tt.auth.onAuthStateChanged(function(t){t&&(st.commit("setCurrentUser",t),st.dispatch("fetchUserProfile"),tt.usersCollection.doc(t.uid).onSnapshot(function(t){st.commit("setUserProfile",t.data())}),tt.postsCollection.orderBy("createdOn","desc").onSnapshot(function(t){var e;if(t.docs.length&&(e=st.state.currentUser.uid==t.docChanges()[0].doc.data().userId),t.docChanges().length===t.docs.length||"added"!=t.docChanges()[0].type||e){var s=[];t.forEach(function(t){var e=t.data();e.id=t.id,s.push(e)}),st.commit("setPosts",s)}else{var o=t.docChanges()[0].doc.data();o.id=t.docChanges()[0].doc.id,st.commit("setHiddenPosts",o)}}))});var et,st=new i["a"].Store({state:{currentUser:null,userProfile:{},posts:[],hiddenPosts:[]},actions:{fetchUserProfile:function(t){var e=t.commit,s=t.state;tt.usersCollection.doc(s.currentUser.uid).get().then(function(t){e("setUserProfile",t.data())}).catch(function(t){console.log(t)})},clearData:function(t){var e=t.commit;e("setCurrentUser",null),e("setUserProfile",{})},updateProfile:function(t,e){t.commit;var s=t.state,o=e.name,n=e.title;tt.usersCollection.doc(s.currentUser.uid).update({name:o,title:n}).then(function(t){tt.postsCollection.where("userId","==",s.currentUser.uid).get().then(function(t){t.forEach(function(t){tt.postsCollection.doc(t.id).update({userName:o})})}),tt.commentsCollection.where("userId","==",s.currentUser.uid).get().then(function(t){t.forEach(function(t){tt.commentsCollection.doc(t.id).update({userName:o})})})}).catch(function(t){console.log(t)})}},mutations:{setCurrentUser:function(t,e){t.currentUser=e},setUserProfile:function(t,e){t.userProfile=e},setPosts:function(t,e){t.posts=e||[]},setHiddenPosts:function(t,e){e?t.hiddenPosts.some(function(t){return t.id===e.id})||t.hiddenPosts.unshift(e):t.hiddenPosts=[]}}}),ot=(s("2b95"),s("1543"));o["a"].config.productionTip=!1,ot.auth.onAuthStateChanged(function(t){et||(et=new o["a"]({el:"#app",router:Z,store:st,render:function(t){return t(_)}}))})}});
//# sourceMappingURL=app.e346e083.js.map