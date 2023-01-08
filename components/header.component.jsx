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
      className={`fixed inset-0 z-40 mx-auto h-fit font-bold text-white transition-all ${
        isScrolled ? "bg-white p-2 text-black drop-shadow-lg" : "p-6"
      }`}>
      <div id='nav' className='container mx-auto flex justify-between'>
        <Link href='/' passHref scroll={true}>
          <div className='z-20 cursor-pointer text-xl sm:text-3xl'>
            Shawn <span className='text-gray-400'>Stone</span>
          </div>
        </Link>
        <div
          className={`absolute flex h-screen justify-center sm:relative sm:block sm:h-fit sm:w-max ${
            isMobile && navIsShown ? "inset-0 block text-white" : "hidden"
          }`}>
          <ul className='z-30 flex flex-col items-center justify-center sm:flex-row'>
            <li
              className='relative mx-2 py-8 text-6xl hover:-rotate-6 sm:py-0 sm:text-base'
              onClick={isMobile && navIsShown ? toggleNav : null}>
              <Link href='/#about' passHref scroll={false}>
                <span className='cursor-pointer rounded-md p-3 decoration-2 underline-offset-4 transition-all ease-in-out hover:bg-sky-600 hover:text-white hover:underline'>
                  About
                </span>
              </Link>
            </li>
            <li
              className='relative mx-2 py-8 text-6xl hover:rotate-6  sm:py-0 sm:text-base'
              onClick={isMobile && navIsShown ? toggleNav : null}>
              <Link href='/#projects' passHref scroll={false}>
                <span className='cursor-pointer rounded-md p-3 decoration-2 underline-offset-4 transition-all ease-in-out hover:bg-cyan-600 hover:text-white hover:underline'>
                  Projects
                </span>
              </Link>
            </li>
            <li className='mx-2 py-8 sm:py-0'>
              <a
                href='/shawn_stone_resume.pdf'
                target='_blank'
                rel='noreferrer'>
                <Button title='Resume' label='Resume' />
              </a>
            </li>
          </ul>
        </div>
        <div className='z-20 text-2xl hover:cursor-pointer sm:hidden'>
          <MdOutlineMenu onClick={toggleNav} />
        </div>
      </div>
    </div>
  );
};

export default Header;