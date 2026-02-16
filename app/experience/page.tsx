import exp from "../../content/experience.json";

export default function Experience() {
  return (
    <>
      <h1>Experience</h1>
      {exp.map((e, i) => (
        <div key={i}>
          <h3>{e.role} – {e.company}</h3>
          <p>{e.period}</p>
          <p>{e.description}</p>
        </div>
      ))}
    </>
  );
}
