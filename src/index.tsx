import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { UserProvider } from "./provider/UserProvider";

const rootElement = document.getElementById("root");

// 👇️ use type assertion
const root = createRoot(rootElement as Element);
root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
