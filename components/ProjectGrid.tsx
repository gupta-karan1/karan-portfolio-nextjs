// import { homeProjects } from "@/constants";
"use client";
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

const ProjectGrid = ({ projects }: { projects: Array<any> }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="flex flex-wrap xl:gap-10 gap-5 items-center justify-center">
        {projects
          .map((project, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              key={index}
            >
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link || ""}
                github={project.github || ""}
                demo={project.demo || ""}
                tags={project.tags}
                externalLink={project.externalLink || ""}
              />
            </motion.div>
          ))
          .slice(0, showMore ? projects.length : 3)}
      </div>
      {projects.length > 3 && (
        <button
          type="button"
          className="btn btn-outline text-accent-content"
          onClick={() => (showMore ? setShowMore(false) : setShowMore(true))}
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

export default ProjectGrid;
