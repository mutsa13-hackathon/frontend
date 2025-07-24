import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./component/layout/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Match from "./pages/Match";
import { Detail } from "./pages/Detail";
import React from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Detail" element={<Detail />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Match" element={<Match />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
