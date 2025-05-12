const db = require('../config/db');

exports.addAdmission = (req, res) => {
  const data = req.body;
  const files = req.files;

  const sql = `
    INSERT INTO admissions (
      name, dob, gender, nationality, religion, category, caste,
      student_aadhar, address, mobile, email, sibling,
      father_name, father_qualification, mother_name, mother_qualification,
      father_aadhar, income, student_image_path, tc_path,
      student_aadhar_path, father_aadhar_path, marksheet_path, caste_cert_path
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    data.name,
    data.dob,
    data.gender,
    data.nationality,
    data.religion,
    data.category,
    data.caste,
    data.student_aadhar,
    data.address,
    data.mobile,
    data.email,
    data.sibling,
    data.father_name,
    data.father_qualification,
    data.mother_name,
    data.mother_qualification,
    data.father_aadhar,
    data.income,

    // file paths from multer
    files.studentImage?.[0]?.filename || null,
    files.tc?.[0]?.filename || null,
    files.studentAadhar?.[0]?.filename || null,
    files.father_aadhar_path?.[0]?.filename || null,
    files.marksheet?.[0]?.filename || null,
    files.casteCert?.[0]?.filename || null,
  ];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('❌ Error inserting admission data:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(200).json({
      message: 'Admission data added successfully',
      id: result.insertId,
    });
  });
};
