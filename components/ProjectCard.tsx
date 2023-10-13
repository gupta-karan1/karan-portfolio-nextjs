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
    <div className="card w-auto lg:w-96 bg-base-100 shadow-xl ">
      <figure>
        <Link href={link}>
          <Image
            src={image}
            alt="Project Placeholder"
            width={600}
            height={500}
          />
        </Link>
      </figure>
      <div className="card-body gap-3 lg:h-80">
        <div className="flex flex-wrap gap-1">
          {tags.map((tag: string) => (
            <span key={tag} className="badge font-light badge-secondary  ">
              {tag}
            </span>
          ))}
        </div>

        <h2 className="card-title font-semibold text-2xl line-clamp-1">
          {title}
        </h2>

        <p className="font-light line-clamp-5 text-sm">{description}</p>

        <div className="card-actions justify-end mt-5">
          {demo && (
            <Link
              className="btn btn-primary btn-ghost btn-sm"
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live <LinkArrow />
            </Link>
          )}

          {github && (
            <Link
              className="btn btn-primary btn-ghost btn-sm"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github <LinkArrow />
            </Link>
          )}

          {link && (
            <Link className="btn btn-primary btn-sm" href={link}>
              Explore
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
