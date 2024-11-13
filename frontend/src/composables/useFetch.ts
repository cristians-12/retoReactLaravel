import { ref } from "vue";

export function useFetch() {
  const data = ref(null);
  const error = ref(null);

  const fetchData = async (url: string): Promise<any> => {
    try {
      const response = await fetch(url);
      data.value = await response.json();
    } catch (err) {
      console.error(err);
    }
  };

  return { data, error, fetchData };
}
