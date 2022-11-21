import React, { useState, useEffect } from "react";

export default function Footer() {
    return (
        <>
            {/* <div className="bg-h-orange m-0 p-0">
                <div className="d-flex justify-content-center pt-3 pb-1 col-12">
                    <i class="bi bi-facebook"></i>
                </div>
                <div className="d-flex justify-content-center col-12">
                    <div>&#169; BY NAHUG</div>
                </div>
            </div> */}
            <footer class="bg-dark text-center text-white">

                <div class="container p-4 pb-0">

                    <section class="mb-4">

                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="bi bi-facebook"></i></a>

                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="bi bi-twitter"></i></a>

                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="bi bi-google"></i></a>

                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="bi bi-instagram"></i></a>

                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="bi bi-github"></i></a>
                    </section>

                </div>

                <div class="text-center p-3" >
                    <a class="text-white text-decoration-none" >© 2022 Copyright : NAHUG</a>
                </div>

            </footer>

        </>
    )
}