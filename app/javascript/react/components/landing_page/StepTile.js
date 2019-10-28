import React from 'react'

const StepTile = (props) => {
  return(
  <div className = "step-tile">
  <img className="step-image" src={props.image}></img>
  <p>{props.description}</p>
  </div>
)
}

export default StepTile