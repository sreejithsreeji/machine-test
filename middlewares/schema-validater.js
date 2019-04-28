const joi=require('joi');
const schema=require('../validaters/user-validater.js');



let userSchemaValidate=(req,res,next)=>{
    console.log(req.body)
    const userSchema=schema.userSchema.create;
   joi.validate(req.body,userSchema,(err,result)=>{
    
    res.status(400).send({
        message:err.details
    })
   });
  
}

module.exports={
    userSchemaValidate
}