import React from 'react'
import "./TeamCard.scss"
import { useState } from 'react'
const TeamCard = (props) => {
  let {name, role, counterProp} = props

  const [counter, setCounter] = useState(counterProp);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if(counter === 0){
      alert("Error, you cannot have negative tickets.")
    }
    else{
      setCounter(counter - 1);
    }
    
  };



  return (
    <div className='team-card'>

        <h1 className="team-card__name">{name}</h1>
        <h1 className="team-card__role">{role}</h1>
        <h2 className='team-card__counter'>Counter: <span className='team-card__counter-number'>{counter}</span></h2>
        <button onClick={handleIncrement}className='team-card__button plus'>+</button>
        <button onClick={handleDecrement}className='team-card__button negative'>-</button>
    </div>
  )
}

export default TeamCard