import { Link } from 'react-router-dom';
import convent from '../assets/convent.jpg';
import { AccessTime, LocationOn, GetApp } from '@mui/icons-material';

function Contact() {
    return (
        <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen mt-[9%]">
            {/* Background Image Section */}
            <div className='relative h-[90vh] bg-cover bg-center' style={{ backgroundImage: `url(${convent})` }}></div>

            {/* Contact Information Section */}
            <div className="container mx-auto py-20 px-6">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-center text-blue-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Get In Touch</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="p-6 md:p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 transform hover:scale-105 text-center">
                        <AccessTime className="text-4xl md:text-5xl text-blue-500 mb-6 mx-auto" style={{ fontSize: "3rem" }} />
                        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center text-blue-800">Office Hours</h3>
                        <p className="text-gray-600 text-center overflow-wrap break-words">Monday - Friday: 8:00 AM - 3:00 PM</p>
                        <p className="text-gray-600 text-center overflow-wrap break-words">Saturday: 8:00 AM - 1:00 PM</p>
                        <p className="text-gray-600 text-center overflow-wrap break-words">Sunday: Closed</p>
                    </div>
                    <div className="p-6 md:p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 transform hover:scale-105 text-center">
                        <LocationOn className="text-4xl md:text-5xl text-blue-500 mb-6 mx-auto" style={{ fontSize: "3rem" }} />
                        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center text-blue-800">Visit Us</h3>
                        <p className="text-gray-600 text-center overflow-wrap break-words">Address: <br />Sector 62, Uncha Gao</p>
                        {/* Open in Google Maps link */}
                        <a 
                            href="https://www.google.com/maps?q=28.3125544,77.331075" 
                            target="_blank" 
                            className="text-blue-500 hover:text-blue-700 transition duration-300"
                        >
                            Open in Google Maps
                        </a>
                    </div>
                </div>
            </div>

            {/* Admission Information Section */}
            <div className="bg-blue-50 py-20 px-6">
                <div className="container mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-blue-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Admission Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="p-6 md:p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-800">Admission Process</h3>
                            <p className="text-gray-600 mb-6 overflow-wrap break-words">Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
                            <button
  onClick={() => {
    const link = document.createElement('a');
    link.href = '/admission.pdf';
    link.setAttribute('download', 'addmission.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
  className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-full hover:from-blue-600 hover:to-teal-500 transition duration-300 transform hover:scale-105"
>
  <GetApp className="mr-2" />
  Download Admission Form
</button>
<Link to='/form' className='inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-full hover:from-blue-600 hover:to-teal-500 transition duration-300 transform hover:scale-105 mt-2'>Addmission Form</Link>

                        </div>
                        <div className="p-6 md:p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-800">Criteria</h3>
                            <p className="text-gray-600 overflow-wrap break-words">Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
                        </div>
                        <div className="p-6 md:p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-800">Important Dates</h3>
                            <ul className="text-gray-600 space-y-2 overflow-wrap break-words">
                                <li>Admission Form Availability: March 1st</li>
                                <li>Last Date for Submission: March 31st</li>
                                <li>Entrance Test: April 15th</li>
                                <li>Announcement of Results: April 30th</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Google Map Section */}
            <div className="container mx-auto py-20 px-6">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-blue-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Find Us On The Map</h2>
                <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300">
                    <iframe
                        title="Google Maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.0!2d77.331075!3d28.3125544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDE4JzQ1LjIiTiA3N8KwMTknNTIuMiJF!5e0!3m2!1sen!2sin!4v1711372800000"
                        frameBorder="0"
                        className="w-full h-[600px] md:h-[400px] border-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </div>
    );
}

export default Contact;
