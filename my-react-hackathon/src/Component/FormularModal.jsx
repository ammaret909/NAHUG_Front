import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect } from "react";
import axios from "axios";

function FormularModal({ show, onHide, foodId, catId, foodName, token }) {
    const [food, setFood] = useState([]);
    const [formular, setFormular] = useState([]);

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

    const onClick = async (e) => {
        try {
            e.preventDefault();
            await axios.put(
                `http://localhost:8080/cats/${catId}/food`
                ,
                {
                    "food": foodName,
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

    console.log(formular);

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

                        <div className="card-deck col-12 row justify-content-start mt-2 mb-3 ">
                            {
                                formular.map((form) =>
                                    <div className="card col-12 col-sm-6 justify-content-center align-items-center" onClick={onClick}>
                                        <img className="d-flex h-logo-card mt-3" src="./image/catfood1.png" />
                                        <div className="card-body">
                                            <h5 className="card-title">{form.form_name}</h5>
                                            <p className="card-text">{form.form_description}</p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default FormularModal;