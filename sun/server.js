let express = require('express')
let userRouter=require('./userRouter')
let chatRouter=require('./chatRouter')
let bodyParser=require("body-parser")
let cookieParser=require("cookie-parser")
let app = express()
let model=require('./model')
let Chat = model.getModel("chat");

const server=require('http').Server(app)
const io=require('socket.io')(server)
io.on('connection',function(socket){
    socket.on('send',function(data){
        const {from,to,content}=data
        const chatid=[from,to].sort().join('_')
        Chat.create({chatid,from,to,content},function(err,data){
            io.emit('recieve'+to,Object.assign({},data._doc))
        })
    })
})


app.use(bodyParser.json());  
app.use(cookieParser())
app.use('/user',userRouter)
app.use('/chat',chatRouter)

server.listen(8888,()=>console.log("express is running..."))