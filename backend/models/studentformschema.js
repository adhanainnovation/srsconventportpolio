const db = require('../config/db');

const createAdmissionTable = `
CREATE TABLE IF NOT EXISTS admissions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  dob DATE NOT NULL,
  gender ENUM('Male', 'Female', 'Other') NOT NULL,
  nationality VARCHAR(50) NOT NULL,  -- set to NOT NULL
  religion VARCHAR(50) NOT NULL,  -- set to NOT NULL
  category VARCHAR(20) NOT NULL,  -- set to NOT NULL
  caste VARCHAR(50) NOT NULL,  -- set to NOT NULL
  student_aadhar VARCHAR(20) NOT NULL,
  address TEXT NOT NULL,
  mobile VARCHAR(15) NOT NULL,
  email VARCHAR(100) NOT NULL,
  sibling VARCHAR(100) NOT NULL,  -- set to NOT NULL
  father_name VARCHAR(100) NOT NULL,
  father_qualification VARCHAR(100) NOT NULL,  -- set to NOT NULL
  mother_name VARCHAR(100) NOT NULL,
  mother_qualification VARCHAR(100) NOT NULL,  -- set to NOT NULL
  father_aadhar VARCHAR(255) NOT NULL,
  income DECIMAL(10, 2) NOT NULL,  -- set to NOT NULL
  student_image_path VARCHAR(255) NOT NULL,
  tc_path VARCHAR(255) NOT NULL,
  student_aadhar_path VARCHAR(255) NOT NULL,
  father_aadhar_path VARCHAR(255) NOT NULL,
  marksheet_path VARCHAR(255) NOT NULL,
  caste_cert_path VARCHAR(255) NOT NULL,  -- set to NOT NULL
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
`;

db.query(createAdmissionTable, (err, result) => {
  if (err) {
    console.error('❌ Error creating admissions table:', err);
  } else {
    console.log('✅ Admissions table created successfully.');
  }
  db.end(); // Close connection
});