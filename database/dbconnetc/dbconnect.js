import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
dotenv.config()
const sequelize = new Sequelize(
    process.env.PG_DATABASE,
    process.env.PG_USER,
    process.env.PG_PASSWORD,
   {
        host:process.env.PG_HOST,
        dialect:'postgres',
        logging:false
    }

)




const connectDb =async()=>{
    try {
       await sequelize.authenticate()
       await sequelize.sync({alter:true})
       console.log('db is connected')    
    } catch (error) {
        
    console.log('db is not connected')    
//console.log(error)    
}
    
}


export { sequelize  , connectDb} 