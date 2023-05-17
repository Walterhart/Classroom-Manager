import { useState, useEffect } from "react";
import axios from 'axios';
import classes from "@/pages/api/classes";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const { data: response } = await axios.get(url);
        setData(response);
      } catch (error) {
        setError(error)
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);
return({error, data, isLoading})
}
export default useFetch;
