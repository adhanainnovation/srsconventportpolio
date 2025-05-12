const Curriculum = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-20 mt-[8%]">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold text-center mb-16 text-blue-900">
          Our Curriculum
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "BalvatiKa (Grades Nur.LKG UKG First Second class)(Age: 3 to 8)",
              subjects: ["English", "Mathematics", "Hindi", "oral class", "Art & drawing"],
              color: "bg-gradient-to-r from-teal-500 to-teal-700"
            },
            {
              title: "Preparatory (Grades 3rd-4th-5th class)(Age:- 8-11)",
              subjects: ["English", "Mathematics", "Hindi", "Science or E.V.S", "Social Studies", "Art"],
              color: "bg-gradient-to-r from-orange-500 to-orange-700"
            },
            {
              title: "Middle (Grades 6th-7th-8th)(Age:-11-14)",
              subjects: ["English", "Mathematics", "Science (Physics, Chemistry, Biology)", "Social Studies", "Computer Science", "Physical Education", "Art"],
              color: "bg-gradient-to-r from-cyan-500 to-cyan-700"
            },
            {
              title: "Secondary (Grades 9th,10th,11th,12th)",
              streams: [
                {
                  name: "(Pahase-I)9th, 10th",
                  subjects: ["Science (Physics, Chemistry, Biology)", "Mathematics", "Computer Science", "English", "Hindi", "social studies"]
                },
                {
                  name: "(11th,12th)Science Stream",
                  subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "Computer Science", "English"]
                },
                {
                  name: "(11th,12th)Commerce Stream",
                  subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics", "English"]
                },
                {
                  name: "(11th,12th)Arts Stream",
                  subjects: ["History", "Political science", "Economics", "Mathematics", "English", "Geography"]
                }
              ],
              color: "bg-gradient-to-r from-indigo-500 to-indigo-700"
            }
          ].map((grade, index) => (
            <div key={index} className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className={`${grade.color} py-4 px-6`}>
                <h3 className="text-2xl font-bold text-white">{grade.title}</h3>
              </div>
              <div className="p-6">
                {grade.subjects ? (
                  <ul className="space-y-2">
                    {grade.subjects.map((subject, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {subject}
                      </li>
                    ))}
                  </ul>
                ) : (
                  grade.streams.map((stream, streamIdx) => (
                    <div key={streamIdx} className="mb-4">
                      <h4 className="text-xl font-semibold mb-2 text-blue-700">{stream.name}</h4>
                      <ul className="space-y-2">
                        {stream.subjects.map((subject, subIdx) => (
                          <li key={subIdx} className="flex items-center">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                            {subject}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              title: "Teaching Methodologies",
              description: "We use a blend of traditional and modern teaching techniques to cater to different learning styles.",
              icon: "📚"
            },
            {
              title: "Educational Resources",
              description: "Digital classrooms, interactive learning modules, and access to online educational platforms.",
              icon: "💻"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{item.icon}</span>
                <h3 className="text-2xl font-bold text-blue-800">{item.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
