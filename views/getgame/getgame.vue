<template>
    <div class="manage">
        <el-dialog :title="operateType ==='add' ? '新增订单':'修改订单'" :visible.sync="isShow">
            <game-form :formLabel="operateFormLabel" :form="operateForm" :inline="true" ref="form"></game-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="isShow = false">取消</el-button>
                <el-button type="primary" @click="confirm">确定</el-button>
            </div>
        </el-dialog>
        <div class="manage-header">
            <el-button type="primary" @click="addGame">+ 我要发单</el-button>
            <game-form :formLabel="formLabel" :form="searchForm" :inline="true" ref="form">
                <el-button type="primary" icon="el-icon-search" @click="getList(searchForm.keyword)">搜索</el-button>
            </game-form>
        </div>
        <game-table :tableData="tableData" :tableLabel="tableLabel" 
                    @GameName="getGameName" @GameGrade="getGameGrade"
                    @GameMoney="getGameMoney" @GameSystem="getGameSystem" 
                    @getOrder="getOrder"></game-table>
    </div> 
</template>
<script>
    import GameForm from '../../src/components/GameForm.vue'
    import GameTable from '../../src/components/GameTable.vue'
    export default{
        name:'getgame',
        components:{
            GameForm,
            GameTable,
        },
        data(){
            return{
                operateType:'add',
                isShow:false,
                chooseName:'',
                chooseGrade:'',
                chooseMoney:'',
                chooseSystem:'',   
                mymoney:'',
                mygrade:'',
                operateFormLabel:[
                    {
                        model:'gameid',
                        label:'订单编号',
                        type:'input',
                    },
                    {
                        model:'gamename',
                        label:'游戏名称',
                        type:'select',
                        opts:[
                            {
                                label:'王者荣耀',
                                value:1,
                            },
                            {
                                label:'和平精英',
                                value:2,
                            },
                            {
                                label:'英雄联盟',
                                value:3,  
                            }
                        ]
                    },
                    {
                        model:'content',
                        label:'订单内容',
                        type:'input',
                    },
                    {
                        model:'completetime',
                        label:'订单时间',
                        type:'select',
                        opts:[
                            {
                                label:'12小时',
                                value:1,
                            },
                            {
                                label:'一天',
                                value:2,
                            },
                            {
                                label:'两天',
                                value:3,  
                            },
                            {
                                label:'三天',
                                value:4,
                            },
                            {
                                label:'一周',
                                value:5,
                            },
                            {
                                label:'两周',
                                value:6,  
                            },
                            {
                                label:'一个月',
                                value:7,  
                            },
                            {
                                label:'三个月',
                                value:8,  
                            },
                        ]
                    },
                    {
                        model:'grade',
                        label:'代练等级',
                        type:'select',
                        opts:[
                            {
                                label:'铜牌代练',
                                value:1,
                            },
                            {
                                label:'银牌代练',
                                value:2,
                            },
                            {
                                label:'金牌代练',
                                value:3,  
                            }
                        ]
                    },
                    {
                        model:'money',
                        label:'价格',
                        type:'input',
                    },
                    {
                        model:'system',
                        label:'系统',
                        type:'select',
                        opts:[
                            {
                                label:'安卓系统',
                                value:1,
                            },
                            {
                                label:'苹果系统',
                                value:2,
                            },
                        ]
                    },
                    {
                        model:'orderusername',
                        label:'游戏账号',
                        type:'input',
                    },
                    {
                        model:'orderpassword',
                        label:'游戏密码',
                        type:'input',
                    },
                ],
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
            confirm(){     
                this.operateForm.sendorder = this.$store.state.user.token
                var money = this.operateForm.money
                var telephone = this.$store.state.user.token
                this.$http.post('http://127.0.0.1:3000/api/selectmoney',{telephone}).then(res=>{
                    console.log('查询余额',res)
                    this.mymoney =res.data[0].money
                })
                console.log('我的余额:',this.mymoney,'代理费:',money)

                if(this.operateForm.gameid == ''){
                    this.$message.warning('游戏编号不能为空')
                }else if(this.operateForm.gamename == ''){
                    this.$message.warning('游戏名称不能为空')
                }else if(this.operateForm.content == ''){
                    this.$message.warning('订单内容不能为空')
                }else if(this.operateForm.completetime == ''){
                    this.$message.warning('订单时间不能为空')
                }else if(this.operateForm.grade == ''){
                    this.$message.warning('代练等级不能为空')
                }else if(this.operateForm.money == ''){
                    this.$message.warning('价格不能为空')
                }else if(this.operateForm.system == ''){
                    this.$message.warning('系统不能为空')
                }else if(this.operateForm.orderusername == ''){
                    this.$message.warning('游戏账号不能为空')
                }else if(this.operateForm.orderpassword == ''){
                    this.$message.warning('游戏密码不能为空')
                }else if(Number(this.mymoney) - Number(money)<=0){
                    this.$message.warning('余额不足！')
                }else{
                    this.$http.post('http://127.0.0.1:3000/api/setGame',this.operateForm).then(res=>{
                        console.log('添加订单',res)
                        this.isShow = false
                        this.getList()
                    })
                    this.$http.post('http://127.0.0.1:3000/api/setGameMoney',{telephone,money}).then(res=>{
                        console.log('添加订单时扣除代练费',res)
                        console.log('账号:',telephone,'代练费',money)
                    })
                }

            },
            addGame(){
                this.isShow = true
                this.operateType = 'add'
                this.operateForm = {
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
                }
            },
            getList(gameid = ''){
                var telephone = this.$store.state.user.token
                if(gameid == ''){
                    this.$http.post('http://127.0.0.1:3000/api/selectAllGame',{telephone}).then(res=>{
                        console.log('查找全部订单',res)
                        this.tableData = res.data
                    })
                }else{
                    this.$http.post('http://127.0.0.1:3000/api/selectGameId',{gameid}).then(res=>{
                        console.log('查找订单',res);
                        this.tableData = res.data;
                        
                    }) 
                }
                
            },
            getOrder(gameid,sendorder,GetOrder,money,grade){
                var getorder = this.$store.state.user.token
                var telephone = this.$store.state.user.token
                var Deposit = money*0.2
                this.$http.post('http://127.0.0.1:3000/api/selectMoneyAndGrade',{telephone}).then(res=>{
                    console.log('查询余额和代练等级',res)
                    this.mymoney = res.data[0].money
                    this.mygrade = res.data[0].grade
                    console.log('我的余额:',this.mymoney,'订金:',Deposit,"我的代练等级:",this.mygrade,"订单的代练等级:",grade)
                    if(this.mygrade == "铜牌代练"){
                        this.mygrade = 1
                    }else if(this.mygrade == "银牌代练"){
                        this.mygrade = 2
                    }else if(this.mygrade == "金牌代练"){
                        this.mygrade = 3
                    }

                    if(grade == "铜牌代练"){
                        grade = 1
                    }else if(grade == "银牌代练"){
                        grade = 2
                    }else if(grade == "金牌代练"){
                        grade = 3
                    }
                    if(sendorder == getorder){
                        this.$message.warning('此订单是您发出的订单！')
                    }else if(GetOrder != null){
                        this.$message.warning('此订单已被接取！')     
                    }else if(this.mygrade < grade){
                        this.$message.warning('代练等级不够！')     
                    }else{
                        this.$confirm("接单需要支付"+Deposit+"元的订金，是否继续？","提示",{
                        confirmButtonText:"确认",
                        cancelButtonText:"取消",
                        type:"warning"
                        }).then(()=>{
                            if(this.mymoney - Deposit >=0){
                                this.$http.post('http://127.0.0.1:3000/api/AddMyGet',{gameid,getorder}).then(()=>{
                                    this.$message({
                                        type:'success',
                                        message:'接单成功'
                                        })
                                    console.log('接单成功');
                                    this.getList()
                                })
                                this.$http.post('http://127.0.0.1:3000/api/getGameMoney',{telephone,Deposit}).then(res=>{
                                    console.log('接取订单时扣除订金',res)
                                    console.log('账号:',telephone,'订金',Deposit)
                                })
                            }else{
                                this.$message.warning("余额不足")
                            }
                        })
                    }
                })

            },
            getGameName(command){
                this.chooseName = command;
                this.choose();
            },
            getGameGrade(command){
                this.chooseGrade = command;
                this.choose();
            },
            getGameMoney(command){
                this.chooseMoney = command;
                this.choose();
            },
            getGameSystem(command){
                this.chooseSystem = command;
                this.choose();
            },
            choose(){
                var telephone = this.$store.state.user.token
                console.log("游戏名称：",this.chooseName,"代练等级：",this.chooseGrade,"价格:",this.chooseMoney,"系统:",this.chooseSystem);
                this.$http.post("http://127.0.0.1:3000/api/choose",[this.chooseName,this.chooseGrade,this.chooseMoney,this.chooseSystem,telephone]).then(res=>{
                    console.log('筛选',res);
                    this.tableData = res.data;
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
