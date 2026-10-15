
import React, { useState } from "react";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post(
                "https://worksheet-auth.mashupstack.com/login",
                {
                    email: email,
                    password: password
                }
            );

            alert("Successfully Logged In");

            console.log("Token:", response.data.token);
        } catch (error) {
            setError(
                error.response?.data?.message || "Login failed"
            );
        }
    };

    return (
        <div className="container mt-5">
            <div className="card p-4 mx-auto" style={{ maxWidth: "450px" }}>
                <h2 className="text-center mb-4">Login</h2>

                <form onSubmit={handleLogin}>
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

                    {error && (
                        <p className="text-danger">{error}</p>
                    )}

                    <button className="btn btn-primary w-100" type="submit">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
