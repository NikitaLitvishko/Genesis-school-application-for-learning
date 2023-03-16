import { useState, useEffect } from "react";
import { API_TOKEN } from "../constants";

export function useFetch(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${API_TOKEN}`,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => setData(data));
  }, [url]);
  return data;
}
