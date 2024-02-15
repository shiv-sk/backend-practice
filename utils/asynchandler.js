const asyncHandler = (func) =>{async (re,res,next) =>{
    try{
        return await func(req,res.next);
    }catch(err){
        res.status(err.code || 500).json({
            status:'false',
            message:err.message
        })
    }
}}

module.exports = asyncHandler;