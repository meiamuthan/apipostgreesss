import express from 'express'
const router = express.Router()
import {AllTask,deleteTask , CreateTask,UpdateTask , singleTask } from '../contorller/user-contorller.js'
router.route('/').get(AllTask).post(CreateTask)
router.route('/:id').delete(deleteTask).patch(UpdateTask).get(singleTask)
export default router