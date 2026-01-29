import Task from '../database/model/USER.js'



export const AllTask = async(req,res)=>{
    //GET ALL TASK
    try {
        const alltask = await Task.findAll()
        if(!alltask)return res.status(400).json({msg:'task not found'})
         return res.status(200).json({nbHits:alltask.length,msg:alltask})   
    } catch (error) {
        console.log(error.message)
        res.status(400).json({msg:'soemthing went wrong'})
    }
    
}


//CREATE TASK 

export const CreateTask = async(req,res)=>{
    try {
        const {name,task} = req.body
        if( !name || !task){
            return res.status(400).json({msg:'name and task field must required'})
        }
        
    const existingTask = await Task.findOne({where:{name}})
    if(existingTask)return res.status(400).json({msg:'task alrady have please asingh new task '})
        
        
        const CreatingTask = await Task.create({name,task})
        
        return res.status(200).json({
            sucess:true,
            Task:CreatingTask,

        }) 

    } catch (error) {
        console.log(error.message)
        res.status(400).json({
            
            sucess:false,
            msg:'something went wrong'
        })
}}



//DELETE TASK

export const deleteTask = async(req,res)=>{
    try {
        const {id} = req.params
        if(!id){
            return res.status(400).json({msg:'id doesnt exit'})
        }
        const result = await Task.destroy({where:{id}})
        if(result === 0)return res.status(200).json({msg:result,del:'task not found'})
          return res.status(200).json({msg:'sucessful deleted'})
    } catch (error) {
        console.log(error.message)
        res.status(400).json({msg:'something went wrong'})
    }
}


//UPDATE TASK

export const UpdateTask = async(req,res)=>{
   try {
    const {id} = req.params
    if(!id)return res.status(400).json({msg:'id not find'})

                const {name , task} = req.body
     if(!name || !task)return res.status(200).json({msg:'name or task details are required'})


        const findId = await Task.findByPk(id)
if(!findId  )return res.status(400).json({msg:'Task not found '})
if(findId === 0  )return res.status(400).json({msg:'please enter uniw detailes'})

         await findId.update({name,task})
         
        return res.status(200).json({msg:findId})

} catch (error) {
    console.log(error.message)
    res.status(400).json({msg:'soemting went wrong'})
   } 
}

//get single task
export const singleTask =async (req,res)=>{
    try {
        const {id} = req.params
        if(!id)return res.status(400).json({msg:'id not found'})
         
            
        const getSingleTask = await Task.findByPk(id)
        return res.status(200).json({msg:getSingleTask})
    } catch (error) {
        console.log(error.message)
        res.status(400).json({msg:'something went wrong'})
    }
    
}

























