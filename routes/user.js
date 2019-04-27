const express=require('express');
const router=express.Router();
const userCtrl=require('../controllers/user-controller.js');
const tokenValidater=require('../middlewares/token-validater.js');
router.post('/',(req,res)=>{
    userCtrl.register(req,res);
});

router.get('/token/generate',(req,res)=>{
    userCtrl.generateToken(req,res);
});

router.patch('/:token',tokenValidater.tokenValidate,(req,res)=>{

    userCtrl.update(req,res);
})

module.exports=router;