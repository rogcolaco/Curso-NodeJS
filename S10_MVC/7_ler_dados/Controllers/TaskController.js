const Task = require('../Models/Task')
const { connect } = require('../routes/taskRoutes')

module.exports = class TaskController {
    
    static createTask(req, res) {
        res.render('tasks/create')
    }

    static async createTaskSave(req, res) {

        const taskData = {
            title: req.body.title,
            description: req.body.description,
            done: false,
        }

        await Task.create(taskData)

        res.redirect('/tasks')

    }

    static async showTasks(req, res) {

        const tasks = await Task.findAll({raw:true})

        res.render('tasks/all', {tasks})
    }


}