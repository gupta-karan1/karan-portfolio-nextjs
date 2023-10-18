import Image from "next/image";
import { ProjectCardTypes } from "@/types";
import Link from "next/link";
import LinkArrow from "./LinkArrow";

const ProjectCard = ({
  title,
  description,
  image,
  link,
  github,
  demo,
  tags,
}: typeof ProjectCardTypes) => {
  return (
    <div className="card w-auto lg:w-[410px] bg-base-100 shadow-2xl 2xl:w-[450px] ">
      <figure>
        <Link href={link} target="_blank">
          <Image
            src={image}
            alt="Project Placeholder"
            width={600}
            height={500}
          />
        </Link>
      </figure>
      <div className="card-body gap-3 ">
        <div className="flex flex-wrap gap-1">
          {tags.map((tag: string) => (
            <span key={tag} className="badge font-light badge-secondary  ">
              {tag}
            </span>
          ))}
        </div>

        <Link href={link} target="_blank">
          <h2 className="card-title  text-2xl">{title}</h2>
        </Link>

        {/* <p className="font-light line-clamp-5 text-sm">{description}</p> */}

        <div className="card-actions justify-end mt-5 items-center">
          {demo && (
            <Link
              className="btn  btn-outline btn-md"
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo <LinkArrow />
            </Link>
          )}

          {github && (
            <Link
              className="btn  btn-outline btn-md"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <LinkArrow />
            </Link>
          )}

          {link && (
            <Link
              className="btn btn-primary btn-md"
              href={link}
              target="_blank"
            >
              Explore
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
