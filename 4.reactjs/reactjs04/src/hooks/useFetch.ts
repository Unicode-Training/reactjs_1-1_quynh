import { useState, useEffect } from "react";
import { instance } from "../libs/axios";
import type { AxiosError } from "axios";
import { isProduction } from "../utils/utils";

//Custom hook
export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T>([] as T);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | string>(null);
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const response = await instance.get(url);
        if (response?.data) {
          setData(response?.data);
        }
      } catch (error) {
        const err = error as AxiosError;
        setError(isProduction() ? "Đã có lỗi xảy ra" : err.message);
      } finally {
        setLoading(false);
      }
    };
    makeRequest();
  }, []);
  return { data, isLoading, error };
};
