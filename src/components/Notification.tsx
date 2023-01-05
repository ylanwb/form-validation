import Alert from "@mui/material/Alert";

import React from "react";

interface INotification {
  text: string;
  type: any;
}

export const Notification: React.FC<INotification> = ({ text, type }) => {
  return (
    <div className="alertSuccess">
      <Alert severity={type} color={type}>
        {text}
      </Alert>
    </div>
  );
};
