(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e8218f7c"],{"17f4":function(e,t,o){t=e.exports=o("2350")(!1),t.push([e.i,"\n.manage-header[data-v-22d6a269] {\n  margin-top: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n",""])},"32bb":function(e,t,o){"use strict";o.r(t);var a={name:"CommonForm",props:{formLabel:Array,form:Object,inline:Boolean},data:function(){return{rules:{}}}},l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-form",{ref:"form",attrs:{"lable-width":"100px",model:e.form,inline:e.inline}},[e._l(e.formLabel,(function(t){return o("el-form-item",{key:t.label,attrs:{label:t.label}},["input"===t.type?o("el-input",{attrs:{placeholder:"请输入"+t.label},model:{value:e.form[t.model],callback:function(o){e.$set(e.form,t.model,o)},expression:"form[item.model]"}}):e._e(),e._v(" "),"switch"==t.type?o("el-switch",{model:{value:e.form[t.model],callback:function(o){e.$set(e.form,t.model,o)},expression:"form[item.model]"}}):e._e(),e._v(" "),"date"===t.type?o("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:e.form[t.model],callback:function(o){e.$set(e.form,t.model,o)},expression:"form[item.model]"}}):e._e(),e._v(" "),"select"===t.type?o("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form[t.model],callback:function(o){e.$set(e.form,t.model,o)},expression:"form[item.model]"}},e._l(t.opts,(function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1):e._e()],1)})),e._v(" "),o("el-form-item",[e._t("default")],2)],2)},n=[],i=o("2455"),r=!1,s=null,c=null,p=null,d=Object(i["a"])(a,l,n,r,s,c,p),m=d.exports,f={name:"CommonTable",props:{tableData:Array,tableLabel:Array,config:Object},data:function(){return{}},methods:{handleEdit:function(e){this.$emit("edit",e)},handleDelete:function(e){this.$emit("del",e)}}},u=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"common-table"},[o("el-table",{attrs:{data:e.tableData,height:"90vh",stripe:""}},[e._l(e.tableLabel,(function(t){return o("el-table-column",{key:t.prop,attrs:{"show-overflow-tooltip":"",label:t.label,width:t.width?t.width:125},scopedSlots:e._u([{key:"default",fn:function(a){return[o("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(a.row[t.prop]))])]}}],null,!0)})})),e._v(" "),o("el-table-column",{attrs:{label:"操作","min-width":"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{size:"mini"},on:{click:function(o){return e.handleEdit(t.$index)}}},[e._v("编辑")]),e._v(" "),o("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(o){return e.handleDelete(t.$index)}}},[e._v("删除")])]}}])})],2)],1)},b=[];function h(e){o("d9bf")}var v=!1,y=h,g="data-v-47cc2ada",_=null,w=Object(i["a"])(f,u,b,v,y,g,_),x=w.exports,k={name:"User",components:{CommonForm:m,CommonTable:x},data:function(){return{operateType:"add",isShow:!1,operateFormLabel:[{model:"telephone",label:"电话号码",type:"input"},{model:"password",label:"密码",type:"input"},{model:"name",label:"姓名",type:"input"},{model:"age",label:"年龄",type:"input"},{model:"sex",label:"性别",type:"select",opts:[{label:"男",value:1},{label:"女",value:0}]},{model:"birth",label:"出生日期",type:"date"},{model:"addr",label:"地址",type:"input"},{model:"Permissions",label:"权限",type:"select",opts:[{label:"普通用户",value:0},{label:"管理员",value:1}]}],operateForm:{telephone:"",password:"",name:"",age:"",sex:"",birth:"",addr:"",Permissions:"",money:""},formLabel:[{model:"keyword",label:"",type:"input"}],searchForm:{keyword:""},tableData:[],tableLabel:[{prop:"telephone",label:"账号"},{prop:"password",label:"密码"},{prop:"name",label:"姓名"},{prop:"age",label:"年龄"},{prop:"sex",label:"性别"},{prop:"birth",label:"出生日期",width:150},{prop:"addr",label:"地址",width:200},{prop:"Permissions",label:"权限"},{prop:"money",label:"账户余额"}],config:{page:1,total:30}}},methods:{confirm:function(){var e=this;"add"===this.operateType?this.$http.post("http://127.0.0.1:3000/api/setUser",this.operateForm).then((function(t){console.log("添加用户",t),e.isShow=!1,e.getList()})):this.$http.post("http://127.0.0.1:3000/api/editUser",this.operateForm).then((function(t){console.log("修改用户",t),e.isShow=!1,e.getList()}))},addUser:function(){this.isShow=!0,this.operateType="add",this.operateForm={telephone:"",password:"",name:"",age:"",sex:"",birth:"",addr:"",Permissions:"",money:""}},getList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";console.log("电话号码",t),this.config.loading=!0,""==t?this.$http.get("http://127.0.0.1:3000/api/selectAllUser").then((function(t){console.log("查找全部用户",t),e.tableData=t.data,e.config.loading=!1})):this.$http.post("http://127.0.0.1:3000/api/selectUser",{telephone:t}).then((function(t){console.log("查找用户",t),e.tableData=t.data,e.config.loading=!1}))},editUser:function(e){this.isShow=!0,this.operateType="edit",this.operateForm=this.tableData[e]},delUser:function(e){var t=this;this.$confirm("此操作将永久删除该用户，是否继续？","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then((function(){t.$http.post("http://127.0.0.1:3000/api/delUser",t.tableData[e]).then((function(){t.$message({type:"success",message:"删除成功"}),console.log("删除用户"),t.getList()}))}))}},mounted:function(){this.getList()}},L=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"manage"},[o("el-dialog",{attrs:{title:"add"===e.operateType?"新增用户":"更新用户",visible:e.isShow},on:{"update:visible":function(t){e.isShow=t}}},[o("common-form",{ref:"form",attrs:{formLabel:e.operateFormLabel,form:e.operateForm,inline:!0}}),e._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.isShow=!1}}},[e._v("取消")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:e.confirm}},[e._v("确定")])],1)],1),e._v(" "),o("div",{staticClass:"manage-header"},[o("el-button",{attrs:{type:"primary"},on:{click:e.addUser}},[e._v("+ 新增用户")]),e._v(" "),o("common-form",{ref:"form",attrs:{formLabel:e.formLabel,form:e.searchForm,inline:!0}},[o("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(t){return e.getList(e.searchForm.keyword)}}},[e._v("搜索")])],1)],1),e._v(" "),o("common-table",{attrs:{tableData:e.tableData,tableLabel:e.tableLabel,config:e.config},on:{edit:e.editUser,del:e.delUser}})],1)},$=[];function F(e){o("9baa")}var U=!1,D=F,S="data-v-22d6a269",T=null,j=Object(i["a"])(k,L,$,U,D,S,T);t["default"]=j.exports},"99c4":function(e,t,o){t=e.exports=o("2350")(!1),t.push([e.i,"\n.common-table[data-v-47cc2ada] {\n  height: calc(100%-62px);\n  background-color: #fff;\n  position: relative;\n}\n",""])},"9baa":function(e,t,o){var a=o("17f4");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var l=o("499e").default;l("152eb31d",a,!0,{})},d9bf:function(e,t,o){var a=o("99c4");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var l=o("499e").default;l("a02b053e",a,!0,{})}}]);
//# sourceMappingURL=chunk-e8218f7c.d14903e3.js.map