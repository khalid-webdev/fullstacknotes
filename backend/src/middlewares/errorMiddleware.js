const errorMiddleware =(error,req,res,next)=>{
     res.status(500).json({success: false,message:error.message || "Server Error"});
};

module.exports = errorMiddleware;
