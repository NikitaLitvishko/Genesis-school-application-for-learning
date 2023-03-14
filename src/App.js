import React, { useState, useEffect } from "react";
import useFetch from "./useFetch";
import Course from "./Course";
import Pagination from "./Pagination";

const API_URL_LIST = "https://api.wisey.app/api/v1/core/preview-courses/";

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(10);
  const [coursesPerRaw] = useState(5);

  const data = useFetch(API_URL_LIST);
  if (!data) return "Loading...";

  const lastCourseIndex = currentPage * coursesPerPage;
  const firstCourseIndex = lastCourseIndex - coursesPerPage;
  const currentPageCourses = data.courses.slice(
    firstCourseIndex,
    lastCourseIndex
  );
  const firstRowCouses = currentPageCourses.slice(0, coursesPerRaw);
  const secondRowCouses = currentPageCourses.slice(
    coursesPerRaw,
    coursesPerPage
  );

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
        {firstRowCouses.map((course) => (
          <Course
            {...course}
            img={course.previewImageLink + "/cover.webp"}
            skills={course.meta.skills}
          />
        ))}
      </ul>
      <ul className="courses-row">
        {secondRowCouses.map((course) => (
          <Course
            {...course}
            img={course.previewImageLink + "/cover.webp"}
            skills={course.meta.skills}
          />
        ))}
      </ul>
      <Pagination
        coursesPerPage={coursesPerPage}
        totalCourses={data.courses.length}
        paginate={paginate}
      />
    </div>
  );
}
