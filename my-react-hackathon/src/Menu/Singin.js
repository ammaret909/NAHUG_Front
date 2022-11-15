import React, { useState, useEffect } from "react";

export default function Singin() {
    return (
        <>
            <div className="bg-h-egg d-flex row login-con justify-content-center align-items-center m-0 p-0">

                <div className="d-flex col-md-6 col-12 justify-content-md-end justify-content-center align-items-center ">
                    <img src="image/testlogo1.png" className=" h-logo-login justify-content-center " alt="testlogo1.png"></img>
                </div>

                <div className="d-flex col-md-6 col-12 justify-content-md-start justify-content-center align-items-center ">
                    <div className="bg-h-orange2 rounded-3 shadow p-login col-md-9 col-xl-7 col-12">

                        <div className="form-group pb-1 text-egg  t-text ">
                            <label for="exampleInputEmail1 " className="">SINGIN</label>
                        </div>

                        <div className="form-group pb-3 text-orange h-text justify-content-center ">
                            <label for="exampleInputEmail1 ">Username</label>
                            <input type="email" className="form-control " id="inputEmail" placeholder="Username" />
                        </div>

                        <div class="form-group pb-3 text-orange h-text ">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                        </div>

                        <div class="form-group pb-3 text-orange h-text ">
                            <label for="exampleInputPassword1">Name</label>
                            <input type="password" className="form-control" id="inputName" placeholder="Name" />
                        </div>

                        <div class="form-group pb-3 text-orange h-text ">
                            <label for="exampleInputPassword1">Email</label>
                            <input type="password" className="form-control" id="inputEmail" placeholder="Email" />
                        </div>

                        <div className="d-flex justify-content-center ">
                            <button type="submit" className="btn-or pb-2 d-flex col-5 m-buttom justify-content-center fw-bold rounded-3">Submit</button>
                            <button type="submit" className="btn-or pb-2 d-flex col-5 justify-content-center fw-bold rounded-3">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}