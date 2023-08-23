const todo = require('../model/todo');


exports.getalltodo = async (req,res)=>{
    try{
        //fetch all todo items
        const todos = await todo.find({});
        //response
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire Todo Data is fetched",

        })
    }catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Server Error",
        });
    }
}
exports.gettodobyid = async(req,res)=>{
    try{
        const id = req.params;
        const todobyID = await todo.findById({_id: id})
        //data not found
        if(!todobyID){
            return res.status(404)
            .json({
               success:false,
               message:"No data Found with given ID" 
            })
        }
        //data found
        res.status(200).json({
            success:true,
            data:todobyID,
            message:`Todo ${id} data successfully fetched`
        })
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"servvr Error",
        });
    }
}
