(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-134ba951"],{"1f0f":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,"\n.my-get-game[data-v-b58b127c] {\n  height: calc(100%-62px);\n  background-color: #fff;\n  position: relative;\n}\ntr td[data-v-b58b127c]:nth-child(2) {\n  text-align: center;\n  margin-left: 20px;\n  display: block;\n}\nbutton[data-v-b58b127c] {\n  padding: 5px;\n  margin-bottom: 10px;\n}\ntd[data-v-b58b127c] {\n  text-align: center;\n}\n.el-dropdown-link[data-v-b58b127c] {\n  cursor: pointer;\n  color: #409EFF;\n}\n.el-icon-arrow-down[data-v-b58b127c] {\n  font-size: 12px;\n}\nh3[data-v-b58b127c] {\n  text-align: center;\n}\n",""])},3844:function(t,e,a){var n=a("1f0f");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=a("499e").default;o("0a593206",n,!0,{})},7693:function(t,e,a){"use strict";a.r(e);var n={name:"MyGetGame",props:{tableData:Array,tableLabel:Array,isShow:Boolean},data:function(){return{}},methods:{Delgetorder:function(t){this.$emit("Delgetorder",t)},OrderToAdmin:function(t){this.$emit("OrderToAdmin",t)}}},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"my-get-game"},[a("el-row",t._l(t.tableData,(function(e){return a("el-col",{key:e.gameid,staticStyle:{"margin-top":"30px"},attrs:{span:5,offset:1}},[a("el-card",{attrs:{"body-style":{padding:"0px"}}},[a("div",{staticStyle:{padding:"14px"}},[a("span",{staticStyle:{"text-align":"center",display:"block"}},[t._v("订单信息")]),t._v(" "),a("div",{staticClass:"bottom clearfix"},[a("tr",[a("td",[t._v("订单编号:")]),t._v(" "),a("td",[t._v(t._s(e.gameid))])]),t._v(" "),a("tr",[a("td",[t._v("游戏名称:")]),t._v(" "),a("td",[t._v(t._s(e.gamename))])]),t._v(" "),a("tr",[a("td",[t._v("订单内容:")]),t._v(" "),a("td",[t._v(t._s(e.content))])]),t._v(" "),a("tr",[a("td",[t._v("订单时间:")]),t._v(" "),a("td",[t._v(t._s(e.completetime))])]),t._v(" "),a("tr",[a("td",[t._v("代练等级:")]),t._v(" "),a("td",[t._v(t._s(e.grade))])]),t._v(" "),a("tr",[a("td",[t._v("价格:")]),t._v(" "),a("td",[t._v(t._s(e.money)+"元")])]),t._v(" "),a("tr",[a("td",[t._v("系统:")]),t._v(" "),a("td",[t._v(t._s(e.systems))])]),t._v(" "),a("tr",[a("td",[t._v("游戏账号:")]),t._v(" "),a("td",[t._v(t._s(e.orderusername))])]),t._v(" "),a("tr",[a("td",[t._v("游戏密码:")]),t._v(" "),a("td",[t._v(t._s(e.orderpassword))])]),t._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"button",staticStyle:{float:"right"},attrs:{type:"success"},on:{click:function(a){return t.OrderToAdmin(e.gameid)}}},[t._v("提交")]),t._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"button",staticStyle:{float:"left"},attrs:{type:"danger"},on:{click:function(a){return t.Delgetorder(e.gameid)}}},[t._v("取消")])],1)])])],1)})),1)],1)},r=[],s=a("2455");function i(t){a("3844")}var l=!1,d=i,c="data-v-b58b127c",p=null,m=Object(s["a"])(n,o,r,l,d,c,p),u=m.exports,v={name:"mygetgame",components:{MyGetGame:u},data:function(){return{isShow:!0,operateForm:{gameid:"",gamename:"",content:"",completetime:"",grade:"",money:"",system:"",sendorder:"",getorder:"",orderusername:"",orderpassword:""},tableData:[],tableLabel:[{prop:"gameid",label:"订单编号"},{prop:"gamename",label:"游戏名称"},{prop:"content",label:"订单内容"},{prop:"completetime",label:"订单时间"},{prop:"grade",label:"代练等级"},{prop:"money",label:"价格"},{prop:"systems",label:"系统"},{prop:"sendorder",label:"发单人"},{prop:"getorder",label:"接单人"},{prop:"orderusername",label:"游戏账号"},{prop:"orderpassword",label:"游戏密码"}]}},methods:{Submit:function(){var t=this,e=this.$store.state.user.token;this.$http.post("http://127.0.0.1:3000/api/selectMyGet",{getorder:e}).then((function(e){console.log("查找我的接单",e),t.tableData=e.data,t.isShow=!0}))},isSubmitOrder:function(){var t=this,e=this.$store.state.user.token;this.$http.post("http://127.0.0.1:3000/api/selectMyGetSubmit",{getorder:e}).then((function(e){console.log("查找已提交订单",e),t.tableData=e.data,t.isShow=!1}))},EndOrder:function(){var t=this,e=this.$store.state.user.token;this.$http.post("http://127.0.0.1:3000/api/selectMyGetEnd",{getorder:e}).then((function(e){console.log("查找已完成订单",e),t.tableData=e.data,t.isShow=!1}))},Delgetorder:function(t){var e=this;this.$confirm("订单完成失败将扣除部分定金，是否继续？","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then((function(){e.$http.post("http://127.0.0.1:3000/api/delgetorder",{gameid:t}).then((function(){e.$message({type:"success",message:"删除成功"}),console.log("删除订单"),e.Submit()}))}))},OrderToAdmin:function(t){var e=this;this.$confirm("是否提交订单？","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then((function(){e.$http.post("http://127.0.0.1:3000/api/OrderToAdmin",{gameid:t}).then((function(){e.$message({type:"success",message:"提交成功，正在审核中..."}),console.log("提交订单"),e.Submit()}))}))}},mounted:function(){this.Submit()}},b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-button",{attrs:{type:"primary"},on:{click:t.Submit}},[t._v("我的订单")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.isSubmitOrder}},[t._v("已提交订单")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.EndOrder}},[t._v("已完成订单")]),t._v(" "),a("my-get-game",{attrs:{tableData:t.tableData,tableLabel:t.tableLabel,isShow:t.isShow},on:{Delgetorder:t.Delgetorder,OrderToAdmin:t.OrderToAdmin}})],1)},_=[];function f(t){a("d414")}var g=!1,h=f,y="data-v-f3b188a2",w=null,x=Object(s["a"])(v,b,_,g,h,y,w);e["default"]=x.exports},abdb:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,"\n.el-button[data-v-f3b188a2] {\n  margin-top: 10px;\n}\n",""])},d414:function(t,e,a){var n=a("abdb");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=a("499e").default;o("7ffeabfa",n,!0,{})}}]);
//# sourceMappingURL=chunk-134ba951.7cd196f1.js.map