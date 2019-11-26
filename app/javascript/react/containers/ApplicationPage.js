import React, { useState } from 'react'
import ApplyForm from "../components/application_page/ApplyForm"
import ApplyButtonTile from "../components/application_page/ApplyButtonTile"

const ApplicationPage=(props) =>{
  const applyButtonData=[
    {
      id:1,
      image:"https://i.imgur.com/sIDVuEK.jpg",
      className: "buttonapply"
    },
    {
      id:2,
      image:"https://i.imgur.com/5XyuSWv.jpg",
      className:"buttonapply"
    },
    {
      id:3,
      image:"https://i.imgur.com/2Plcvlh.jpg",
      className:"buttonapply"
    },
    {
      id:4,
      image:"https://i.imgur.com/Odze7bw.jpg",
      className:"buttonapply"
    },
    {
      id:5,
      image:"https://i.imgur.com/1VRpReV.jpg",
      className:"buttonapply"
    },
    {
      id:6,
      image:"https://i.imgur.com/sYEqcDC.jpg",
      className:"buttonapply"
    },
    {
      id:7,
      image:"https://i.imgur.com/BzP46Rz.jpg",
      className:"buttonapply"
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
      <div className="sidebar-left">
      {applyButtonTiles}
      </div>
    </div>
  )
}


export default ApplicationPage
