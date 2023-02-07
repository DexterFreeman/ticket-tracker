import React from "react";
import TeamCard from "../components/TeamCard";
import team from "../data/team";
import "./CardContainer.scss"

const CardContainer = () => {

    const cardJSX = team.map((member) => {
        return <TeamCard name={member.name} role={member.role} counter={member.counter} />
    })

    return (
        <div className="card-container">
            {cardJSX}
        </div>
    );
}


export default CardContainer; 
