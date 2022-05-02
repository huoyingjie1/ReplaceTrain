const express = require('express');
const router = express.Router();
const api = require('./api');

/**--------------------用户的增删改查接口--------------------- */
router.post('/setUser',(req,res,next)=>{
    api.setUser(req,res,next);
});
router.get('/selectAllUser',(req,res,next)=>{
    api.selectAllUser(req,res,next);
});
router.post('/selectUser',(req,res,next)=>{
    api.selectUser(req,res,next);
});
router.post('/editUser',(req,res,next)=>{
    api.editUser(req,res,next);
});
router.post('/delUser',(req,res,next)=>{
    api.delUser(req,res,next);
});
router.post('/selectGrade',(req,res,next)=>{
    api.selectGrade(req,res,next);
});
/**-------------------------------------------------------- */


/**--------------------订单的增删改查接口----------------------- */
router.post('/setGame',(req,res,next)=>{  //新增订单
    api.setGame(req,res,next);
});
router.post('/selectAllGame',(req,res,next)=>{   //除我的订单之外,查询所有订单
    api.selectAllGame(req,res,next);
});
router.post('/selectGameId',(req,res,next)=>{   //查询单个订单
    api.selectGameId(req,res,next);
});
router.post('/selectMySet',(req,res,next)=>{   //查询我的发单
    api.selectMySet(req,res,next);
});
router.post('/AddMyGet',(req,res,next)=>{    //添加接单人
    api.AddMyGet(req,res,next);
});
router.post('/selectMyGet',(req,res,next)=>{    //查询我的订单
    api.selectMyGet(req,res,next);
});
router.post('/selectMyGetSubmit',(req,res,next)=>{    //查询已提交订单
    api.selectMyGetSubmit(req,res,next);
});
router.post('/selectMyGetEnd',(req,res,next)=>{    //查询已完成订单
    api.selectMyGetEnd(req,res,next);
});
router.post('/delOrder',(req,res,next)=>{    //删除我的发单
    api.delOrder(req,res,next);
});
router.post('/delgetorder',(req,res,next)=>{    //删除我的接单
    api.delgetorder(req,res,next);
});
router.get('/selectisGetOrder',(req,res,next)=>{    //查找已接订单
    api.selectisGetOrder(req,res,next);
});
router.get('/selectnotGetOrder',(req,res,next)=>{    //查找未接订单
    api.selectnotGetOrder(req,res,next);
});
router.get('/selectAuditOrder',(req,res,next)=>{    //查找待审核订单
    api.selectAuditOrder(req,res,next);
});
router.post('/OrderToAdmin',(req,res,next)=>{    //代练提交订单
    api.OrderToAdmin(req,res,next);
});
router.post('/orderEnd',(req,res,next)=>{    //管理员审核通过订单
    api.orderEnd(req,res,next);
});
router.post('/selectOrderStatus',(req,res,next)=>{    //查看订单状态
    api.selectOrderStatus(req,res,next);
});

/**--------------------------------------------------------- */


/**--------------------订单的筛选---------------------------- */
router.post('/choose',(req,res,next)=>{
    api.choose(req,res,next);
});
/**----------------------------------------------------------- */


/**-------------------------用户登录验证------------------------ */

router.post('/login',(req,res,next)=>{
    api.login(req,res,next);
});

/**----------------------------------------------------------- */

/**-------------------------用户余额------------------------ */
router.post('/selectMoneyAndGrade',(req,res,next)=>{  //用户查询账户余额
    api.selectMoneyAndGrade(req,res,next);
});
router.post('/rechargeMoney',(req,res,next)=>{ //充值
    api.rechargeMoney(req,res,next);
});
router.post('/WithdrawalsMoney',(req,res,next)=>{ //提现
    api.WithdrawalsMoney(req,res,next);
});
router.post('/setGameMoney',(req,res,next)=>{ //扣除代练费
    api.setGameMoney(req,res,next);
});
router.post('/getGameMoney',(req,res,next)=>{ //扣除订金
    api.getGameMoney(req,res,next);
});
router.post('/returnMoney',(req,res,next)=>{ //用户删除订单时返还金额
    api.returnMoney(req,res,next);
});

/**----------------------------------------------------------- */


/*----------------------------代练等级提升--------------------------------*/
router.post('/selectEndOrder',(req,res,next)=>{ //用户删除订单时返还金额
    api.selectEndOrder(req,res,next);
});
router.post('/upgrade',(req,res,next)=>{ //提升代练等级
    api.upgrade(req,res,next);
});
/**--------------------------------------------------------------------- */
module.exports=router;
