import React, { Fragment } from "react";

export default function Loading() {
    return (
        <Fragment>
            <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-h-orange2">
                <div className="d-flex">
                    <div class="spinner-border text-light" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}