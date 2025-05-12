const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer'); // make sure this path is correct
const { addAdmission } = require('../controller/admissionform');

// Use multer.fields to handle multiple named files
const multiUpload = upload.fields([
  { name: 'studentImage', maxCount: 1 },
  { name: 'tc', maxCount: 1 },
  { name: 'studentAadhar', maxCount: 1 },
  { name: 'father_aadhar_path', maxCount: 1 },
  { name: 'marksheet', maxCount: 1 },
  { name: 'casteCert', maxCount: 1 },
]);

router.post('/add', multiUpload, addAdmission);

module.exports = router;
