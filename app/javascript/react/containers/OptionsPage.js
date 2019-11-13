import React, { useState } from 'react'
import StepTile from "../components/landing_page/StepTile"
import SecondTimeline from '../components/options_page/SecondTimeline'

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

let styles = {
  width:'30%'
}

return (
<div>

<div className= "blockDiv">

<div className = "blockLeft">
<h1 className= "blockLeftText">I have a Bachelors degree</h1>
</div>

<div className="blockRight">
<p style= {styles} className = "blockRightText">Bootcamps encourage learning the most functional concepts in CS. Students make things happen without necessarily knowing why. In contrast, computer science bachelor's degree programs teach foundational knowledge.
</p>
</div>

</div>

<div className="FrontEndDev">
<h2 className="fsd">Full Stack Development</h2>
<h3 className="fsdSmall"> A coding bootcamp is a place where students receive intensive workforce development</h3>
<img src='https://i.imgur.com/vUAJaWJ.jpg' width="100%" className="programming_languages"></img>
</div>



<div className="step-tiles-replacement-2">

<h3 className='onlinetxt'>Online</h3>
<h3 className= 'bootcamp'>Bootcamp</h3>
<h3 className='bachelorsDegree'>Bachelors Degree</h3>

<p className= "paragraph1">Phase One- CWE Summer: This program launches June 2020 and runs until August 2020. In this time graduates are taught topics in computer science intensively,  and prepare their portfolios and classwork for review by college state admissions officers.</p>

<p className="paragraphOne">Upon completion of the program, a certification is awarded, and entry into a bachelor's computer science degree program will be facilitated.

</p>


<p className= "paragraph2">Students will attend the participating college of their choice for 1.5 years following the CWE summer. In this time they will maintain the grades necessary to remain in the program, and attain an accelerated BS in computer science while receiving academic support from the college and CWE.</p>

  <p className="paragraphTwo">Existing Bachelor's degree credits the applicant may have, will count towards the completion of this new degree, thereby affecting this timeline.</p>

<p className= "paragraph3">Bootcamp graduates will receive continuing career support services until they obtain an entry level software engineering position, and/or until such time as they enter into a CS bachelor's degree program in college.</p>

<p className="paragraphThree">This support will continue throughout the year and until they graduate. Applicants will receive assistance working with any preexisting college credits, so they may be transferred to the college and count as credit towards this new degree.
</p>

<SecondTimeline />


</div>

<div className="total_scholarships">
<h1 className="total">Total Scholarships</h1>
<p className="totalp">Applicants will be screened for their eligibility for scholarships upon applying to the CWE program and will be required to apply for this funding. Determination for an applicants eligibility will be made from there by CWE CEO, the board, and DOL case managers and staff. </p>

<img src='https://i.imgur.com/IkfwDDJ.jpg' width="100%" className="programming_languages" className="scholarshipImg"></img>
</div>

<div className="tuition_splash">
<h1 className="tuition_title">Tuition</h1>
<p className="tuition_paragraph">This program costs 10k for 3 months (50% the national average) and offers a full scholarship to eligible individuals. Students who complete the bootcamp and apply to one of our partner colleges, can expect an accelerated track to a CS bachelor's degree, and reduced tuition based on their performance in the CWE summer program. </p>
<img src='https://i.imgur.com/cWjDLBg.jpg'></img>
</div>

<div className="schedule_call">
<h1 className="skedgeAcall">Schedule a Call</h1>
<p className="skedgep">Learn more about scholarships, curriculum, and start dates</p>
<div>
  <button className="call_now_btn" onClick={handleClick}>Call Now</button>
</div>
</div>

<img src='https://i.imgur.com/9bMGjku.jpg'></img>

</div>
  )
}
export default OptionsPage
