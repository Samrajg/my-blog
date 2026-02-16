import achievements from "../../content/achievements.json";

export default function Achievements() {
  return (
    <>
      <h1>Achievements</h1>
      <ul>
        {achievements.map((a, i) => <li key={i}>{a}</li>)}
      </ul>
    </>
  );
}
