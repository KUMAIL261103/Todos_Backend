const todo = require('../model/todo');
exports.deletetodo = async(req,res)=>{
    try{
        const {id} = req.params;
        await todo.findByIdAndDelete(id);
        res.json({
            success:true,
            message:`data of id-${id} is deleted `
        })
        
    }
    catch(err){
         res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"data not deleted"
        })
    }
}