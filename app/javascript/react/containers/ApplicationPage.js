import React, { useState } from 'react'
import ApplyForm from "../components/application_page/ApplyForm"
import ApplyButtonTile from "../components/application_page/ApplyButtonTile"

const ApplicationPage=(props) =>{
  const applyButtonData=[
    {
      id:1,
      image:"https://i.imgur.com/MRuIRf0.png",
      description:"with a bachelors degree",
      className: "button1"
    },
    {
      id:2,
      image:"https://i.imgur.com/MRuIRf0.png",
      description:"without a bachelors degree",
      className:"button2"
    },
    {
      id:3,
      image:"https://i.imgur.com/MRuIRf0.png",
      description:"transfer students",
      className:"button3"
    }
  ]

  const applyButtonTiles = applyButtonData.map(button =>{
    return(
      <ApplyButtonTile
        key={button.id}
        image={button.image}
        description={button.description}
        className={button.className}
      />
    )
  })

  return(
    <div>
      <ApplyForm />
      {applyButtonTiles}
    </div>
  )
}


export default ApplicationPage
