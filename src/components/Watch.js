import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { API_URL_LIST } from "../constants";
import { useParams } from "react-router-dom";
import Player from "./Player";
import Lessons from "./Lessons";
import { byField } from "./helpers";

export default function Watch() {
  const { id } = useParams();
  const [currentLesson, setCurrentLesson] = useState(0);
  console.log(currentLesson);

  const course = useFetch(API_URL_LIST + id);
  if (!course) return "Loading...";

  const sortedLessons = course.lessons.sort(byField("order"));

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

  console.log(play);

  const setLesson = (lessonNumber) => setCurrentLesson(lessonNumber);
  return (
    <div>
      <div key={play.sources[0].src}>
        <Player {...play} />
      </div>
      <Lessons sortedLessons={sortedLessons} setLesson={setLesson} />
      <p>{JSON.stringify(course, null, 2)}</p>
    </div>
  );
}
