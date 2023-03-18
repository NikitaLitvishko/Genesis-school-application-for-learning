import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useFetch } from "./hooks/useFetch";
import List from "./components/List";
import Watch from "./components/Watch";
import { API_URL_LIST } from "./constants";

export default function App() {
  const { data, ...rest } = useFetch(API_URL_LIST);
  return (
    <Router>
      <Routes>
        <Route
          path="/courses/:page"
          element={<List courses={data?.courses || []} {...rest} />}
        />
        <Route path="/course/:id" element={<Watch />} />
        <Route path="/" element={<Navigate to="/courses/1" />} />
      </Routes>
    </Router>
  );
}
