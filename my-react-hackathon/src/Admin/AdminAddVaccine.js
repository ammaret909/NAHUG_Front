import Navbar from "../Component/Nav";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";
import React, { useState } from 'react';


export default function AdminAddVaccin() {
    const [token, setToken] = useState(JSON.parse(localStorage.getItem("status")));
    if (!token) {
        window.location.href = "/";
    }
    return (
        <>
            <Navbar />
            <div className="container-fluid p-0 m-0 bg-h-egg login-con">
                <div className="row justify-content-center m-0 p-0">

                    <div className="d-flex col-2"></div>

                    <div className="d-flex bg-h-egg row justify-content-center col-8">
                        <div className="pt-3 text-back t-text d-flex justify-content-center align-items-center">
                            <label for="" className="">ADD VACCINE</label>
                        </div>

                        <form className="card-deck col-12 row d-flex justify-content-center mt-2 mb-3 bg-h-orange2" >

                            <div className="d-flex justify-content-center col-12 fw-bold text-back h-text my-2">
                                <div className="d-flex justify-content-center col-8 col-sm-7">
                                    <div className="row w-100">
                                        <div className="">NAME VACCINE</div>
                                        <input type="name" className="form-control" id="inputname" placeholder="Vaccine" />
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center col-12 fw-bold text-back h-text my-2">
                                <div className="d-flex justify-content-center col-8 col-sm-7">
                                    <div className="row w-100">
                                        <div className="">AGE</div>
                                        <input type="number" className="form-control" id="inputname" placeholder="Age" />
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center col-12 fw-bold text-back h-text my-2">
                                <div className="d-flex justify-content-center col-8 col-sm-7">
                                    <div className="row w-100">
                                        <div className="">
                                            HOW MANY DAYS TO INJECT</div>
                                        <input type="number" className="form-control" id="inputname" placeholder="Days" />
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center col-12 fw-bold text-back h-text my-2">
                                <div className="d-flex justify-content-center col-8 col-sm-7">
                                    <div className="row w-100">
                                        <div className="">AMOUNT</div>
                                        <input type="number" className="form-control" id="inputname" placeholder="Amount" />
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center mb-3 my-2">
                                <Link to="/adminphasevaccine" type="submit" className="text-decoration-none btn-or p-2 d-flex col-4 m-buttom justify-content-center fw-bold rounded-3">Submit</Link>
                                <Link to="/adminphasevaccine" type="submit" className="text-decoration-none btn-or2 p-2 d-flex col-4 justify-content-center fw-bold rounded-3">Cancle</Link>
                            </div>

                        </form>
                    </div>

                    <div className="d-flex col-2"></div>
                </div>
            </div>
            <Footer />

        </>
    )
}