const userModel=require('../models/user.js');
let tokenValidate=(req,res,next)=>{
    const token=req.params.token;
    userModel.validateToken(token)
        .then(response=>{
            if(response){
                req.tokenValid=true;
                next();
            }else{
                res.status(401).send({
                    status:false,
                    message:'unauthorized'
                })
            }
        })
};
const emailValidate=(req,res,next)=>{
    const email=req.body.email;

        userModel.isEmailExists(email)
            .then(response=>{
                if(response.length>0){
                    res.status(200)
                        .send({
                            message:'email already exists'
                        })
                }else{
                    next();
                }
            })


};


module.exports={
    tokenValidate,
    emailValidate
}