import express from 'express'
import userRouter from './router/user-router.js'
import {connectDb} from './database/dbconnetc/dbconnect.js'

const app = express()
app.use(express.json())
app.use('/api/v1',userRouter)

const port = process.env.PORT || 1212


const startDb = async()=>{
try {
    await connectDb()
    app.listen(port , ()=>{
    console.log(`server connected to ${port}`)
})

} catch (error) {
    console.log(error.message)
}
}


startDb()