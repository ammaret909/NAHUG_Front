import React from "react";
import { Link } from "react-router-dom";

export default function navLogin() {
    const clear = () => {
        window.localStorage.clear();
        window.location.reload();
    }
    return (
        <>
            <nav className="navbar bg-h-orange m-0 p-2">
                <div className="d-flex justify-content-start align-items-center col-4">
                    <img src="image/logo2.png" className="d-flex icon-s1" alt="logo2.png"></img>
                </div>
                <div className="d-flex justify-content-center align-items-center col-4">
                    <Link to="/home"><img src="image/home2.png" className="icon-s1 " alt="logo2.png"></img></Link>
                </div>
                <div className="d-flex justify-content-end align-items-center col-4">
                    <button class="btn btn-danger" type="submit" onClick={clear}>Logout</button>
                </div>
            </nav>
        </>
    )
}