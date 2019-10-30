import React, { useState } from 'react'
import StepTile from "../components/landing_page/StepTile"

const OptionsPage = (props) =>{
  const[hiddenFields, setHiddenFields] = useState(true)

  const stepData=[
    {
      id:1,
      image:"https://i.imgur.com/MRuIRf0.png",
      description:"blah",
      class:"pics1"
    },
    {
      id:2,
      image:"https://i.imgur.com/MRuIRf0.png",
      description:"blah",
      class:"pics1"
    },
    {
      id:3,
      image:"https://i.imgur.com/MRuIRf0.png",
      description:"blah",
      class:"pics1"
    }
  ]
  const stepTiles = stepData.map(step =>{
    return(
      <StepTile
        key={step.id}
        image={step.image}
        description={step.description}
      />
    )
  })

let forms = <></>

const handleClick = () => {
return setHiddenFields(false)
}

if (hiddenFields===false){
forms =
<div className= "wrapper">
  <ContactForm />
  <WeekCalendar />
</div>
}

return (
  <div>
  <h1>I have a bachelors degree</h1>
  <p>blahblah blah the perosn who is going to th emarket lourm ipseym</p>

  <div className="steps-info">
    {stepTiles}
  </div>
<h1>Schedule a Call</h1>
  <button onClick={handleClick}>Call Now</button>
  </div>
  )
}
export default OptionsPage
