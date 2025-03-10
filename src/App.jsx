import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import React from 'react'
import Layout from './Components/Layout'
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';

const App = () => {
  return (
    <>
    <Routes >
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />}/>
      </Route>
    </Routes>
    </>
  )
}

export default App