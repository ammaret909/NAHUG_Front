import Navbar from "../Component/Nav";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";

export default function AdminHome() {
    return (
        <>
            <Navbar />
            <div className="container-fluid p-0 m-0 bg-h-egg login-con">
                <div className="row justify-content-center m-0 p-0">

                    <div className="d-flex col-1 col-md-2"></div>

                    <div className="d-flex bg-h-egg row justify-content-center col-8">
                        <div className="pt-3 text-back t-text d-flex justify-content-center align-items-center">
                            <label for="" className="">FUNCTION</label>
                        </div>

                        <div className="card-deck col-12 row justify-content-around mt-2 mb-3 content-h align-items-center">
                            <div className="card col-12 col-sm-6 col-md-4 justify-content-center align-items-center" >
                                <img className="d-flex h-logo-card mt-3" src="./image/catfood1.png" />
                                <div className="card-body">
                                    <h5 className="card-title">FOOD</h5>
                                </div>
                            </div>
                            <div className="card col-12 col-sm-6 col-md-4 justify-content-center align-items-center">
                                <img className="d-flex h-logo-card mt-3" src="./image/injection.png" />
                                <div className="card-body">
                                    <h5 className="card-title">VACCINE</h5>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="d-flex col-1 col-md-2"></div>
                </div>
            </div>
            <Footer />
        </>
    )
}