const express = require('express');
const router = express.Router();
//import controller
const {createTodo} = require("../controllers/createtodo");
const {getalltodo, gettodobyid}= require('../controllers/gettodos');
const {updatetodo}=require('../controllers/updatetodo');
const {deletetodo}=require("../controllers/deletetodo");
//define API routes
router.post("/createTodo",createTodo);
router.get("/gettodo",getalltodo);
router.put("/updatetodo/:id",updatetodo);
router.get("/gettodo/:id",gettodobyid);
router.delete("/deletetodo/:id",deletetodo);
module.exports = router