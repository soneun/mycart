import { useEffect, useState } from "react";
import apiClient from "../utils/api-client";

const UseData = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  constt[(isFileLoadingAllowed, setIs)];

  useEffect(() => {
    apiClient
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message));
  }, []);

  return { data, error };
};

export default UseData;
