import React from 'react'

const StepTile = (props) => {
  return(
  <div className = {props.class}>
  <img className="step-image" src={props.image}></img>
  <p>{props.description}</p>
  </div>
)
}

export default StepTile
