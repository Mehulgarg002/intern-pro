import React, { useContext, useEffect } from 'react';
import authContext from '../useContext/authContext';
import { useNavigate } from 'react-router-dom';

const Content = () => {
  let navigate = useNavigate();
  const { signedUp } = useContext(authContext);
  let token = localStorage.getItem('token');
  let data = JSON.parse(token);
  let value = data.authtoken;

  useEffect(() => {
    if (localStorage.getItem('token')) {
    }
    else {
      navigate("/signin");
    }

  },)
  console.log(localStorage.getItem('token'))

  const handleOnSubmit = async () => {
    const response = await fetch(`https://intern-pro-10.onrender.com/api/auth/sendmail`, {
      method: 'POST',
      headers: {
        'auth-token': value
      },
    });
    const json = await response.json()
    console.log(json)
  }
  const handleOnSubmit1 = async () => {
    const response = await fetch(`https://intern-pro-10.onrender.com/api/auth/sendmail`, {
      method: 'POST',
      headers: {
        'auth-token': value
      },
    });
    const json = await response.json()
    console.log(json)
  }

  if (signedUp === true) {
    handleOnSubmit()
  }
  else {
    handleOnSubmit1()

  }


  return (
    <>
      {signedUp === true ?
        <div className="flex justify-center text-xl h-[50vh]"  >
          <h1 className='content-center'>You are Signed up , Email has sent to your mail </h1>
        </div>
        :
        <div className="flex justify-center text-xl h-[50vh]"  ><h1 className='content-center'>You are logged in .</h1></div>}

    </>
  )
}

export default Content;




