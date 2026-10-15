
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        try {
            await axios.post(
                "https://worksheet-auth.mashupstack.com/register",
                {
                    user_name: name,
                    email: email,
                    password: password
                }
            );

            alert("Registration Successful");
            navigate("/login");
        } catch (error) {
            setError(
                error.response?.data?.message || "Registration failed"
            );
        }
    };

    return (
        <div className="container mt-5">
            <div className="card p-4 mx-auto" style={{ maxWidth: "450px" }}>
                <h2 className="text-center mb-4">Register</h2>

                <form onSubmit={handleRegister}>
                    <input
                        className="form-control mb-3"
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <input
                        className="form-control mb-3"
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        className="form-control mb-3"
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <input
                        className="form-control mb-3"
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />

                    {error && (
                        <p className="text-danger">{error}</p>
                    )}

                    <button className="btn btn-success w-100" type="submit">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;
