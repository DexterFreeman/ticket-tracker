import React from 'react'
import "./TeamCard.scss"
const TeamCard = (props) => {
    const {name, role, counter} = props
  return (
    <div className='team-card'>
        <h1 className="team-card__name">{name}</h1>
        <h1 className="team-card__role">{role}</h1>
        <h2 className='team-card__counter'>Counter: <span className='team-card__counter-number'>{counter}</span></h2>
        <button className='team-card__button plus'>+</button>
        <button className='team-card__button negative'>-</button>
    </div>
  )
}

export default TeamCard