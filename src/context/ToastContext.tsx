import * as React from "react";

interface ToastContextType {
  message?: string;
  status?: boolean;
  open: boolean;
  showErrorMessage: (s: string) => void;
  showSuccessMessage: (s: string) => void;
  removeToast: () => void;
}

const ToastContext = React.createContext<ToastContextType>({
  message: "",
  status: false,
  open: false,
  showErrorMessage: (s: string) => {},
  showSuccessMessage: (s: string) => {},
  removeToast: () => {},
});

interface ToastData {
  message: string;
  status: boolean;
}

export function ToastContextProvider({ children }: React.PropsWithChildren) {
  const [data, setData] = React.useState<ToastData>();

  const showErrorMessage = (message: string) => {
    setData({ message, status: false });
  };

  const showSuccessMessage = (message: string) => {
    setData({ message, status: true });
  };

  const removeToast = () => {
    setData({ message: "", status: false });
  };

  return (
    <ToastContext.Provider
      value={{
        message: data?.message,
        status: data?.status,
        open: !!data,
        showErrorMessage,
        showSuccessMessage,
        removeToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  return React.useContext(ToastContext);
}
