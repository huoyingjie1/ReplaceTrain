<template>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="red" @isDel="isDel" :collapse="isCollapse">
        <h3>{{isCollapse ?'后台':'后台管理系统'}}</h3>
        <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :index="item.path" :key="item.path">
            <i :class="'el-icon-'+item.icon"></i>
            <span slot="title">{{item.label}}</span>
          </el-menu-item>
      </el-menu>
</template>

<style lang="less" scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }
    .el-menu{
        height:100%;
        border:none;
    }
    .el-menu h3 {
        color:#fff;
        text-align:center;
        line-height:48px;
        }
  </style>
  
  <script>
    export default {
      data() {
        return {
          menu:[
              {
                  path:'/',
                  name:'home',
                  label:'首页',
                  icon:'s-home',
                  url:'Home/Home'
              },
              {
                  path:'/user',
                  name:'User',
                  label:'用户管理',
                  icon:'user',
                  url:'UserManage/UserManage'
              },
              {
                  path:'/orderstatus',
                  name:'orderstatus',
                  label:'订单状态',
                  icon:'s-order',
                  url:'OrderStatus/OrderStatus'
              },
              {
                  path:'/getgame',
                  name:'getgame',
                  label:'接单大厅',
                  icon:'sold-out',
                  url:'GetGame/GetGame'
              },
              {
                  path:'/mysetgame',
                  name:'mysetgame',
                  label:'我的发单',
                  icon:'s-order',
                  url:'MySetGame/MySetGame'
              },
              {
                  path:'/mygetgame',
                  name:'mygetgame',
                  label:'我的接单',
                  icon:'s-order',
                  url:'MyGetGame/MyGetGame'
              },
              {
                  path:'/mymoney',
                  name:'mymoney',
                  label:'我的钱包',
                  icon:'s-order',
                  url:'MyMoney/MyMoney'
              },
              
          ]
        };
      },
      methods: {
        clickMenu(item){
          this.$router.push({
              name: item.name
          })
        },
        isDel(){
          this.$store.commit('getAdmin')
          console.log("权限:",this.$store.state.user.admin)
          if(this.$store.state.user.admin == '普通用户'){
            this.menu.splice(1,2)
          }else if(this.$store.state.user.admin == '管理员'){
            this.menu.splice(3,4)
          }
        },
      },
      computed:{
          noChildren(){  //没有子项目的
              return this.menu.filter(item =>!item.children)
          },
          hasChildren(){  //有子项目
            return this.menu.filter(item =>item.children)
          },
          isCollapse(){
            return this.$store.state.tab.isCollapse
          },
          getPermissions(){
            return this.$store.state.user.admin
          }
          
      },
      mounted:function () {   //自动触发写入的函数
        this.isDel();
        },
    }
  </script>