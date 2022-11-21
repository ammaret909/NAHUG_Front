import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";
import React, { useState, useRef } from 'react';
import axios from "axios";

function EditBrandModal({ show, onHide, token, brandId }) {
    const propSimulator = { onHide, show };
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setData] = useState()
    const inputFileRef = useRef(null)

    const fileToBase64 = (filename, filepath) => {
        return new Promise((resolve) => {
            var file = new File([filename], filepath);
            var reader = new FileReader(); // Read file content on file loaded event
            reader.onload = function (event) {
                resolve(event.target.result);
            }; // Convert data to base64
            reader.readAsDataURL(file);
        });
    };
    const handleChange = async (e) => {
        setData(await fileToBase64(inputFileRef.current.files[0]))
    };

    const onSubmit = async () => {
        try {
            await axios.put(
                `http://localhost:8080/foods/${brandId}`
                ,
                {
                    name: name,
                    description: description,
                    image: image,
                }, {
                headers: {
                    "x-access-token": token
                }
            });
            propSimulator.onHide();
        } catch (error) {
            console.error(error);
        }
    };

    const onClick = async () => {
        try {
            await axios.delete(
                `http://localhost:8080/foods/${brandId}`
                ,
                {
                    headers: {
                        "x-access-token": token
                    }
                });
            propSimulator.onHide();
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
                        <div className="d-flex justify-content-end col-9 fw-bold text-back h-text mt-3">
                            <button class="btn btn-danger" type="button" onClick={onClick}>Delete</button>
                        </div>
                        <div className="pt-3 text-back t-text d-flex justify-content-center align-items-center ">
                            <label for="" className="">EDIT BRAND</label>
                        </div>

                        <form className="card-deck col-12 row d-flex justify-content-center mt-2 mb-3 bg-h-orange2" onSubmit={onSubmit}>

                            <div className="d-flex justify-content-center col-12 fw-bold text-back h-text mt-3">PHOTO</div>

                            <label for="fileImgEditBrand" className="d-flex justify-content-center bg-h-smoke col-8 col-sm-8 c-one rounded p-2 mb-3 align-items-center">
                                <img className="d-flex h-logo-card h-logo-ac pm-2" src="./image/add.png" />
                            </label>
                            <div>
                                <input type="file" name="file" id="fileImgEditBrand" ref={inputFileRef} onChange={handleChange}></input>
                            </div>
                            <div className="d-flex justify-content-center col-12 fw-bold text-back h-text">
                                <div className="d-flex justify-content-center col-8 col-sm-8 rounded mb-3">
                                    <div className=" row">
                                        <div className="">BRAND</div>
                                        <input type="text" className="form-control" placeholder="Brand" onChange={e => setName(e.target.value)} required />
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center col-12 fw-bold text-back h-text">
                                <div className="d-flex justify-content-center col-8 col-sm-8 rounded mb-3">
                                    <div className=" row">
                                        <label for="exampleFormControlTextarea1">CONTENT</label>
                                        <input type="text" className="form-control" placeholder="Name" onChange={e => setDescription(e.target.value)} required />
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center mb-3">
                                <button type="submit" className="btn-or p-2 d-flex col-4 m-buttom justify-content-center fw-bold rounded-3">Submit</button>
                                <button type="button" className="btn-or2 p-2 d-flex col-4 m-buttom justify-content-center fw-bold rounded-3" onClick={propSimulator.onHide}>Cancle</button>
                            </div>

                        </form>
                    </div>
                </Modal.Body>
            </Modal >
        </>
    );

}
export default EditBrandModal;