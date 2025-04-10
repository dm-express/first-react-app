import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { IsUserOnline } from "./components/userDetails.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// main.tsx is parent component
// App.tsx is child component
// helloworld component is child of app component
