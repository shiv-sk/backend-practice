class ApiError extends Error{
    constructor(StatusCode,message='something went wrong',errors=[],stack=""){
        super(message)
        this.StatusCode = StatusCode,
        this.errors = errors,
        this.message=message,
        this.data=null,
        this.success=false
    
    if(stack){
        this.stack = stack
    }else{
        Error.captureStackTrace(this,this.constructor)
    }
} 
}

module.exports = ApiError;