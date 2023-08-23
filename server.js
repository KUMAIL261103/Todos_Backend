const express = require('express');
//import routes 
const todoRoutes = require('./routes/todos');
const app = express();
//loading config from env file
require('dotenv').config();
const PORT = process.env.PORT || 4000;
//middleware to parse json response data
app.use(express.json());
//mount the todos apis
app.use("/api/v1",todoRoutes);
app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`)
})
//connect to the database
const dbConnect = require('./config/database');
dbConnect();
//default route 
app.get("/",(req,res)=>{
    res.send(`<h1>This is working. my first backend project</h1>`);
})

