
<template>
	<el-card class="box-card">
            <h4 style="text-align: center;">我的余额</h4>
            <h2 style="text-align: center;">{{money}}</h2>
            <div style="text-align: center;">
                <el-button @click="addMoney">充值</el-button>
                <el-button @click="cutMoney">提现</el-button>
            </div>
            <el-dialog :title="'充值'" :visible.sync="AddisShow">
                <ul class="msg-box">
                    <li>
                        <h4 style="margin-bottom: 15px;">充值金额</h4>
                        <el-radio-group v-model="amountVal" @change="amountChange1">
                            <el-radio border :label="''+ 100">充值100</el-radio>
                            <el-radio border :label="''+ 500">充值500</el-radio>
                            <el-radio border :label="''+ 1000">充值1000</el-radio>
                            <el-radio border :label="''+ 2000">充值2000</el-radio>
                            <el-radio border :label="''+ 5000">充值5000</el-radio>
                            <el-radio border :label="''">自定义</el-radio>
                        </el-radio-group>
                    </li>
                    <li>
                        <h4 style="margin-bottom: 15px;">充值方式</h4>
                        <el-radio-group v-model="rechargeParams.paymentType" @change="paymentTypeChange">
                            <el-radio border :label="''+ 0">微信</el-radio>
                            <el-radio border :label="''+ 1">支付宝</el-radio>
                        </el-radio-group>
                    </li>
                    <li>
                        <h4 style="margin-bottom: 15px;">充值金额</h4>
                        <el-input :disabled="disabled1" clearable v-model="rechargeParams.totalAmt" placeholder="请输入金额" style="width: 150px;"></el-input>
                    </li>
                </ul>
                <div style="text-align: center; margin-top: 30px;">
                    <el-button type="primary" @click="surePay">确认支付</el-button>
                </div>
            </el-dialog>

            <el-dialog :title="'提现'" :visible.sync="CutisShow">
                <ul class="msg-box">
                    <li>
                        <h4 style="margin-bottom: 15px;">提现金额</h4>
                        <el-radio-group v-model="amountVal" @change="amountChange2">
                            <el-radio border :label="''+ 100">提现100</el-radio>
                            <el-radio border :label="''+ 500">提现500</el-radio>
                            <el-radio border :label="''+ 1000">提现1000</el-radio>
                            <el-radio border :label="''+ 2000">提现2000</el-radio>
                            <el-radio border :label="''+ 5000">提现5000</el-radio>
                            <el-radio border :label="''">自定义</el-radio>
                        </el-radio-group>
                    </li>
                    <li>
                        <h4 style="margin-bottom: 15px;">提现金额</h4>
                        <el-input :disabled="disabled2" clearable v-model="Withdrawals.totalAmt" placeholder="请输入金额" style="width: 150px;"></el-input>
                    </li>
                </ul>
                <div style="text-align: center; margin-top: 30px;">
                    <el-button type="primary" @click="cutPay">确认支付</el-button>
                </div>
            </el-dialog>
	</el-card>
</template>
 
