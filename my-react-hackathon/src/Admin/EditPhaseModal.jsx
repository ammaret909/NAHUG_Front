import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect } from "react";
import axios from "axios";

function EditPhaseModal({ show, onHide, vacId, phaseId, token }) {
    const propSimulator = { onHide, show };
    const [catMonth, setCatMonth] = useState();
    const [month, setMonth] = useState();
    const [times, setTimes] = useState();

    const onSubmit = async (e) => {
        try {
            e.preventDefault();
            await axios.put(
                `http://localhost:8080/vaccines/${vacId}/${phaseId}`
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
            propSimulator.onHide()
        } catch (error) {
            console.error(error);
        }
    };

    const onDelete = async (e) => {
        try {
            e.preventDefault();
            await axios.delete(
                `http://localhost:8080/vaccines/${vacId}/${phaseId}`
                ,
                {
                    headers: {
                        "x-access-token": token
                    }
                }
            );
            propSimulator.onHide()
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Modal
                {...propSimulator}
                dialogClassName="modal-200w "
                aria-labelledby="example-custom-modal-styling-title border-0 "
            >
                <Modal.Header closeButton className="border-0 bg-h-orange2">
                </Modal.Header >
                <Modal.Body className="border-0 bg-h-orange2 rounded-bottom">
                    <div className="d-flex row justify-content-center border-0 ">

                        <div className="d-flex justify-content-end col-8 fw-bold text-back h-text mt-3">
                            <button class="btn btn-danger" type="button" onClick={onDelete}>Delete</button>
                        </div>

                        <div className="pt-3 text-back t-text d-flex justify-content-center align-items-center">
                            <label for="" className="">ADD VACCINE</label>
                        </div>

                        <form className="card-deck col-12 row justify-content-start mt-2 mb-3 " onSubmit={onSubmit}>
                            <div className="d-flex justify-content-center col-12 fw-bold text-back h-text">
                                <div className="d-flex justify-content-center col-8 col-sm-8 rounded mb-3">
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
                                <button type="button" className="btn-or2 p-2 m-2 d-flex col-4 m-buttom justify-content-center fw-bold rounded-3" onClick={propSimulator.onHide}>Cancle</button>
                            </div>

                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );

}
export default EditPhaseModal;