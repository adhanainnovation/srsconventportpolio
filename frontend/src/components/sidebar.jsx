import { Home, BarChart2, Users, Settings } from 'lucide-react';

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  // Dummy handler (real project me yeh navigate function hoga)
  const handleItemClick = (label) => {
    alert(`Clicked on ${label}`);
    // Example: navigate(`/dashboard/${label.toLowerCase()}`)
  };

  return (
    <div className={`bg-white w-64 ${sidebarOpen ? 'block' : 'hidden'} md:block md:absolute md:top-4 md:left-0 min-h-[calc(102vh-2rem)] mt-16 rounded-lg`}>
      <div className="mt-4 p-4 text-lg font-semibold border-b bg-white">Company Logo</div>
      <nav className="p-4 space-y-2 bg-white">
        <SidebarItem icon={<Home />} label="Home" onClick={() => handleItemClick('Home')} />
        <SidebarItem icon={<BarChart2 />} label="Analytics" onClick={() => handleItemClick('Analytics')} />
        <SidebarItem icon={<Users />} label="Employees" onClick={() => handleItemClick('Employees')} />
        <SidebarItem icon={<Settings />} label="Settings" onClick={() => handleItemClick('Settings')} />
      </nav>
    </div>
  );
}

function SidebarItem({ icon, label, onClick }) {
  return (
    <div
      className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-100 cursor-pointer"
      onClick={onClick}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}