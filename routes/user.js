const express=require('express');
const router=express.Router();
const userCtrl=require('../controllers/user-controller.js');
const tokenValidater=require('../middlewares/token-validater.js');
const multer=require('multer');
const util=require('../util.js');

const uploadConfig={
    engine:multer,
    folder:'/uploads',
    fileType:'image/jpeg',
    maxSize:1*1000*1000,
    field:'profile'
}
const upload=util.upload(uploadConfig);

router.post('/',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
           // console.log(err);
            res.status(200).send({
                status:false,
                code:err.code,
                message:(err.code=="LIMIT_FILE_SIZE") ? 'File exceeds maximum limits..Max file size should be below 2MB':'Invalid file format.only allowed .jpeg'
            })
        }else{
            if(req.body){
                userCtrl.register(req,res);
            }
        }
    })

});

router.get('/token/generate',(req,res)=>{
    userCtrl.generateToken(req,res);
});

router.patch('/:token',tokenValidater.tokenValidate,(req,res)=>{

    userCtrl.update(req,res);
})

module.exports=router;