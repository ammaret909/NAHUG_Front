import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example() {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className="card col-12 col-md-4 justify-content-center align-items-center " onClick={() => setShow(true)}>
                <img className="d-flex h-logo-card" src="./image/add.png" onClick={() => setShow(true)} />
            </div>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-200w "
                aria-labelledby="example-custom-modal-styling-title "
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex row justify-content-center ">
                        <div className="pt-3 text-back t-text d-flex justify-content-center align-items-center">
                            <label for="" className="">FOOD</label>
                        </div>

                        <div className="card-deck col-12 row justify-content-start mt-2 mb-3 ">
                            <div className="card col-12 col-sm-6 justify-content-center align-items-center" onClick={"..."}>
                                <img className="d-flex h-logo-card mt-3" src="./image/catfood1.png" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>

                            <div className="card col-12 col-sm-6 justify-content-center align-items-center" onClick={"..."}>
                                <img className="d-flex h-logo-card mt-3 " src="./image/catfood2.png" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                </div>
                            </div>

                            <div className="card col-12 col-sm-6 justify-content-center align-items-center" onClick={"..."}>
                                <img className="d-flex h-logo-card mt-3" src="./image/test1.jpg" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Example;