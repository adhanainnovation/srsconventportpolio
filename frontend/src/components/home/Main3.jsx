import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';
import convent from '../../assets/convent.jpg'
import img2 from '../../assets/img2.jpeg'
import '../../App.css'

function Main3() {
    return (
        <div className="parallax-container">
            <div
                className="parallax-bg mt-[40%] d-flex justify-content-center align-items-center bg-center bg-no-repeat zoom-on-hover"
                style={{
                    backgroundImage: `url(${convent})`,
                }}
            ></div>
            <div className="container-fluid bg-dark position-absolute text-light d-flex justify-content-center align-items-center h-100 w-100 bg-opacity-25 ">
                <div className='container'>
                    <div className='w-100 h-100 grid grid-cols-1 lg:grid-cols-2'>
                        <div className="flex flex-col justify-center">
                            <h2 className='fw-bold text-2xl lg:text-4xl mb-4'> Educational Approach:</h2>
                            <p className='text-lg lg:text-2xl'>
                            SRS Convent School places a strong emphasis on value-based education, aiming to support the all-round growth of each student. The school nurtures not just academic excellence but also focuses on building character, strengthening moral values, and encouraging spiritual awareness.

                            </p>
                            <span>
                                <Link className='btn shadow-lg mt-5 fw-bold rounded-l-full rounded-r-full btn-primary'>
                                    Go Explore <ArrowRightAltIcon />
                                </Link>
                            </span>
                        </div>
                        <div className="hidden lg:flex justify-center">
                            <img src={img2} alt="" className='shadow-lg rounded-4 w-[700px] h-[400px]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main3;