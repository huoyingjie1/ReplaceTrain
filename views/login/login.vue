<template>
    <div>
        <el-form :model="form" status-icon :rules="rules" 
                 ref="form" label-width="100px" class="login-container">
        <h3 class="login_title">系统登录</h3>         
        <el-form-item label="电话号码" label-width="80px" prop="username" class="username">
            <el-input type="input" v-model="form.username" autocomplete="off" placeholder="请输入电话号码">
            </el-input>
        </el-form-item>
        <el-form-item label="密码" label-width="80px" prop="password">
            <el-input type="password" v-model="form.password" autocomplete="off" placeholder="请输入密码">
            </el-input>
        </el-form-item>
        <el-form-item class="login_submit">
            <el-button type="primary" @click="login" class="login_submit">登录</el-button>
        </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default{
        name:'login',
        data(){
            return{
                token:[],
                form:{},
                rules:{
                    username:[
                        {require:true,message:"请输入电话号码",trigger:"blur"},
                        {
                            min:11,
                            meesage:"用户名长度不能小于11位",
                            trigger:"blur"
                        },
                    ],
                    password:[
                        {require:true,message:"请输入密码",trigger:"blur"},
                    ]
                }
            }
        },
        methods:{
            login(){
                if(this.form.username == null){
                    this.$message.error('未输入用户名')
                }else if(this.form.password == null){
                    this.$message.error('未输入密码')
                }else if(this.form.username != null && this.form.password != null){
                    this.$http.post('http://127.0.0.1:3000/api/login',this.form).then(res=>{
                        console.log('登录验证',res)
                        if(res.data[0] == null){
                            this.$message.error('该用户名不存在')
                        }else{
                            this.token = res.data[0]
                            if(this.token.password == this.form.password){
                                this.$store.commit('setToken',this.token.telephone)
                                this.$store.commit('setAdmin',this.token.Permissions)
                                this.$router.push({name:'home'})
                            }else{
                                alert("账号或者密码错误！");
                            }
                        }
                    })
                }
            },
        }
    }
</script>
<style lang="less" scoped>
    .login-container{
        border-radius: 15px;
        background-clip: padding-box;
        margin: 100px auto;
        width: 350px;
        padding: 35px 35px 15px 35px;
        background-color: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }
    .login_title{
        margin: 0px auto 40px auto;
        text-align: center;
        color: #505458;
    }
    .login_submit{
        margin: 10px auto 0px auto;
        margin-left:20px;
    }
</style>