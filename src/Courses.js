import Course from "./Course";

export default function Courses() {
  return (
    <ul className="courses-row">
      {firstRowCouses.map((course) => (
        <Course
          {...course}
          img={course.previewImageLink + "/cover.webp"}
          skills={course.meta.skills}
        />
      ))}
    </ul>
  );
}
