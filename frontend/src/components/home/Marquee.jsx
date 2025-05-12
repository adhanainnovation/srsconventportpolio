
import PropTypes from 'prop-types';

const Marquee = ({ text }) => {
  return (
    <div>
      <div className='bg-[#364649] p-1 text-light fw-bold shadow lg:text-2xl text-lg text-center'>
        <div className="marquee">
          <div className="marquee-content">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};

Marquee.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Marquee;
