import Navbar from "../Component/Nav";
import Footer from "../Component/Footer";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import DeleteModal from "../Component/DeleteModal";
// import moment from 'moment';


export default function AddCat() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [token, setToken] = useState(JSON.parse(localStorage.getItem("status")));
    if (!token) {
        window.location.href = "/";
    }
    const location = useLocation();
    const [catId, setCatId] = useState(location.state.catId);
    const [cat, setCat] = useState([]);
    const [catVacs, setCatVacs] = useState([]);
    const [count, setCount] = useState(0);
    const [vaccines, setVaccine] = useState([]);
    const [vacId, setVacId] = useState();
    const [vacName, setVacName] = useState();
    const [vacDate, setVacDate] = useState();
    const [endDate, setEndDate] = useState();
    const [type, setType] = useState([]);
    const [vacTimes, setVacTimes] = useState();
    const [showDelete, setShowDelete] = useState(false);
    const [errorVac, setErrorVac] = useState("");

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
            setCatVacs(cat.data.vaccine);
        }
        getCats();
    }, [show]);

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
    }, []);

    useEffect(() => {
        async function getEndDate() {
            const vaccines = await axios.get(
                `http://localhost:8080/vaccines/${vacName}`
                , {
                    headers: {
                        "x-access-token": token
                    }
                });
            setType(vaccines.data.type);
            const catAge = (cat.year * 12) + cat.month;
            for (var i = 0; i < type.length; i++) {
                if (catAge >= type[i].cat_month && vacTimes < type[i].times && type[i].times != 0) {
                    // setEndDate(moment(vacDate).add(type[i], 'month').format('YYYY-MM-DD'));
                    break;
                }
                else if (catAge >= type[i].cat_month && vacTimes >= type[i].times && type[i].times == 0) {
                    // setEndDate(moment(vacDate).add(type[i], 'month').format('YYYY-MM-DD'));
                    break;
                }
            }
        }
        getEndDate();
    }, [vacDate, count]);

    console.log(endDate);

    const handChange = (fn) => {
        return (event) => {
            fn(event.target.value);
        };
    };

    const onSubmit = async (e) => {
        try {
            e.preventDefault();
            await axios.post(
                `http://localhost:8080/cats/${catId}/vaccines`
                ,
                {
                    name: vacName,
                    startDate: vacDate,
                    endDate: endDate,
                    times: vacTimes
                }, {
                headers: {
                    "x-access-token": token
                }
            });
            setShow(false);
        } catch (error) {
            console.error(error);
            setErrorVac(error.response.data)
        }
    };

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
                                <img className="d-flex profile rounded-circle bg-h-smoke shadow c-two" src={cat.image} />
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
                                    <div className="t-text2 d-flex justify-content-center col-12 fw-bold text-back mt-5">{cat.food}</div>
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
                            <div className="d-flex justify-content-start col-12  text-back h-text">
                                <div className="d-flex justify-content-start col-8 col-sm-12 rounded mb-3 ">
                                    <div className=" row m-2 col-12">
                                        <div className="d-flex col-6 col-sm-3 fw-bold">Vaccine</div>
                                        <div className="d-flex col-6 col-sm-9"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center row ">
                                {
                                    catVacs.map((vac) =>
                                        <div className="row bg-light p-3 rounded shadow rounded-pill col-10 mb-3">
                                            <div className="d-flex justify-content-dm-start justify-content-sm-center justify-content-center col-2 align-items-center rounded-circle ">
                                                <img src="image/injection.png" className="d-flex icon-s p-2"></img>
                                            </div>

                                            <div className="d-flex justify-content-start col-8 fs-6">

                                                <div className="row col-12">
                                                    <div className="d-flex col-12 col-md-4 text-back justify-content-md-start justify-content-center align-items-center text">
                                                        {vac.name}
                                                    </div>
                                                    <div className="d-flex col-12 col-md-4 text-back justify-content-md-start justify-content-center align-items-center">
                                                        {vac.times} times
                                                    </div>
                                                    <div className="d-flex col-12 col-md-4 text-back justify-content-md-start justify-content-center align-items-center">
                                                        {(vac.startDate).split("T")[0]}
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="d-flex justify-content-md-end  justify-content-center col-2 align-items-center rounded-circle mt-1" onClick={() => setVacId(vac._id) || setShowDelete(true)}>
                                                <img src="image/cancel.png" className="d-flex icon-s2 rounded-circle bg-h-egg btn-wh" ></img>
                                            </div>
                                        </div>
                                    )
                                }
                                <div className="d-flex justify-content-center col-8 col-sm-4 c-one p-2 mb-3 align-items-center rounded-circle" onClick={handleShow}>
                                    <img className="d-flex h-logo-card h-logo-ac p-3 rounded-circle bg- shadow btn-wh" src="./image/add.png" />
                                </div>

                            </div>
                        </div>


                    </div>

                    <div className="d-flex col-1 col-md-2"></div>
                </div>
            </div>

            <Footer />
            <DeleteModal show={showDelete} onHide={() => setShowDelete(false)} vacId={vacId} catId={catId} token={token} />
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
                        <div className="py-3 text-danger d-flex justify-content-center align-items-center">
                            <label>{errorVac}</label>
                        </div>
                        <form className="card-deck col-12 row justify-content-start mt-2 mb-3 " onSubmit={onSubmit}>
                            <div className="form-group pb-3 text-orange h-text ">
                                <label >Select Vaccine</label>
                                <select id="vaccine-select" className="form-control" onChange={e => setVacName(e.target.value)}>
                                    <option value="">--Please choose an vaccine--</option>
                                    {
                                        vaccines.map((vac) =>
                                            <option value={vac.name}>{vac.name}</option>
                                        )
                                    }
                                </select>
                                {/* <input type="email" className="form-control" id="inputEmail1" placeholder="Username" /> */}
                            </div>

                            <div className="form-group pb-3 text-orange h-text ">
                                <label >Times</label>
                                <input type="number" className="form-control" id="inputdate" placeholder="Times" onChange={e => setVacTimes(e.target.value)} />
                            </div>

                            <div className="form-group pb-3 text-orange h-text ">
                                <label >Vaccinated</label>
                                <input type="date" className="form-control" id="inputdate" placeholder="Month" onChange={e => setVacDate(e.target.value)} onClick={() => setCount(1)} />
                            </div>

                            <div className="d-flex justify-content-center">
                                <button type="submit" className="btn-or p-2 d-flex col-5 m-buttom justify-content-center fw-bold rounded-3 align-items-center">Submit</button>
                            </div>

                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}