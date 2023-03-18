import { useState, useEffect } from "react";
import { API_TOKEN } from "../constants";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url, {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${API_TOKEN}`,
      }),
    })
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("Something went wrong");
      })
      .then((data) => setData(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
}
