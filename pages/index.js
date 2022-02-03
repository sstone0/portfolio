import Head from 'next/head';
import Link from 'next/link';
import {
	FaArrowAltCircleDown,
	FaCode,
	FaCropAlt,
	FaLinkedinIn,
	FaGithub,
	FaSignal,
} from 'react-icons/fa';
import { MdOutlineMenu } from 'react-icons/md';
import PROJECT_DATA from '../project_data';

import Button from '../components/button.component';
import ProjectCard from '../components/project-card.component';
import { useEffect, useState } from 'react';

const Home = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [navIsShown, setNavIsShown] = useState(false);

	const toggleNav = () => {
		const value = !navIsShown;
		console.log(value);
		setNavIsShown(value);
	};

	useEffect(() => {
		function handleScroll() {
			if (window.pageYOffset > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		}
		window.addEventListener('scroll', handleScroll);
	}, [isScrolled]);

	return (
		<div>
			<Head>
				<title>
					Frontend Web Developer and Digital Marketing Specialist - Shawn Stone
				</title>
				<meta
					name="description"
					content="Experienced Frontend Developer with a specialty in UX/UI design along with Digital Marketing."
				/>
				<link rel="icon" href="/favicon.svg" />
			</Head>

			<main>
				<div
					id="header"
					className={`mx-auto font-bold text-white z-50 fixed inset-0 h-fit transition-all ${
						isScrolled ? 'text-black drop-shadow-lg bg-white' : ''
					}`}
				>
					<div
						id="overlay"
						className={`h-screen w-screen absolute z-2000 bg-slate-800 z-10 ${
							navIsShown ? 'block text-white' : 'hidden'
						}`}
					></div>
					<div id="nav" className="container mx-auto flex justify-between p-4">
						<Link href="/" scroll={true}>
							<div className="sm:text-3xl text-xl cursor-pointer z-20">
								Shawn <span className="text-gray-400">Stone</span>
							</div>
						</Link>
						<div
							className={`flex justify-center sm:block h-screen sm:h-fit absolute sm:relative sm:w-max ${
								navIsShown ? 'block text-white inset-0' : 'hidden'
							}`}
						>
							<ul className="flex items-center flex-col sm:flex-row justify-center z-30">
								<li
									className="relative mx-4 text-6xl sm:text-base py-8 sm:py-0"
									onClick={toggleNav}
								>
									<Link href="/#about" scroll={false}>
										<span className="cursor-pointer py-4 hover:underline decoration-2 underline-offset-4 transition-all ease-in-out ">
											About
										</span>
									</Link>
								</li>
								<li
									className="relative mx-4 text-6xl sm:text-base py-8 sm:py-0"
									onClick={toggleNav}
								>
									<Link href="/#projects" scroll={false}>
										<span className="cursor-pointer py-4 py-4 hover:underline decoration-2 underline-offset-4 transition-all ease-in-out">
											Projects
										</span>
									</Link>
								</li>
								<li className="py-8 sm:py-0">
									<a
										href="/shawn_stone_resume1.pdf"
										target="_blank"
										rel="noreferrer"
									>
										<Button title="Resume" label="Resume" />
									</a>
								</li>
							</ul>
						</div>
						<div className="sm:hidden text-2xl z-20 hover:cursor-pointer">
							<MdOutlineMenu onClick={toggleNav} />
						</div>
					</div>
				</div>

				<div
					id="hero"
					className=" h-screen bg-zinc-500 flex justify-center items-center text-white inset-0"
				>
					<div className="container mx-auto flex justify-center items-center">
						<div className="text-center	font-bold">
							<span className="sm:text-xl text-sm text-gray-400">
								Hi, my name is
							</span>
							<h1 className="sm:text-6xl text-4xl">Shawn Stone</h1>
							<h3 className="sm:text-4xl text-2xl text-gray-400">
								{"I'm a Frontend Developer"}
							</h3>
						</div>
					</div>
					<div className="absolute bottom-4 animate-bounce cursor-pointer">
						<Link href="/#about" scroll={false}>
							<FaArrowAltCircleDown className="text-2xl " />
						</Link>
					</div>
				</div>

				<div id="about" className="">
					<div className="container mx-auto lg:py-40 sm:p-16 sm:py-16 p-8 py-12">
						<h1 className="sm:text-4xl text-2xl font-bold pb-8 text-dark-blue">
							About me
						</h1>
						<div className="grid gap-4 md:grid-cols-2 grid-cols-1 ">
							<div className="bg-white text-center lg:p-8 md:p-16 p-8 rounded-lg">
								<div className="w-80 max-w-full mx-auto pb-8">
									<img className="w-full" src="/headshot_background.png" />
								</div>
								<div className="text-left">
									<p>
										My name is Shawn and I specialize in building websites. That
										includes everything from UI/UX to front-end development.
										Over the past 5 years, I have built and worked on a
										multitude of websites from marketing websites to large
										e-commerce websites.
									</p>
									<br />
									<p>
										When taking on a new project, I look at the overall impact
										and scope of the project to determine what the best approach
										for the website is needed. There are many options in
										building a website and knowing the best technologies to use
										is crucial.
									</p>
								</div>
							</div>
							<div className="inline-grid gap-4 ">
								<div className="bg-white py-12 px-8 rounded-lg">
									<FaCode className="text-4xl" />
									<h3 className="pt-8 pb-2 text-xl font-bold">Development</h3>
									<p>
										{
											"Front-end Development. Creating beautiful and responsive websites. I've been a part of building websites using React, Redux, Nextjs, WordPress, and Magento. With all of these projects, best practices were always at the center of development."
										}
									</p>
								</div>
								<div className="bg-white py-12 px-8  rounded-lg">
									<FaCropAlt className="text-4xl" />
									<h3 className="pt-8 pb-2 text-xl font-bold">
										Ui / UX Design
									</h3>
									<p>
										User experience is always the key to generating successful
										websites. Understanding the flow of the website and
										highlighting key points to reach over site goals is
										something I take on with a passion.
									</p>
								</div>
								<div className="bg-white py-12 px-8  rounded-lg">
									<FaSignal className="text-4xl" />
									<h3 className="pt-8 pb-2 text-xl font-bold">
										Digital Marketing
									</h3>
									<p>
										Building websites is one thing, making them thrive is
										something else. After a website is built, building out an
										entire marketing plan is key. This includes customer
										acquisition, generating leads, email marketing, A/B tests,
										SEO Optimization, and so on.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div id="projects" className="bg-neutral-200">
					<div className="container mx-auto lg:py-32 sm:p-16 sm:py-16 p-8 py-12">
						<h1 className="sm:text-4xl text-2xl font-bold pb-8 text-dark-blue">
							Projects
						</h1>
						<div className="grid gap-4 xl:grid-cols-2 md:grid-cols-2 grid-cols-1">
							{PROJECT_DATA.map((props) => {
								return (
									<ProjectCard
										key={props.id}
										title={props.title}
										description={props.description}
										url={props.links.url}
										githubUrl={props.links.github_url}
										technology={props.technology}
										image={props.image}
									/>
								);
							})}
						</div>
					</div>
				</div>

				<div id="footer">
					<div className="container mx-auto p-8">
						<div className="sm:flex sm:justify-between md:flex-row flex-col justify-center items-center text-white font-bold">
							<ul className="sm:justify-center flex text-lg">
								<li className="pr-4">
									<a
										href="https://github.com/sstone0"
										target="_blank"
										rel="noreferrer"
									>
										<FaGithub />
									</a>
								</li>
								<li className="pr-4">
									<a
										href="https://www.linkedin.com/in/shawn-stone/"
										target="_blank"
										rel="noreferrer"
									>
										<FaLinkedinIn />
									</a>
								</li>
							</ul>
							<div className="sm:pb-6 sm:pt-8 md:pb-0 md:pt-0">
								<span>Designed and built by Shawn Stone</span>
							</div>
							<div>
								<span>{new Date().getFullYear()}</span>
							</div>
						</div>
					</div>
				</div>
			</main>

			<footer></footer>
		</div>
	);
};

export default Home;
