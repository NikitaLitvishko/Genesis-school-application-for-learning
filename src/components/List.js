import React from "react";
import Course from "./Course";
import Pagination from "./Pagination";
import { findPageIndexes } from "./helpers";
import { useParams } from "react-router-dom";

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
      <ul className="courses-row">
        {currentCourses[0].map((course) => (
          <Course
            {...course}
            img={course.previewImageLink + "/cover.webp"}
            skills={course.meta.skills}
          />
        ))}
      </ul>
      <ul className="courses-row">
        {currentCourses[1].map((course) => (
          <Course
            {...course}
            img={course.previewImageLink + "/cover.webp"}
            skills={course.meta.skills}
          />
        ))}
      </ul>
      <Pagination totalCourses={props.courses.length} currentPage={page} />
    </div>
  );
}
