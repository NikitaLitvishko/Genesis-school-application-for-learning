import React, { useState, useEffect } from "react";
import useFetch from "./useFetch";
import Course from "./Course";
import Pagination from "./Pagination";
import findPageIndexes from "./helpers";

const API_URL_LIST = "https://api.wisey.app/api/v1/core/preview-courses/";

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const data = useFetch(API_URL_LIST);
  if (!data) return "Loading...";

  const courses = findPageIndexes(data, currentPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="courses-page mt-5">
      <h1
        style={{ display: "flex", justifyContent: "center" }}
        allign="center"
        className="primary"
      >
        Courses
      </h1>
      <ul className="courses-row">
        {courses[0].map((course) => (
          <Course
            {...course}
            img={course.previewImageLink + "/cover.webp"}
            skills={course.meta.skills}
          />
        ))}
      </ul>
      <ul className="courses-row">
        {courses[1].map((course) => (
          <Course
            {...course}
            img={course.previewImageLink + "/cover.webp"}
            skills={course.meta.skills}
          />
        ))}
      </ul>
      <Pagination
        totalCourses={data.courses.length}
        paginate={paginate}
      />
    </div>
  );
}
