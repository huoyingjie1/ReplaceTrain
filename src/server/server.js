const routerApi = require('./router');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const app = express();

app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods','PUT,GET,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers','X-Requestd-With')
    res.header('Access-Control-Allow-Headers','Content-Type')
    next()
});
const result = {
    "status":"200",
    "message":"success",
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use('/api',routerApi);

app.listen(3000,()=>{
    console.log("服务器在3000端口打开......");
})
