import { Ref, ref } from "vue";
import { FetchOptions } from "../types/fetch/fetch_options.type";
import { ResponseType } from "../types/response/response.type";

export function useFetch() {
  const data: Ref<ResponseType | null> = ref(null);

  const fetchData = async (
    url: string,
    options: FetchOptions
  ): Promise<any> => {
    try {
      const response = await fetch(url, options);
      data.value = await response.json();
      // console.log(data.value?.success);
    } catch (err) {
      console.error(err);
    }
  };

  return { data, fetchData };
}
