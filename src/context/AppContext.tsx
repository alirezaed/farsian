import { PropsWithChildren } from "react";
import { AuthenticationContextProvider } from "./AuthenticationContext";
import { ThemeContextProvider } from "./ThemeContext";
import { ToastContextProvider } from "./ToastContext";

export function AppContext({ children }: PropsWithChildren) {
  return (
    <ThemeContextProvider>
      <AuthenticationContextProvider>
        <ToastContextProvider>{children}</ToastContextProvider>
      </AuthenticationContextProvider>
    </ThemeContextProvider>
  );
}
