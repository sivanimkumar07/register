
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark p-3">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    User System
                </Link>

                <div className="d-flex gap-4">
                    <Link className="nav-link text-white" to="/">
                        Register
                    </Link>

                    <Link className="nav-link text-white" to="/login">
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
