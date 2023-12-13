import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import user from '../user.jpeg'
const Contact = () => {
  return (
    <div className='flex justify-center'>
      <div className='shadow-lg w-[20%]  mt-10 bg-gray-300 rounded-lg'>
        <img src={user} alt='' className='w-full  p-2 rounded-md' />
        <div className="m-2 p-2 w-[8rem] bg-[#3A47AF] text-white rounded-lg ">
          <a href="https://www.linkedin.com/in/sahil-raut-34405027b" className='font-medium flex space-x-2 ' target='_blank'><FaLinkedin className="my-auto  " /><span className='font-bold text-lg'>Linkdin</span></a>

        </div>
        <div className="m-2 p-2 w-[8rem] bg-[#D93025] text-white rounded-lg ">
          <a href="mailto:sahilgraut@gmail.com" className='font-medium flex space-x-2 ' target='_blank'><SiGmail className="my-auto  " /><span className='font-bold text-lg'>Gmail</span></a>

        </div>
      </div>
    </div>
  );
};

export default Contact;
