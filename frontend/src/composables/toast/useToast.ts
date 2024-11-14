import { toast } from "vue3-toastify";
export function useToast() {
  const errorToast = (message: string) => {
    toast.error(message, {});
  };
  const successToast = (message: string) => {
    toast.success(message, {});
  };

  return { errorToast, successToast };
}
