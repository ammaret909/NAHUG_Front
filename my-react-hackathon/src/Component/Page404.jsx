import React from 'react'
import { Link } from "react-router-dom";

function Page404() {
    return (
        <>
            <div className='bg-dark vh-100 w-100'>
                <section class="error-container">
                    <span>4</span>
                    <span><span class="screen-reader-text">0</span></span>
                    <span>4</span>
                </section>
                <div class="link-container">
                    <Link to="/home" target="_blank" href="https://www.silocreativo.com/en/creative-examples-404-error-css/" class="more-link">Visit the Login Page</Link>
                </div>
            </div>
        </>
    )
}

export default Page404