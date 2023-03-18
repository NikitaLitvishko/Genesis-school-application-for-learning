import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { API_URL_LIST } from "../constants";
import { useParams } from "react-router-dom";
import Player from "./Player";
import Lessons from "./Lessons";
import Loader from "./Loader";
import Error from "./Error";

import { byField } from "./helpers";

import { Box } from "@mui/material/";

export default function Watch() {
  const { id } = useParams();
  const lessonNumber = localStorage.getItem(`currentLesson-${id}`);
  const [currentLesson, setCurrentLesson] = useState(
    lessonNumber ? Number(lessonNumber) : 0
  );

  const { data: course, loading, error } = useFetch(API_URL_LIST + id);
  console.log(error);
  if (error) return <Error />;
  if (!course) return <Loader />;

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
      <h1 className="title-course">{course.title}</h1>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <div key={play.sources[0].src} className="player">
          <Player
            options={play}
            currentTime={time}
            id={sortedLessons[currentLesson].id}
          />
        </div>
        <div className="lesson-list">
          <Lessons
            sortedLessons={sortedLessons}
            currentLesson={currentLesson}
            lessonId={course.id}
            setLesson={setLesson}
          />
        </div>
      </Box>
    </div>
  );
}
