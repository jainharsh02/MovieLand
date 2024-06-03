import { toast } from "react-toastify";

export const toastError = (message, params) => {
  toast.error(message, {
    position: params?.position || toast.POSITION.TOP_RIGHT,
    closeButton: params?.close || false,
  });
};
export const toastSuccess = (message) => {
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
    closeButton: false,
  });
};
