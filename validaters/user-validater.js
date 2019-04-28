const JOI=require('joi');

const onError=(x)=>{
    console.log(x[0].type);
    switch(x[0].type){
        case 'any.empty':{
        return new Error('Fullname is required')
        }
    }
}
const userSchema={
    create: JOI.object().keys({
        fullname:JOI.string()
        .regex(/^[A-Za-z]{3,20}/) 
        .required()
        .error(err=>{
            return {
                message:handleError(err)
            }
        }),
        email:JOI.string().email().min(3).required(),
        password:JOI.string().min(8).required()
    })
}

function handleError(x){
    return x
}


module.exports={
    userSchema
}