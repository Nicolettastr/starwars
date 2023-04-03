import React from "react";
import { Link } from "react-router-dom";
import "../../styles/select.css"

const Select = () => {

    const btn = [
        {
            id: 1234,
            name: "Characters",
            link: "TypesOfCharacters"
        }, 
        {
            id: 45654,
            name: "Planets",
            link: "TypesOfPlanets"
        }
    ]

    return (
        <div className="selectSection">
            <div  className="selectImg">
                {btn.map((button) => {
                    return (
                        <Link key={button.id} className="cardsBtn" to={`/${button.link}`}>
                            <button className="cardsTitle">{button.name}</button>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
};

export default Select;