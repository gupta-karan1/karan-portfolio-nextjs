// import { homeProjects } from "@/constants";

import React from "react";
import ProjectCard from "@/components/ProjectCard";

const ProjectGrid = ({ projects }: { projects: Array<any> }) => {
  return (
    <div className="flex flex-wrap lg:gap-20 gap-10 items-center justify-center">
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link || ""}
          github={project.github || ""}
          demo={project.demo || ""}
          tags={project.tags}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;
