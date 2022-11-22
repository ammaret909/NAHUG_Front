import Navbar from "../Component/Nav";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import EditVacModal from "./EditVacModal";
import Modal from 'react-bootstrap/Modal';
import Loading from "../Component/LoadingModal";

export default function AdminVaccine() {
    const [token, setToken] = useState(JSON.parse(localStorage.getItem("statusAdmin")));
    if (!token) {
        window.location.href = "/";
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showEdit, setEditShow] = useState(false);
    const handleEditClose = () => setEditShow(false);
    const handleEditShow = () => setEditShow(true);

    const [vaccines, setVaccine] = useState([]);
    const [vacId, setVaccineId] = useState();
    const [name, setName] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    useEffect(() => {
        async function getVacs() {
            const vaccines = await axios.get(
                `http://localhost:8080/vaccines`
                , {
                    headers: {
                        "x-access-token": token
                    }
                });
            setVaccine(vaccines.data);
        }
        getVacs();
    }, [show, showEdit]);

    const onSubmit = async (e) => {
        try {
            e.preventDefault();
            await axios.post(
                `http://localhost:8080/vaccines/`
                ,
                {
                    "name": name
                },
                {
                    headers: {
                        "x-access-token": token
                    }
                }
            );
            setShow(false);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Navbar />
            {
                !loading || vaccines.length !== 0 ?
                    <div className="container-fluid p-0 m-0 bg-h-egg login-con">
                        <div className="row justify-content-center m-0 p-0">

                            <div className="d-flex col-1"></div>

                            <div className="d-flex bg-h-egg row justify-content-center col-10">
                                <div className="pt-3 text-back t-text d-flex justify-content-center align-items-center">
                                    <label for="" className="">VACCINE</label>
                                </div>

                                <div className="card-deck col-12 row justify-content-start mt-2 mb-3">
                                    {
                                        vaccines.map((vac) =>
                                            <Link to="/adminphasevaccine" state={{ vacName: vac.name, vacId: vac._id }} className="text-decoration-none btn-card card col-12 col-sm-6 col-md-4 justify-content-center align-items-center p-2" >
                                                <div className="d-flex justify-content-end col-12 align-items-end rounded-circle mt-1 " >
                                                    <Link><img src="image/gear.png" className="d-flex icon-s2 rounded-circle bg-h-egg btn-wh p-2" onClick={() => setVaccineId(vac._id) || setEditShow(true)} ></img></Link>
                                                </div>
                                                <div className="card-title col-10 fw-bold h-text text-center icon-s">{vac.name}</div>
                                            </Link>
                                        )
                                    }

                                    <div className="btn-card card col-12 col-sm-6 col-md-4 justify-content-center align-items-center" onClick={handleShow}>
                                        <div className="card-body d-flex align-items-center">
                                            <img className="d-flex h-logo-card icon-s" src="./image/plus.png" />
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="d-flex col-1"></div>
                        </div>
                    </div> :
                    <Loading />
            }
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

                        <form className="card-deck col-12 row justify-content-start mt-2 mb-3 " onSubmit={onSubmit}>
                            <div className="d-flex justify-content-center col-12 fw-bold text-back h-text">
                                <div className="d-flex justify-content-center col-8 col-sm-8 rounded mb-3">
                                    <div className=" row">
                                        <div className="">VACCIN NAME</div>
                                        <input type="name" className="form-control" id="inputname" placeholder="Vaccine" onChange={e => setName(e.target.value)} required />
                                    </div>
                                </div>
                            </div>


                            <div className="d-flex justify-content-center mb-3">
                                <button type="submit" className="btn-or p-2 d-flex m-2 col-4 justify-content-center fw-bold rounded-3">Submit</button>
                                <button type="button" className="btn-or2 p-2 d-flex m-2 col-4 m-buttom justify-content-center fw-bold rounded-3" onClick={handleClose}>Cancel</button>
                            </div>

                        </form>
                    </div>
                </Modal.Body>
            </Modal>
            <EditVacModal show={showEdit} onHide={() => setEditShow(false)} vacId={vacId} token={token} />
        </>
    )
}