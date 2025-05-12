import React, { useState } from "react";

const Dashboard = () => {
  const [note, setNote] = useState("");
  const [totalStudents, setTotalStudents] = useState(120); // Dummy data
  const [totalVisitors, setTotalVisitors] = useState(350); // Dummy data
  const [adminImage, setAdminImage] = useState(null);

  // Handle Admin Image Upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAdminImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle Save Note
  const handleSaveNote = () => {
    alert("Note saved!");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl p-10 space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-indigo-700 mb-4">Admin Dashboard</h1>
          <p className="text-gray-500 text-lg">Manage your content here</p>
        </div>

        {/* Admin Image Upload Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-700">Upload Admin Image</h2>
          <div className="flex justify-center items-center border-2 border-dashed p-6 rounded-3xl bg-gray-100 hover:bg-gray-200 transition duration-300">
            {adminImage ? (
              <img
                src={adminImage}
                alt="Admin"
                className="w-40 h-40 rounded-full object-cover shadow-lg"
              />
            ) : (
              <p className="text-gray-500 text-lg">No image uploaded</p>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="ml-6 text-sm text-gray-600"
            />
          </div>
        </div>

        {/* Notes Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-700">Add Note</h2>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-3xl shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            rows="4"
            placeholder="Write your note here..."
          ></textarea>
          <button
            onClick={handleSaveNote}
            className="w-full py-3 bg-indigo-600 text-white rounded-3xl shadow-md hover:bg-indigo-700 transition duration-300"
          >
            Save Note
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-indigo-100 p-8 rounded-3xl shadow-xl text-center hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold text-indigo-700">Total Students</h3>
            <p className="text-4xl font-bold text-indigo-600">{totalStudents}</p>
          </div>
          <div className="bg-indigo-100 p-8 rounded-3xl shadow-xl text-center hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold text-indigo-700">Total Visitors</h3>
            <p className="text-4xl font-bold text-indigo-600">{totalVisitors}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
