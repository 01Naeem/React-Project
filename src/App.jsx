import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";


import React from 'react'
import Layout from './Components/Layout'
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import SignUpForm from './Components/SignUpForm';
import Login from './Components/Login';

const App = () => {
  return (
    <>
    <Routes >
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<SignUpForm />}/>
        <Route path='/login' element={<Login />}/>
      </Route>
    </Routes>
    </>
  )
}

export default App