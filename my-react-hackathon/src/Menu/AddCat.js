import Navbar from "../Component/Nav";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";


export default function AddCat() {
    const [token, setToken] = useState(JSON.parse(localStorage.getItem("status")))
    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");
    const [weight, setWeight] = useState("");

    if (!token) {
        window.location.href = "/";
    }

    const [image, setData] = useState()
    const inputFileRef = useRef(null)

    const fileToBase64 = (filename, filepath) => {
        return new Promise((resolve) => {
            var file = new File([filename], filepath);
            var reader = new FileReader(); // Read file content on file loaded event
            reader.onload = function (event) {
                resolve(event.target.result);
            }; // Convert data to base64
            reader.readAsDataURL(file);
        });
    };
    const handleChange = async (e) => {
        setData(await fileToBase64(inputFileRef.current.files[0]))
    };
    console.log(image);
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
                    image: image
                }, {
                headers: {
                    "x-access-token": token
                }
            });
            window.location.href = "/home"
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
                        <div className="pt-3 text-back t-text d-flex justify-content-center align-items-center">
                            <label for="" className="">ADD CAT</label>
                        </div>

                        <form className="card-deck col-12 row d-flex justify-content-center mt-2 mb-3 bg-h-orange2" onSubmit={onSubmit}>
                            <div className="d-flex justify-content-center col-12 fw-bold text-back h-text my-2">PHOTO</div>
                            {
                                image ?
                                    <label for="fileImg" className="d-flex justify-content-center bg-h-smoke col-8 col-sm-4 c-one rounded p-2 mb-3 align-items-center my-2">
                                        <img className="d-flex h-logo-card h-logo-ac pm-2 w-100 h-100" src={image} />
                                    </label>
                                    :
                                    <label for="fileImg" className="d-flex justify-content-center bg-h-smoke col-8 col-sm-4 c-one rounded p-2 mb-3 align-items-center my-2">
                                        <img className="d-flex h-logo-card h-logo-ac pm-2" src="./image/add.png" />
                                    </label>
                            }
                            <div>
                                <input type="file" name="file" id="fileImg" ref={inputFileRef} onChange={handleChange}></input>
                            </div>
                            <div className="d-flex justify-content-center col-12 fw-bold text-back h-text my-2">
                                <div className="d-flex justify-content-center col-8 col-sm-7">
                                    <div className="row w-100">
                                        <div className="">NAME</div>
                                        <input type="name" className="form-control" id="inputname" placeholder="Name" onChange={handChange(setName)} />
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center col-12 fw-bold text-back h-text my-2">
                                <div className="d-flex justify-content-center col-8 col-sm-7">
                                    <div className="row w-100">
                                        <div className="">YEAR</div>
                                        <input type="number" className="form-control" id="inputname" placeholder="Year" onChange={handChange(setYear)} />
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center col-12 fw-bold text-back h-text my-2">
                                <div className="d-flex justify-content-center col-8 col-sm-7">
                                    <div className="row w-100">
                                        <div className="">MONTH</div>
                                        <input type="number" className="form-control" id="inputname" placeholder="Month" onChange={handChange(setMonth)} />
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center col-12 fw-bold text-back h-text my-2">
                                <div className="d-flex justify-content-center col-8 col-sm-7">
                                    <div className="row w-100">
                                        <div className="">WEIGHT</div>
                                        <input type="number" className="form-control" id="inputname" placeholder="Weight" onChange={handChange(setWeight)} />
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center mb-3 my-2">
                                <button type="submit" className="btn-or p-2 d-flex col-4 m-buttom justify-content-center fw-bold rounded-3">Submit</button>
                                <Link to="/home" className="btn-or p-2 d-flex col-4 m-buttom justify-content-center fw-bold rounded-3 text-decoration-none">Cancel</Link>
                            </div>
                        </form>
                    </div>

                    <div className="d-flex col-2"></div>
                </div>
            </div >
            <Footer />


        </>
    )
}