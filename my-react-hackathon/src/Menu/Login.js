import React, { useState, useEffect } from "react";

export default function Login() {
    return (
        <>
            <div className="bg-h-egg d-flex row login-con justify-content-center align-items-center m-0 p-0">

                <div className="d-flex col-md-6 col-12 justify-content-md-end justify-content-center align-items-center ">
                    <img src="image/testlogo1.png" className=" h-logo-login justify-content-center " alt="testlogo1.png"></img>
                </div>

                <div className="d-flex col-md-6 col-12 justify-content-md-start justify-content-center align-items-center ">
                    <div className="bg-h-orange2 rounded-3 shadow p-login col-md-9 col-xl-7 col-12">

                        <div className="form-group pb-1 text-egg  t-text ">
                            <label for="exampleInputEmail1 " className="">LOGIN</label>
                        </div>

                        <div className="form-group pb-3 text-orange h-text ">
                            <label for="exampleInputEmail1 ">Username</label>
                            <input type="email" className="form-control" id="inputEmail1" placeholder="Username" />
                        </div>

                        <div class="form-group pb-3 text-orange h-text">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="inputPassword1" placeholder="Password" />
                        </div>

                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn-or pb-2 d-flex col-5 m-buttom justify-content-center fw-bold rounded-3">Login</button>
                            <button type="submit" className="btn-or pb-2 d-flex col-5 justify-content-center fw-bold rounded-3">Sing in</button>
                        </div>


                    </div>
                </div>

            </div>
        </>
    )
}