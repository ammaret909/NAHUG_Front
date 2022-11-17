import Navbar from "../Component/Nav";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";

export default function AdminHome() {
    return (
        <>
            <Navbar />
            <div className="container-fluid p-0 m-0 bg-h-egg login-con">
                <div className="row justify-content-center m-0 p-0">

                    <div className="d-flex col-1"></div>

                    <div className="d-flex bg-h-egg row justify-content-center col-10">
                        <div className="pt-3 text-back t-text d-flex justify-content-center align-items-center">
                            <label for="" className="">BRAND</label>
                        </div>

                        <div className="card-deck col-12 row justify-content-start mt-2 mb-3">
                            <div className="card col-12 col-sm-6 col-md-4 justify-content-center align-items-center" >
                                <img className="d-flex h-logo-card mt-3" src="./image/catfood1.png" />
                                <div className="card-body">
                                    <h5 className="card-title">Normal</h5>
                                    <p className="card-text"></p>
                                </div>
                            </div>
                            <div className="card col-12 col-sm-6 col-md-4 justify-content-center align-items-center">
                                <img className="d-flex h-logo-card mt-3" src="./image/catfood2.png" />
                                <div className="card-body">
                                    <h5 className="card-title">WHISKAS</h5>
                                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                </div>
                            </div>
                            <div className="card col-12 col-sm-6 col-md-4 justify-content-center align-items-center">
                                <img className="d-flex h-logo-card mt-3" src="./image/test1.jpg" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                </div>
                            </div>
                            <div className="card col-12 col-md-4 justify-content-center align-items-center">
                                <img className="d-flex h-logo-card mt-3" src="./image/test1.jpg" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                </div>
                            </div>

                            <div className="card col-12 col-md-4 justify-content-center align-items-center">
                                <div className="card-body d-flex align-items-center">
                                    <img className="d-flex h-logo-card" src="./image/plus.png" />
                                </div>
                            </div>



                        </div>
                    </div>

                    <div className="d-flex col-1"></div>
                </div>
            </div>
            <Footer />
        </>
    )
}