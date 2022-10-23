import Alert from "@mui/material/Alert";
import React from "react";

export const Notification = ({ text, type }) => {
  return (
    <div className="alertSuccess">
      <Alert severity={type} color={type}>
        {text}
      </Alert>
    </div>
  );
};
