import { useEffect, useState } from "react";
import apiClient from "../utils/api-client";

//deps: 카테고리가 바뀔 때 마다 다시 검색
const UseData = (url, customConfig, deps) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); //로딩중?

  useEffect(
    () => {
      setIsLoading(true); //로딩시작
      apiClient
        .get(url, customConfig)
        .then((res) => {
          setData(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    },
    deps ? deps : []
  );

  return { data, error, isLoading };
};

export default UseData;
