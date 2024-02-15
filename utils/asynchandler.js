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

//i am using promising also

/*
const asyncHandlerp = (func)=>{async (req,res,next)=>{
    Promise.resolve(func(req,res,next)).catch((error) =>{
        next(error)
    })
}}
*/

module.exports = asyncHandler;