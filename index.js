import express from 'express'
import cors from 'cors'
import env from 'dotenv'
import routers from './src/routes/index.js'

env.config()

let PORT = process.env.PORT



const app = express()
app.use(cors())
app.use('/',router)



app.listen(PORT,()=>console.log(`App Listening ${PORT}`))