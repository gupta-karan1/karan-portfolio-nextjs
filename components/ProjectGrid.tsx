// import { homeProjects } from "@/constants";
"use client";
import React from "react";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

const ProjectGrid = ({ projects }: { projects: Array<any> }) => {
  return (
    <div className="flex flex-wrap xl:gap-10 2xl:gap-20 gap-5 items-center justify-center">
      {projects.map((project, index) => (
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
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
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectGrid;
