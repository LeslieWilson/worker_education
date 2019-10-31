import React, { useState } from 'react'
import ContactForm from "../components/landing_page/ContactForm"
import StepTile from "../components/landing_page/StepTile"
import StandardCalendar from '../components/landing_page/StandardCalendar';


const LandingPage = (props) => {
  const[hiddenFields, setHiddenFields] = useState(true)

  const stepData=[
    {
      id:1,
      image:"https://i.imgur.com/MRuIRf0.png",
      description:"A coding bootcamp is an intensive program",
      class:"pics2"

    },
    {
      id:2,
      image:"https://i.imgur.com/MRuIRf0.png",
      description:"A coding bootcamp is an intensive program",
      class:"pics2"
    },
    {
      id:3,
      image:"https://i.imgur.com/MRuIRf0.png",
      description:"A coding bootcamp is an intensive program",
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
      <StandardCalendar />
    </div>
  }

  return (
    <div>
      <div>
        <h1 className= "Worker_Education_">Worker_Education._</h1>
        <p className="landing_page_paragraph">blahblah blah the perosn who is going to th emarket lourm ipseym. blah blah blah I hate this blah blah and I know who took th ebus to prtugal it was me. It was always me. I am so upset right now. I love worker education. I love coffee. I love rainbows. I love fishing. I love eating buscits.I want to say more stuff  so this will be a square.</p>
        <ul className="landing_page_bullets">
        <span className="largerBullet">
          <li className="liLand1">WHO</li>

            </span>
          <li className="liLand2">WHAT</li>
          <li className="liLand3">WHERE</li>

        </ul>
      </div>

      <div className="btn">
      <button onClick={handleClick} className="apply_now_btn">Apply Now</button>
      </div>
      {forms}



      <div className="steps-info">
        {stepTiles}
      </div>


      <div className= "bachelors_bubbles">
      <div className="bachelors_bubble1">
      <h1 className="bach_bubble_text"> I have a bachelors degree</h1>
      <div className="btn">
      <button onClick={handleClick} className="select_btn_1">Select</button>
      </div>
    </div>
    <br></br>
      <div className="bachelors_bubble2">
      <h1 className="bach_bubble_text">I do not have a bachelors degree</h1>
      <div className="btn">
      <button onClick={handleClick} className="select_btn_2">Select</button>
      </div>
      </div>

      </div>

   </div>
  )
}

export default LandingPage
