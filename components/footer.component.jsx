import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='container mx-auto p-8'>
        <div className='flex items-center justify-between font-bold text-white md:flex-row'>
          <ul className='flex text-lg sm:justify-center'>
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
