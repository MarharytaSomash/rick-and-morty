import React, { useEffect, useState } from "react";
import { getAuth, signInWithPopup } from "firebase/auth";
import { app, myGoogleAuthProvider } from "./firebase";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

export const AuthProvider = () => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("userToken");
        if (token) {
            const user = JSON.parse(token).user;
            setUser(user);
        } else {
            signInWithPopup(auth, myGoogleAuthProvider)
                .then((credentials) => {
                setUser(credentials.user);
                })
                .catch((error) => console.error(error));
        }
    }, [auth]);

    useEffect(() => {
        if (user) {
            localStorage.setItem("userToken", JSON.stringify({ user }));
        }
    }, [user]);

   return (
      <>
         {user ? (
            <Routes>
               <Route path="/" element={<Home />} />
            </Routes>
         ) : (
            "Loading"
         )}
      </>
   );
};

