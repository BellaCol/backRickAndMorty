
/*let myFavorites=[]


function postFav(req,res){

    const {name, id,species, gender, image, status, origin} = req.body

    if(!name || !id ||!species|| !gender || !image || !status || !origin) {
        return res.status(400).json({message: "That isnt a character"})
    }

    const persExist= myFavorites.find((pers)=>{
        return id ===pers.id
    })
    if(persExist){
        return res.status(400).json({message: "Character already in favorites"})
    }
    const character ={id, name, gender, species, origin, image, status}
   
    myFavorites.push(character)
    
    
    
    return res.status(200).json(myFavorites)
}

function deleteFav(req,res){
    const {id}=req.params
    /*const persFind = myFavorites.find(pers => pers.id === id)
    if(!persFind) {
        return res.status(400).json({message: "That character doesn't exist in favorites"})
    }*/
/*
    let index
    for(let i=0; i<myFavorites.length;i++){
        if(Number(id)===myFavorites[i].id){
           
            index=i
        }
    }
    myFavorites.splice(index,1)
   
    return res.status(200).json(myFavorites)
}

module.exports={
    postFav,
    deleteFav
}*/