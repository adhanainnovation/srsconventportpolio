import { Link } from 'react-router-dom';
import convent from '../../assets/convent.jpg'

const About = () => {
  return (
    <div className="bg-gradient-to-b from-purple-100 via-blue-50 to-pink-100 py-20 mt-[8%]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6 text-blue-800">Srs Convent school</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nurturing young minds and shaping future leaders since 32 year's
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mb-20">
          
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl font-semibold mb-6 text-blue-700">About Society</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
            Subedar Sumera Ram Education Welfare Society was founded in 1993 by Mr. Prem Singh Adhana ji in loving memory of his father, Late Subedar Sumera Ram. The society, based in Uncha Gaon, Ballabgarh (Dist. Faridabad), is a registered organization committed to providing quality education at affordable fees.

SRS Convent School was established under this society with a vision to bring a fresh perspective to education in Haryana. Over the years, we have built a reputation through our clear vision, unwavering dedication, and consistent academic performance. Our goal is not just to shape brilliance from raw talent, but to nurture each child’s individuality, open new doors of opportunity, and empower them to succeed on a global stage.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-10">
            <img 
              src={convent}
              alt="Springdale Public School Campus"
              className="w-full h-auto object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
        
        <div className="bg-white p-10 rounded-xl shadow-lg">
          <h2 className="text-3xl font-semibold mb-6 text-blue-700 text-center">Our Legacy</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
          Since its inception in 1998, SRS Convent School has grown into a respected institution recognized for its unwavering commitment to quality education. Over the years, we have continuously evolved — adopting modern teaching methods and expanding our curriculum to meet the ever-changing needs of our students. Our supportive and dynamic learning environment has helped us build a strong reputation that stands the test of time.
          </p>
        </div>

        <div className="mt-20 text-center">
          <Link to="/events" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition duration-300">
            Explore Our Programs
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;