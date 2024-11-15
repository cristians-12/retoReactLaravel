import { ref } from "vue";
import { FetchOptions } from "../types/fetch/fetch_options.type";

export function useFetch() {
  const data = ref(null);

  const fetchData = async (
    url: string,
    options: FetchOptions
  ): Promise<any> => {
    console.log(options);
    try {
      if (options) {
        options.body = JSON.stringify(options.body);
        console.log(options.body)
      }
      const response = await fetch(url, options);
      console.log(await response.text());

      // data.value = await response.json();
    } catch (err) {
      console.error(err);
    }
  };

  return { data, fetchData };
}
