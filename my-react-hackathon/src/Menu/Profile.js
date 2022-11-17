import Navbar from "../Component/Nav";
import Footer from "../Component/Footer";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function AddCat() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const location = useLocation();
    const [token, setToken] = useState(JSON.parse(localStorage.getItem("status")));
    if (!token) {
        window.location.href = "/";
    }
    const [catId, setCatId] = useState(location.state.catId);
    const [cat, setCat] = useState([]);

    useEffect(() => {
        async function getCats() {
            const cat = await axios.get(
                `http://localhost:8080/cats/${catId}`
                , {
                    headers: {
                        "x-access-token": token
                    }
                });
            setCat(cat.data);
        }
        getCats();
    }, [catId]);

    console.log(cat);
    return (
        <>
            <Navbar />
            <div className="container-fluid p-0 m-0 bg-h-egg login-con">
                <div className="row justify-content-center m-0 p-0">

                    <div className="d-flex col-md-2"></div>

                    <div className="d-flex bg-h-egg row justify-content-center col-md-8">
                        <div className="pt-3 text-back t-text d-flex justify-content-center align-items-center mb-5 ">
                            <label for="" className="">PROFILE</label>
                        </div>

                        <div className="card-deck col-12 row d-flex justify-content-center mt-5 bg-h-orange2 mb-5 rounded">

                            <div className="d-flex justify-content-center col-8 col-sm-4 c-one p-2 mb-3 align-items-center rounded-circle position-absolute top-25 start-50 translate-middle">
                                <img className="d-flex profile rounded-circle bg-h-smoke shadow c-two" src="./image/testcat.png" />
                            </div>

                            <div className="t-text d-flex justify-content-center col-12 fw-bold text-back h-text mt-5 pt-5">{cat.name}</div>

                            <div className="d-flex justify-content-start col-12  text-back h-text ">
                                <div className="d-flex justify-content-start col-8 col-sm-12 rounded mb-3 ">
                                    <div className="row m-2 col-12">
                                        <div className="d-flex col-6 col-sm-3 fw-bold">Age</div>
                                        <div className="d-flex col-6 col-sm-4">{cat.year} Year</div>
                                        <div className="d-flex col-6 col-sm-5">{cat.month} Month</div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-start col-12  text-back h-text">
                                <div className="d-flex justify-content-start col-8 col-sm-12 rounded mb-3 ">
                                    <div className=" row m-2 col-12">
                                        <div className="d-flex col-6 col-sm-3 fw-bold">Weight</div>
                                        <div className="d-flex col-6 col-sm-9">{cat.weight} KG</div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-start col-12  text-back h-text">
                                <div className="d-flex justify-content-start col-8 col-sm-12 rounded mb-3 ">
                                    <div className=" row m-2 col-12">
                                        <div className="d-flex col-6 col-sm-3 fw-bold">Food</div>
                                        <div className="d-flex col-6 col-sm-9"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex col-10 bg-h-smoke mb-3 row rounded">
                                <div className="d-flex justify-content-center col-8 col-sm-4 p-2 mb-3 align-items-center rounded-circle position-absolute top-25 start-50 translate-middle">
                                    <img className="d-flex profile rounded-circle bg-h-smoke shadow c-profile" src="./image/testcat.png" />
                                </div>

                                <div className="d-flex col-12 bg-h-smoke mb-3 justify-content-center ">
                                    <div className="t-text2 d-flex justify-content-center col-12 fw-bold text-back mt-5">Whiscat</div>
                                </div>

                                <div className="d-flex justify-content-start col-12  text-back h-text">
                                    <div className="d-flex justify-content-start col-8 col-sm-12 rounded mb-3 ">
                                        <div className=" row m-2 col-12">
                                            <div className="d-flex col-12 col-sm-3 fw-bold">Portion</div>
                                            <div className="d-flex col-12 col-sm-9">128 g. (1 spoon/50g)</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-start col-12  text-back h-text">
                                    <div className="d-flex justify-content-start col-8 col-sm-12 rounded mb-3 ">
                                        <div className=" row m-2 col-12">
                                            <div className="d-flex col-12 col-sm-3 fw-bold">Day</div>
                                            <div className="d-flex col-12 col-sm-9">256 g.</div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="text-back h-text">Vaccine</div>
                        <div className="d-flex justify-content-center row rounded-pills">

                            <div className="row bg-h-orange p-4 m-0 rounded shadow">
                                <div className="d-flex justify-content-dm-start justify-content-sm-center justify-content-center col-2 align-items-center rounded-circle ">
                                    <img src="image/injection.png" className="d-flex icon-s rounded-circle bg-h-egg "></img>
                                </div>

                                <div className="d-flex justify-content-start col-8 h-text">
                                    <div className="row">
                                        <div className="d-flex col-6 col-sm-4 text-back justify-content-md-start justify-content-center align-items-center">
                                            FVRCP
                                        </div>
                                        <div className="d-flex col-6 col-sm-4 text-back justify-content-md-start justify-content-center align-items-center">
                                            2 times
                                        </div>
                                        <div className="d-flex col-12 col-sm-4 text-back justify-content-md-start justify-content-center align-items-center">
                                            12/5/2021
                                        </div>

                                    </div>
                                </div>

                                <div className="d-flex justify-content-md-end  justify-content-center col-2 align-items-center rounded-circle mt-1 ">
                                    <img src="image/cancel.png" className="d-flex icon-s2 rounded-circle bg-h-egg btn-wh" ></img>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center col-8 col-sm-4 c-one p-2 mb-3 align-items-center rounded-circle" onClick={handleShow}>
                                <img className="d-flex h-logo-card h-logo-ac p-3 rounded-circle bg-h-smoke shadow btn-wh" src="./image/add.png" />
                            </div>

                        </div>
                    </div>

                    <div className="d-flex col-1 col-md-2"></div>
                </div>
            </div>
            <Footer />

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-200w "
                aria-labelledby="example-custom-modal-styling-title border-0 "
            >
                <Modal.Header closeButton className="border-0 bg-h-orange2">
                </Modal.Header >
                <Modal.Body className="border-0 bg-h-orange2 rounded-bottom">
                    <div className="d-flex row justify-content-center border-0 ">
                        <div className="pt-3 text-back t-text d-flex justify-content-center align-items-center">
                            <label for="" className="">ADD VACCINE</label>
                        </div>

                        <div className="card-deck col-12 row justify-content-start mt-2 mb-3 ">

                            <div className="form-group pb-3 text-orange h-text ">
                                <label >Select Vaccine</label>
                                <select id="vaccine-select" className="form-control">
                                    <option value="">--Please choose an vaccine--</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                                {/* <input type="email" className="form-control" id="inputEmail1" placeholder="Username" /> */}
                            </div>

                            <div className="form-group pb-3 text-orange h-text ">
                                <label >Vaccinated</label>
                                <input type="date" className="form-control" id="inputdate" placeholder="Month" />
                            </div>

                            <div className="d-flex justify-content-center">
                                <button type="submit" className="btn-or p-2 d-flex col-5 m-buttom justify-content-center fw-bold rounded-3 align-items-center">Submit</button>
                            </div>

                        </div>
                    </div>
                </Modal.Body>
            </Modal>

        </>
    )
}