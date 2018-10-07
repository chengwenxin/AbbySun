let utility=require('utility')

let MD5=str=>{
    let prefix="Vincent is a good boy !!!&!@*&^amtfI()43814^&&"
    return utility.md5(utility.md5(str+prefix))
}

module.exports=MD5