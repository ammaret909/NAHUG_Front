import React, { useState, useEffect } from "react";

export default function navLogin() {
    const clear = () => {
        window.localStorage.clear();
    }
    return (
        <>
            <nav className="navbar bg-h-orange m-0 p-2">
                <div className="container-fluid d-flex ">
                    <img src="image/logo2.png" className="d-flex icon-s1" alt="logo2.png"></img>

                    <div className=" justify-content-center">
                        <img src="image/home2.png" className="icon-s1 " alt="logo2.png"></img>
                    </div>

                    <form className="d-flex">
                        <button class="btn btn-danger" type="submit" onClick={clear}>Logout</button>
                    </form>

                </div>
            </nav>
        </>
    )
}