import Navbar from "../Component/Nav";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";


export default function AddCat() {
    const [token, setToken] = useState(JSON.parse(localStorage.getItem("status")))
    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");
    const [weight, setWeight] = useState("");
    console.log(token);
    if (!token) {
        window.location.href = "/";
    }

    const handChange = (fn) => {
        return (event) => {
            fn(event.target.value);
        };
    };

    const onSubmit = async (e) => {
        try {
            e.preventDefault();
            await axios.post(
                `http://localhost:8080/cats/`
                ,
                {
                    name: name,
                    year: year,
                    month: month,
                    weight: weight,
                }, {
                headers: {
                    "x-access-token": token
                }
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Navbar />
            <div className="container-fluid p-0 m-0 bg-h-egg login-con">
                <div className="row justify-content-center m-0 p-0">

                    <div className="d-flex col-2"></div>

                    <div className="d-flex bg-h-egg row justify-content-center col-8">
                        <div className="pt-3 text-back t-text d-flex justify-content-center align-items-center ">
                            <label for="" className="">ADD CAT</label>
                        </div>

                        <form className="card-deck col-12 row d-flex justify-content-center mt-2 mb-3 bg-h-orange2" onSubmit={onSubmit}>
                            <div className="d-flex justify-content-center col-12 fw-bold text-back h-text">PHOTO</div>

                            {/* <div className="container">
                                <img className="d-flex h-logo-card h-logo-ac pm-2" src="./image/add.png" />
                                <label for="firstimg"><i className="fa fa-plus" style="font-size:24px;"></i></label>
                                <input type="file" name="" id="firstimg" style="display: none;visibility: none;" onchange="getImage(this.value);"></input>
                            </div> */}

                            <div className="d-flex justify-content-center bg-h-smoke col-8 col-sm-4 c-one rounded p-2 mb-3 align-items-center">
                                <img className="d-flex h-logo-card h-logo-ac pm-2" src="./image/add.png" />
                            </div>

                            <div className="d-flex justify-content-center col-12 fw-bold text-back h-text">
                                <div className="d-flex justify-content-center col-8 col-sm-4 rounded mb-3">
                                    <div className=" row">
                                        <div className="">NAME</div>
                                        <input type="name" className="form-control" id="inputname" placeholder="Name" onChange={handChange(setName)} />
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center col-12 fw-bold text-back h-text">
                                <div className="d-flex justify-content-center col-8 col-sm-4 rounded mb-3 ">
                                    <div className=" row">
                                        <div className="">YEAR</div>
                                        <input type="number" className="form-control" id="inputname" placeholder="Year" onChange={handChange(setYear)} />
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center col-12 fw-bold text-back h-text">
                                <div className="d-flex justify-content-center col-8 col-sm-4 rounded mb-3 ">
                                    <div className=" row">
                                        <div className="">MONTH</div>
                                        <input type="number" className="form-control" id="inputname" placeholder="Month" onChange={handChange(setMonth)} />
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center col-12 fw-bold text-back h-text">
                                <div className="d-flex justify-content-center col-8 col-sm-4 rounded mb-3">
                                    <div className=" row">
                                        <div className="">WEIGHT</div>
                                        <input type="number" className="form-control" id="inputname" placeholder="Weight" onChange={handChange(setWeight)} />
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center mb-3">
                                <button type="submit" className="btn-or pb-2 d-flex col-4 m-buttom justify-content-center fw-bold rounded-3">Submit</button>
                                <button type="submit" className="btn-or pb-2 d-flex col-4 justify-content-center fw-bold rounded-3">Cancle</button>
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