const express = require('express')
const server=express()
const router= require('./routes/index.js')
const morgan = require('morgan')
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 3001;
const { conn } = require('./DB_connection');

    server.use(express.json())
    server.use(cors())
    server.use(morgan('dev'))
    server.use('/rickandmorty',router)
    server.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Credentials', 'true');
        res.header(
           'Access-Control-Allow-Headers',
           'Origin, X-Requested-With, Content-Type, Accept'
        );
        res.header(
           'Access-Control-Allow-Methods',
           'GET, POST, OPTIONS, PUT, DELETE'
        );
        next();
     });


    conn.sync({force:false})
    .then(()=>{

        server.listen(PORT, () => console.log("Server starting in port", PORT))
    }) 
    
     
    
/*const http= require('http');
//const data=require('./utils/data.js');
const controllers=require('./controllers/getCharById')

const PORT=3001;
http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    if(req.url.startsWith('/rickandmorty/character/')){
        
       // let personaje
        //validar si id es numero o letra if(Number(id)!==NaN)
        //filter(char=>char.id !==id)//personaje=data.find(char=>char.id===Number(id))
        //for(let i=0; i<data.length;i++){
        //    if(Number(id)===data[i].id){
        //        personaje=data[i]
        //    }
        const id= req.url.split('/').pop()
        if(id.length!==0 && !isNaN(id)){
            console.log('pasando por aquiKI')
            console.log(typeof(id))
            console.log(id)
            controllers.getCharById(res,id)
        }else{
            console.log('pasando por aqui ELSE')
            res.writeHead(400,{'Content-Type':'text-plain'})
            .end('Id must be a number')
            
        }
         //if(personaje){
            //res.writeHead(200,{'Content-Type':'application/json'} )
            //return res.end(JSON.stringify(personaje))
            //}
        
    }else{
        return res.writeHead(404,{'Content-Type':'text-plain'}).end('Not Found')
    }


}).listen(PORT,'localhost')*/
