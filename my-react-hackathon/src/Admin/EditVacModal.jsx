import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect } from "react";
import axios from "axios";

function EditVacModal({ show, onHide, vacId, token }) {
    const propSimulator = { onHide, show };
    const [name, setName] = useState()

    const onSubmit = async (e) => {
        try {
            e.preventDefault();
            await axios.put(
                `http://localhost:8080/vaccines/${vacId}`
                ,
                {
                    "name": name
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
                `http://localhost:8080/vaccines/${vacId}`
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
                                        <div className="">VACCINE NAME</div>
                                        <input type="name" className="form-control" id="inputname" placeholder="Vaccin" onChange={e => setName(e.target.value)} required />
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center mb-3">
                                <button type="submit" className="btn-or p-2 d-flex m-2 col-4 justify-content-center fw-bold rounded-3">Submit</button>
                                <button type="button" className="btn-or2 p-2 d-flex m-2 col-4 m-buttom justify-content-center fw-bold rounded-3" onClick={propSimulator.onHide}>Cancel</button>
                            </div>

                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );

}
export default EditVacModal;