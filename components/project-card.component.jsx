import Image from 'next/image';
import { FaGithubSquare, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({
	title,
	description,
	image,
	technologies,
	githubUrl,
	url,
}) => {
	return (
		<div className="bg-white rounded-lg transition ease-out hover:-translate-y-2 drop-shadow-md">
			<div className=" relative lg:h-80 md:h-56 h-60 ">
				<Image
					className="rounded-t-lg"
					layout="fill"
					objectFit="cover"
					src={image}
				/>
			</div>
			<div className="p-4 leading-5">
				<h3 className="font-bold sm:text-xl pb-2 text-dark-blue">{title}</h3>
				<p>{description}</p>
				<div className="flex justify-between pt-2">
					<div>
						<ul className="flex wrap">
							<li className="pr-4 text-sm font-bold text-neutral-400 ">
								React
							</li>
							<li className="pr-4 text-sm font-bold text-neutral-400 ">
								Redux
							</li>
							<li className="pr-4 text-sm font-bold text-neutral-400 ">
								Thunk
							</li>
						</ul>
					</div>
					<div className="flex">
						<div className="pr-4">
							<a href={githubUrl} target="_blank" rel="noreferrer">
								<FaGithubSquare className="text-xl text-dark-blue" />
							</a>
						</div>
						<div className="pr-4">
							<a href={url} target="_blank" rel="noreferrer">
								<FaExternalLinkAlt className="text-lg text-dark-blue" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
