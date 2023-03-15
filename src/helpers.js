import {COURSES_PER_PAGE, COURSES_PER_ROW} from "./constants";

export default function findPageIndexes(data, currentPage){
    const lastCourseIndex = currentPage * COURSES_PER_PAGE;
    const firstCourseIndex = lastCourseIndex - COURSES_PER_PAGE;
    const currentPageCourses = data.courses.slice(
      firstCourseIndex,
      lastCourseIndex
    );
    const firstRow = currentPageCourses.slice(0, COURSES_PER_ROW);
    const secondRow = currentPageCourses.slice(
      COURSES_PER_ROW,
      COURSES_PER_PAGE
    );
    return [firstRow, secondRow];
}