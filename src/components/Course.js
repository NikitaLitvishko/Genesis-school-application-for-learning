export default function Course(props) {
  return (
    <div
      key={props.id}
      className="course"
      onClick={() => (window.location.href = `/course/${props.id}`)}
    >
      <div className="title">{props.title}</div>
      <div className="image">
        <img src={props.img} alt="Logo"></img>
      </div>
      <div className="description">{props.description}</div>
      <div className="info">
        Number of lessons: {props.lessonsCount}. <br />
        Time of execution ~{props.duration} minutes. <br />
        Skills that u will have: {props.skills}
        <br />
        Rating: {props.rating}
      </div>
    </div>
  );
}
