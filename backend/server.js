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

app.get('/',(req,res)=>{
    res.json({
        message:"You have reached backend api"
    })
})

app.listen(PORT,(err)=>{
    err && console.log('Error occured')
    console.log(`Your server is running on PORT ${PORT}`)
})