import { motion } from "framer-motion";

const Students = () => {
  const extracurricularActivities = [
    "Music",
    "Dance",
    "Drama",
    "Art",
    "Sports",
    "Robotics",
    "Debate Club",
    "Science Club",
  ];

  const clubsAndSocieties = [
    "Literary Society",
    "Environment Club",
    "Astronomy Club",
    "Coding Club",
  ];

  const achievements = [
    { name: "developersumit8", achievement: "Backend Developer" },
    {
      name: "Modu",
      achievement: "Frontend Developer",
    },
    {
      name: "Tech Innovators Club",
      achievement: "Winners of Inter-School Robotics Competition",
    },
  ];

  return (
    <motion.div
      className="container mx-auto px-4 py-12 bg-gray-100 mt-[20%]"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-12 text-indigo-800">
        Student Life at SRS Convent School
      </h1>

      {/* Extracurricular Activities */}
      <motion.section
        className="mb-16 bg-white rounded-xl shadow-lg p-6 sm:p-8"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center text-indigo-700">
          Extracurricular Activities
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 text-center mb-6">
          Our students engage in a variety of extracurricular activities including:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {extracurricularActivities.map((activity, index) => (
            <motion.div
              key={index}
              className="bg-indigo-100 rounded-lg p-4 text-center"
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-sm sm:text-lg font-medium text-indigo-700">
                {activity}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Clubs and Societies */}
      <motion.section
        className="mb-16 bg-white rounded-xl shadow-lg p-6 sm:p-8"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center text-indigo-700">
          Clubs and Societies
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 text-center mb-6">
          Students can join various clubs and societies to explore their interests:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {clubsAndSocieties.map((club, index) => (
            <motion.div
              key={index}
              className="bg-green-100 rounded-lg p-4 text-center"
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-sm sm:text-lg font-medium text-green-700">{club}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Achievements */}
      <motion.section
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center text-indigo-700">
          Achievements
        </h2>
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
          <ul className="space-y-4">
            {achievements.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center space-x-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <div className="text-sm sm:text-base">
                  <span className="font-semibold text-gray-800">{item.name}:</span>
                  <span className="ml-2 text-gray-600">{item.achievement}</span>
                </div>
              </motion.li>
            ))}
          </ul>
        </div> 
      </motion.section>
    </motion.div>
  );
};

export default Students;
