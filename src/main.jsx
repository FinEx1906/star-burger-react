import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/index.css";
import { Route, Routes } from "react-router";
import Login from "./Pages/Auth/Login/Login.jsx";

export default function main() {
  return(
    <Routes>
      <Route path="/" element={<Login />}/>
    </Routes>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
