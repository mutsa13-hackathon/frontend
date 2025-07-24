import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./component/layout/Layout";
import  Home  from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Detail } from "./pages/Detail";
import { Search } from "./pages/Search";
import { Money } from "./pages/Money";
import React from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Money" element={<Money/>} />
          <Route path="/Detail" element={<Detail />} />
          <Route path="/Register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
