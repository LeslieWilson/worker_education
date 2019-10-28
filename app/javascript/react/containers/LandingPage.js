import React from 'react'
import ContactForm from "../components/landing_page/ContactForm"
import StepTile from "../components/landing_page/StepTile"
import WeekCalendar from 'react-week-calendar';


const LandingPage = (props) => {

const stepData=[
  {
    id:1,
    image:"https://i.imgur.com/MRuIRf0.png",
    description:"blah"
  },
  {
    id:2,
    image:"https://i.imgur.com/MRuIRf0.png",
    description:"blah"
  },
  {
    id:3,
    image:"https://i.imgur.com/MRuIRf0.png",
    description:"blah"
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

  return (
    <div>

   <div className="steps-info">
   {stepTiles}
  </div>
<ContactForm />
  <WeekCalendar />
   </div>
  )
}

export default LandingPage
