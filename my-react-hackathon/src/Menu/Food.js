import Navbar from "../Component/Nav";
import Footer from "../Component/Footer";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import FormularModal from "../Component/FormularModal";
import Modal from 'react-bootstrap/Modal';
import Pop from "./PopFood";

export default function Food() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showForm, setShowForm] = useState(false);
    const [token, setToken] = useState(JSON.parse(localStorage.getItem("status")));
    if (!token) {
        window.location.href = "/";
    }
    const location = useLocation();
    const [catId, setCatId] = useState(location.state.catId);
    const [foodId, setFoodId] = useState();
    const [cat, setCat] = useState([]);
    const [foods, setFoods] = useState([]);
    const [name, setName] = useState();

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
    }, [show]);

    useEffect(() => {
        async function getFoods() {
            const foods = await axios.get(
                `http://localhost:8080/foods/`
                , {
                    headers: {
                        "x-access-token": token
                    }
                });
            setFoods(foods.data);
        }
        getFoods();
    }, [show]);

    console.log(name);
    const onClick = async (e) => {
        try {
            e.preventDefault();
            console.log(e);
            await axios.put(
                `http://localhost:8080/cats/${catId}/food`
                ,
                {
                    "food": "Normal",
                }, {
                headers: {
                    "x-access-token": token
                }
            });
            window.location.href = "/home";
        } catch (error) {
            console.error(error);
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
                            <label for="" className="">FOOD</label>
                        </div>

                        <div className="card-deck col-12 row justify-content-start mt-2 mb-3">
                            <div className="card col-12 col-sm-6 col-md-4 justify-content-center align-items-center" onClick={onClick}>
                                <img className="d-flex h-logo-card mt-3" src="./image/catfood1.png" />
                                <div className="card-body">
                                    <h5 className="card-title">Normal</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                            <div className="card col-12 col-sm-6 col-md-4 justify-content-center align-items-center" onClick={handleShow}>
                                <img className="d-flex h-logo-card mt-3" src="./image/catfood2.png" />
                                <div className="card-body">
                                    <h5 className="card-title">WHISKAS</h5>
                                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                </div>
                            </div>
                            {
                                foods.map(food =>
                                    <div className="card col-12 col-sm-6 col-md-4 justify-content-center align-items-center" onClick={() => setName(food.name) || setFoodId(food._id) || setShowForm(true)}>
                                        <img className="d-flex h-logo-card mt-3" src="./image/test1.jpg" />
                                        <div className="card-body">
                                            <h5 className="card-title">{food.name}</h5>
                                            <p className="card-text">{food.description}</p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <div className="d-flex col-1"></div>
                </div>
            </div>
            <Footer />
            <FormularModal show={showForm} onHide={() => setShowForm(false)} foodId={foodId} catId={catId} token={token} foodName={name} />
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
                            <label for="" className="">FORMULA</label>
                        </div>

                        <div className="card-deck col-12 row justify-content-start mt-2 mb-3 ">
                            <div className="card col-12 col-sm-6 justify-content-center align-items-center" onClick={"..."}>
                                <img className="d-flex h-logo-card mt-3" src="./image/catfood1.png" />
                                <div className="card-body">
                                    <h5 className="card-title">tuna1</h5>
                                    <p className="card-text">This is a wider card .</p>
                                </div>
                            </div>

                            <div className="card col-12 col-sm-6 justify-content-center align-items-center" onClick={"..."}>
                                <img className="d-flex h-logo-card mt-3 " src="./image/catfood2.png" />
                                <div className="card-body">
                                    <h5 className="card-title">tuna2</h5>
                                    <p className="card-text">This card has supporting .</p>
                                </div>
                            </div>

                            <div className="card col-12 col-sm-6 justify-content-center align-items-center" onClick={"..."}>
                                <img className="d-flex h-logo-card mt-3" src="./image/test1.jpg" />
                                <div className="card-body">
                                    <h5 className="card-title">tuna3</h5>
                                    <p className="card-text">This is a wider card with supporting an the first to show that equal height action.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}