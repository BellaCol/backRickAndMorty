const axios=require('axios')
const APIKEY='pi-bellacol'


async function getCharById(req,res){
    const {id}=req.params
    try{
        const {data} = await axios(`https://rym2.up.railway.app/api/character/${id}?key=${APIKEY}`)
      
        if(!data.id){
            //alert("It doesn't exist")
           return res.status(404).json({error: 'Not Found'})
        }
        const character ={
            id: data.id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin,
            image: data.image,
            status: data.status
        }

        res.status(200).json(character)
    
    }catch(err){
       
        return res.status(500).send(`Error interno ${err.message}`)

    }
    
    
}

module.exports={
    getCharById
}

/*const axios= require('axios')


const APIKEY='pi-bellacol'
function getCharById(res,id){
    console.log('pasando por el llamadossss')
    console.log(id)
    if(!id){
        console.log('pasando ?????')
        throw new Error('ERROR DE TEST-id No válido')
    }
    axios.get(`https://rym2.up.railway.app/api/character/${id}?key=${APIKEY}`)
    .then(({data})=>{
        //destructuring de destructuring 
        //{data:{id,name,gender,species,image...etc}}
        console.log('pasando por el adossss')
        const character ={
            id: data.id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin,
            image: data.image,
            status: data.status
        }
        res.writeHead(200, {'Content-Type':'application/json'})
        .end(JSON.stringify(character))
    })
    
    .catch((error)=>{
        console.log('guao en error de la API rick and morty')
        res.writeHead(500,{'Content-Type':'text/plain'})
        .end(`error interno - ${error.message}`)
        
    })
}

module.exports = {
    getCharById: getCharById
}
*/