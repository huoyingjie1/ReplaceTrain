<template>
    <div>
        <el-button type="primary" @click="Submit">我的订单</el-button>
        <el-button type="primary" @click="isSubmitOrder">已提交订单</el-button>
        <el-button type="primary" @click="EndOrder">已完成订单</el-button>
        <my-get-game :tableData="tableData" :tableLabel="tableLabel" :isShow="isShow"
                     @Delgetorder="Delgetorder" @OrderToAdmin="OrderToAdmin"></my-get-game>
    </div>
  </template>
  <script>
      import MyGetGame from '../../src/components/MyGetGame.vue'
      export default{
          name:'mygetgame',
          components:{
            MyGetGame
        },
          data(){
              return{
                isShow:true,
                operateForm:{
                    gameid:'',
                    gamename:'',
                    content:'',
                    completetime:'',
                    grade:'',
                    money:'',
                    system:'',
                    sendorder:'',
                    getorder:'',
                    orderusername:'',
                    orderpassword:'',
                },
                tableData:[],
                tableLabel:[
                    {
                        prop:"gameid",
                        label:"订单编号"
                    },
                    {
                        prop:"gamename",
                        label:"游戏名称"
                    },
                    {
                        prop:"content",
                        label:"订单内容"
                    },
                    {
                        prop:"completetime",
                        label:"订单时间"
                    },
                    {
                        prop:"grade",
                        label:"代练等级"
                    },
                    {
                        prop:"money",
                        label:"价格"
                    },
                    {
                        prop:"systems",
                        label:"系统",
                    },
                    {
                        prop:"sendorder",
                        label:"发单人"
                    },
                    {
                        prop:"getorder",
                        label:"接单人"
                    },
                    {
                        prop:"orderusername",
                        label:"游戏账号"
                    },
                    {
                        prop:"orderpassword",
                        label:"游戏密码",
                    },
                ],
              }
          },
          methods:{
            Submit(){
                var getorder= this.$store.state.user.token
                this.$http.post('http://127.0.0.1:3000/api/selectMyGet',{getorder}).then(res=>{
                    console.log('查找我的接单',res)
                    this.tableData = res.data
                    this.isShow=true
                })
            },
            isSubmitOrder(){
                var getorder= this.$store.state.user.token
                this.$http.post('http://127.0.0.1:3000/api/selectMyGetSubmit',{getorder}).then(res=>{
                    console.log('查找已提交订单',res)
                    this.tableData = res.data
                    this.isShow=false
                })
            },
            EndOrder(){
                var getorder= this.$store.state.user.token
                this.$http.post('http://127.0.0.1:3000/api/selectMyGetEnd',{getorder}).then(res=>{
                    console.log('查找已完成订单',res)
                    this.tableData = res.data
                    this.isShow=false
                }) 
            },
            Delgetorder(gameid){
                this.$confirm("订单完成失败将扣除部分定金，是否继续？","提示",{
                    confirmButtonText:"确认",
                    cancelButtonText:"取消",
                    type:"warning"
                }).then(()=>{
                    this.$http.post('http://127.0.0.1:3000/api/delgetorder',{gameid}).then(()=>{
                        this.$message({
                            type:'success',
                            message:'删除成功'
                        })
                        console.log('删除订单');
                        this.Submit()
                    })
                })
            },
            OrderToAdmin(gameid){
                this.$confirm("是否提交订单？","提示",{
                    confirmButtonText:"确认",
                    cancelButtonText:"取消",
                    type:"warning"
                }).then(()=>{
                    this.$http.post('http://127.0.0.1:3000/api/OrderToAdmin',{gameid}).then(()=>{
                        this.$message({
                            type:'success',
                            message:'提交成功，正在审核中...'
                        })
                        console.log('提交订单');
                        this.Submit()
                    })
                })
            },
          },
          mounted:function () {   //自动触发写入的函数
            this.Submit();
        }
      }
  </script>
  <style lang="less" scoped>
      .el-button{
          margin-top: 10px;
      }
      
  </style>