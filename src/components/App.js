import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import List from "./List";
import Watch from "./Watch";
import { API_URL_LIST } from "../constants";

export default function App() {
  const data = useFetch(API_URL_LIST);
  if (!data) return "Loading...";

  return (
    <Router>
      <Routes>
        <Route
          path="/courses/:page"
          element={<List courses={data.courses} />}
        />
        <Route path="/course/:id" element={<Watch />} />
        <Route path="/" element={<Navigate to="/courses/1" />} />
      </Routes>
    </Router>
  );
}
