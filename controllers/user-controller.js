const userModel=require('../models/user.js');
const moment=require('moment');



const register=(req,res)=>{
    const user=req.body;
    const file=req.file;
    userModel.isEmailExists(user.email)
        .then(response1=>{

            if(response1.length<=0){
                userModel.register(user)
                    .then(response=>{

                        userModel.getUser(response.insertId,'id')
                            .then(user=>{
                                res.status(201).send({
                                    status:true,
                                    message:'registration completed sucessfully',
                                    data:user[0]
                                })
                            })
                    })
                    .catch(err=>{
                        console.log(err);
                        res.status(500).send({message:'internel server error'})
                    })
            }else{
                res.status(200)
                    .send({
                        message:'email already exists'
                    })
            }
        });
};
let generateToken=(req,res)=>{
    const email=req.query.email;
    if(email){
        const token=userModel.generateToken(email+moment().format('YYYY-MM-DD hh:mm:ss'));
        userModel.saveToken(email,token)
            .then(response=>{
                res.status(200).send({
                    status:true,
                    message:'Token generated sucessfully',
                    token:token
                })
            })
            .catch(err=>{
                res.status(500).send('internal server error');
            })
    }
};

let update=(req,res)=>{
    const user=req.body;
    const token=req.params.token;
    userModel.updateUser(user,token)
        .then(response=>{
            if(response.changedRows>0){
               userModel.getUser(token,'token')
                   .then(user=>{
                       res.status(200).send({
                           status:true,
                           message:'profile updated',
                           data:user
                       })
                   })
                   .catch(err=>{
                       console.log(err)
                   })
            }else{
                res.status(200).send({
                    status:true,
                    message:'Nothing to update',

                })
            }
        })

}

module.exports={
    register,
    generateToken,
    update
}