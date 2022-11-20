import Navbar from "../Component/Nav";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function AdminVaccin() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showEdit, setEditShow] = useState(false);
    const handleEditClose = () => setEditShow(false);
    const handleEditShow = () => setEditShow(true);

    const onClick = () => {
        if (showEdit == true) {

        }
        else {
            window.location.href = '/adminphasevaccine'
        }
    }

    return (
        <>
            <Navbar />
            <div className="container-fluid p-0 m-0 bg-h-egg login-con">
                <div className="row justify-content-center m-0 p-0">

                    <div className="d-flex col-1"></div>

                    <div className="d-flex bg-h-egg row justify-content-center col-10">
                        <div className="pt-3 text-back t-text d-flex justify-content-center align-items-center">
                            <label for="" className="">VACCINE</label>
                        </div>

                        <div className="card-deck col-12 row justify-content-start mt-2 mb-3">
                            <div className="text-decoration-none btn-card card col-12 col-sm-6 col-md-4 justify-content-center align-items-center" >
                                <div className="d-flex justify-content-end col-12 align-items-end rounded-circle mt-1 " >
                                    <img src="image/gear.png" className="d-flex icon-s2 rounded-circle bg-h-egg btn-wh p-2" onClick={handleEditShow} ></img>
                                </div>
                                <div className="card-title col-10 fw-bold h-text text-center icon-s" onClick={onClick} >Vaccine 1</div>
                            </div>


                            <div className="btn-card card col-12 col-sm-6 col-md-4 justify-content-center align-items-center" onClick={handleShow}>
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
                            <div className="d-flex justify-content-center col-12 fw-bold text-back h-text">
                                <div className="d-flex justify-content-center col-8 col-sm-8 rounded mb-3">
                                    <div className=" row">
                                        <div className="">VACCIN NAME</div>
                                        <input type="name" className="form-control" id="inputname" placeholder="Vaccin" />
                                    </div>
                                </div>
                            </div>


                            <div className="d-flex justify-content-center mb-3">
                                <button type="submit" className="btn-or p-2 d-flex col-4 m-buttom justify-content-center fw-bold rounded-3">Submit</button>
                                <button type="submit" className="btn-or p-2 d-flex col-4 justify-content-center fw-bold rounded-3">Cancle</button>
                            </div>

                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal
                show={showEdit}
                onHide={() => setEditShow(false)}
                dialogClassName="modal-200w "
                aria-labelledby="example-custom-modal-styling-title border-0 "
            >
                <Modal.Header closeButton className="border-0 bg-h-orange2">
                </Modal.Header >
                <Modal.Body className="border-0 bg-h-orange2 rounded-bottom">
                    <div className="d-flex row justify-content-center border-0 ">

                        <div className="d-flex justify-content-end col-8 fw-bold text-back h-text mt-3">
                            <button class="btn btn-danger" type="submit">Delete</button>
                        </div>

                        <div className="pt-3 text-back t-text d-flex justify-content-center align-items-center">
                            <label for="" className="">ADD VACCINE</label>
                        </div>

                        <div className="card-deck col-12 row justify-content-start mt-2 mb-3 ">
                            <div className="d-flex justify-content-center col-12 fw-bold text-back h-text">
                                <div className="d-flex justify-content-center col-8 col-sm-8 rounded mb-3">
                                    <div className=" row">
                                        <div className="">VACCINE NAME</div>
                                        <input type="name" className="form-control" id="inputname" placeholder="Vaccin" />
                                    </div>
                                </div>
                            </div>


                            <div className="d-flex justify-content-center mb-3">
                                <button type="submit" className="btn-or p-2 d-flex col-4 m-buttom justify-content-center fw-bold rounded-3">Submit</button>
                                <button type="submit" className="btn-or p-2 d-flex col-4 justify-content-center fw-bold rounded-3">Cancle</button>
                            </div>

                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}