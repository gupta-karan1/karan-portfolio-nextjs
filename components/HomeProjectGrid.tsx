import HomeProjectCard from "./HomeProjectCard";

const HomeProjectGrid = ({ projects }: { projects: Array<any> }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-20">
      {projects.map((project, index) => (
        <HomeProjectCard
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
      ))}
    </div>
  );
};

export default HomeProjectGrid;
