<<<<<<< HEAD
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./component/layout/Layout";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Detail } from "./pages/Detail";
import React from "react";
import { BrowserRouter } from "react-router-dom";
=======
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './component/layout/Layout'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Detail } from './pages/Detail'
import { Modal } from './component/Modal'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
>>>>>>> 1d611cd87ad6d51d7af6153c5c4c2a0ce1913cfd

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Detail" element={<Detail />} />
          <Route path="/Register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
=======
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Detail' element={<Detail />} />     
        <Route path='/Modal' element={<Modal />} />  
      </Route>
    </Routes>
     </BrowserRouter>
>>>>>>> 1d611cd87ad6d51d7af6153c5c4c2a0ce1913cfd
  );
}

export default App;
