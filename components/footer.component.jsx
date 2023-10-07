import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='container p-8 mx-auto'>
        <div className='flex items-center justify-between font-bold text-white md:flex-row'>
          <ul className='flex text-lg sm:justify-center'>
            <li className='pr-4'>
              <Link
							passHref
                href='https://github.com/sstone0'
                target='_blank'
                rel='noreferrer'
								aria-label="Github">
                <FaGithub />
              </Link>
            </li>
            <li className='pr-4'>
              <Link
							passHref
                href='https://www.linkedin.com/in/shawn-stone/'
                target='_blank'
                rel='noreferrer'
								aria-label="LinkedIn">
                <FaLinkedinIn />
              </Link>
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
