// import logo from './logo.svg';
// import './App.css';

import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";

// import mainpage from "./components/mainpage";
import Login from "./components/Login";
// import Signin from "./components/Signin";

import "./App.css";
function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<mainpage />}></Route> */}
            <Route path="/Login" element={<Login />}></Route>
            {/* <Route path="/signin/" element={<Signin />}></Route> */}
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App