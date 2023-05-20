import { useState, useEffect } from "react";
import axios from "axios";
import classes from "@/pages/api/classes";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true); // Set loading state to true before fetching data

        // Fetching data from the provided URL
        const { data: response } = await axios.get(url);

        setData(response);
      } catch (error) {
        setError(error); // Set the error state if there was an error fetching data
      }

      setIsLoading(false); // Set loading state to false after fetching data
    };

    fetchData();
  }, []);

  return { error, data, isLoading };
}

export default useFetch;
