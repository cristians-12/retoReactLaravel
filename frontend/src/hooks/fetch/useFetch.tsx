import { useState } from "react";
import { OptionsType, ResponseInterface } from "../../types/fetch/fetch.types";

const useFetch = () => {
  const [data, setData] = useState<ResponseInterface | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchRequest = async (url: string, options: OptionsType) => {
    setLoading(true);
    try {
      const response = await fetch(url, options);
      const dataResponse = await response.json();
      console.log(dataResponse)
      setData(dataResponse);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    fetchRequest,
    data,
    loading,
  };
};

export default useFetch;
