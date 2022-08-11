import Image from "next/image";
import { FaGithubSquare, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({
  title,
  description,
  image,
  technology,
  githubUrl,
  url,
}) => {
  return (
    <div className='rounded-lg bg-white drop-shadow-md transition ease-out sm:hover:-translate-y-2'>
      <div className=' relative h-60 border-b border-gray-200 md:h-56 lg:h-80'>
        <Image
          className='rounded-t-lg'
          layout='fill'
          objectFit='cover'
          src={image}
          alt='project preview'
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
                    className='pr-4 pb-2 text-sm font-bold text-neutral-400 '>
                    {tech}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='flex'>
            <div className='pr-4'>
              <a href={githubUrl} target='_blank' rel='noreferrer'>
                <FaGithubSquare className='text-2xl text-dark-blue' />
              </a>
            </div>
            <div className='pr-4'>
              <a href={url} target='_blank' rel='noreferrer'>
                <FaExternalLinkAlt className='text-xl text-dark-blue' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
