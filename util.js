const crypto=require('crypto');

let  createHash=(data)=> {
    const SECREAT='Manchester@13';
    return crypto.createHmac('sha256',SECREAT)
        .update(data.toString())
        .digest('hex');
};
 module.exports={
     createHash
 }