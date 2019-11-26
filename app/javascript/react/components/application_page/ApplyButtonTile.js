import React from 'react'

const ApplyButtonTile = (props) =>{
  return(
    <div className="image-wrapper">
      <div className= {props.className}>
        <div className="image-spacer">
          <img className="button-image" src={props.image}></img>
        </div>
      </div>
    </div>
  )
}

export default ApplyButtonTile
