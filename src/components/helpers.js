import { COURSES_PER_PAGE } from "../constants";

export function findPageIndexes(courses, currentPage) {
  const lastCourseIndex = currentPage * COURSES_PER_PAGE;
  const firstCourseIndex = lastCourseIndex - COURSES_PER_PAGE;
  const currentPageCourses = courses.slice(firstCourseIndex, lastCourseIndex);
  return currentPageCourses;
}

export function byField(field) {
  return (a, b) => (a[field] > b[field] ? 1 : -1);
}
