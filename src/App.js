import "./App.scss";
import React from "react";
import Home from "./pages/Home";
import Details from "./pages/Details";
import NotFoundPage from "./pages/NotFoundPage";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth";

function App() {
    return (
        <>
            <AuthProvider />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="details/:id" element={<Details />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}

export default App;
