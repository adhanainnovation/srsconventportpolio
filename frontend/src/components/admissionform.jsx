// import React, { useState } from "react";
// const AdmissionForm = () => {
//   const [formData, setFormData] = useState({
//     name: "", dob: "", gender: "",
//     nationality: "", religion: "", category: "", caste: "", student_aadhar: "",
//     address: "", mobile: "", sibling: "", email: "", father_name: "",
//     father_qualification: "", mother_name: "", mother_qualification: "",
//     father_aadhar: "", income: ""
//   });

//   const [files, setFiles] = useState({
//     studentImage: null, tc: null, studentAadhar: null,
//     father_aadhar_path: null, marksheet: null, casteCert: null,
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     setFiles({ ...files, [e.target.name]: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const formDataToSend = new FormData();

//       // Add text inputs
//       Object.entries(formData).forEach(([key, value]) => {
//         formDataToSend.append(key, value);
//       });

//       // Add file inputs
//       Object.entries(files).forEach(([key, file]) => {
//         if (file) {
//           formDataToSend.append(key, file);
//         }
//       });

//       const response = await fetch("http://localhost:2025/api/addmission/add", {
//         method: "POST",
//         body: formDataToSend,
//       });

//       if (response.ok) {
//         const result = await response.json();
//         alert("🎉 Admission form submitted successfully!");
//       } else {
//         alert("❌ Failed to submit. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("❌ An error occurred. Please check your internet or server.");
//     }
//   };

//   return (
//     <div className="max-w-5xl mx-auto mt-24 mb-16 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-2xl border border-blue-200">
//       <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">🎓 S.R.S. Convent School</h1>
//       <p className="text-center text-lg text-gray-600 mb-8 font-medium">Admission Form (Session 2024-25)</p>

//       <form onSubmit={handleSubmit} className="space-y-8">

//         {/* Student Details */}
//         <div>
//           <h2 className="text-xl font-semibold text-green-700 border-b border-green-200 pb-1 mb-4">👦 Student Details</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <input name="name" placeholder="Student's Name*" required value={formData.name} onChange={handleChange}
//               className="border border-green-300 px-4 py-2 rounded shadow-sm w-full" />
//             <input type="date" name="dob" required value={formData.dob} onChange={handleChange}
//               className="border border-green-300 px-4 py-2 rounded shadow-sm w-full" />
//             <select name="gender" value={formData.gender} onChange={handleChange} required
//               className="border border-green-300 px-4 py-2 rounded shadow-sm w-full">
//               <option value="">Select Gender*</option>
//               <option>Male</option><option>Female</option><option>Prefer not to say</option>
//             </select>
//             <input name="nationality" placeholder="Nationality*" value={formData.nationality} onChange={handleChange}
//               className="border border-green-300 px-4 py-2 rounded shadow-sm w-full" />
//             <input name="religion" placeholder="Religion*" value={formData.religion} onChange={handleChange}
//               className="border border-green-300 px-4 py-2 rounded shadow-sm w-full" />
//             <select name="category" value={formData.category} onChange={handleChange} required
//               className="border border-green-300 px-4 py-2 rounded shadow-sm w-full">
//               <option value="">Select Category*</option>
//               <option value="General">General</option>
//               <option value="SC">SC</option>
//               <option value="ST">ST</option>
//               <option value="OBC">OBC</option>
//               <option value="Other">Other</option>
//             </select>
//             <input name="caste" placeholder="Caste*" value={formData.caste} onChange={handleChange}
//               className="border border-green-300 px-4 py-2 rounded shadow-sm w-full" />
//             <input name="student_aadhar" placeholder="Student Aadhar No.*" value={formData.student_aadhar} onChange={handleChange}
//               className="border border-green-300 px-4 py-2 rounded shadow-sm w-full" />
//           </div>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h2 className="text-xl font-semibold text-purple-700 border-b border-purple-200 pb-1 mb-4">📞 Contact Details</h2>
//           <textarea name="address" placeholder="Present Address*" required value={formData.address} onChange={handleChange}
//             className="border border-purple-300 px-4 py-2 rounded shadow-sm w-full" />
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <input name="mobile" placeholder="Mobile No.*" required value={formData.mobile} onChange={handleChange}
//               className="border border-purple-300 px-4 py-2 rounded shadow-sm w-full" />
//             <input name="email" placeholder="Email*" type="email" required value={formData.email} onChange={handleChange}
//               className="border border-purple-300 px-4 py-2 rounded shadow-sm w-full" />
//           </div>
//           <input name="sibling" placeholder="Sibling(s) in School" value={formData.sibling} onChange={handleChange}
//             className="border border-purple-300 px-4 py-2 rounded shadow-sm w-full mt-2" />
//         </div>

//         {/* Parent Info */}
//         <div>
//           <h2 className="text-xl font-semibold text-yellow-700 border-b border-yellow-200 pb-1 mb-4">👨‍👩‍👧 Parent Details</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <input name="father_name" placeholder="Father's Name*" required value={formData.father_name} onChange={handleChange}
//               className="border border-yellow-300 px-4 py-2 rounded shadow-sm w-full" />
//             <input name="father_qualification" placeholder="Father's Qualification" value={formData.father_qualification} onChange={handleChange}
//               className="border border-yellow-300 px-4 py-2 rounded shadow-sm w-full" />
//             <input name="mother_name" placeholder="Mother's Name*" required value={formData.mother_name} onChange={handleChange}
//               className="border border-yellow-300 px-4 py-2 rounded shadow-sm w-full" />
//             <input name="mother_qualification" placeholder="Mother's Qualification" value={formData.mother_qualification} onChange={handleChange}
//               className="border border-yellow-300 px-4 py-2 rounded shadow-sm w-full" />
//           </div>
//           <input name="father_aadhar" placeholder="Father's Aadhar No.*" required value={formData.father_aadhar} onChange={handleChange}
//             className="border border-yellow-300 px-4 py-2 rounded shadow-sm w-full mt-2" />
//           <input name="income" placeholder="Annual Income" value={formData.income} onChange={handleChange}
//             className="border border-yellow-300 px-4 py-2 rounded shadow-sm w-full mt-2" />
//         </div>

//         {/* Uploads */}
//         <div>
//           <h2 className="text-xl font-semibold text-pink-700 border-b border-pink-200 pb-1 mb-4">📂 Upload Documents</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
//             {[
//               ["studentImage", "Student's Photo*"],
//               ["tc", "Transfer Certificate*"],
//               ["studentAadhar", "Student Aadhar Card*"],
//               ["father_aadhar_path", "Father's Aadhar Card*"],
//               ["marksheet", "Last School Marksheet*"],
//               ["casteCert", "Caste Certificate (if applicable)"],
//             ].map(([name, label]) => (
//               <label key={name} className="block">
//                 {label}
//                 <input type="file" name={name} accept="image/*" required={name !== "casteCert"} onChange={handleFileChange}
//                   className="block w-full mt-1 border border-pink-300 px-3 py-1 rounded shadow-sm" />
//               </label>
//             ))}
//           </div>
//         </div>
//         {/* Submit Button */}
//         <div className="text-center pt-4">
//           <button type="submit"
//             className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded shadow-lg transition-all duration-300">
//             📤 Submit Admission Form
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };
// export default AdmissionForm;

import React, { useState } from "react";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: "", dob: "", gender: "",
    nationality: "", religion: "", category: "", caste: "", student_aadhar: "",
    address: "", mobile: "", sibling: "", email: "", father_name: "",
    father_qualification: "", mother_name: "", mother_qualification: "",
    father_aadhar: "", income: ""
  });

  const [files, setFiles] = useState({
    studentImage: null, tc: null, studentAadhar: null,
    father_aadhar_path: null, marksheet: null, casteCert: null,
  });

  const [formErrors, setFormErrors] = useState({}); // To store form validation errors

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFiles({ ...files, [e.target.name]: e.target.files[0] });
  };

  // Validation function
  const validateForm = () => {
    const errors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (value.trim() === "") {
        errors[key] = `${key} is required`;
      }
    });

    Object.entries(files).forEach(([key, file]) => {
      if (!file && key !== "casteCert") {
        errors[key] = `${key} is required`;
      }
    });

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      return; // Prevent form submission if there are validation errors
    }

    try {
      const formDataToSend = new FormData();

      // Add text inputs
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      // Add file inputs
      Object.entries(files).forEach(([key, file]) => {
        if (file) {
          formDataToSend.append(key, file);
        }
      });

      const response = await fetch("http://localhost:2025/api/addmission/add", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        const result = await response.json();
        alert("🎉 Admission form submitted successfully!");

        // Reset the form data after successful submission
        setFormData({
          name: "", dob: "", gender: "",
          nationality: "", religion: "", category: "", caste: "", student_aadhar: "",
          address: "", mobile: "", sibling: "", email: "", father_name: "",
          father_qualification: "", mother_name: "", mother_qualification: "",
          father_aadhar: "", income: ""
        });
        setFiles({
          studentImage: null, tc: null, studentAadhar: null,
          father_aadhar_path: null, marksheet: null, casteCert: null,
        });
        setFormErrors({});
      } else {
        alert("❌ Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("❌ An error occurred. Please check your internet or server.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-24 mb-16 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-2xl border border-blue-200">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">🎓 S.R.S. Convent School</h1>
      <p className="text-center text-lg text-gray-600 mb-8 font-medium">Admission Form (Session 2024-25)</p>

      <form onSubmit={handleSubmit} className="space-y-8">

        {/* Student Details */}
        <div>
          <h2 className="text-xl font-semibold text-green-700 border-b border-green-200 pb-1 mb-4">👦 Student Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="name" placeholder="Student's Name*" required value={formData.name} onChange={handleChange}
              className="border border-green-300 px-4 py-2 rounded shadow-sm w-full" />
            {formErrors.name && <span className="text-red-600">{formErrors.name}</span>}
            <input type="date" name="dob" required value={formData.dob} onChange={handleChange}
              className="border border-green-300 px-4 py-2 rounded shadow-sm w-full" />
            {formErrors.dob && <span className="text-red-600">{formErrors.dob}</span>}
            <select name="gender" value={formData.gender} onChange={handleChange} required
              className="border border-green-300 px-4 py-2 rounded shadow-sm w-full">
              <option value="">Select Gender*</option>
              <option>Male</option><option>Female</option><option>Prefer not to say</option>
            </select>
            {formErrors.gender && <span className="text-red-600">{formErrors.gender}</span>}
            <input name="nationality" placeholder="Nationality*" value={formData.nationality} onChange={handleChange}
              className="border border-green-300 px-4 py-2 rounded shadow-sm w-full" />
            {formErrors.nationality && <span className="text-red-600">{formErrors.nationality}</span>}
            <input name="religion" placeholder="Religion*" value={formData.religion} onChange={handleChange}
              className="border border-green-300 px-4 py-2 rounded shadow-sm w-full" />
            {formErrors.religion && <span className="text-red-600">{formErrors.religion}</span>}
            <select name="category" value={formData.category} onChange={handleChange} required
              className="border border-green-300 px-4 py-2 rounded shadow-sm w-full">
              <option value="">Select Category*</option>
              <option value="General">General</option>
              <option value="SC">SC</option>
              <option value="ST">ST</option>
              <option value="OBC">OBC</option>
              <option value="Other">Other</option>
            </select>
            {formErrors.category && <span className="text-red-600">{formErrors.category}</span>}
            <input name="caste" placeholder="Caste*" value={formData.caste} onChange={handleChange}
              className="border border-green-300 px-4 py-2 rounded shadow-sm w-full" />
            {formErrors.caste && <span className="text-red-600">{formErrors.caste}</span>}
            <input name="student_aadhar" placeholder="Student Aadhar No.*" value={formData.student_aadhar} onChange={handleChange}
              className="border border-green-300 px-4 py-2 rounded shadow-sm w-full" />
            {formErrors.student_aadhar && <span className="text-red-600">{formErrors.student_aadhar}</span>}
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold text-purple-700 border-b border-purple-200 pb-1 mb-4">📞 Contact Details</h2>
          <textarea name="address" placeholder="Present Address*" required value={formData.address} onChange={handleChange}
            className="border border-purple-300 px-4 py-2 rounded shadow-sm w-full" />
          {formErrors.address && <span className="text-red-600">{formErrors.address}</span>}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="mobile" placeholder="Mobile No.*" required value={formData.mobile} onChange={handleChange}
              className="border border-purple-300 px-4 py-2 rounded shadow-sm w-full" />
            {formErrors.mobile && <span className="text-red-600">{formErrors.mobile}</span>}
            <input name="email" placeholder="Email*" type="email" required value={formData.email} onChange={handleChange}
              className="border border-purple-300 px-4 py-2 rounded shadow-sm w-full" />
            {formErrors.email && <span className="text-red-600">{formErrors.email}</span>}
          </div>
          <input name="sibling" placeholder="Sibling(s) in School" value={formData.sibling} onChange={handleChange}
            className="border border-purple-300 px-4 py-2 rounded shadow-sm w-full mt-2" />
        </div>

        {/* Parent Info */}
        <div>
          <h2 className="text-xl font-semibold text-yellow-700 border-b border-yellow-200 pb-1 mb-4">👨‍👩‍👧 Parent Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="father_name" placeholder="Father's Name*" required value={formData.father_name} onChange={handleChange}
              className="border border-yellow-300 px-4 py-2 rounded shadow-sm w-full" />
            {formErrors.father_name && <span className="text-red-600">{formErrors.father_name}</span>}
            <input name="father_qualification" placeholder="Father's Qualification" value={formData.father_qualification} onChange={handleChange}
              className="border border-yellow-300 px-4 py-2 rounded shadow-sm w-full" />
            <input name="mother_name" placeholder="Mother's Name*" required value={formData.mother_name} onChange={handleChange}
              className="border border-yellow-300 px-4 py-2 rounded shadow-sm w-full" />
            {formErrors.mother_name && <span className="text-red-600">{formErrors.mother_name}</span>}
            <input name="mother_qualification" placeholder="Mother's Qualification" value={formData.mother_qualification} onChange={handleChange}
              className="border border-yellow-300 px-4 py-2 rounded shadow-sm w-full" />
          </div>
          <input name="father_aadhar" placeholder="Father's Aadhar No.*" required value={formData.father_aadhar} onChange={handleChange}
            className="border border-yellow-300 px-4 py-2 rounded shadow-sm w-full mt-2" />
          {formErrors.father_aadhar && <span className="text-red-600">{formErrors.father_aadhar}</span>}
          <input name="income" placeholder="Annual Income" value={formData.income} onChange={handleChange}
            className="border border-yellow-300 px-4 py-2 rounded shadow-sm w-full mt-2" />
        </div>

        {/* Uploads */}
        <div>
          <h2 className="text-xl font-semibold text-pink-700 border-b border-pink-200 pb-1 mb-4">📂 Upload Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            {[
              ["studentImage", "Student's Photo*"],
              ["tc", "Transfer Certificate*"],
              ["studentAadhar", "Student Aadhar Card*"],
              ["father_aadhar_path", "Father's Aadhar Card*"],
              ["marksheet", "Last School Marksheet*"],
              ["casteCert", "Caste Certificate (if applicable)"],
            ].map(([name, label]) => (
              <label key={name} className="block">
                {label}
                <input type="file" name={name} accept="image/*" required={name !== "casteCert"} onChange={handleFileChange}
                  className="block w-full mt-1 border border-pink-300 px-3 py-1 rounded shadow-sm" />
                {formErrors[name] && <span className="text-red-600">{formErrors[name]}</span>}
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center pt-4">
          <button type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded shadow-lg transition-all duration-300">
            📤 Submit Admission Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;