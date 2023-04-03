import React from "react";
import "../../styles/select.css"
import { Animator, Move, ScrollPage, Zoom, batch } from "react-scroll-motion";
import Button from "./Button.js";

const Select = () => {


    return (
        <>
            <div className="selectSection">
                <ScrollPage>
                    <Animator animation={batch(Zoom(8, 2))}>
                        <h1>Choose Your Path</h1>
                    </Animator>
                </ScrollPage>
            </div>
        </>
    )
};

export default Select;