<script>
	export default {
		data() {
			return {
                money:0,
				amountVal: '',
				disabled1: false,
                disabled2: false,
                AddisShow:false,
                CutisShow:false,
				//充值参数
				rechargeParams: {
					"totalAmt": '', //金额
					"paymentType": "0", //支付方式[0:微信,1:支付宝,2:余额,3:活动]
					"transType": "0" //交易类型[0:充值,1:消费]
				},
                Withdrawals:{
                    "totalAmt": '', //金额
                }
			}
		},
		methods: {
            addMoney(){
                this.AddisShow = true
            },
            cutMoney(){
                this.CutisShow = true
            },
            selectmoney(){
                var telephone = this.$store.state.user.token
                this.$http.post('http://127.0.0.1:3000/api/selectMoneyAndGrade',{telephone}).then(res=>{
                    console.log('查询余额',res)
                    this.money =res.data[0].money
                })
            },
            amountChange1(val) {
				this.rechargeParams.totalAmt = val;
				if (val == '') {
					this.disabled1 = false
				} else {
					this.disabled1 = true
				}
			},
            amountChange2(val) {
				this.Withdrawals.totalAmt = val;
				if (val == '') {
					this.disabled2 = false
				} else {
					this.disabled2 = true
				}
			},
            paymentTypeChange(val) {
				this.rechargeParams.paymentType = val
			},
            surePay(){
                var money = Number(this.rechargeParams.totalAmt) + Number(this.money)
                var telephone = this.$store.state.user.token
                console.log(money)
                if (this.rechargeParams.totalAmt == '') {
					this.$message.warning('请输入金额');
					return;
				}
                this.$http.post('http://127.0.0.1:3000/api/rechargeMoney',{money,telephone}).then(res=>{
                    console.log('充值成功！',res)
                    this.$message.success('充值成功！')
                    this.selectmoney()
                    this.AddisShow = false
                })
            },
            cutPay(){
                var money = Number(this.money) - Number(this.Withdrawals.totalAmt)
                var telephone = this.$store.state.user.token
                console.log(money)
                if (this.Withdrawals.totalAmt == '') {
					this.$message.warning('请输入金额');
					return;
				}
                if(money < 0){
                    this.$message.warning('账户余额不足！');
                }else{
                    this.$http.post('http://127.0.0.1:3000/api/WithdrawalsMoney',{money,telephone}).then(res=>{
                    console.log('提现成功！',res)
                    this.$message.success('提现成功！')
                    this.selectmoney()
                    this.CutisShow = false
                })
                }
            },
            /*
			//充值金额
			amountChange(val) {
				this.rechargeParams.totalAmt = val;
				if (val == '') {
					this.disabled = false
				} else {
					this.disabled = true
				}
			},
			//支付方式
			paymentTypeChange(val) {
				this.rechargeParams.paymentType = val
			},
			//确认支付
			async surePay() {
				if (this.rechargeParams.totalAmt == '') {
					this.$message.warning('请输入金额');
					return;
				}
				const res = await this.$http.post('orderInfo/createOrderInfo', this.rechargeParams)
				const {
					code,
					msg,
					result
				} = res.data
				if (code === '200') {
					//支付方式跳转
					if (this.rechargeParams.paymentType == '0') {
						this.$message.success('微信支付');
						this.wechatPay(result);
					} else if (this.rechargeParams.paymentType == '1') {
						this.$message.success('支付宝支付')
						const payDiv = document.getElementById('payDiv');
						if (payDiv) {
							document.body.removeChild(payDiv);
						}
						const div = document.createElement('div');
						div.id = 'payDiv';
						div.innerHTML = result;
						document.body.appendChild(div);
						document.getElementById('payDiv').getElementsByTagName('form')[0].submit();
					} else if (this.rechargeParams.paymentType == '2') {
						this.$message.success('余额支付成功');
						this.$router.push({
							name: 'order'
						})
					} else {
						this.$message.success('活动支付')
					}
				} else if (code === 401) {
					this.$message.error(msg)
					this.$router.push({
						name: 'login'
					})
				} else {
					this.$message.error(msg)
				}
			},
			//微信支付
			wechatPay(result) {
				if (result) {
					const orderParams = JSON.parse(result);
					sessionStorage.qrurl = orderParams.qrurl;
					sessionStorage.amt = orderParams.amt;
					sessionStorage.returnUrl = orderParams.returnUrl;
					sessionStorage.order_id = orderParams.order_id;
					this.$router.push({
						name: 'wechatPay'
					})
				}
			}
                    */
		},
        mounted:function(){
            this.selectmoney()
        },
	}
</script>
 
<style lang="less" scoped>
	.msg-box > li {
		list-style: none;
		border-bottom: 1px solid #c5c5c5;
		padding: 20px 10px;
	}
</style>