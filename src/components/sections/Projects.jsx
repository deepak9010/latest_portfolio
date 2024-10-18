import user_info from "../../data/user_info.js";
import Project from "../Project.jsx";

function Projects() {
  return (
    <section
      id="projects"
      className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:px-16"
    >
      {user_info.projects.map((project, index) => {
        return (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
            link={project.link}
            videoLink={project.videoLink} 
          />
        );
      })}
    </section>
  );
}

export default Projects;