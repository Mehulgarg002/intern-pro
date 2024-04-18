import React, { useContext, useState, useEffect } from 'react';
import authContext from '../useContext/authContext';
import { Resend } from 'resend';
import { useNavigate } from 'react-router-dom';


const Content = () => {
  let navigate = useNavigate();
  const resend = new  Resend('re_2KpVtFQV_yMwYDXGobaeYiAidUXyLMKnG');
  const { signedUp } = useContext(authContext);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    if (localStorage.getItem('token')) {
    }
    else {
      navigate("/signin");
    }
    const fetchData = async () => {
      try {
        let token = localStorage.getItem('token');
        let data = JSON.parse(token);
        let value = data.authtoken;

        const response = await fetch(`${process.env.BASE_URL}/api/auth/getuser`, {
          method: 'POST',
          headers: {
            'auth-token': value,
          }
        });

        const json = await response.json()
        if (json) {
          setEmail(json.email);
        } else {
          throw new Error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        alert("Invalid credentials or error occurred");
      }
    };
    // fetchData();
  },);


  const mail = async () => {
    try {
      const data = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: [email],
        subject: 'SignedUp',
        html: '<strong>Thanks you for signing up</strong>'
      });

    } catch (error) {
      console.error(error);
    }
  }
  const mail1 = async () => {
    try {
      const data = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: [email],
        subject: 'SignedIn',
        html: '<strong>Thanks you for signing In</strong>'
      });

    } catch (error) {
      console.error(error);
    }
  }

  if (signedUp === true) {
    mail()
  }
  else {
    mail1()
  }

  return (
    <>
      {signedUp === true ?
        <div className=""  >
          <h1>You are Signed up , Email has sent to your mail </h1>
        </div>
        :
        <div className=""  ><h1>You are logged in .</h1></div>}

    </>
  )
}

export default Content;


