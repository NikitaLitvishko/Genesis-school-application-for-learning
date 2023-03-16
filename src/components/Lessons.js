export default function Lessons(props) {
  const handleClick = (lesson) => {
    const lessonIndex = lesson.order - 1;
    if (lesson.status === "unlocked") {
      localStorage.setItem(`currentLesson-${props.lessonId}`, lessonIndex);
      props.setLesson(lessonIndex);
    }
  };
  return (
    <ul>
      {props.sortedLessons.map((lesson) => (
        <li class-name="lesson-item" key={lesson.id}>
          <a
            href="#!"
            className={`lesson-link ${
              lesson.order - 1 === props.currentLesson ? "active" : ""
            }`}
            onClick={() => handleClick(lesson)}
          >
            {`${lesson.order}. ${lesson.title}. ${lesson.status}`}
          </a>
        </li>
      ))}
    </ul>
  );
}
