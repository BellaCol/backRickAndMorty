const router = require('express').Router()
const {getCharById}= require('../controllers/getCharById.js')
const postFav= require('../controllers/postFav')
const postUser= require('../controllers/postUser')
const deleteFav= require('../controllers/deleteFav')
const login = require('../controllers/login')



router.get("/character/:id",getCharById)
router.get("/login", login)
router.post("/login",postUser)
router.post("/fav",postFav)
router.delete("/fav/:id", deleteFav)


module.exports=router