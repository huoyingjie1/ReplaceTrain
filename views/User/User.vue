<template>
    <div class="manage">
        <el-dialog :title="operateType ==='add' ? '新增用户':'更新用户'" :visible.sync="isShow">
            <common-form :formLabel="operateFormLabel" :form="operateForm" :inline="true" ref="form"></common-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="isShow = false">取消</el-button>
                <el-button type="primary" @click="confirm">确定</el-button>
            </div>
        </el-dialog>
        <div class="manage-header">
            <el-button type="primary" @click="addUser">+ 新增用户</el-button>
            <common-form :formLabel="formLabel" :form="searchForm" :inline="true" ref="form">
                <el-button type="primary" icon="el-icon-search" @click="getList(searchForm.keyword)">搜索</el-button>
            </common-form>
        </div>
        
        <common-table :tableData="tableData" :tableLabel="tableLabel" :config="config"
                        @edit="editUser" @del="delUser"></common-table>
                       
    </div> 
</template>
<script>
    import CommonForm from '../../src/components/CommonForm.vue'
    import CommonTable from '../../src/components/CommonTable.vue'
    export default{
        name:'User',
        components:{
            CommonForm,
            CommonTable
        },
        data(){
            return{
                operateType:'add',
                isShow:false,
                operateFormLabel:[
                    {
                        model:'telephone',
                        label:'电话号码',
                        type:'input',
                    },
                    {
                        model:'password',
                        label:'密码',
                        type:'input',
                    },
                    {
                        model:'name',
                        label:'姓名',
                        type:'input',
                    },
                    {
                        model:'age',
                        label:'年龄',
                        type:'input',
                    },
                    {
                        model:'sex',
                        label:'性别',
                        type:'select',
                        opts:[
                            {
                                label:'男',
                                value:1,
                            },
                            {
                                label:'女',
                                value:0,
                            },
                        ]
                    },
                    {
                        model:'birth',
                        label:'出生日期',
                        type:'date',
                    },
                    {
                        model:'addr',
                        label:'地址',
                        type:'input',
                    },
                    {
                        model:'Permissions',
                        label:'权限',
                        type:'select',
                        opts:[
                            {
                                label:'普通用户',
                                value:0,
                            },
                            {
                                label:'管理员',
                                value:1,
                            },
                        ]
                    },
                ],
                operateForm:{
                    telephone:'',
                    password:'',
                    name:'',
                    age:'',
                    sex:'',
                    birth:'',
                    addr:'',
                    Permissions:'',
                    money:''
                },
                formLabel:[
                    {
                        model:"keyword",
                        label:"",
                        type:'input',
                    },
                ],
                searchForm:{
                    keyword:'',
                },
                
                tableData:[],
                tableLabel:[
                    {
                        prop:"telephone",
                        label:"账号"
                    },
                    {
                        prop:"password",
                        label:"密码"
                    },
                    {
                        prop:"name",
                        label:"姓名"
                    },
                    {
                        prop:"age",
                        label:"年龄"
                    },
                    {
                        prop:"sex",
                        label:"性别"
                    },
                    {
                        prop:"birth",
                        label:"出生日期",
                        width:150
                    },
                    {
                        prop:"addr",
                        label:"地址",
                        width:200
                    },
                    {
                        prop:"Permissions",
                        label:"权限",
                    },
                    {
                        prop:"money",
                        label:"账户余额",
                    }
                ],
                config:{
                    page:1,
                    total:30
                },

            }
        },
        methods:{
            confirm(){     
                if(this.operateType ==='add'){
                    this.$http.post('http://127.0.0.1:3000/api/setUser',this.operateForm).then(res=>{
                        console.log('添加用户',res)
                        this.isShow = false
                        this.getList()
                    })
                }else{
                    this.$http.post('http://127.0.0.1:3000/api/editUser',this.operateForm).then(res=>{
                        console.log('修改用户',res)
                        this.isShow = false
                        this.getList()
                    })
                }
            },
            addUser(){
                this.isShow = true
                this.operateType = 'add'
                this.operateForm = {
                    telephone:'',
                    password:'',
                    name:'',
                    age:'',
                    sex:'',
                    birth:'',
                    addr:'',
                    Permissions:'',
                    money:''
                }
            },
            getList(telephone = ''){
                console.log("电话号码",telephone)
                this.config.loading = true;
                if(telephone == ''){
                    this.$http.get('http://127.0.0.1:3000/api/selectAllUser').then(res=>{
                        console.log('查找全部用户',res);
                        this.tableData = res.data;
                        this.config.loading = false;
                    })
                }else{
                    this.$http.post('http://127.0.0.1:3000/api/selectUser',{telephone}).then(res=>{
                        console.log('查找用户',res);
                        this.tableData = res.data;
                        this.config.loading = false;
                    })
                }


            },
            
            editUser(index){
                this.isShow = true
                this.operateType = 'edit'
                this.operateForm = this.tableData[index]
            },
            
            delUser(index){
                this.$confirm("此操作将永久删除该用户，是否继续？","提示",{
                    confirmButtonText:"确认",
                    cancelButtonText:"取消",
                    type:"warning"
                }).then(()=>{
                    this.$http.post('http://127.0.0.1:3000/api/delUser',this.tableData[index]).then(()=>{
                        this.$message({
                            type:'success',
                            message:'删除成功'
                        })
                        console.log('删除用户');
                        this.getList()
                    })
                })
            },
            
        },
        mounted:function () {   //自动触发写入的函数
            this.getList();
        }
    }
</script>


<style lang="less" scoped>
    .manage-header{
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
