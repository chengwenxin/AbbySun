let express = require("express")
let router = express.Router()
let model=require('./model')
let Chat = model.getModel("chat");

// Chat.remove({},function(err,data){
//    if(data){
//     console.log("remove success")
//    }
// })

// 遍历聊天记录
router.post('/messagelist', (req, res) =>  {
    const {userid}=req.cookies
    if(userid){
        console.log('req.body',req.body)
        const {from}=req.body
        Chat.find({$or:[{from:from},{to:from}]},function(err,data){
            if(data){
                console.log('find data:',data)
                res.json({code:1,chat:'success',data})
            }else{
                console.log(err)
            }
        })
     
    }else{
        res.json({code:1,chat:'logout'}) 
    }
})

module.exports = router