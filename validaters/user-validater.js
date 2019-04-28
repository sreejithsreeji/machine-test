const JOI=require('joi');

const userSchema={
    create: JOI.object().keys({
        fullname:JOI.string()
        .regex(/^[A-Za-z]{3,20}/) 
        .required(),
        email:JOI.string().email({ minDomainSegments: 2 }).min(3).required(),
        password:JOI.string()
        .min(8).
        regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}/)
        .required()
    }),
    update:JOI.object().keys({
        fullname:JOI.string()
        .regex(/^[A-Za-z]{3,20}/) 
        .required(),
        email:JOI.string().email({ minDomainSegments: 2 }).min(3).required()
    })
}

function handleError(x,field){
  
}


module.exports={
    userSchema
}