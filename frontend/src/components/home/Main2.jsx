import teachers from '../../assets/teachers.png'

function Main2() {
  return (
    <div className='pb-5 bg-gradient-to-br from-[#1E3A8A] to-[#4CAF50]'>
      <div className='container px-4 lg:px-0'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="mt-5 flex flex-col justify-center">
            <span className='text-white text-lg font-semibold'>You need to know..</span>
            <h2 className='font-bold text-3xl lg:text-5xl mb-4 text-white'>About SRS Convent</h2>
            <p className='text-white text-lg lg:text-xl leading-relaxed'>
            SRS Convent School, Ballabgarh is committed to nurturing students into confident individuals who can understand and adapt to their surroundings. The school focuses on developing strong character, instilling moral values, and encouraging spiritual growth. Education here goes beyond textbooks — it’s about helping students embrace the real values of life and grow into responsible, thoughtful human beings.
            </p>
          </div>
          <div className="lg:mt-0 mt-5 flex justify-center items-center">
            {/* <a 
              href="https://www.wolverhampton.gov.uk/sites/default/files/2023-01/Job%20ref%203-2023%20SDP%20-%20Recruitment%20brochure.pdf" 
              download="brochure.pdf"
            > */}
              <img src={teachers} className='lg:w-full w-[90%] rounded-lg shadow-lg' alt="Brochure" />
            {/* </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main2;
