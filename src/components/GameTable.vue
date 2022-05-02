<template>
    <div class="game-table">
        <el-row>
            <div style="height: 30px;">
                <el-dropdown @command="getGameName" style="margin-left: 50px;">
                    <span class="el-dropdown-link">
                      游戏名称<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="王者荣耀">王者荣耀</el-dropdown-item>
                      <el-dropdown-item command="和平精英">和平精英</el-dropdown-item>
                      <el-dropdown-item command="英雄联盟">英雄联盟</el-dropdown-item>
                      <el-dropdown-item command="全部">全部</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                  <span id="lableName" name="lableName"></span>

                  <el-dropdown @command="getGameGrade" style="margin-left: 50px;">
                    <span class="el-dropdown-link">
                      代练等级<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="铜牌代练">铜牌代练</el-dropdown-item>
                      <el-dropdown-item command="银牌代练">银牌代练</el-dropdown-item>
                      <el-dropdown-item command="金牌代练">金牌代练</el-dropdown-item>
                      <el-dropdown-item command="全部">全部</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                  <span id="lableGrade" name="lableGrade"></span>

                  <el-dropdown @command="getGameMoney" style="margin-left: 50px;">
                    <span class="el-dropdown-link">
                      价格<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="1-100">1-100</el-dropdown-item>
                      <el-dropdown-item command="100-200">100-200</el-dropdown-item>
                      <el-dropdown-item command="200-500">200-500</el-dropdown-item>
                      <el-dropdown-item command="500-1000">500-1000</el-dropdown-item>
                      <el-dropdown-item command="1000-2000">1000-2000</el-dropdown-item>
                      <el-dropdown-item command="2000-5000">2000-5000</el-dropdown-item>
                      <el-dropdown-item command="5000-10000">5000-10000</el-dropdown-item>
                      <el-dropdown-item command="10000-20000">10000-20000</el-dropdown-item>
                      <el-dropdown-item command="20000-50000">20000-50000</el-dropdown-item>
                      <el-dropdown-item command="全部">全部</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                  <span id="lableMoney" name="lableMoney"></span>

                  <el-dropdown @command="getGameSystem" style="margin-left: 50px;">
                    <span class="el-dropdown-link">
                      系统<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="安卓系统">安卓系统</el-dropdown-item>
                      <el-dropdown-item command="苹果系统">苹果系统</el-dropdown-item>
                      <el-dropdown-item command="全部">全部</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                  <span id="lableSystem" name="lableSystem"></span>
            </div>
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
                    <el-button type="info" class="button" @click="getOrder(item.gameid,item.sendorder,item.getorder,item.money,item.grade)">接单</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
    </div>
  </template>
  <script>
      export default{
          name:'GameTable',
          props:{
            tableData:Array,
            tableLabel:Array,
          },
          data(){
              return{
              }
          },
          methods:{
            getGameName(command) {
              document.getElementById("lableName").innerText=command
              if(command == '全部'){
                command =''
              }
              this.$emit('GameName',command)
            },
            getGameGrade(command){
              document.getElementById("lableGrade").innerText=command
              if(command == '全部'){
                command =''
              }
              this.$emit('GameGrade',command)
            },
            getGameMoney(command){
              document.getElementById("lableMoney").innerText=command
              if(command == '全部'){
                command =''
              }
              this.$emit('GameMoney',command)
            },
            getGameSystem(command){
              document.getElementById("lableSystem").innerText=command
              if(command == '全部'){
                command = ''
              }
              this.$emit('GameSystem',command)
            },
            getOrder(gameid,sendorder,GetOrder,money,grade){
              this.$emit("getOrder",gameid,sendorder,GetOrder,money,grade)
            },
          }
      }
  </script>
  <style lang="less" scoped>
      .game-table{
          height: calc(100%-62px);
          background-color: #fff;
          position: relative;
      }
      .button{
          padding:5px;
          margin-bottom: 10px;
          float: right;
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