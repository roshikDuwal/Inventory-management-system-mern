import ApiError from "../utils/apiError.js"

const ErrorHandling=(err,req,res,next)=>{
    const obj={}
    if(err instanceof ApiError){
            obj['statuscode']=err.statusCode
            obj['message']=err.message
            obj['stack']=err.stack
    }else{
        obj['statuscode']=400
        obj['message']=err.message
        obj['stack']=err.stack
    }

    res.status(obj.statuscode).json(obj)
}

export default ErrorHandling