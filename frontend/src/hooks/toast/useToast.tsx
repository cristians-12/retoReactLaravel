import toast from "react-hot-toast";

const useToast = () => {
  const successToast = (sub: string) => toast.success(sub);
  const errorToast = (sub: string) => toast.error(sub);
  return {
    successToast,
    errorToast,
  };
};

export default useToast;
