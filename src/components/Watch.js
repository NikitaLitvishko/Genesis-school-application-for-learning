import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { API_URL_LIST } from "../constants";
import { useParams, Link } from "react-router-dom";

import Lessons from "./Lessons";
import Loader from "./Loader";
import Error from "./Error";
import HlsPlayer from "./HlsPlayer";
import { byField } from "./helpers";

import { Box, IconButton } from "@mui/material/";
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';


export default function Watch() {
  const { id } = useParams();
  const lessonNumber = localStorage.getItem(`currentLesson-${id}`);
  const [currentLesson, setCurrentLesson] = useState(
    lessonNumber ? Number(lessonNumber) : 0
  );

  const { data: course, error } = useFetch(API_URL_LIST + id);

  if (error) return <Error />;
  if (!course) return <Loader />;

  const sortedLessons = course.lessons.sort(byField("order"));

  const handleSetLesson = (lessonNumber) => setCurrentLesson(lessonNumber);

  const time = localStorage.getItem(sortedLessons[currentLesson].id);

  return (
    <div>
      <div className="watch-header">
        <IconButton component={Link} to="/courses/1">
          <ArrowBackIosOutlinedIcon/>
        </IconButton>
        <h1 className="title-course">{course.title}</h1>
      </div>

      
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <HlsPlayer
          src={sortedLessons[currentLesson].link}
          currentTime={time}
          id={sortedLessons[currentLesson].id}
        />
        <div className="lesson-list">
          <Lessons
            sortedLessons={sortedLessons}
            currentLesson={currentLesson}
            lessonId={course.id}
            setLesson={handleSetLesson}
          />
        </div>
      </Box>
    </div>
  );
}
