import Image from "next/image";
import { ProjectCardTypes } from "@/types";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

const ProjectCard = ({
  title,
  // description,
  image,
  link,
  github,
  demo,
  externalLink,
}: // tags,
typeof ProjectCardTypes) => {
  return (
    <div className="card rounded-none w-auto lg:w-[410px] shadow-lg hover:shadow-xl 2xl:w-[450px] bg-base-100 ">
      <figure>
        <Image
          src={image}
          className="bg-base-300"
          alt="Project Placeholder"
          width={600}
          height={500}
        />
      </figure>
      <div className="card-body gap-3 ">
        {/* <div className="flex flex-wrap gap-1">
          {tags.map((tag: string) => (
            <span key={tag} className="badge font-light badge-secondary  ">
              {tag}
            </span>
          ))}
        </div> */}

        <h2 className="card-title  text-xl">{title}</h2>

        {/* <p className="font-light line-clamp-5 text-sm">{description}</p> */}

        <div className="card-actions justify-end mt-5 items-center">
          {github && (
            <Link
              className="btn  btn-outline btn-md"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <ArrowUpRightIcon className="w-5 h-5" />
            </Link>
          )}

          {demo && (
            <Link
              className="btn  btn-outline btn-md"
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo <ArrowUpRightIcon className="w-5 h-5" />
            </Link>
          )}

          {externalLink && (
            <Link
              className="btn  btn-primary  btn-md"
              href={externalLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Link <ArrowUpRightIcon className="w-5 h-5" />
            </Link>
          )}

          {link && (
            <Link className="btn btn-primary  btn-md" href={link}>
              Explore
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
