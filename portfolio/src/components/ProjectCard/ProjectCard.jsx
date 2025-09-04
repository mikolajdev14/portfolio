import "./ProjectCard.css";

export function ProjectCard(props) {
  return (
    <div className="project">
      <img src={props.img} alt="" />
      <span style={{ marginBottom: 15 }}>{props.description}</span>
    </div>
  );
}
