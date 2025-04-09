import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Registration from "./component/Registration";
import Login from "./component/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Dashboard from "./component/Dashboard";

// import { useState } from 'react'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;