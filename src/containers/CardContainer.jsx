import React from "react";
import TeamCard from "../components/TeamCard";
import team from "../data/team";
import "./CardContainer.scss"

const CardContainer = (props) => {
    let cardJSX; 
    let filteredRole; 
    let filteredName; 
    const {filterName, filterRole} = props
   if(filterRole){
    filteredRole = team.filter((member) => member.role === (filterRole))
    if(filterName){
        filteredName = filteredRole.filter((member) => member.name.includes(filterName));
        cardJSX = filteredName.map((member) =><TeamCard key={member.id} name={member.name} role={member.role} counterProp={member.counter} />)
    }
    else{
        cardJSX = filteredRole.map((member) =><TeamCard key={member.id} name={member.name} role={member.role} counterProp={member.counter} />)
    }
   }
   else if (filterName){
        filteredName = team.filter((member) => member.name.includes(filterName));
        cardJSX = filteredName.map((member) =><TeamCard key={member.id} name={member.name} role={member.role} counterProp={member.counter} />)
   }
   else {
    cardJSX = team.map((member) => <TeamCard key={member.id} name={member.name} role={member.role} counterProp={member.counter} />)
   }
    

    return (
        <div className="card-container">
            {cardJSX}
        </div>
    );
}


export default CardContainer; 
