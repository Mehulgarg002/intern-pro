import React, { useContext, useEffect } from 'react';
import authContext from '../useContext/authContext';
import { Link, useNavigate } from 'react-router-dom';

const Content = () => {
  let navigate = useNavigate();
  const { signedUp } = useContext(authContext);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate("/signin");
    }
    else {
    }

  },)

  const handleOnSubmit = async () => {
    let token = localStorage.getItem('token');
    let data = JSON.parse(token);
    let value = data.authtoken;

    await fetch(`https://intern-pro-10.onrender.com/api/auth/sendmail`, {
      method: 'POST',
      headers: {
        'auth-token': value
      },
    });
    
  }
  const handleOnSubmit1 = async () => {
    let token = localStorage.getItem('token');
    let data = JSON.parse(token);
    let value = data.authtoken;

    await fetch(`https://intern-pro-10.onrender.com/api/auth/sendmail`, {
      method: 'POST',
      headers: {
        'auth-token': value
      },
    });
    
  }
  const logOut = () => {
    localStorage.removeItem('token')
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
          <Link href="/signin"><button onClick={logOut}  className='text-sm text-gray-400 font-bold mt-3 flex'> Logout</button></Link>
        </div>
        :
        <div className="flex justify-center text-xl h-[50vh]"  ><h1 className='content-center'>You are logged in .</h1>
          <Link href="/signin"><button onClick={logOut} className='text-sm text-gray-400 font-bold mt-3 flex'>Logout</button></Link>

        </div>}

    </>
  )
}

export default Content;




