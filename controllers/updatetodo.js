const todo = require('../model/todo')
exports.updatetodo= async(req,res)=> {
    try{
        const {id} = req.params;
        const {title,description} = req.body;
        const todobyid = await todo.findByIdAndUpdate(
            {_id: id},
            {title,description,updatedAt:Date.now()},
        )
            res.status(200)
            .json({
                success:true,
                data:todobyid,
                messsage:`Updated data Successfully of id-${id}`
            })


    }catch(err){
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"data not updated"
        })
    }
}