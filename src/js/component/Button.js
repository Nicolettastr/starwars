import React from "react";
import '../../styles/button.css'
import { Link } from "react-router-dom";
import { Animator, Move, ScrollPage } from "react-scroll-motion";

const Button = () => {

    return (
        <div className="selectButton w-100">
            <ScrollPage className="w-100 centered">
                <Animator className="w-100 centered" animation={Move(-300, 0, -1, null)}>
                    <Link className="cardsBtn" to={'/TypesOfCharacters'}>
                        <button className="cardsTitle">Characters</button>
                    </Link>
                </Animator>
                <Animator animation={Move(300, 0, -1, null)}>
                    <Link className="cardsBtn" to={'/TypesOfPlanets'}>
                        <button className="cardsTitle">Planets</button>
                    </Link>
                </Animator>
            </ScrollPage>
        </div>
    )
}

export default Button;