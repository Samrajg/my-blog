export default function ProjectCard({ project }: any) {
  return (
    <div style={{ border: "1px solid gray", padding: 16, marginBottom: 12 }}>
      <h3>{project.title}</h3>
      <p><b>Tech:</b> {project.tech}</p>
      <p>{project.description}</p>
    </div>
  );
}
