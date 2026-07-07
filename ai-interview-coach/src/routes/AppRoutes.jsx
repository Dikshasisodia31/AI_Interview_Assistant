import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import InterviewSetup from "../pages/Interview/InterviewSetup";
import InterviewSession from "../pages/Interview/InterviewSession";
import InterviewResult from "../pages/Interview/InterviewResult";
import InterviewDetails from "../pages/Interview/InterviewDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/interview/setup" element={<InterviewSetup/>}/>
      <Route path="/interview/session/:id" element={<InterviewSession/>}/>
      <Route path="/interview/result" element={<InterviewResult/>}/>
      <Route path="/interview/details/:id" element={<InterviewDetails/>}/>
    </Routes>
  );
};

export default AppRoutes;