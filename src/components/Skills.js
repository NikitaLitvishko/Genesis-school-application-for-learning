export default function Skills(props) {
  if (props.skills) {
    return (
      <div>
        Skills that u will have:
        <ul>
          {props.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  }
  return "";
}
