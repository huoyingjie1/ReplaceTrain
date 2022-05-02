const mysql = require('mysql');
const { selectAllGame } = require('./sqlMap');
const sqlMap = require('./sqlMap');

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'game',
    port:'3306',
    multipleStatementss:true //多语句查询
});


module.exports = {
    /**---------------------------------用户的增删改查------------------------------------------------- */
    setUser(req,res,next){
        var telephone = req.body.telephone;
        var password = req.body.password;
        var name = req.body.name;
        var age = req.body.age;
        var sex = req.body.sex;
        var birth = req.body.birth;
        var addr = req.body.addr;
        var Permissions = req.body.Permissions;
        var money = 0;
        if(sex == 1){
            sex = '男';
        }else{
            sex = '女';
        }
        if(Permissions == 1){
            Permissions = '管理员';
        }else{
            Permissions = '普通用户';
        }
        console.log("账号:",telephone,"密码:",password,"姓名:",name,"年龄:",age,"性别:",sex,"生日:",birth,"地址:",addr,"权限:",Permissions,"余额:",money);
        pool.getConnection((err,connection) =>{
            if(err){
                console.log("数据库连接失败！")
            }
            else{
                var sql = sqlMap.setUser;
                connection.query(sql,[telephone,password,name,age,sex,birth,addr,Permissions,money],(err,result)=>{
                    res.json(result);
                    console.log('添加用户成功！');
                    connection.release();
                })
            }
        })
    },

    selectAllUser(req,res,next){
        pool.getConnection((err,connection) =>{
            if(err){
                console.log("数据库连接失败！")
            }
            else{
                var sql = sqlMap.selectAllUser;
                connection.query(sql,(err,result)=>{
                    res.json(result);
                    console.log('查找用户成功！',result);
                    connection.release();
                })
            }
        })
    },

    selectUser(req,res,next){
        console.log('电话号码:',req.body.telephone)
        pool.getConnection((err,connection) =>{
            if(err){
                console.log("数据库连接失败！")
            }
            else{
                var sql = sqlMap.selectUser;
                connection.query(sql,[req.body.telephone],(err,result)=>{
                    res.json(result);
                    console.log('查找用户成功！',result);
                    connection.release();
                })
            }
        })
    },
    editUser(req,res,next){
        var telephone = req.body.telephone
        var password = req.body.password
        var name = req.body.name
        var age = req.body.age
        var sex = req.body.sex
        var birth = req.body.birth
        var addr = req.body.addr
        var Permissions = req.body.Permissions
        if(sex == 1){
            sex = '男'
        }else{
            sex = '女'
        }

        if(Permissions == 1){
            Permissions = '管理员'
        }else{
            Permissions = '普通用户'
        }
        console.log("账号:",telephone,"密码:",password,"姓名:",name,"年龄:",age,"性别:",sex,"生日:",birth,"地址:",addr,"权限:",Permissions);
        pool.getConnection((err,connection) =>{
            if(err){
                console.log("数据库连接失败！")
            }
            else{
                var sql = sqlMap.editUser;
                connection.query(sql,[password,name,age,sex,birth,addr,Permissions,telephone],(err,result)=>{
                    res.json(result);
                    console.log('修改用户成功',result);
                    connection.release();
                })
            }
        })
    },

    delUser(req,res,next){
        console.log("账号:",req.body);
        pool.getConnection((err,connection) =>{
            if(err){
                console.log("数据库连接失败！")
            }
            else{
                var sql = sqlMap.delUser;
                connection.query(sql,req.body.telephone,(err,result)=>{
                    res.json(result);
                    console.log('删除用户成功',result);
                    connection.release();
                })
            }
        })
    },
    selectGrade(req,res,next){
        console.log("账号:",req.body.telephone);
        pool.getConnection((err,connection) =>{
            if(err){
                console.log("数据库连接失败！")
            }
            else{
                var sql = sqlMap.selectGrade;
                connection.query(sql,req.body.telephone,(err,result)=>{
                    res.json(result);
                    console.log('删除用户成功',result);
                    connection.release();
                })
            }
        })
    },
    /**---------------------------------------------------------------------------------------------------- */


    /**---------------------------------订单的增删改查------------------------------------------------- */
    setGame(req,res,next){
        var gameid = req.body.gameid
        var gamename = req.body.gamename
        var content = req.body.content
        var completetime = req.body.completetime
        var grade = req.body.grade
        var money = req.body.money
        var systems = req.body.system
        var sendorder = req.body.sendorder
        var orderusername = req.body.orderusername
        var orderpassword = req.body.orderpassword
        if(gamename == 1){
            gamename = '王者荣耀'
        }else if(gamename == 2){
            gamename = '和平精英'
        }else if(gamename == 3){
            gamename = '英雄联盟'
        }

        if(completetime == 1){
            completetime = '12小时'
        }else if(completetime == 2){
            completetime = '一天'
        }else if(completetime == 3){
            completetime = '两天'
        }else if(completetime == 4){
            completetime = '三天'
        }else if(completetime == 5){
            completetime = '一周'
        }else if(completetime == 6){
            completetime = '两周'
        }else if(completetime == 7){
            completetime = '一个月'
        }else if(completetime == 8){
            completetime = '三个月'
        }
        if(grade == 1){
            grade = '铜牌代练'
        }else if(grade == 2){
            grade = '银牌代练'
        }else if(grade == 3){
            grade = '金牌代练'
        }

        if(systems == 1){
            systems = '安卓系统'
        }else if(systems == 2){
            systems = '苹果系统'
        }


        console.log("订单编号:",gameid,"游戏名称:",gamename,"订单内容:",content,
                    "订单时间:",completetime,"代练等级:",grade,"价格:",money,"系统:",systems,
                    "发单人:",sendorder,"游戏账号:",orderusername,"游戏密码:",orderpassword);
        pool.getConnection((err,connection) =>{
            if(err){
                console.log("数据库连接失败！")
            }
            else{
                var sql = sqlMap.setGame;
                connection.query(sql,[gameid,gamename,content,completetime,grade,money,systems,sendorder,orderusername,orderpassword],(err,result)=>{
                    res.json(result);
                    console.log('添加订单成功！')
                    connection.release()
                    return
                })
            }
        })
    },

    selectAllGame(req,res,next){
        pool.getConnection((err,connection) =>{
            if(err){
                console.log("数据库连接失败！")
            }
            else{
                var sql = sqlMap.selectAllGame;
                connection.query(sql,[req.body.telephone],(err,result)=>{
                    res.json(result);
                    console.log('查找用户成功！',result);
                    connection.release();
                })
            }
        })
    },
    selectGameId(req,res,next){
        console.log('电话号码:',req.body.gameid)
        pool.getConnection((err,connection) =>{
            if(err){
                console.log("数据库连接失败！")
            }
            else{
                var sql = sqlMap.selectGameId;
                connection.query(sql,[req.body.gameid],(err,result)=>{
                    res.json(result);
                    console.log('查找用户成功！',result);
                    connection.release();
                })
            }
        })
    },
    selectMySet(req,res,next){
        console.log('发单账号:',req.body.sendorder)
        pool.getConnection((err,connection) =>{
            if(err){
                console.log("数据库连接失败！")
            }
            else{
                var sql = sqlMap.selectMySet;
                connection.query(sql,[req.body.sendorder],(err,result)=>{
                    res.json(result);
                    console.log('查找用户成功！',result);
                    connection.release();
                })
            }
        })
    },
    AddMyGet(req,res,next){
        var gameid = req.body.gameid
        var getorder = req.body.getorder
        console.log('订单编号:',gameid,"接单人:",getorder)
        pool.getConnection((err,connection) =>{
            if(err){
                console.log("数据库连接失败！")
            }
            else{
                var sql = sqlMap.AddMyGet;
                connection.query(sql,[getorder,gameid],(err,result)=>{
                    res.json(result);
                    console.log('添加接单人成功！',result);
                    connection.release();
                })
            }
        })
    },
    selectMyGet(req,res,next){
        console.log('接单账号:',req.body.getorder)
        pool.getConnection((err,connection) =>{
            if(err){
                console.log("数据库连接失败！")
            }
            else{
                var sql = sqlMap.selectMyGet;
                connection.query(sql,[req.body.getorder],(err,result)=>{
                    res.json(result);
                    console.log('查找用户成功！',result);
                    connection.release();
                })
            }
        })
    },
    selectMyGetSubmit(req,res,next){
        console.log('接单账号:',req.body.getorder)
        pool.getConnection((err,connection) =>{
            if(err){
                console.log("数据库连接失败！")
            }
            else{
                var sql = sqlMap.selectMyGetSubmit;
                connection.query(sql,[req.body.getorder],(err,result)=>{
                    res.json(result);
                    console.log('查找用户成功！',result);
                    connection.release();
                })
            }
        })
    },
    selectMyGetEnd(req,res,next){
        console.log('接单账号:',req.body.getorder)
        pool.getConnection((err,connection) =>{
            if(err){
                console.log("数据库连接失败！")
            }
            else{
                var sql = sqlMap.selectMyGetEnd;
                connection.query(sql,[req.body.getorder],(err,result)=>{
                    res.json(result);
                    console.log('查找用户成功！',result);
                    connection.release();
                })
            }
        })
    },
    delOrder(req,res,next){
        console.log("订单编号:",req.body);
        pool.getConnection((err,connection) =>{
            if(err){
                console.log("数据库连接失败！")
            }
            else{
                var sql = sqlMap.delOrder;
                connection.query(sql,req.body.gameid,(err,result)=>{
                    res.json(result);
                    console.log('删除订单成功',result);
                    connection.release();
                })
            }
        })
    },
    delgetorder(req,res,next){
        console.log("订单编号:",req.body);
        pool.getConnection((err,connection) =>{
            if(err){
                console.log("数据库连接失败！")
            }
            else{
                var sql = sqlMap.delgetorder;
                connection.query(sql,req.body.gameid,(err,result)=>{
                    res.json(result);
                    console.log('删除用户成功',result);
                    connection.release();
                })
            }
        })
    },
    selectisGetOrder(req,res,next){
        pool.getConnection((err,connection) =>{
            if(err){
                console.log("数据库连接失败！")
            }
            else{
                var sql = sqlMap.selectisGetOrder;
                connection.query(sql,(err,result)=>{
                    res.json(result);
                    console.log('查找订单成功！',result);
                    connection.release();
                })
            }
        })
    },
    selectnotGetOrder(req,res,next){
        pool.getConnection((err,connection) =>{
            if(err){
                console.log("数据库连接失败！")
            }
            else{
                var sql = sqlMap.selectnotGetOrder;
                connection.query(sql,(err,result)=>{
                    res.json(result);
                    console.log('查找订单成功！',result);
                    connection.release();
                })
            }
        })
    },
    selectAuditOrder(req,res,next){
        pool.getConnection((err,connection) =>{
            if(err){
                console.log("数据库连接失败！")
            }
            else{
                var sql = sqlMap.selectAuditOrder;
                connection.query(sql,(err,result)=>{
                    res.json(result);
                    console.log('查找订单成功！',result);
                    connection.release();
                })
            }
        })
    },
    OrderToAdmin(req,res,next){
        var orderstatus = "审核中"
        console.log("订单状态:",orderstatus,"订单编号:",req.body.gameid)
        pool.getConnection((err,connection) =>{
            if(err){
                console.log("数据库连接失败！")
            }
            else{
                var sql = sqlMap.OrderToAdmin;
                connection.query(sql,[orderstatus,req.body.gameid],(err,result)=>{
                    res.json(result);
                    console.log('提交订单成功！',result);
                    connection.release();
                })
            }
        })
    },
    orderEnd(req,res,next){
        var orderstatus = "已完成"
        console.log("订单状态:",orderstatus,"订单编号:",req.body.gameid)
        pool.getConnection((err,connection) =>{
            if(err){
                console.log("数据库连接失败！")
            }
            else{
                var sql = sqlMap.OrderToAdmin;
                connection.query(sql,[orderstatus,req.body.gameid],(err,result)=>{
                    res.json(result);
                    console.log('订单完成！',result);
                    connection.release();
                })
            }
        })
    },

    /**------------------------------------------------------------------------------------------------- */

    /**----------------------------订单的筛选------------------------------------------------------------ */
    choose(req,res,next){
        console.log('筛选:',req.body)
        var min;
        var max;
        if(req.body[2]==''){
            mix = '';
            max = '';
        }else{
            min = Number(req.body[2].split("-")[0]);
            max = Number(req.body[2].split("-")[1]);
            console.log("min:",min,"max:",max)
        }
        pool.getConnection((err,connection) =>{
            if(err){
                console.log("数据库连接失败！")
            }
            else{
                var sql = sqlMap.choose;
                if(req.body[0]!='' && req.body[1]!='' && req.body[2]==''&& req.body[3]==''){  //查询游戏名称和代练等级
                    sql += 'gamename = ? and grade = ?';
                    connection.query(sql,[req.body[4],req.body[0],req.body[1]],(err,result)=>{
                        console.log("查询游戏名称和代练等级");
                        res.json(result);
                        console.log('查找用户成功！',result);
                        connection.release();
                    })
                    return
                }else if(req.body[0]!='' && req.body[1]=='' && req.body[2]!='' && req.body[3]==''){   //查询游戏名称和价格
                    sql += 'gamename = ? and money>=? and money<=? ';
                    console.log("查询游戏名称和价格");
                    connection.query(sql,[req.body[4],req.body[0],min,max],(err,result)=>{
                        res.json(result);
                        console.log('查找用户成功！',result);
                        connection.release();
                    })
                    return
                }else if(req.body[0]=='' && req.body[1]!='' && req.body[2]!='' && req.body[3]==''){ //查询代练等级和价格
                    sql += 'grade = ? and money>=? and money<=? ';
                    console.log("查询代练等级和价格");
                    connection.query(sql,[req.body[4],req.body[1],min,max],(err,result)=>{
                        res.json(result);
                        console.log('查找用户成功！',result);
                        connection.release();
                    })
                    return
                }else if(req.body[0]!='' && req.body[1]=='' && req.body[2]=='' && req.body[3]!=''){ //查询游戏名称和系统
                    sql += 'gamename =? and systems = ?';
                    console.log("查询游戏名称和系统");
                    connection.query(sql,[req.body[4],req.body[0],req.body[3]],(err,result)=>{
                        res.json(result);
                        console.log('查找用户成功！',result);
                        connection.release();
                    })
                    return
                }else if(req.body[0]=='' && req.body[1]!='' && req.body[2]=='' && req.body[3]!=''){ //查询代练等级和系统
                    sql += 'grade =? and systems = ?';
                    console.log("查询代练等级和系统");
                    connection.query(sql,[req.body[4],req.body[1],req.body[3]],(err,result)=>{
                        res.json(result);
                        console.log('查找用户成功！',result);
                        connection.release();
                    })
                    return
                }else if(req.body[0]=='' && req.body[1]=='' && req.body[2]!='' && req.body[3]!=''){ //查询价格和系统
                    sql += 'money>=? and money<=? and systems = ?';
                    console.log("查询价格和系统");
                    connection.query(sql,[req.body[4],min,max,req.body[3]],(err,result)=>{
                        res.json(result);
                        console.log('查找用户成功！',result);
                        connection.release();
                    })
                    return
                }else if(req.body[0]!='' && req.body[1]=='' && req.body[2]=='' && req.body[3]==''){ //查询游戏名称
                    sql += 'gamename = ?';
                    console.log("查询游戏名称");
                    connection.query(sql,[req.body[4],req.body[0]],(err,result)=>{
                        res.json(result);
                        console.log('查找用户成功！',result);
                        connection.release();
                    })
                    return
                }else if(req.body[0]=='' && req.body[1]!='' && req.body[2]=='' && req.body[3]==''){ //查询代练等级
                    sql += 'grade = ?';
                    console.log("查询代练等级");
                    connection.query(sql,[req.body[4],req.body[1]],(err,result)=>{
                        res.json(result);
                        console.log('查找用户成功！',result);
                        connection.release();
                    })
                    return
                }else if(req.body[0]=='' && req.body[1]=='' && req.body[2]!='' && req.body[3]==''){ //查询价格
                    sql += 'money>=? and money<=? ';
                    console.log("查询价格");
                    connection.query(sql,[req.body[4],min,max],(err,result)=>{
                        res.json(result);
                        console.log('查找用户成功！',result);
                        connection.release();
                    })
                    return
                }else if(req.body[0]=='' && req.body[1]=='' && req.body[2]=='' && req.body[3]!=''){ //查询系统
                    sql += 'systems = ?';
                    console.log("查询系统");
                    connection.query(sql,[req.body[4],req.body[3]],(err,result)=>{
                        res.json(result);
                        console.log('查找用户成功！',result);
                        connection.release();
                    })
                    return
                }else if(req.body[0]!='' && req.body[1]!='' && req.body[2]!='' && req.body[3]==''){ //查询游戏名称、代练等级、价格
                    sql += 'gamename = ? and grade = ? and money>=? and money<=?';
                    console.log("查询游戏名称、代练等级、价格");
                    connection.query(sql,[req.body[4],req.body[0],req.body[1],min,max],(err,result)=>{
                        res.json(result);
                        console.log('查找用户成功！',result);
                        connection.release();
                    })
                    return
                }else if(req.body[0]!='' && req.body[1]=='' && req.body[2]!='' && req.body[3]!=''){ //查询游戏名称、价格、系统
                    sql += 'gamename = ? and money>=? and money<=? and systems = ?';
                    console.log("查询游戏名称、价格、系统");
                    connection.query(sql,[req.body[4],req.body[0],min,max,req.body[3]],(err,result)=>{
                        res.json(result);
                        console.log('查找用户成功！',result);
                        connection.release();
                    })
                    return
                }else if(req.body[0]=='' && req.body[1]!='' && req.body[2]!='' && req.body[3]!=''){ //查询代练等级、价格、系统
                    sql += 'grade = ? and money>=? and money<=? and systems = ?';
                    console.log("查询代练等级、价格、系统");
                    connection.query(sql,[req.body[4],req.body[1],min,max,req.body[3]],(err,result)=>{
                        res.json(result);
                        console.log('查找用户成功！',result);
                        connection.release();
                    })
                    return
                }else if(req.body[0]!='' && req.body[1]!='' && req.body[2]=='' && req.body[3]!=''){ //查询游戏名称、代练等级、系统
                    sql += 'gamename = ? and grade = ? and systems = ?';
                    console.log("查询游戏名称、代练等级、系统");
                    connection.query(sql,[req.body[4],req.body[0],req.body[1],req.body[3]],(err,result)=>{
                        res.json(result);
                        console.log('查找用户成功！',result);
                        connection.release();
                    })
                    return
                }else if(req.body[0]!='' && req.body[1]!='' && req.body[2]!='' && req.body[3]!=''){
                    sql += 'gamename = ? and grade = ? and money>=? and money<=? and systems = ?'; //查询所有条件
                    console.log("所有条件查询");
                    connection.query(sql,[req.body[4],req.body[0],req.body[1],min,max,req.body[3]],(err,result)=>{
                        res.json(result);
                        console.log('查找用户成功！',result);
                        connection.release();
                    })
                    return
                }else{
                    sql = sqlMap.selectAllGame;; //查询所有数据
                    console.log("查询所有数据");
                    connection.query(sql,[req.body[4]],(err,result)=>{
                        res.json(result);
                        console.log('查找用户成功！',result);
                        connection.release();
                    })
                    return
                }
            }
        })
    },
/**------------------------------------------------------------------------------------------------------------ */

/**---------------------------------------用户登录验证-------------------------------------------------------- */
login(req,res,next){
    console.log('电话号码:',req.body.username)
    pool.getConnection((err,connection) =>{
        if(err){
            console.log("数据库连接失败！")
        }
        else{
            var sql = sqlMap.login;
            connection.query(sql,[req.body.username],(err,result)=>{
                res.json(result);
                console.log('查找用户成功！',result);
                connection.release();
            })
        }
    })
},
/**------------------------------------------------------------------------------------------------------------- */


/**---------------------------------------用户余额-------------------------------------------------------- */
selectMoneyAndGrade(req,res,next){    //查找用户余额
    console.log('账号:',req.body.telephone)
    pool.getConnection((err,connection) =>{
        if(err){
            console.log("数据库连接失败！")
        }
        else{
            var sql = sqlMap.selectMoneyAndGrade;
            connection.query(sql,[req.body.telephone],(err,result)=>{
                res.json(result);
                console.log('查找余额成功！',result);
                connection.release();
            })
        }
    })
},
rechargeMoney(req,res,next){   //充值
    var telephone = req.body.telephone
    var money = req.body.money
    console.log('账号:',telephone,'充值金额:',money)
    pool.getConnection((err,connection) =>{
        if(err){
            console.log("数据库连接失败！")
        }
        else{
            var sql = sqlMap.rechargeMoney;
            connection.query(sql,[money,telephone],(err,result)=>{
                res.json(result);
                console.log('充值成功！',result);
                connection.release();
            })
        }
    })
},
WithdrawalsMoney(req,res,next){      //提现
    var telephone = req.body.telephone
    var money = req.body.money
    console.log('账号:',telephone,'提现金额:',money)
    pool.getConnection((err,connection) =>{
        if(err){
            console.log("数据库连接失败！")
        }
        else{
            var sql = sqlMap.WithdrawalsMoney;
            connection.query(sql,[money,telephone],(err,result)=>{
                res.json(result);
                console.log('提现成功！',result);
                connection.release();
            })
        }
    })
},
setGameMoney(req,res,next){      //扣除代练费
    var telephone = req.body.telephone
    var money = req.body.money
    console.log('账号:',telephone,'代练费:',money)
    pool.getConnection((err,connection) =>{
        if(err){
            console.log("数据库连接失败！")
        }
        else{
            var sql = sqlMap.setGameMoney;
            connection.query(sql,[money,telephone],(err,result)=>{
                res.json(result);
                console.log('扣除成功！',result);
                connection.release();
            })
        }
    })
},
getGameMoney(req,res,next){      //扣除订金
    var telephone = req.body.telephone
    var Deposit = req.body.Deposit
    console.log('账号:',telephone,'代练费:',Deposit)
    pool.getConnection((err,connection) =>{
        if(err){
            console.log("数据库连接失败！")
        }
        else{
            var sql = sqlMap.getGameMoney;
            connection.query(sql,[Deposit,telephone],(err,result)=>{
                res.json(result);
                console.log('扣除成功！',result);
                connection.release();
            })
        }
    })
},
returnMoney(req,res,next){      //扣除订金
    var telephone = req.body.telephone
    var money = req.body.money
    console.log('账号:',telephone,'返还金额:',money)
    pool.getConnection((err,connection) =>{
        if(err){
            console.log("数据库连接失败！")
        }
        else{
            var sql = sqlMap.returnMoney;
            connection.query(sql,[money,telephone],(err,result)=>{
                res.json(result);
                console.log('返还金额成功！',result);
                connection.release();
            })
        }
    })
},
/**------------------------------------------------------------------------------------------------------------- */

/**-------------------------------------------代练等级提升------------------------------------------------------- */
upgrade(req,res,next){      //扣除订金
    var grade = req.body.grade
    var telephone = req.body.telephone
    console.log('账号:',telephone,'代练等级:',grade)
    pool.getConnection((err,connection) =>{
        if(err){
            console.log("数据库连接失败！")
        }
        else{
            var sql = sqlMap.upgrade;
            connection.query(sql,[grade,telephone],(err,result)=>{
                res.json(result);
                console.log('代练等级提升！',result);
                connection.release();
            })
        }
    })
},

/**--------------------------------------------------------------------------------------------------------- */

}