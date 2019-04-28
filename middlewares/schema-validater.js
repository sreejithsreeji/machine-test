const joi=require('joi');
const schema=require('../validaters/user-validater.js');



let userSchemaValidate=(req,res,next)=>{
    
    const userSchema=req.method=='POST'?schema.userSchema.create:schema.userSchema.update;
   joi.validate(req.body,userSchema,(err,result)=>{
    if(err){
        res.status(400).send({
            code:400,
            message:err.details[0].message
        })
    }else{
        next()
    }

   });
  
}

module.exports={
    userSchemaValidate
}