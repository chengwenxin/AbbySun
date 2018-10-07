let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/data')
mongoose.connection.on('connected', () =>  {console.log("mongodb connected success")})

//用户模型和聊天模型
let models={
    user:{
        user: {type:String, require:true}, 
        password: {type:String, require:true},
        type: {type:String, require:true},
        gender: {type:String, require:true},
        phone: {type:String, require:true},
        icon:{type:String,}
    },
    chat:{
        chatid: {type:String, require:true},        
        from: {type:String, require:true}, 
        to: {type:String, require:true}, 
        read:{type:Boolean,default:false},
        content: {type:String, require:true,default:''},
        time: {type:Number, require:true,default:new Date().getTime()}, 
    }
}

//遍历构造模型
for(let key in  models){
  mongoose.model(key, new mongoose.Schema(models[key]))
}


module.exports={
    getModel:function(name){
        return mongoose.model(name)
    }
}