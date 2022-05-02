<template>
    <div>
        <el-button type="primary" @click="Audit">待审核订单</el-button>
        <el-button type="primary" @click="isGetOrder">已接订单</el-button>
        <el-button type="primary" @click="notGetOrder">未接订单</el-button>
        <order-status :tableData="tableData" :tableLabel="tableLabel" :isShow="isShow" :isShow2="isShow2"
                      @DelectOrder="DelectOrder" @AuditOrder="AuditOrder"></order-status>
    </div>
  </template>
  <script>
      import OrderStatus from '../../src/components/OrderStatus.vue'
      export default{
          name:'orderstatus',
          components:{
            OrderStatus,
        },
          data(){
              return{
                isShow:true,
                isShow2:true,
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
            isGetOrder(){
                this.$http.get('http://127.0.0.1:3000/api/selectisGetOrder').then(res=>{
                    console.log('查找已接订单',res)
                    this.tableData = res.data
                    this.isShow=false
                    this.isShow2=false
                })
            },
            notGetOrder(){
                this.$http.get('http://127.0.0.1:3000/api/selectnotGetOrder').then(res=>{
                    console.log('查找未接订单',res)
                    this.tableData = res.data
                    this.isShow=false
                    this.isShow2=true
                })
            },
            Audit(){
                this.$http.get('http://127.0.0.1:3000/api/selectAuditOrder').then(res=>{
                    console.log('查找待审核订单',res)
                    this.tableData = res.data
                    this.isShow=true
                    this.isShow2=true
                })  
            },
            DelectOrder(gameid,money,sendorder){
                var telephone = sendorder
                console.log("账号:",telephone,"返还金额:",money)
                this.$confirm("此操作将永久删除此订单，是否继续？","提示",{
                    confirmButtonText:"确认",
                    cancelButtonText:"取消",
                    type:"warning"
                }).then(()=>{
                    this.$http.post('http://127.0.0.1:3000/api/delOrder',{gameid}).then(()=>{
                        this.$message({
                            type:'success',
                            message:'删除成功'
                        })
                        console.log('删除订单');
                        this.Audit();
                    })
                    this.$http.post('http://127.0.0.1:3000/api/returnMoney',{telephone,money}).then(()=>{
                        console.log('返还金额');
                    })
                })
            },
            AuditOrder(gameid,money,getorder){
                var telephone = getorder
                money = Number(money) + Number(money*0.2)
                console.log("账号:",telephone,"返还金额:",money)
                this.$confirm("此操作将审核通过该订单，是否继续？","提示",{
                    confirmButtonText:"确认",
                    cancelButtonText:"取消",
                    type:"warning"
                }).then(()=>{
                    this.$http.post('http://127.0.0.1:3000/api/orderEnd',{gameid}).then(()=>{
                        this.$message({
                            type:'success',
                            message:'审核通过'
                        })
                        console.log('审核通过');
                        this.Audit();
                    })
                    this.$http.post('http://127.0.0.1:3000/api/returnMoney',{telephone,money}).then(()=>{
                        console.log('返还金额');
                    })
                })
            },
          },
          
          mounted:function () {   //自动触发写入的函数
            this.Audit();
        }
      }
  </script>
  <style lang="less" scoped>
      .game-table{
          height: calc(100%-62px);
          background-color: #fff;
          position: relative;
      }
      .el-button{
          margin-top: 20px;
      }
      tr td:nth-child(2){
          text-align: center;
          margin-left: 20px;
          display:block;
      }
      td{
        text-align: center;
      }
      .el-dropdown-link {
          cursor: pointer;
          color: #409EFF;
      }
      .el-icon-arrow-down {
          font-size: 12px;
      }
  </style>