<template>
    <header>
        <div class="l-content">
            <el-button @click="handleMenu" plain icon="el-icon-menu" size="mini"></el-button>
            <h3 style="color:#fff">首页</h3>
        </div>
        <div class="r-content">
            <el-dropdown trigger="click" size="mini">
                <span>
                    <img class="user" :src="userImg">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item><router-link :to="{name:'usermessage'}">个人中心</router-link></el-dropdown-item>
                    <el-dropdown-item><router-link :to="{name:'login'}">退出</router-link></el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </header>
</template>

<script>
    export default{
        name:'CommonHeader',
        data(){
            return{
                userImg:require('../assets/个人.png')
            }
            
        },
        methods:{
            handleMenu(){
                this.$store.commit('collapseMenu')
            }
        }
    }
</script>
<style lang="less" scoped>
    header{
        display: flex;
        height: 100%;
        justify-content: space-between; /*左右贴边*/
        align-items: center;
    }
    .l-content{
        display: flex; /*布局*/
        align-content: center; /*上下居中*/
    }

    .l-content .el-button{
        
        align-content: center; /*上下居中*/
        margin-right: 20px;
        margin-top: 10px;
        width: 40px;
        height: 40px;
    }
    .r-content .user{
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
</style>