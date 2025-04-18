import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/home";
import Login from "./pages/login";
import Registration from "./pages/registration";
import Dashboard from "./pages/dashboard";
import Settings from "./pages/settings";
import Profile from "./pages/profile";
import Navbar from "./components/navbar";

const AppRoutes = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/registration"} element={<Registration />} />
          <Route path={"/dashboard"} element={<Dashboard />} />
          <Route path={"/settings"} element={<Settings />} />
          <Route path={"/profile"} element={<Profile />} />
        </Routes>
      </main>
    </>
  );
};

export default AppRoutes;
