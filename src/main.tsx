import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { IsUserOnline } from "./components/userDetails.tsx";
import RegistrationForm from "./components/registrationform.tsx";
import AuthProvider from "./wrapper/authWrapper.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* parent component */}
    <AuthProvider>
      {/* child component 1 */}
      <App />
      {/* child component 2 */}
      <RegistrationForm />
    </AuthProvider>
  </StrictMode>
);

// main.tsx is parent component
// App.tsx is child component
// helloworld component is child of app component
