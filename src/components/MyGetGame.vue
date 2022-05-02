<template>
    <div class="my-get-game">
        <el-row>
            <el-col :span="5" v-for="(item) in tableData" :key="item.gameid" :offset="1" style="margin-top: 30px;">
              <el-card :body-style="{ padding: '0px' }">
                <div style="padding: 14px;">
                  <span style="text-align: center;display:block;">订单信息</span>
                  <div class="bottom clearfix">
                      <tr>
                          <td>订单编号:</td>
                          <td>{{item.gameid}}</td>
                      </tr>
                      <tr>
                        <td>游戏名称:</td>
                        <td>{{item.gamename}}</td>
                    </tr>
                    <tr>
                        <td>订单内容:</td>
                        <td>{{item.content}}</td>
                    </tr>
                    <tr>
                      <td>订单时间:</td>
                      <td>{{item.completetime}}</td>
                  </tr>
                    <tr>
                        <td>代练等级:</td>
                        <td>{{item.grade}}</td>
                    </tr>
                    <tr>
                        <td>价格:</td>
                        <td>{{item.money}}元</td>
                    </tr>
                    <tr>
                        <td>系统:</td>
                        <td>{{item.systems}}</td>
                    </tr>
                    <tr>
                      <td>游戏账号:</td>
                      <td>{{item.orderusername}}</td>
                  </tr>
                  <tr>
                      <td>游戏密码:</td>
                      <td>{{item.orderpassword}}</td>
                  </tr>
                    <el-button style="float: right;" type="success" class="button" @click="OrderToAdmin(item.gameid)" v-show="isShow">提交</el-button>
                    <el-button style="float: left;" type="danger" class="button" @click="Delgetorder(item.gameid)" v-show="isShow">取消</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
    </div>
  </template>
  <script>
      export default{
          name:'MyGetGame',
          props:{
            tableData:Array,
            tableLabel:Array,
            isShow:Boolean,
          },
          data(){
              return{
              }
          },
          methods:{
            Delgetorder(gameid){
                this.$emit('Delgetorder',gameid)
            },
            OrderToAdmin(gameid){
              this.$emit('OrderToAdmin',gameid)
            }
          }
      }
  </script>
  <style lang="less" scoped>
      .my-get-game{
          height: calc(100%-62px);
          background-color: #fff;
          position: relative;
      }
      tr td:nth-child(2){
          text-align: center;
          margin-left: 20px;
          display:block;
      }
      button {
          padding:5px;
          margin-bottom: 10px;
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
      h3{
          text-align: center;
      }
  </style>