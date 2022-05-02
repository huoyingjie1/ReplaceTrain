<template>
    <el-row class="home" :gutter="20" :token="UserName">
        <el-col :span="5" style="margin-top:20px">
            <el-card shadow="hover">
                <div class="user">
                    <img :src="userImg"/>
                    <div class="userinfo">
                        <p class="name">用户名:<span>{{UserName}}</span></p>
                        <p class="access">权限:<span>{{getPermissions}}</span></p>
                    </div>
                </div>
                <div class="login-info">
                    <p>
                        代练等级:<span>{{this.grade}}<el-button @click="upgrade" type="mini">升级</el-button></span>
                    </p>
                 </div>
            </el-card>
        </el-col>
    </el-row>
</template>
<script>
    export default{
        name:'home',
        data(){
            return{
                userImg:require('../../src/assets/个人.png'),
                grade:'',
                MyEndOrderNumber:'',
            }
        },
        methods:{
            getGrade(){
                var telephone = this.$store.state.user.token
                this.$http.post('http://127.0.0.1:3000/api/selectGrade',{telephone}).then(res=>{
                    console.log('查找代练等级',res)
                    this.grade = res.data[0].grade
                })
            },
            upgrade(){
                var getorder = this.$store.state.user.token
                var telephone = this.$store.state.user.token
                var grade
                this.$http.post('http://127.0.0.1:3000/api/selectMyGetEnd',{getorder}).then(res=>{
                    console.log('查找已完成订单数量',res)
                    this.MyEndOrderNumber = res.data.length
                    if(this.MyEndOrderNumber >= 1 && this.MyEndOrderNumber <3){
                        grade = "银牌代练"
                        this.$http.post('http://127.0.0.1:3000/api/upgrade',{grade,telephone}).then(res=>{
                            console.log('提升代练等级成功，银牌！',res)
                            this.$message.success("代练等级提升成功")
                            this.getGrade()
                        })
                    }else if(this.MyEndOrderNumber >= 3){
                        grade = "金牌代练"
                        this.$http.post('http://127.0.0.1:3000/api/upgrade',{grade,telephone}).then(res=>{
                            console.log('提升代练等级成功，金牌！',res)
                            this.$message.success("代练等级提升成功")
                            this.getGrade()
                        })
                    }else{
                        this.$message.warning("您完成的订单不足以升级!1-2个订单为银牌,3个订单为金牌")
                    }
                })
            },
        },
        computed:{
            UserName(){
                return this.$store.state.user.token
            },
            getPermissions(){
                return this.$store.state.user.admin
            },
        },
        mounted:function () {   //自动触发写入的函数
            this.getGrade()
        }
    }
</script>