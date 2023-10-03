import { homeProjects } from "@/constants";

import React from "react";
import ProjectCard from "@/components/ProjectCard";

const ProjectGrid = () => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {homeProjects.map((project) => (
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
