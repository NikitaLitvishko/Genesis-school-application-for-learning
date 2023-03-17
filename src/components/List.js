import React from "react";
import Course from "./Course";
import Pagination from "./Pagination";
import { findPageIndexes } from "./helpers";
import { useParams } from "react-router-dom";

import Box from "@mui/material/Box";

export default function List(props) {
  const { page } = useParams();
  const currentCourses = findPageIndexes(props.courses, page);
  return (
    <div className="courses-page mt-5">
      <h1
        style={{ display: "flex", justifyContent: "center" }}
        allign="center"
        className="primary"
      >
        Courses
      </h1>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {currentCourses.map((course) => (
          <Course {...course} img={course.previewImageLink + "/cover.webp"} />
        ))}
      </Box>

      <Pagination totalCourses={props.courses.length} currentPage={page} />
    </div>
  );
}
