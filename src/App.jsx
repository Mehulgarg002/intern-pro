import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './components/Signup'
import Main from './components/Main';
import Signin from './components/Signin';
import Profile from './components/Profile';
import Designer from './components/Designer';

const app = () => {
  
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/signin" element={<Signin />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route exact path="/designer" element={<Designer />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default app