webpackJsonp([3],{"32Mf":function(t,e,n){e=t.exports=n("UTlt")(!1),e.push([t.i,"\n.logo{\n  margin-top: 40px;\n  text-align: center;\n}\n.logo img{\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  box-shadow: 0 0 5px #f4a460;\n}\n.logo h2{\n  margin-top: 20px;\n  color: #333\n}\n\n",""])},"7Otq":function(t,e,n){t.exports=n.p+"static/img/logo.77ff6be.png"},vCFx:function(t,e,n){var o=n("32Mf");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n("FIqI")("77271cbc",o,!0,{})},xJsL:function(t,e,n){"use strict";function o(t){n("vCFx")}Object.defineProperty(e,"__esModule",{value:!0});var a=n("2cIp"),s={data:function(){return{required:!0,username:"",password:""}},methods:{doLogin:function(){var t=this;this.$vux.loading.show({text:"请稍等"}),Object(a.e)(this.username,this.password).then(function(e){200===e.status&&(t.$vux.loading.hide(),0===e.data.code?(t.$store.commit("setLogin",{isLogin:!0}),t.$store.commit("setAdminInfo",e.data.userInfo),t.$router.push({name:"Manange"})):(t.$vux.alert.show({title:"错误信息提示",content:""+e.data.message}),console.log(e)))}).catch(function(e){t.$vux.loading.show({text:"登录超时，请检查网络连接"})})}},created:function(){var t=this;Object(a.h)().then(function(e){console.log(e),0===e.data.code&&(t.$store.commit("setLogin",{isLogin:!0}),t.$store.commit("setAdminInfo",{username:e.data.username}),t.$router.push({name:"Manange"}))}).catch(function(t){})}},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("XHeader",{attrs:{title:"小宝管理系统","left-options":{showBack:!1}}}),t._v(" "),t._m(0),t._v(" "),n("group",[n("x-input",{attrs:{required:"required",placeholder:"请输入用户名"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}},[n("icon",{staticStyle:{"padding-right":"10px",color:"#a9a9a9"},attrs:{slot:"label",name:"user"},slot:"label"})],1),t._v(" "),n("x-input",{attrs:{type:"password",required:"required",placeholder:"请输入密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}},[n("icon",{staticStyle:{"padding-right":"10px",color:"#a9a9a9"},attrs:{slot:"label",name:"lock"},slot:"label"})],1)],1),t._v(" "),n("x-button",{staticStyle:{"margin-top":"20px"},attrs:{type:"primary",text:"登录"},nativeOn:{click:function(e){return t.doLogin(e)}}})],1)},i=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"logo"},[o("img",{attrs:{src:n("7Otq")}}),t._v(" "),o("h2",[t._v("欢迎登录小宝管理系统")])])}],c={render:r,staticRenderFns:i},l=c,u=n("Z0/y"),d=o,p=u(s,l,!1,d,null,null);e.default=p.exports}});