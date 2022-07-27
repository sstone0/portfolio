import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "../pages/index";
import { MdOutlineMenu } from "react-icons/md";
import Button from "../components/button.component";

const Header = () => {
  const { isScrolled, isMobile, navIsShown, setNavIsShown } =
    useContext(AppContext);

  const toggleNav = () => {
    const value = !navIsShown;
    setNavIsShown(value);
  };

  return (
    <div
      id='header'
      className={`mx-auto font-bold text-white z-40 fixed inset-0 h-fit transition-all ${
        isScrolled ? "text-black drop-shadow-lg bg-white p-2" : "p-6"
      }`}>
      <div id='nav' className='container mx-auto flex justify-between'>
        <Link href='/' passHref scroll={true}>
          <div className='sm:text-3xl text-xl cursor-pointer z-20'>
            Shawn <span className='text-gray-400'>Stone</span>
          </div>
        </Link>
        <div
          className={`flex justify-center sm:block h-screen sm:h-fit absolute sm:relative sm:w-max ${
            isMobile && navIsShown ? "block text-white inset-0" : "hidden"
          }`}>
          <ul className='flex items-center flex-col sm:flex-row justify-center z-30'>
            <li
              className='relative mx-4 text-6xl sm:text-base py-8 sm:py-0'
              onClick={isMobile && navIsShown ? toggleNav : null}>
              <Link href='/#about' passHref scroll={false}>
                <span className='cursor-pointer py-4 hover:underline decoration-2 underline-offset-4 transition-all ease-in-out '>
                  About
                </span>
              </Link>
            </li>
            <li
              className='relative mx-4 text-6xl sm:text-base py-8 sm:py-0'
              onClick={isMobile && navIsShown ? toggleNav : null}>
              <Link href='/#projects' passHref scroll={false}>
                <span className='cursor-pointer py-4 py-4 hover:underline decoration-2 underline-offset-4 transition-all ease-in-out'>
                  Projects
                </span>
              </Link>
            </li>
            <li className='py-8 sm:py-0'>
              <a
                href='/shawn_stone_resume.pdf'
                target='_blank'
                rel='noreferrer'>
                <Button title='Resume' label='Resume' />
              </a>
            </li>
          </ul>
        </div>
        <div className='sm:hidden text-2xl z-20 hover:cursor-pointer'>
          <MdOutlineMenu onClick={toggleNav} />
        </div>
      </div>
    </div>
  );
};

export default Header;
