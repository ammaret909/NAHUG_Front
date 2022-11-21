import Navbar from "../Component/Nav";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import AddBrandModal from "./AddBrandModal";
import EditBrandModal from "./EditBrandModal";

export default function AdminHome() {
    const [token, setToken] = useState(JSON.parse(localStorage.getItem("status")));
    if (!token) {
        window.location.href = "/";
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showEdit, setEditShow] = useState(false);
    const handleEditClose = () => setEditShow(false);
    const handleEditShow = () => setEditShow(true);
    const [brands, setBrands] = useState([]);
    const [brandId, setBrandId] = useState();

    useEffect(() => {
        async function getFoods() {
            const brands = await axios.get(
                `http://localhost:8080/foods`
                , {
                    headers: {
                        "x-access-token": token
                    }
                });
            setBrands(brands.data);
        }
        getFoods();
    }, [show, showEdit]);

    return (
        <>
            <Navbar />
            <div className="container-fluid p-0 m-0 bg-h-egg login-con">
                <div className="row justify-content-center m-0 p-0">

                    <div className="d-flex col-1"></div>

                    <div className="d-flex bg-h-egg row justify-content-center col-10">
                        <div className="pt-3 text-back t-text d-flex justify-content-center align-items-center">
                            <label for="" className="">BRAND</label>
                        </div>

                        <div className="card-deck col-12 row justify-content-start mt-2 mb-3">
                            {
                                brands.map((brand) =>
                                    <Link to="/adminfood" state={{ brandId: brand._id }} className="text-decoration-none btn-card card col-12 col-sm-6 col-md-4 justify-content-center align-items-center" >
                                        <div className="d-flex justify-content-end col-12 align-items-end rounded-circle mt-1">
                                            <Link><img src="image/gear.png" className="d-flex icon-s2 rounded-circle bg-h-egg btn-wh p-2" alt="logo2.png" onClick={() => setBrandId(brand._id) || setEditShow(true)}></img></Link>
                                        </div>
                                        <img className="d-flex h-logo-card " src={brand.image} />
                                        <div className="card-title col-10 fw-bold h-text">{brand.name}</div>
                                        <div className="card-text col-10">{brand.description}</div>
                                    </Link>
                                )
                            }

                            <div onClick={handleShow} className="text-decoration-none btn-card card col-12 col-sm-6 col-md-4 justify-content-center align-items-center">
                                <div className="card-body d-flex align-items-center">
                                    <img className="d-flex h-logo-card" src="./image/plus.png" />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="d-flex col-1"></div>
                </div>
            </div>
            <Footer />
            <AddBrandModal show={show} onHide={() => setShow(false)} token={token} />
            <EditBrandModal show={showEdit} onHide={() => setEditShow(false)} token={token} brandId={brandId} />
        </>
    )
}