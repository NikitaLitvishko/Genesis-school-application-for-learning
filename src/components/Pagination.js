import React from "react";
import { COURSES_PER_PAGE } from "../constants";

export default function Pagination({ totalCourses, currentPage }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCourses / COURSES_PER_PAGE); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <ul>
        {pageNumbers.map((number) => (
          <li className="page-item" key={number}>
            <a
              href={`/courses/${number}`}
              className={`page-link ${
                number === Number(currentPage) ? "active" : ""
              }`}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
