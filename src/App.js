import React from "react";
import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="body">
      <Navbar />
      <Main />
      <Sidebar />
    </div>
  );
}

export default App;
