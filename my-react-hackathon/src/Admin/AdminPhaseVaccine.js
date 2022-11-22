import Navbar from "../Component/Nav";
import Footer from "../Component/Footer";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import EditPhaseModal from "./EditPhaseModal";

export default function AdminPhaseVaccine() {
    const [token, setToken] = useState(JSON.parse(localStorage.getItem("status")));
    if (!token) {
        window.location.href = "/";
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showEdit, setEditShow] = useState(false);
    const location = useLocation();
    const [vacName, setVacName] = useState(location.state.vacName);
    const [vacId, setVacId] = useState(location.state.vacId);
    const [vaccine, setVaccine] = useState();
    const [phases, setPhases] = useState([]);
    const [phaseId, setPhaseId] = useState();
    const [catMonth, setCatMonth] = useState();
    const [month, setMonth] = useState();
    const [times, setTimes] = useState();

    console.log(location.state);
    useEffect(() => {
        async function getVacs() {
            const vaccines = await axios.get(
                `http://localhost:8080/vaccines/${vacName}`
                , {
                    headers: {
                        "x-access-token": token
                    }
                });
            setVaccine(vaccines.data);
            setPhases(vaccines.data.type)
        }
        getVacs();
    }, [show, showEdit]);

    const onSubmit = async (e) => {
        try {
            e.preventDefault();
            await axios.post(
                `http://localhost:8080/vaccines/${vacId}`
                ,
                {
                    "cat_month": catMonth,
                    "month": month,
                    "times": times
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
            <div className="container-fluid p-0 m-0 bg-h-egg login-con">
                <div className="row justify-content-center m-0 p-0">

                    <div className="d-flex col-1"></div>

                    <div className="d-flex bg-h-egg row justify-content-center col-10">
                        <div className="pt-3 text-back t-text d-flex justify-content-center align-items-center">
                            <label for="" className="">PHASE</label>
                        </div>

                        <div className="card-deck col-12 row justify-content-start mt-2 mb-3">
                            {
                                phases.map((phase, index = 0) =>
                                    <div className="text-decoration-none btn-card card col-12 col-sm-6 col-md-4 justify-content-center align-items-center" >
                                        <div className="d-flex justify-content-end col-12 align-items-end rounded-circle mt-1 ">
                                            <img src="image/gear.png" className="d-flex icon-s2 rounded-circle bg-h-egg btn-wh p-2" alt="logo2.png" onClick={() => setPhaseId(phase._id) || setEditShow(true)} ></img>
                                        </div>
                                        <div className="card-title col-10 fw-bold h-text text-center icon-s">Phase {index + 1}</div>
                                        {/* <div className="card-title col-10 fw-bold">Cat age {catMonth}</div>
                                        <div className="card-text col-10 fw-bold">How many days to inject {month}</div>
                                        <div className="card-text col-10 fw-bold">Time {times}</div> */}
                                    </div>
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
            </div>
            <Footer />
            <EditPhaseModal show={showEdit} onHide={() => setEditShow(false)} phaseId={phaseId} token={token} vacId={vacId} />
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
                            <label for="" className="">ADD PHASE</label>
                        </div>

                        <form className="card-deck col-12 row justify-content-start mt-2 mb-3 " onSubmit={onSubmit}>
                            <div className="d-flex justify-content-center col-12 fw-bold text-back h-text">
                                <div className="d-flex justify-content-center col-8 col-sm-10 rounded mb-3">
                                    <div className=" row">
                                        <div className="">CAT AGE (MONTH)</div>
                                        <input type="number" className="form-control" id="inputname" placeholder="Cat age" onChange={e => setCatMonth(e.target.value)} required />
                                        <div className="">HOW MANY DAYS TO INJECT</div>
                                        <input type="number" className="form-control" id="inputname" placeholder="Days" onChange={e => setMonth(e.target.value)} required />
                                        <div className="">TIMES</div>
                                        <input type="number" className="form-control" id="inputname" placeholder="Times" onChange={e => setTimes(e.target.value)} required />
                                    </div>
                                </div>
                            </div>


                            <div className="d-flex justify-content-center mb-3">
                                <button type="submit" className="btn-or p-2 m-2 d-flex col-4 justify-content-center fw-bold rounded-3">Submit</button>
                                <button type="button" className="btn-or2 p-2 m-2 d-flex col-4 m-buttom justify-content-center fw-bold rounded-3" onClick={handleClose}>Cancle</button>
                            </div>

                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}