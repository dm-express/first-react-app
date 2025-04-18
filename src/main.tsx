import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { IsUserOnline } from "./components/userDetails.tsx";
import RegistrationForm from "./components/registrationform.tsx";
import AuthProvider from "./wrapper/authWrapper.tsx";
import { BrowserRouter } from "react-router";
import AppRoutes from "./AppRoutes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      {/* parent component */}
      <AuthProvider>
        {/* child component 1 */}
        {/* <App /> */}
        <AppRoutes />
        {/* child component 2
        <RegistrationForm /> */}
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);

// main.tsx is parent component
// App.tsx is child component
// helloworld component is child of app component
