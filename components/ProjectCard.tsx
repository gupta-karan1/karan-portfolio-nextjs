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
    <div className="card w-auto lg:w-96 bg-base-300 shadow-xl hover:bg-base-100 ease-in-out">
      <figure>
        <Link href={link}>
          <Image
            src={image}
            alt="Project Placeholder"
            width={500}
            height={500}
          />
        </Link>
      </figure>
      <div className="card-body">
        <h2 className="card-title font-semibold text-2xl line-clamp-1">
          {title}
        </h2>

        <div className="flex flex-wrap gap-1">
          {tags.map((tag: string) => (
            <span key={tag} className="badge font-light badge-secondary  ">
              {tag}
            </span>
          ))}
        </div>

        <p className="font-light line-clamp-5">{description}</p>

        <div className="card-actions justify-end mt-5">
          {demo && (
            <Link className="btn btn-primary btn-ghost btn-sm" href={demo}>
              Live <LinkArrow />
            </Link>
          )}

          {github && (
            <Link className="btn btn-primary btn-ghost btn-sm" href={github}>
              Github <LinkArrow />
            </Link>
          )}

          {link && (
            <Link className="btn btn-primary btn-sm" href={link}>
              Explore{" "}
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg> */}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
