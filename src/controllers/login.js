const {User}=require('../DB_connection')

const login= async function (req, res){
    try{
        const{email, password}=req.query
        if(!email || !password){
            return res.status(400).send('Faltan datos')
        }else{
            const user = await User.findOne({
                where: {email}
            })
            if(!user){
                return res.status(404).json({message:'Usuario no encontrado'})
            }else{
                if(Number(user.password)===Number(password)){
                    return res.status(200).json({access: true, userId:user.id})
                }else{
                    return res.status(403).json({message:'Contraseña incorrecta'})
                }
            }
        }
    }catch(e){
        return res.status(500).json({error:e.message})
    }
}

module.exports = login
