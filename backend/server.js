import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import 'dotenv/config'

const app = express()
const PORT = process.env.PORT||8000

// Middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))
app.use(helmet())

// Database Connection
import {dbConnection} from './src/config/db.js'
dbConnection()

// routers
import bookRouter from './src/routers/BookRouter.js'
app.use('/book',bookRouter)

// Global Error handling
app.use((err,req,res,next)=>{
    console.log(err)
        res.status(err.status || 404)
        res.json({
            status:'error',
            message:err.message
        })
    })


app.get('/',(req,res)=>{
    res.json({
        message:"You have reached backend api"
    })
})

app.listen(PORT,(err)=>{
    err && console.log('Error occured')
    console.log(`Your server is running on PORT ${PORT}`)
})