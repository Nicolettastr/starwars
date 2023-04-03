import React from "react";
import "../../styles/select.css"
import { Animator, Move, ScrollPage, Zoom, batch } from "react-scroll-motion";

const Select = () => {


    return (
        <>
            <div className="selectSection">
                <ScrollPage>
                    <Animator animation={batch(Zoom(8, 2))}>
                        <h1>Choose</h1>
                    </Animator>
                </ScrollPage>
            </div>
        </>
    )
};

export default Select;