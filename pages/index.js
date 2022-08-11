import React from "react";
import Head from "next/head";
import Link from "next/link";
import {
  FaArrowAltCircleDown,
  FaCode,
  FaCropAlt,
  FaSignal,
} from "react-icons/fa";
import PROJECT_DATA from "../project_data";
import Headshot from "../public/headshot_background.png";
import Header from "../components/header.component";
import ProjectCard from "../components/project-card.component";
import { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "../components/footer.component";

export const AppContext = React.createContext();

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navIsShown, setNavIsShown] = useState(false);
  const [isMobile, setIsMobile] = useState("");

  const mobileCheck = () => {
    let windowWidth = window.innerWidth;
    windowWidth > 640 ? setIsMobile(false) : setIsMobile(true);
  };

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    mobileCheck();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", mobileCheck);
  }, [isScrolled]);

  return (
    <AppContext.Provider
      value={{
        isMobile: isMobile,
        navIsShown: navIsShown,
        isScrolled: isScrolled,
        setNavIsShown,
      }}>
      <Head>
        <title>
          Frontend Web Developer and Digital Marketing Specialist - Shawn Stone
        </title>
        <meta
          name='description'
          content='Experienced Frontend Developer with a specialty in UX/UI design along with Digital Marketing.'
        />
        <link rel='icon' href='/favicon.svg' />
      </Head>

      <main className='relative'>
        <div
          id='overlay'
          className={`absolute z-10 h-full w-screen bg-slate-800 ${
            isMobile && navIsShown ? "block text-white" : "hidden"
          }`}></div>

        <div
          id='hero'
          className='relative inset-0 flex h-screen items-center justify-center bg-zinc-500 text-white'>
          <div className='container mx-auto flex items-center justify-center'>
            <div className='text-center	font-bold'>
              <span className='text-sm text-gray-400 sm:text-xl'>
                Hi, my name is
              </span>
              <h1 className='text-4xl sm:text-6xl'>Shawn Stone</h1>
              <h3 className='text-2xl text-gray-400 sm:text-4xl'>
                {"I'm a Frontend Developer"}
              </h3>
            </div>
          </div>
          <div className='absolute bottom-4 animate-bounce cursor-pointer'>
            <Link href='/#about' passHref scroll={false}>
              <FaArrowAltCircleDown className='text-2xl ' />
            </Link>
          </div>
        </div>
        <Header />
        <div id='about'>
          <div className='container mx-auto px-5% py-6 md:px-6 md:py-8 lg:py-16'>
            <h1 className='pb-8 text-2xl font-bold text-dark-blue sm:text-4xl'>
              About me
            </h1>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 '>
              <div className='rounded-lg bg-white p-8 text-center md:p-16 lg:p-8'>
                <div className='mx-auto w-80 max-w-full pb-8'>
                  <Image
                    className='w-full'
                    src={Headshot}
                    alt='profile image'
                  />
                </div>
                <div className='text-left'>
                  <p>
                    My name is Shawn and I specialize in building websites. That
                    includes everything from UI/UX to front-end development.
                    Over the past 5 years, I have built and contributed to a
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
              <div className='inline-grid gap-4 '>
                <div className='rounded-lg bg-white py-12 px-8'>
                  <FaCode className='text-4xl' />
                  <h3 className='pt-8 pb-2 text-xl font-bold'>Development</h3>
                  <p>
                    {
                      "Front-end Development. Creating beautiful and responsive websites. I've been a part of building websites using React, Redux, Nextjs, WordPress, and Magento. With all of these projects, best practices were always at the center of development."
                    }
                  </p>
                </div>
                <div className='rounded-lg bg-white py-12  px-8'>
                  <FaCropAlt className='text-4xl' />
                  <h3 className='pt-8 pb-2 text-xl font-bold'>
                    Ui / UX Design
                  </h3>
                  <p>
                    User experience is always the key to generating successful
                    websites. Understanding the flow of the website and
                    highlighting key points to reach over site goals is
                    something I take on with a passion.
                  </p>
                </div>
                <div className='rounded-lg bg-white py-12  px-8'>
                  <FaSignal className='text-4xl' />
                  <h3 className='pt-8 pb-2 text-xl font-bold'>
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

        <div id='projects' className='bg-neutral-200'>
          <div className='container mx-auto px-5% py-6 md:px-6 md:py-8 lg:py-16'>
            <h1 className='pb-8 text-2xl font-bold text-dark-blue sm:text-4xl'>
              Projects
            </h1>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-2'>
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
        <Footer />
      </main>
    </AppContext.Provider>
  );
};

export default Home;
