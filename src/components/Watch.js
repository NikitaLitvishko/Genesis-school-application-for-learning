import { useState, useEffect, useCallback} from "react";
import { useFetch } from "../hooks/useFetch";
import { API_URL_LIST } from "../constants";
import { useParams } from "react-router-dom";
import Player from "./Player";
import Lessons from "./Lessons";
import { byField } from "./helpers";

export default function Watch() {
  const { id } = useParams();
  const lessonNumber = localStorage.getItem(`currentLesson-${id}`);
  const [currentLesson, setCurrentLesson] = useState(lessonNumber ? Number(lessonNumber) : 0);
  
  const course = useFetch(API_URL_LIST + id);
  if (!course) return "Loading...";

  const sortedLessons = course.lessons.sort(byField("order"));
  const time = localStorage.getItem(sortedLessons[currentLesson].id);

  const play = {
    fill: true,
    fluid: true,
    autoplay: true,
    controls: true,
    preload: "metadata",
    sources: [
      {
        src: sortedLessons[currentLesson].link,
        type: "application/x-mpegURL",
      },
    ],
  };

  const setLesson = (lessonNumber) => setCurrentLesson(lessonNumber);

  return (
    <div>
      <div key={play.sources[0].src}>
        <Player options={play} currentTime={time} id={sortedLessons[currentLesson].id} />
      </div>
      <p>{course.description}</p>
      <Lessons sortedLessons={sortedLessons} currentLesson={currentLesson} lessonId={course.id} setLesson={setLesson} />
      <p>{JSON.stringify(course, null, 2)}</p>
    </div>
  );
}
