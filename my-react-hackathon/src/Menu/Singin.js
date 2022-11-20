import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Singin() {
    const [first_name, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [last_name, setLastName] = useState("");

    // useEffect(() => {
    //   if(password === confirmPassword) window.location.href = "/login";
    // }, [password, confirmPassword]);

    const onSubmit = async (e) => {
        try {
            e.preventDefault();
            const regis = await axios.post("http://localhost:8080/register", {
                first_name,
                last_name,
                email,
                password,
            });
            console.log(regis);
            localStorage.setItem("status", JSON.stringify(regis.data.status));
            // setStatus(JSON.parse(localStorage.getItem("status")));
            // window.location.href = "/login";
        } catch (error) {
            console.error(error);
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
                            <label for="exampleInputEmail1 " className="">SINGIN</label>
                        </div>

                        <div className="form-group pb-3 text-orange h-text justify-content-center ">
                            <label for="exampleInputEmail1 ">First Name</label>
                            <input type="text" className="form-control " id="inputFirstName" placeholder="First Name" onChange={(event) => setFirstName(event.target.value)} required />
                        </div>

                        <div class="form-group pb-3 text-orange h-text ">
                            <label for="exampleInputPassword1">Last Name</label>
                            <input type="text" className="form-control" id="inputLastName" placeholder="Last Name" onChange={(event) => setLastName(event.target.value)} required />
                        </div>

                        <div class="form-group pb-3 text-orange h-text ">
                            <label for="exampleInputPassword1">Email</label>
                            <input type="email" className="form-control" id="inputEmail" placeholder="Email" onChange={(event) => setEmail(event.target.value)} required />
                        </div>

                        <div class="form-group pb-3 text-orange h-text ">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="inputPassword" placeholder="Password" onChange={(event) => setPassword(event.target.value)} required />
                        </div>

                        <div className="d-flex justify-content-center ">
                            <button type="submit" className="btn-or pb-2 d-flex col-5 m-buttom justify-content-center fw-bold rounded-3">Submit</button>
                            <Link to="/" className="text-decoration-none text-light btn-or pb-2 d-flex col-5 justify-content-center fw-bold rounded-3">Cancel</Link>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}