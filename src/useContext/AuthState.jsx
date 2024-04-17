import React from 'react'
import { useState } from "react";
import authContext from "./authContext";

const AuthState = (props) => {
    const [signedUp, setSignedUp] = useState(false)
    const [signedIn, setSignedIn] = useState(false);

    return (
        <authContext.Provider value={{ signedUp, signedIn, setSignedUp, setSignedIn }}>
            {props.children}
        </authContext.Provider>
    )
}

export default AuthState