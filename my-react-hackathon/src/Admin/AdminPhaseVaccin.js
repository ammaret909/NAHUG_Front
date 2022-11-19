import Navbar from "../Component/Nav";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";
import React, { useState } from 'react';


export default function AdminPhaseVaccin() {

    return (
        <>
            <Navbar />
            <div className="container-fluid p-0 m-0 bg-h-egg login-con">
                <div className="row justify-content-center m-0 p-0">

                    <div className="d-flex col-1"></div>

                    <div className="d-flex bg-h-egg row justify-content-center col-10">
                        <div className="pt-3 text-back t-text d-flex justify-content-center align-items-center">
                            <label for="" className="">Vaccin</label>
                        </div>

                        <div className="card-deck col-12 row justify-content-start mt-2 mb-3">
                            <div className="card col-12 col-sm-6 col-md-4 justify-content-center align-items-center" >
                                <div to="" className="d-flex justify-content-end col-12 align-items-end rounded-circle mt-1 ">
                                    <img src="image/gear.png" className="d-flex icon-s2 rounded-circle bg-h-egg btn-wh p-2" alt="logo2.png" ></img>
                                </div>
                                <div className="card-title col-10 fw-bold h-text text-center icon-s">Phase 1</div>
                            </div>

                            <div className="card col-12 col-sm-6 col-md-4 justify-content-center align-items-center">
                                <div className="card-body d-flex align-items-center">
                                    <img className="d-flex h-logo-card icon-s" src="./image/plus.png" />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="d-flex col-1"></div>
                </div>
            </div>
            <Footer />

        </>
    )
}