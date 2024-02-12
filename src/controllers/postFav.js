const {Favorite}=require('../DB_connection')

async function postFav(req, res){
const{id,name,origin, status, image, species, gender}=req.body
if(!id||!name || ! status ||! image ||! species ||! gender|| ! origin){
    return res.status(400).send('Faltan datos')
}else{
    try{
   
        const {favorite, created}= await Favorite.findOrCreate({
            where:{id},
            defaults:{
                name,
                status,
                image,
                gender,
                species,
                origin

            }
            
        })
       
        
        if(!created){
            const favorites = await Favorite.findAll()
            return res.status(201).json(favorites)
       }else{
            return res.status(409).json({message:'Ese persoanje ya existe en Favoritos'})
        
        } 
    }catch(e){
        return res.status(500).json({error: e.message})
    }
   
}

}



module.exports=postFav