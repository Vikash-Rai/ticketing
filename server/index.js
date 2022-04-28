// import DBConnection from './database/db.js'
import Router from './routes/route.js'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import multer from 'multer'
const app = express();//we are initializing express as a function in app

app.use(cors())
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',Router);

const PORT=8000;
app.listen(PORT,()=>{
    console.log("Server running")
})

// DBConnection();