import Navbar from "../Component/Nav";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="container-fluid p-0 m-0 bg-h-egg login-con">
                <div className="row justify-content-center m-0 p-0">

                    <div className="d-flex col-2"></div>

                    <div className="d-flex bg-h-egg row justify-content-center col-8">
                        <div className="pt-3 text-back t-text d-flex justify-content-center">
                            <label for="" className="">HOME</label>
                        </div>

                        <div className="d-flex justify-content-center row rounded-pills">

                            <div className="row bg-h-orange p-4 m-0 rounded">
                                <div className="d-flex justify-content-dm-start justify-content-sm-center justify-content-center col-12 col-sm-12 col-md-2 align-items-center rounded-circle ">
                                    <img src="image/testcat.png" className="d-flex icon-s rounded-circle bg-h-egg " alt=""></img>
                                </div>

                                <div className="d-flex justify-content-md-start justify-content-sm-center justify-content-center col-12 col-sm-12 col-md-6 ">
                                    <div className="row">
                                        <div className="d-flex col-6 col-sm-6 text-back justify-content-md-start justify-content-center">
                                            Nama
                                        </div>
                                        <div className="d-flex col-6 col-sm-6 text-back justify-content-md-start justify-content-center">
                                            <img src="image/catfood2.png" className="d-flex icon-mini" alt=""></img>
                                            Normal  125 g.
                                        </div>
                                        <div className="d-flex col-12 col-sm-12 text-red justify-content-md-start justify-content-center">
                                            Require vaccination
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-md-end  justify-content-center col-6 col-sm-6 col-md-2 align-items-center rounded-circle mt-1 ">
                                    <img src="image/catfood1.png" className="d-flex icon-s2 rounded-circle bg-h-egg btn-wh" alt="logo2.png"></img>
                                </div>
                                <div className="d-flex justify-content-md-end  justify-content-center col-6 col-sm-6 col-md-2 align-items-center rounded-circle mt-1">
                                    <img src="image/gear.png" className="d-flex icon-s2 rounded-circle bg-h-egg btn-wh" alt="logo2.png"></img>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center col-8 col-sm-4 c-one p-2 mb-3 align-items-center rounded-circle">
                                <img className="d-flex h-logo-card h-logo-ac p-3 rounded-circle bg-h-smoke shadow" src="./image/add.png" />
                            </div>

                        </div>

                    </div>

                    <div className="d-flex col-2"></div>
                </div>
            </div>
            <Footer />
        </>
    )
}