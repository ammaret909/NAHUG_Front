import Navbar from "../Component/Nav";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";

export default function AdminFood() {
    return (
        <>
            <Navbar />
            <div className="container-fluid p-0 m-0 bg-h-egg login-con">
                <div className="row justify-content-center m-0 p-0">

                    <div className="d-flex col-1"></div>

                    <div className="d-flex bg-h-egg row justify-content-center col-10 ">
                        <div className="pt-3 text-back t-text d-flex justify-content-center align-items-center">
                            <label for="" className="">FORMULA</label>
                        </div>

                        <div className="card-deck col-12 row justify-content-start mt-2 mb-3">
                            <div className="card col-12 col-sm-6 col-md-4 justify-content-center align-items-center" >
                                <Link to="/admineditfood" className="d-flex justify-content-end col-12 align-items-end rounded-circle mt-1">
                                    <img src="image/gear.png" className="d-flex icon-s2 rounded-circle bg-h-egg btn-wh p-2" alt="logo2.png"></img>
                                </Link>
                                <img className="d-flex h-logo-card " src="./image/catfood1.png" />
                                <div className="card-title col-10 fw-bold h-text">1</div>
                                <div className="card-text col-10">11111111111111111111111111</div>
                            </div>

                            <Link to="/adminaddfood" className="card col-12 col-sm-6 col-md-4 justify-content-center align-items-center">
                                <div className="card-body d-flex align-items-center">
                                    <img className="d-flex h-logo-card" src="./image/plus.png" />
                                </div>
                            </Link>



                        </div>
                    </div>

                    <div className="d-flex col-1"></div>
                </div>
            </div>
            <Footer />
        </>
    )
}