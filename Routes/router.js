const express = require('express')
const userController = require('../controllers/userController')
const projectController =require('../controllers/projectController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const multerConfig = require('../Middlewares/multerMiddleware')
const router = new express.Router()

//register
router.post('/register',userController.register)

//login
router.post('/login',userController.login)

//add project

router.post("/add-project",jwtMiddleware,multerConfig.single('projectImage'),projectController.addProject)

//get all project
router.get("/all-project",jwtMiddleware,projectController.getAllprojects)

//get user projects
router.get("/user-project",jwtMiddleware,projectController.getUserprojects)
//get home projects
router.get("/home-project",projectController.getHomeprojects)

//edit project
router.put('/edit-project/:pid',jwtMiddleware,multerConfig.single("projectImage"),projectController.editProject)

//remove project
router.delete('/remove-project/:pid',jwtMiddleware,projectController.removeProject)

//edit user
router.put('/edit-user',jwtMiddleware,multerConfig.single("profileImage"),userController.editUser)
module.exports = router