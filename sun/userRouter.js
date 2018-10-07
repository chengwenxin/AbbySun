let express = require("express")
let router = express.Router()
let model=require('./model')
let User = model.getModel("user");
let MD5=require('./utils/MD5')

//强制删除所有用户
// User.remove({},function(err,data){
//    if(data){
//     console.log("remove success")
//    }
// })


//遍历用户信息

router.get('/friends', (req, res) =>  {
    
    const {userid}=req.cookies
    if(!userid){
        res.json({code:1})
    }else{
        User.find({},{password:0},function(err,data){
            if(data){
                res.json({code:0,data})
            }else{
                res.json({code:2,message:"服务器出错"})
            }
        })
    }
   
})

//用户注册
router.post('/register', (req, res) =>  {
    let {user,password,type,phone,gender}=req.body
    User.find({user},function(err,data){
        if(data.length>0){
            res.json({code:1,message:"用户已注册"})
        }else{
            User.create({user,password:MD5(password),type,phone,gender},function(err,data){
                if(err){
                    res.json({code:1,message:"后端出错"})
                }else{
                    res.json({code:0,message:"注册成功"})
                }
            })
        }
    })

})


//登录验证
router.post('/login',function(req,res){
    const {user,password}=req.body
    User.findOne({user},function(err,doc){
        if(!doc){
            res.json({code:1,message:"用户姓名错误"})
        }else{
            if(doc.password==MD5(password)){
                res.cookie("userid",doc.id)
                const data=Object.assign({},doc._doc,{password:'******'})
                res.json({code:0,message:"登录成功",data})
            }else{
                res.json({code:1,message:"密码错误"})               
            }
        }
    })
})
module.exports = router