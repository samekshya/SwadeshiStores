import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom"; 
import "./App.css";

const Login = React.lazy(() => import("./public/Login"));
const Signup = React.lazy(() => import("./public/Signup"));
const Dashboard = React.lazy(() => import("./private/Dashboard"));
const ContactUs = React.lazy(() => import("./public/Contactus"));
const EditProfile = React.lazy(() => import("./private/EditProfile"));
const AboutUs = React.lazy(() => import("./public/AboutUs"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </Suspense>
  );
}

export default App;
