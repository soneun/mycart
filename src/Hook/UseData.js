import { useEffect, useState } from "react";
import apiClient from "../utils/api-client";

const UseData = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); //로딩중?

  useEffect(() => {
    setIsLoading(true); //로딩시작
    apiClient
      .get(url)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
    s;
  }, []);

  return { data, error, isLoading };
};

export default UseData;
