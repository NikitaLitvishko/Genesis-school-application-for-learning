import { useState } from "react";
import HoverHlsPlayer from "./HoverHlsPlayer";

export default function Course(props) {
  const [hover, setHover] = useState(false);

  return (
    <div
      key={props.id}
      className="course"
      onClick={() => (window.location.href = `/course/${props.id}`)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="title">{props.title}</div>

      <div className="image-video-preview">
        {!hover ? (
          <img src={props.img} alt="Logo"></img>
        ) : (
          <HoverHlsPlayer {...props} />
        )}
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
