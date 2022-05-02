var sqlMap = {
    /**-----------------------用户的增删改查sql语句----------------------------------------------- */
    setUser:'INSERT INTO user(telephone,password,name,age,sex,birth,addr,Permissions,money) VALUES (?,?,?,?,?,?,?,?,?)',
    selectAllUser:'SELECT * FROM user',
    selectUser:'SELECT * FROM user where telephone = ?',
    editUser:'UPDATE user SET password=?,name=?,age=?,sex=?,birth=?,addr=?,Permissions=? WHERE telephone = ?',
    delUser:'DELETE FROM user WHERE telephone = ?',
    selectGrade:'SELECT grade FROM user where telephone = ?',
    /**------------------------------------------------------------------------------------------ */

    /**---------------------------订单的增删改查sql语句---------------------------------------- */
    setGame:'INSERT INTO orders(gameid,gamename,content,completetime,grade,money,systems,sendorder,orderusername,orderpassword) VALUES (?,?,?,?,?,?,?,?,?,?)',
    selectAllGame:'SELECT * FROM orders where sendorder != ? and getorder is NULL',
    selectGameId:'SELECT * FROM orders where gameid = ?',
    selectMySet:'SELECT * FROM orders where sendorder = ?',
    AddMyGet:'UPDATE orders SET getorder = ? WHERE gameid = ?',
    selectMyGet:'SELECT * FROM orders where getorder = ? and orderstatus is NULL',
    selectMyGetSubmit:"SELECT * FROM orders where getorder = ? and orderstatus = '审核中'",
    selectMyGetEnd:"SELECT * FROM orders where getorder = ? and orderstatus = '已完成'",
    delOrder:'DELETE FROM orders WHERE gameid = ?',
    delgetorder:'UPDATE orders SET getorder = NULL WHERE gameid = ?',
    selectisGetOrder:'SELECT * FROM orders where getorder is not NULL and orderstatus is NULL',
    selectnotGetOrder:'SELECT * FROM orders where getorder is NULL',
    selectAuditOrder:"SELECT * FROM orders where orderstatus = '审核中'",
    OrderToAdmin:'UPDATE orders SET orderstatus = ? WHERE gameid = ?',

    /**--------------------------------------------------------------------------------------- */

    /**------------------------------------订单的筛选------------------------------------------- */
    choose:'SELECT * FROM orders where sendorder != ? and getorder is NULL and ',
    /**--------------------------------------------------------------------------------------- */

    /**--------------------------------用户登录验证-------------------------------------------- */
    login:'SELECT * FROM user where telephone = ?',
    /**----------------------------------------------------------------------------------------- */

    /**--------------------------------用户余额-------------------------------------------- */
    selectMoneyAndGrade:'SELECT money,grade FROM user where telephone = ?',
    rechargeMoney:'UPDATE user SET money = ? WHERE telephone = ?',
    WithdrawalsMoney:'UPDATE user SET money = ? WHERE telephone = ?',
    setGameMoney:'UPDATE user SET money = money - ? WHERE telephone = ?',
    getGameMoney:'UPDATE user SET money = money - ? WHERE telephone = ?',
    returnMoney:'UPDATE user SET money = money + ? WHERE telephone = ?',
    /**----------------------------------------------------------------------------------------- */

    /**--------------------------------代练等级提升-------------------------------------------- */
    upgrade:'UPDATE user SET grade = ? WHERE telephone = ?',
    /**----------------------------------------------------------------------------------------- */
}
module.exports=sqlMap;