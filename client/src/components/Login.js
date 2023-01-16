import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "../features/authSlice";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isSuccess, message } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if (user || isSuccess) {
            navigate("/dashboard");
        }
    }, [user, isSuccess, dispatch, navigate]);

    const Login = (e) => {
        e.preventDefault();
        dispatch(LoginUser({ email, password }));
    };

    return (

        <div >
            <form onSubmit={Login} style={{ marginTop: "100px" }}>
                <p >{message}</p>
                <h1 >Sign  In</h1>

                <label >Email</label> <br />

                <input


                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="assignment@orange-sonatel.com"
                /><br />


                <label >Password</label><br />

                <input
                    type="password"

                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="**********"
                    class="inputField"

                /><br />



                <button
                    type="submit"
                    className=""
                    class="btnField"
                >
                    Login
                </button>
            </form>
        </div>

    );
};

export default Login;
