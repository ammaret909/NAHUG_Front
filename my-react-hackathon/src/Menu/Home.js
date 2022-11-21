import React, { useState, useEffect } from "react";
import Navbar from "../Component/Nav";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home() {
    const [token, setToken] = useState(JSON.parse(localStorage.getItem("status")))
    const [cats, setCats] = useState([]);

    if (!token) {
        window.location.href = "/";
    }

    useEffect(() => {
        async function getCats() {
            const cat = await axios.get(
                `http://localhost:8080/cats`
                , {
                    headers: {
                        "x-access-token": token
                    }
                });
            setCats(cat.data);
        }
        getCats();
    }, []);

    return (
        <>
            <Navbar />
            <div className="container-fluid p-0 m-0 bg-h-egg login-con">
                <div className="row justify-content-center m-0 p-0">

                    <div className="d-flex col-2 "></div>

                    <div className="d-flex bg-h-egg row justify-content-center col-8">
                        <div className="pt-3 pb-3 text-back t-text d-flex justify-content-center">
                            <label for="" className="">HOME</label>
                        </div>

                        <div className="d-flex justify-content-center row ">

                            {
                                cats.map((cat) =>
                                    <Link to="/profile" state={{ catId: cat._id }} className="row bg-h-orange p-4 mb-4 rounded-pill shadow text-decoration-none">
                                        <div className="d-flex justify-content-md-start justify-content-sm-center justify-content-center col-12 col-sm-12 col-md-2 align-items-center rounded-circle ">
                                            <img src={cat.image} className="d-flex icon-s rounded-circle bg-h-egg " alt=""></img>
                                        </div>

                                        <div className="d-flex justify-content-around col-12 col-sm-12 col-md-6 ">
                                            <div className="row">
                                                <div className="d-flex col-6 col-sm-6 col-md-4 text-back justify-content-md-start justify-content-center h-text align-items-center">
                                                    {cat.name}
                                                </div>
                                                <div className="d-flex col-6 col-sm-6 col-md-8 text-back justify-content-md-start justify-content-center h-text2 align-items-center">
                                                    <img src="image/catfood2.png" className="d-flex icon-mini pe-2" alt=""></img>
                                                    {cat.food} 125 g.
                                                </div>
                                                <div className="d-flex col-12 col-sm-12 text-red justify-content-md-start justify-content-center h-text align-items-center">
                                                    {cat.vaccine.status}
                                                </div>
                                            </div>
                                        </div>

                                        <Link to="/food" state={{ catId: cat._id }} className="d-flex justify-content-md-end  justify-content-center col-6 col-sm-6 col-md-2 align-items-center rounded-circle mt-1 ">
                                            <img src="image/catfood1.png" className="d-flex icon-s2 rounded-circle bg-h-egg btn-wh" alt="logo2.png"></img>
                                        </Link>
                                        <Link to="/editcat" state={{ catId: cat._id }} className="d-flex justify-content-md-end  justify-content-center col-6 col-sm-6 col-md-2 align-items-center rounded-circle mt-1">
                                            <img src="image/gear.png" className="d-flex icon-s2 rounded-circle bg-h-egg btn-wh p-2" alt="logo2.png"></img>
                                        </Link>
                                    </Link>
                                )
                            }


                            <Link to="/addcat" className="d-flex justify-content-center col-8 col-sm-4 c-one p-2 mb-3 align-items-center rounded-circle">
                                <img className="d-flex h-logo-card h-logo-ac p-3 rounded-circle bg-h-smoke shadow btn-wh" src="./image/add.png" />
                            </Link>

                        </div>

                    </div>

                    <div className="d-flex col-2"></div>
                </div>
            </div>
            <Footer />
        </>
    )
}