const {Favorite}=require('../DB_connection')

async function deleteFav(req, res){
    try{
        const id=req.params.id
        await Favorite.destroy({
            where:{id}
        })
        const favorites= await Favorite.findAll()
        res.status(200).json(favorites)

    }catch(e){
        res.status(500).json({error:e.message})
    }
}

module.exports=deleteFav