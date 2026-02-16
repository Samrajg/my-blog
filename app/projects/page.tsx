import projects from "../../content/projects.json";
import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
  return (
    <>
      <h1>Projects</h1>
      {projects.map((p, i) => (
        <ProjectCard key={i} project={p} />
      ))}
    </>
  );
}
