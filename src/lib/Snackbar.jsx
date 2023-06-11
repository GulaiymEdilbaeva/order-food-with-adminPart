import React from "react";
import { Snackbar as MuiSnackbar } from "@mui/material";
import { Alert } from "@mui/material";
import { useSelector } from "react-redux";
// import { snackbarAction } from "../store/snackbar";
export const Snackbar = ({ handleClose }) => {
  const { severity, message, open } = useSelector((state) => state.snackbar);
  // const dispatch = useDispatch();

  return (
    <div>
      <MuiSnackbar
        open={open}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </MuiSnackbar>
    </div>
  );
};
