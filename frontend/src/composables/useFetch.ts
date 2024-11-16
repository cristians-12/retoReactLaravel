import { ref } from "vue";
import { FetchOptions } from "../types/fetch/fetch_options.type";

export function useFetch() {
  const data = ref(null);

  const fetchData = async (
    url: string,
    options: FetchOptions
  ): Promise<any> => {
    try {
      const response = await fetch(url, options);
      data.value = await response.json();
    } catch (err) {
      console.error(err);
    }
  };

  return { data, fetchData };
}
