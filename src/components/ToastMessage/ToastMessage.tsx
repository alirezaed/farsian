import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useToast } from "../../context/ToastContext";

export default function ToastMessage() {
  const { message, status, removeToast } = useToast();

  return (
    <Snackbar
      open={!!message}
      autoHideDuration={4000}
      onClose={() => removeToast()}
    >
      <Alert severity={status ? "success" : "error"} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
