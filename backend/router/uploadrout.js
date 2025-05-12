const express=require('express')
const router=express.Router()
const upload=require('../middlewares/multer')

router.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded!' });
    }
    
    // If file is uploaded successfully
    res.json({
        message: 'Image uploaded successfully!',
        file: req.file  // Send back the uploaded file information
    });
});
module.exports=router