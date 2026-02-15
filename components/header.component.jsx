import Link from "next/link";
import { useContext } from "react";
import { MdOutlineMenu } from "react-icons/md";
import Button from "./button.component";
import { AppContext } from "../context/AppContext";

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
			}`}
		>
			<div id='nav' className='container flex justify-between mx-auto'>
				<Link href='/' passHref scroll={true}>
					<div
						className={`${
							isScrolled ? "text-gray-600" : ""
						} z-20 cursor-pointer text-xl sm:text-3xl`}
					>
						Shawn <span className='text-gray-400'>Stone</span>
					</div>
				</Link>
				<div
					className={`absolute flex h-screen justify-center sm:relative sm:block sm:h-fit sm:w-max ${
						isMobile && navIsShown ? "inset-0 block text-white" : "hidden"
					}`}
				>
					<ul
						className={`${
							isScrolled ? "text-gray-600" : "text-white"
						} z-30 flex flex-col items-center justify-center sm:flex-row`}
					>
						<li
							className='relative py-8 mx-2 text-6xl hover:-rotate-6 sm:py-0 sm:text-base'
							onClick={isMobile && navIsShown ? toggleNav : null}
						>
							<a href='#about'>
								<span className='p-3 transition-all ease-in-out rounded-md cursor-pointer decoration-2 underline-offset-4 hover:bg-sky-600 hover:text-white hover:underline'>
									About
								</span>
							</a>
						</li>
						<li
							className='relative py-8 mx-2 text-6xl hover:rotate-6 sm:py-0 sm:text-base'
							onClick={isMobile && navIsShown ? toggleNav : null}
						>
							<a href='#projects'>
								<span className='p-3 transition-all ease-in-out rounded-md cursor-pointer decoration-2 underline-offset-4 hover:bg-cyan-600 hover:text-white hover:underline'>
									Projects
								</span>
							</a>
						</li>
						<li className='py-8 mx-2 sm:py-0'>
							<a
								href='/shawn_stone_resume.pdf'
								target='_blank'
								rel='noreferrer'
							>
								<Button title='Resume' label='Resume' />
							</a>
						</li>
					</ul>
				</div>
				<div className={`${isScrolled ? 'text-black':'text-white'} z-20 w-[20px] text-2xl hover:cursor-pointer sm:hidden`}>
					<MdOutlineMenu onClick={toggleNav} />
				</div>
			</div>
		</div>
	);
};

export default Header;
