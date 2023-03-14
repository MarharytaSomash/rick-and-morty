import React, { useEffect, useState } from "react";
import { getAuth, signInWithPopup } from "firebase/auth";
import { app, myGoogleAuthProvider } from "./firebase";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

export const AuthProvider = () => {
    const auth = getAuth(app);
    const [user, setUser] = useState(auth.currentUser);

    useEffect(() => {
        const unsub = auth.onAuthStateChanged((user) => {
            if (user != null) {
                setUser(user);
            }
        });
        return unsub;
    }, [auth]);

    useEffect(() => {
        if (!user) {
            signInWithPopup(auth, myGoogleAuthProvider)
                .then((credentials) => {
                    setUser(credentials.user);
                })
                .catch((error) => console.error(error));
        }
    }, [auth, user]);

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
