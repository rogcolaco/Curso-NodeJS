const { raw } = require('express')
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

    static async removeTask(req, res){

        const id = req.body.id

        await Task.destroy({where: {id: id}})

        res.redirect('/tasks')

    }

    static async updateTask(req, res){
        const id = req.params.id

        const task = await Task.findOne({ raw: true, where: {id: id}})

        res.render('tasks/edit', {task})
    }

    static async updateTaskSave(req, res) {

        const id = req.body.id
        
        const taskData = {
            title: req.body.title,
            description: req.body.description,
            done: false,
        }

        await Task.update( taskData, {where: {id: id}})

        res.redirect('/tasks')
        
    }

}