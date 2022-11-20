import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect } from "react";
import axios from "axios";

function DeleteModal({ show, onHide, vacId, catId, token }) {
    const propSimulator = { onHide, show };

    const onSubmit = async (e) => {
        try {
            e.preventDefault();
            await axios.delete(
                `http://localhost:8080/cats/${catId}/vaccine/${vacId}`
                ,
                {
                    headers: {
                        "x-access-token": token
                    }
                });
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Modal {...propSimulator} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Body>
                    <div className='row'>
                        <div className='col-12 d-flex justify-content-center'>
                            <div>
                                <text>You sure that you want to delete</text>
                            </div>

                        </div>
                        <form className='col d-flex justify-content-center mt-3' onSubmit={onSubmit}>
                            <button type='button' className='btn border-0 rounded-2 text-dark m-2 px-4 py-1 bg-light' onClick={propSimulator.onHide}>Cancel</button>
                            <button type='submit' className='btn border-0 rounded-2 text-light m-2 px-4 py-1 bg-danger' onClick={propSimulator.onHide}>Confirm</button>
                        </form>

                    </div>
                </Modal.Body>
            </Modal>
        </>
    );

}
export default DeleteModal;