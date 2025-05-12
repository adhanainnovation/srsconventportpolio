const multer=require('multer')
const crypto=require('crypto')
const path=require('path')

//multer this function use for give file loaction
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'srsimage/');
    },
    filename:(req,file,cb)=>{
        const randomname=crypto.randomBytes(10).toString('hex');
        const extname=path.extname(file.originalname);
        cb(null,`${randomname}${extname}`)
    }
})
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only JPEG, PNG, JPG images are allowed!'), false);
    }
  };
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 2 * 1024 * 1024 // 2 MB
    }
});
module.exports=upload