import React, { useEffect } from 'react'
import NavBar from './NavBar';
import Footer from './Footer';
import Content from './Content';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
    }
    else {
      navigate("/signin");
    }
  },)

  return (
    <>
      <NavBar />
      <Content />
      <Footer />
    </>
  )
}

export default Main