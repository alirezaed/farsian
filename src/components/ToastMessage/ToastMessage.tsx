import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import * as React from "react";

interface ToastMessageProps {
  message?: string;
  status?: boolean;
  open: boolean;
}

export default function ToastMessage({
  message,
  status,
  open,
}: ToastMessageProps) {
  const [show, setShow] = React.useState(open);
  React.useEffect(() => {
    setShow(open);
  }, [open]);
  return (
    <Snackbar
      open={show}
      autoHideDuration={4000}
      onClose={() => setShow(false)}
    >
      <Alert severity={status ? "success" : "error"} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
