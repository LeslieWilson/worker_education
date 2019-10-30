import React, { useState } from 'react'
import ContactForm from "../components/landing_page/ContactForm"
import StepTile from "../components/landing_page/StepTile"
import WeekCalendar from 'react-week-calendar';


const LandingPage = (props) => {
  const[hiddenFields, setHiddenFields] = useState(true)

  const stepData=[
    {
      id:1,
      image:"https://i.imgur.com/MRuIRf0.png",
      description:"blah",
      class:"pics2"
    },
    {
      id:2,
      image:"https://i.imgur.com/MRuIRf0.png",
      description:"blah",
      class:"pics2"
    },
    {
      id:3,
      image:"https://i.imgur.com/MRuIRf0.png",
      description:"blah",
      class:"pics2"
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
      <div>
        <h1>Worker_Education_</h1>
        <p>blahblah blah the perosn who is going to th emarket lourm ipseym</p>
        <ul>
          <li>WHO</li>
          <li>WHAT</li>
          <li>WHERE</li>
        </ul>
      </div>

      <button onClick={handleClick}>Apply Now</button>
      {forms}
      <div className="steps-info">
        {stepTiles}
      </div>
   </div>
  )
}

export default LandingPage
