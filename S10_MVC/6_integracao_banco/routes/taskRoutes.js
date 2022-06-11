const express = require('express')
const router = express.Router()

const TaskController = require('../Controllers/TaskController')

router.get('/add', TaskController.createTask)
router.post('/add', TaskController.createTaskSave)
router.get('/', TaskController.showTasks)

module.exports= router