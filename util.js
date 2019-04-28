const crypto=require('crypto');

let  createHash=(data)=> {
    const SECREAT='Manchester@13';
    return crypto.createHmac('sha256',SECREAT)
        .update(data.toString())
        .digest('hex');
};

let upload=(uploadConfig)=>{
    const multer=uploadConfig.engine;
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, `.${uploadConfig.folder}`)
        },
        filename: function (req, file, cb) {
          cb(null,  Date.now()+'.jpeg')
        },
        
      })
       
      var upload = multer({ storage: storage,limits:{fileSize:uploadConfig.maxSize},
        fileFilter:function(req,file,cb){
            console.log(file);
            if(file.mimetype==uploadConfig.fileType)
            cb(null,true)
            else{
                cb(new Error('Invalid file format'))
            } 
        }
     }).single(uploadConfig.field);
     return upload;
}

let getTokenFromHeader=(req)=>{

  const authHeader=req.headers.authorization;
  const token=authHeader.split(' ')[1];
  if(token) return token;
  else return null;
}
 module.exports={
     createHash,
     upload,
     getTokenFromHeader
 }