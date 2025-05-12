import srsconvant from '../../assets/srsconvant.png';

function Timer() {
  return (
    <div className='mt-3 mb-3 p-3 lg:p-5 text-light bg-gradient-to-br from-[#1E3A8A] to-[#4CAF50] opacity-90'>
      <div className='container gap-3 lg:gap-0 flex flex-col lg:flex-row justify-around lg:p-5 p-4 items-center'>
        <div className='flex flex-col lg:gap-5 gap-3'>
          <span className='text-small lg:text-2xl text-white'>
            Admission open ( 2025-26 )
          </span>
          <span className='text-lg hidden lg:block lg:text-4xl lg:w-[400px] w-auto font-bold text-white'>
            Srs Convent School <br />
            Sector 62.
          </span>
        </div>
        <div className='flex justify-start items-center'>
          <img src={srsconvant} alt="logo" className='w-[300px] opacity-90' />
        </div>
      </div>
    </div>
  );
}

export default Timer;
