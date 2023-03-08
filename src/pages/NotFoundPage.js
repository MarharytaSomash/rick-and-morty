import React from "react";
import { NavLink } from "react-router-dom";

function NotFoundPage() {
    return (
        <div>
            This page doesn&apos;t exist... Go <NavLink to="/">home</NavLink>
        </div>
    );
}

export default NotFoundPage;
