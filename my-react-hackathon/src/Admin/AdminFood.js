import Navbar from "../Component/Nav";
import Footer from "../Component/Footer";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import AddFormModal from "./AddFormModal";
import EditFormModal from "./EditFormModal";
import Loading from "../Component/Loading";

export default function AdminFood() {
    const [token, setToken] = useState(JSON.parse(localStorage.getItem("statusAdmin")));
    if (!token) {
        window.location.href = "/";
    }
    const location = useLocation();
    const [brandId, setBrandId] = useState(location.state.brandId);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showEdit, setEditShow] = useState(false);

    const [formId, setFormId] = useState();
    const [formular, setFormular] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    useEffect(() => {
        async function getFoods() {
            const brands = await axios.get(
                `http://localhost:8080/foods/${brandId}`
                , {
                    headers: {
                        "x-access-token": token
                    }
                });
            setFormular(brands.data.formular);
        }
        getFoods();
    }, [show, showEdit]);

    return (
        <>
            <Navbar />
            {
                !loading || formular.length !== 0 ?
                    <div className="container-fluid p-0 m-0 bg-h-egg login-con">
                        <div className="row justify-content-center m-0 p-0">

                            <div className="d-flex col-1"></div>

                            <div className="d-flex bg-h-egg row justify-content-center col-10 ">
                                <div className="pt-3 text-back t-text d-flex justify-content-center align-items-center">
                                    <label for="" className="">FORMULA</label>
                                </div>

                                <div className="card-deck col-12 row justify-content-start mt-2 mb-3">
                                    {
                                        formular.map((form) =>
                                            <div className="card col-12 col-sm-6 col-md-4 justify-content-center align-items-center my-2 p-2" >
                                                <div className="d-flex justify-content-end col-12 align-items-end rounded-circle mt-1">
                                                    <img src="image/gear.png" className="d-flex icon-s2 rounded-circle bg-h-egg btn-wh p-2" alt="logo2.png" onClick={() => setFormId(form._id) || setEditShow(true)}></img>
                                                </div>
                                                <img className="d-flex h-logo-card photo-cat" src={form.image} />
                                                <div className="card-title col-10 fw-bold h-text">{form.form_name}</div>
                                                <div className="card-text col-10 fw-bold">{form.kgCal} cal / 100 g</div>
                                                <div className="card-text col-10">{form.form_description}</div>
                                            </div>
                                        )
                                    }

                                    <div className="btn-card card col-12 col-sm-6 col-md-4 justify-content-center align-items-center" onClick={handleShow}>
                                        <div className="card-body d-flex align-items-center">
                                            <img className="d-flex h-logo-card" src="./image/plus.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex col-1"></div>
                        </div>
                    </div>
                    :
                    <Loading />
            }
            <Footer />
            <AddFormModal show={show} onHide={() => setShow(false)} token={token} brandId={brandId} />
            <EditFormModal show={showEdit} onHide={() => setEditShow(false)} token={token} brandId={brandId} formId={formId} />
        </>
    )
}