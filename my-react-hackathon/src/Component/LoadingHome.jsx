import React, { Fragment } from "react";

export default function Loading() {
    return (
        <Fragment>
            <div className="d-flex w-100 h-100 justify-content-center align-items-center bg-h-egg">
                <div className="d-flex">
                    <div class="spinner-border text-warning" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}