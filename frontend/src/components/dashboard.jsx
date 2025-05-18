import { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Sidebar from './sidebar';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const popupRef = useRef();

  // Close popup on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setPopupOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex-col mt-28">
      {/* Top Navbar */}
      <div className="bg-blue-500 shadow-md px-4 py-3 flex justify-between items-center md:ml-64">
        <div className="flex items-center gap-2">
          <button className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X /> : <Menu />}
          </button>
          <h1 className="text-xl font-bold text-white">Company Dashboard</h1>
        </div>

        {/* User Avatar with Popup */}
        <div className="relative flex items-center space-x-4" ref={popupRef}>
          <img
            src="https://via.placeholder.com/150"
            alt="User"
            className="w-10 h-10 rounded-full border cursor-pointer"
            onClick={() => setPopupOpen(!popupOpen)}
          />

          {popupOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white border rounded-xl shadow-lg p-4 z-50">
              <div className="text-sm font-medium">ID: 123456</div>
              <div className="text-sm font-medium">Name: Prakash</div>
              <hr className="my-2" />
              <button className="text-red-500 font-semibold hover:underline">Logout</button>
            </div>
          )}
        </div>

      </div>

      {/* Sidebar */}
      <aside>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-4 md:ml-64 space-y-4">
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {['Revenue', 'Users', 'Sales', 'Growth'].map((label, i) => (
            <div key={i} className="bg-white p-4 shadow-md rounded-2xl">
              <h3 className="text-sm text-gray-500">{label}</h3>
              <p className="text-xl font-bold text-gray-800">{(1000 * (i + 1)).toLocaleString()}</p>
            </div>
          ))}
        </div>

        {/* Charts Placeholder */}
        <div className="bg-white shadow-md p-6 rounded-2xl h-64 flex items-center justify-center text-gray-400">
          [Insert Chart Here]
        </div>

        {/* Table */}
        <div className="bg-white shadow-md rounded-2xl overflow-auto">
          <table className="w-full table-auto text-left text-sm">
            <thead className="bg-gray-100 text-gray-600 font-semibold">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Role</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {[
                { name: 'Prakash Suryavanshi', email: 'prakashsurya@gmail.com', role: 'Manager' },
                { name: 'Ashish', email: 'ashishsingh09560@gmail.com', role: 'Developer' },
              ].map((user, idx) => (
                <tr key={idx} className="border-t">
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
