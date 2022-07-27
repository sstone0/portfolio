import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='container mx-auto p-8'>
        <div className='flex justify-between md:flex-row items-center text-white font-bold'>
          <ul className='sm:justify-center flex text-lg'>
            <li className='pr-4'>
              <a
                href='https://github.com/sstone0'
                target='_blank'
                rel='noreferrer'>
                <FaGithub />
              </a>
            </li>
            <li className='pr-4'>
              <a
                href='https://www.linkedin.com/in/shawn-stone/'
                target='_blank'
                rel='noreferrer'>
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
          <div>
            <span>{new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
