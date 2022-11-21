import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [token, setToken] = useState("");
    const [level, setLevel] = useState();
    const [error, setError] = useState();

    const handChange = (fn) => {
        return (event) => {
            fn(event.target.value);
        };
    };

    useEffect(() => {
        if (!token) return
        if (level === 1) {
            window.location.href = "/home";
        }
        else if (level === 2) {
            window.location.href = "/adminhome";
        }
    }, [token]);

    const onSubmit = async (e) => {
        try {
            e.preventDefault();
            const token = await axios.post("http://localhost:8080/login", {
                email,
                password,
            });
            console.log(token.data.permission);
            localStorage.setItem("status", JSON.stringify(token.data.token));
            setToken(JSON.parse(localStorage.getItem("status")));
            if (token.data.permission === 1) {
                setLevel(token.data.permission);
            }
            else if (token.data.permission === 2) {
                setLevel(token.data.permission);
            }
        } catch (error) {
            console.error(error);
            setError("Username or Password is wrong");
        }
    };
    return (
        <>
            <div className="bg-h-egg d-flex row login-con justify-content-center align-items-center m-0 p-0">

                <div className="d-flex col-md-6 col-12 justify-content-md-end justify-content-center align-items-center ">
                    <img src="image/testlogo1.png" className=" h-logo-login justify-content-center " alt="testlogo1.png"></img>
                </div>

                <form className="d-flex col-md-6 col-12 justify-content-md-start justify-content-center align-items-center " onSubmit={onSubmit}>
                    <div className="bg-h-orange2 rounded-3 shadow p-login col-md-9 col-xl-7 col-12">

                        <div className="form-group pb-1 text-egg  t-text ">
                            <label for="exampleInputEmail1 " className="">LOGIN</label>
                        </div>
                        <p className="text-danger">{error}</p>
                        <div className="form-group pb-3 text-orange h-text ">
                            <label for="exampleInputEmail1 ">Username</label>
                            <input type="email" className="form-control" id="inputEmail1" placeholder="Username" onChange={handChange(setEmail)} />
                        </div>

                        <div class="form-group pb-3 text-orange h-text">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="inputPassword1" placeholder="Password" onChange={handChange(setPassword)} />
                        </div>

                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn-or p-2 d-flex col-5 m-buttom justify-content-center fw-bold rounded-3">Login</button>
                            <Link to="/singin" className="text-decoration-none text-light btn-or2 p-2 d-flex col-5 justify-content-center fw-bold rounded-3">Sing in</Link>
                        </div>


                    </div>
                </form >

            </div>
        </>
    )
}