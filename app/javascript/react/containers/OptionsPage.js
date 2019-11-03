import React, { useState } from 'react'
import StepTile from "../components/landing_page/StepTile"

const OptionsPage = (props) =>{
  const[hiddenFields, setHiddenFields] = useState(true)

  const stepData=[
    {
      id:1,
      image:"https://i.imgur.com/MRuIRf0.png",
      description:"A coding bootcamp is an intensive program",
      class:"pics1"
    },
    {
      id:2,
      image:"https://i.imgur.com/MRuIRf0.png",
      description:"A coding bootcamp is an intensive program",
      class:"pics1"
    },
    {
      id:3,
      image:"https://i.imgur.com/MRuIRf0.png",
      description:"A coding bootcamp is an intensive program",
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



<div className= "blockDiv">

<div className = "blockLeft">
<h1 className= "blockLeftText">I have a bachelors</h1>
</div>



</div>


<div className="steps-info-2">
  {stepTiles}
</div>

<div>
<h1>Schedule a Call</h1>
</div>

<div>
  <button onClick={handleClick}>Call Now</button>
</div>

</div>
  )
}
export default OptionsPage
