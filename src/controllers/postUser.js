const {User}=require('../DB_connection')

async function  postUser (req, res){
    try{ 
        const {email, password}=req.body
        if(!email || !password){
            return res.estatus(400).send('Faltan datos')
        }else{
            const[ user, created]= await User.findOrCreate({
                where: {email},
                defaults: {password}
            })
            if(!created){
                return res.status(200).json({user})
            }else{
                return res.status(201).json(user)
            }
        }
    }catch(e){
        return res.status(500).json({error:e.message})
    }

}

module.exports= postUser