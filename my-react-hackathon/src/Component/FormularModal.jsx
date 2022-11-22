import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect } from "react";
import axios from "axios";

function FormularModal({ show, onHide, foodId, catId, foodName, token }) {
    const [food, setFood] = useState([]);
    const [cat, setCat] = useState([]);
    const [formular, setFormular] = useState([]);
    const [kgcal, setKgCal] = useState(0);
    const [catPortion, setCatPortion] = useState(0);

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

                        <form className="card-deck col-12 row justify-content-start mt-2 mb-3 " onSubmit={onSubmit}>
                            {
                                formular.map((form) =>
                                    <div className="card col-12 col-sm-6 justify-content-center align-items-center btn-card" onClick={() => setKgCal(form.kgCal)}>
                                        <img className="d-flex h-logo-card mt-3" src={form.image} />
                                        <div className="card-body">
                                            <h5 className="card-title">{form.form_name}</h5>
                                            <p className="card-text">{form.form_description}</p>
                                        </div>
                                    </div>
                                )
                            }
                            <div className="d-flex justify-content-center mb-3">
                                <button type="submit" className="btn-or p-2 d-flex col-4 m-buttom justify-content-center fw-bold rounded-3">Submit</button>
                                <button type="button" className="btn-or2 p-2 d-flex col-4 m-buttom justify-content-center fw-bold rounded-3" onClick={onHide}>Cancle</button>
                            </div>
                        </form>

                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default FormularModal;