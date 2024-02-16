import React from "react";
import { ProjectCardTypes } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

function HomeProjectCard({
  title,
  description,
  image,
  link,
  github,
  demo,
  externalLink,
}: // tags,
typeof ProjectCardTypes) {
  return (
    <div className="card xl:card-side bg-base-100 border">
      <Image
        src={image}
        alt="Project Image"
        className="bg-base-300 w-auto h-auto object-cover object-center"
        width="900"
        height="900"
      />

      <div className="card-body gap-5 ">
        <h2 className="card-title">{title}</h2>
        <p className="font-light">{description}</p>
        <div className="card-actions justify-end">
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
              className="btn  btn-accent  btn-md"
              href={externalLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Link <ArrowUpRightIcon className="w-5 h-5" />
            </Link>
          )}

          {link && (
            <Link className="btn btn-accent  btn-md" href={link}>
              Explore
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeProjectCard;
