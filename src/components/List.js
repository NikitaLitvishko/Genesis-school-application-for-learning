import React, { useState, useEffect } from "react";
import Course from "./Course";
import Pagination from "./Pagination";
import { findPageIndexes } from "./helpers";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import Error from "./Error";
import { Box } from "@mui/material/";
import { Typography } from "@mui/material";

export default function List({ courses, loading, error }) {
  const { page } = useParams();
  const [currentCourses, setCurrentCourses] = useState([]);

  useEffect(() => {
    setCurrentCourses(findPageIndexes(courses, page));
  }, [courses, page]);

  if (error) return <Error />;

  return (
    <div className="courses-page mt-5">
      <Typography align="center" variant="h1">
        Courses
      </Typography>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {currentCourses.map((course) => (
              <Course
                {...course}
                img={course.previewImageLink + "/cover.webp"}
              />
            ))}
          </Box>

          <Pagination totalCourses={courses.length} currentPage={page} />
        </div>
      )}
    </div>
  );
}
