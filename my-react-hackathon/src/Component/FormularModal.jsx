import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect } from "react";
import axios from "axios";
import LoadingModal from './LoadingModal';

function FormularModal({ show, onHide, foodId, catId, foodName, token }) {
    const [food, setFood] = useState([]);
    const [cat, setCat] = useState([]);
    const [formular, setFormular] = useState([]);
    const [kgcal, setKgCal] = useState(0);
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        async function getFood() {
            const food = await axios.get(
                `http://localhost:8080/foods/${foodId}`
                , {
                    headers: {
                        "x-access-token": token
                    }
                });
            setFood(food.data);
            setFormular(food.data.formular);
        }
        if (foodId) {
            getFood();
        }
    }, [foodId]);

    useEffect(() => {
        async function getCat() {
            const cat = await axios.get(
                `http://localhost:8080/cats/${catId}`
                , {
                    headers: {
                        "x-access-token": token
                    }
                });
            setCat(cat.data);
        }
        getCat();
    }, [catId]);

    function calculateFood(kgCal) {
        if (cat.weight < 3) {
            const cal = Math.ceil(70 * (cat.weight ^ 0.75));
            const portion = (100 / kgCal) * cal;
            return portion;
        }
        else {
            const cal = Math.ceil((30 * cat.weight) + 70);
            const portion = Math.floor((100 / kgCal) * cal);
            return portion;
        }
    }

    const onSubmit = async (e) => {
        try {
            e.preventDefault();
            const cal = calculateFood(kgcal);
            axios.put(
                `http://localhost:8080/cats/${catId}/food`
                ,
                {
                    "food": foodName,
                    "portion": cal
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
            <Modal
                show={show}
                onHide={onHide}
                size="lg"
                aria-labelledby="example-custom-modal-styling-title border-0 "
            >
                <Modal.Header closeButton className="border-0 bg-h-orange2">
                </Modal.Header >
                <Modal.Body className="border-0 bg-h-orange2 rounded-bottom">
                    {
                        formular.length !== 0 ?
                            <div className="d-flex row justify-content-center border-0 ">
                                <div className="pt-3 text-back t-text d-flex justify-content-center align-items-center">
                                    <label for="" className="">FORMULA</label>
                                </div>

                                <form className="card-deck col-10 row justify-content-start mt-2 mb-3 " onSubmit={onSubmit}>
                                    {
                                        formular.map((form) =>
                                            <div className="d-flex justify-content-center align-items-center col-sm-6 col-12 my-2">
                                                <div className="card col-12 justify-content-center align-items-center h-100 w-100 modalcard" onClick={() => setKgCal(form.kgCal) || setSelected(form.form_name)}>
                                                    <img className="d-flex h-logo-card mt-3" src={form.image} />

                                                    <div className="card-body">
                                                        <h5 className="card-title">{form.form_name}</h5>
                                                        <p className="card-text">{form.form_description}</p>
                                                    </div>
                                                    {selected === form.form_name ? <div className="text-success pb-2 fw-bold"> SELECTED </div> : <></>}
                                                </div>
                                            </div>
                                        )
                                    }
                                    <div className="d-flex justify-content-center my-3">
                                        <button type="submit" className="btn-or p-2 d-flex col-4 m-buttom justify-content-center fw-bold rounded-3">Submit</button>
                                    </div>
                                </form>

                            </div>
                            : <LoadingModal />
                    }
                </Modal.Body>
            </Modal>
        </>
    )
}

export default FormularModal;