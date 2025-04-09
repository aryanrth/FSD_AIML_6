import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div
        style={{ backgroundColor: "#965954", color: "white", fontSize: "25px" }}
      >
        Welcome to Student App
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
