import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithubSquare } from "react-icons/fa";

const ProjectCard = ({
  title,
  description,
  image,
  technology,
  githubUrl,
  url,
}) => {
  return (
    <div className='transition ease-out bg-white rounded-lg drop-shadow-md sm:hover:-translate-y-2'>
      <div className='relative overflow-hidden border-b border-gray-200 h-60 md:h-56 lg:h-80'>
        <Image
          className='rounded-t-lg'
          src={image}
          alt='project preview'
					style={{
						width: '100%',
						height: 'auto',
					}}
					width={500}
					height={300}
        />
      </div>
      <div className='p-4 leading-5'>
        <h3 className='pb-2 font-bold text-dark-blue sm:text-xl'>{title}</h3>
        <p>{description}</p>
        <div className='flex items-end justify-between pt-2'>
          <div>
            <ul className='flex flex-wrap'>
              {technology.map((tech) => {
                return (
                  <li
                    key={tech}
                    className='pb-2 pr-4 text-sm font-thin text-neutral-500 '>
                    {tech}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='flex'>
            <div className='pr-4'>
              <Link href={githubUrl} passHref target='_blank' rel='noreferrer' aria-label="project link">
                <FaGithubSquare className='text-2xl text-dark-blue' />
              </Link>
            </div>
            <div className='pr-4'>
              <Link href={url} passHref target='_blank' rel='noreferrer' aria-label="repository link">
                <FaExternalLinkAlt className='text-xl text-dark-blue' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
