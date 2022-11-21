import Navbar from "../Component/Nav";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";
import React, { useState } from 'react';

export default function AdminHome() {
    const [token, setToken] = useState(JSON.parse(localStorage.getItem("status")));
    if (!token) {
        window.location.href = "/";
    }
    return (
        <>
            <Navbar />
            <div className="container-fluid p-0 m-0 bg-h-egg login-con">
                <div className="row justify-content-center m-0 p-0">

                    <div className="d-flex col-1 col-md-2"></div>

                    <div className="d-flex bg-h-egg row justify-content-center col-8">
                        <div className="pt-3 text-back t-text d-flex justify-content-center align-items-center">
                            <label for="" className="">FUNCTION</label>
                        </div>

                        <div className="card-deck col-12 row justify-content-around mt-2 mb-3 content-h align-items-center">
                            <Link to="/adminbrand" className="text-decoration-none btn-card card col-12 col-sm-6 col-md-4 justify-content-center align-items-center" >
                                <img className="d-flex h-logo-card mt-3" src="./image/catfood1.png" />
                                <div className="card-body">
                                    <h5 className="card-title">FOOD</h5>
                                </div>
                            </Link>
                            <Link to="/adminvaccine" className="text-decoration-none btn-card card col-12 col-sm-6 col-md-4 justify-content-center align-items-center">
                                <img className="d-flex h-logo-card mt-3" src="./image/injection.png" />
                                <div className="card-body">
                                    <h5 className="card-title">VACCINE</h5>
                                </div>
                            </Link>

                        </div>
                    </div>

                    <div className="d-flex col-1 col-md-2"></div>
                </div>
            </div>
            <Footer />
        </>
    )
}