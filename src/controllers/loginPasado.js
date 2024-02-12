/*const users=require('../utils/users.js')

function loginPasado(req, res){
    const{email, password}=req.query
   const userExist = users.find((user)=>{
        return user.email===email&&user.password===password
   })
   if(userExist){
    res.status(200).json({access:'true'})
   }else{
    res.status(200).json({access:'false'})
   }
}

module.exports={
    loginPasado
}*/