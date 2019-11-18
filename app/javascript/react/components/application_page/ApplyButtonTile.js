import React from 'react'

const ApplyButtonTile = (props) =>{
  return(
    <div className="image-wrapper">
      <div className= {props.className}>
        <div className="image-spacer">
          <img className="step-image" src={props.image}></img>
        </div>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default ApplyButtonTile
