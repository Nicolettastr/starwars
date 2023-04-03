import React from "react";
import '../../styles/button.css'
import { Link } from "react-router-dom";
import { Animator, Move, ScrollPage } from "react-scroll-motion";

const Button = () => {

    return (
        <div className="selectButton w-100">
            <Link className="cardsBtn" to={'/TypesOfCharacters'}>
                <button className="cardsTitle">Characters</button>
            </Link>
            <Link className="cardsBtn" to={'/TypesOfPlanets'}>
                <button className="cardsTitle">Planets</button>
            </Link>
        </div>
    )
}

export default Button;