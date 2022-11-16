import Navbar from "../Component/Nav";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";
import React, { useState } from 'react';


export default function AddCat() {

    return (
        <>
            <Navbar />
            <div className="container-fluid p-0 m-0 bg-h-egg login-con">
                <div className="row justify-content-center m-0 p-0">

                    <div className="d-flex col-2"></div>

                    <div className="d-flex bg-h-egg row justify-content-center col-8">
                        <div className="pt-3 text-back t-text d-flex justify-content-center align-items-center mb-5 ">
                            <label for="" className="">PROFILE</label>
                        </div>

                        <div className="card-deck col-12 row d-flex justify-content-center mt-5 bg-h-orange2 mb-5 rounded">

                            <div className="d-flex justify-content-center col-8 col-sm-4 c-one p-2 mb-3 align-items-center rounded-circle position-absolute top-25 start-50 translate-middle">
                                <img className="d-flex profile rounded-circle bg-h-smoke shadow c-two" src="./image/testcat.png" />
                            </div>

                            <div className="t-text d-flex justify-content-center col-12 fw-bold text-back h-text mt-5 pt-5">NAMA</div>

                            <div className="d-flex justify-content-start col-12 fw-bold text-back h-text ">
                                <div className="d-flex justify-content-start col-8 col-sm-12 rounded mb-3 ">
                                    <div className="row m-2 col-12">
                                        <div className="d-flex col-6 col-sm-4">Age</div>
                                        <div className="d-flex col-6 col-sm-8">Age</div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-start col-12 fw-bold text-back h-text">
                                <div className="d-flex justify-content-start col-8 col-sm-12 rounded mb-3 ">
                                    <div className=" row m-2 col-12">
                                        <div className="d-flex col-6 col-sm-4">Weight</div>
                                        <div className="d-flex col-6 col-sm-8">asdhjaskjldhjksh</div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-start col-12 fw-bold text-back h-text">
                                <div className="d-flex justify-content-start col-8 col-sm-12 rounded mb-3 ">
                                    <div className=" row m-2 col-12">
                                        <div className="d-flex col-5 col-sm-4">Food</div>
                                        <div className="d-flex col-7 col-sm-8">asdhjaskjldhjksh</div>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>

                    <div className="d-flex col-2"></div>
                </div>
            </div>
            <Footer />


        </>
    )
}