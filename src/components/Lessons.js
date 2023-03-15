export default function Lessons(props) {
  return (
    <ul>
      {props.sortedLessons.map((lesson) => (
        <li class-name="lesson-item" key={lesson.id}>
          <a
            className="page-link"
            onClick={() => props.setLesson(lesson.order - 1)}
          >
            {`${lesson.order}. ${lesson.title}. ${lesson.status}`}
          </a>
        </li>
      ))}
    </ul>
  );
}
