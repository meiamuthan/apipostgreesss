import { DataTypes } from "sequelize";
import {sequelize} from "../dbconnetc/dbconnect.js";

const Task =  sequelize.define('Task',{
   id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
   },
   name:{
    type:DataTypes.STRING(50),
    allowNull:false,
    unique:true
   },
   task:{
type:DataTypes.STRING(150),
    allowNull:false
   }
},{
    tableName:'taskmanager',
    timestamps:false
})
 
export default Task