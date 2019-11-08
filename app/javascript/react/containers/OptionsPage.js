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
<p style= {styles} className = "blockRightText">Bootcamp pedagogy encourages learning only the most functional concepts in CS. Students must make things happen without necessarily knowing how or why. Unlike a computer science degree, where instructors have the luxury of time to increase the scope and depth of what is taught, bootcamps are geared towards fast employability (5).
In contrast, computer science bachelor's degree programs teach the foundations of computer science. Someone with a CS degree would have knowledge of the underlying principles of software design. They would be more able to write clean and maintainable code and optimize applications for speed and efficiency. The greater context and depth of knowledge they have can inform the decisions they make in programming and lead to more valuable results, and this is something recruiters are well aware of.
</p>
</div>

</div>

<div className="FrontEndDev">
<h2 className="fsd">Full Stack Development</h2>
<h3 className="fsdSmall"> A coding bootcamp is a place where students receive intensive workforce development</h3>
<img src='https://i.imgur.com/vUAJaWJ.jpg' width="100%" className="programming_languages"></img>
</div>



<div className="step-tiles-replacement-2">
<h1 className= "paragraph1">Phase One- CWE Summer
This program launches June 2020 and runs until August 2020. In this time graduates are taught topics in computer science intensively,  and prepare their portfolios and classwork for review by college state admissions officers. Upon completion of the program, a certification is awarded, and entry into a bachelor's computer science degree program will be facilitated.
</h1>
<h1 className= "paragraph2">HIII</h1>
<h1 className= "paragraph3">HIII</h1>

<SecondTimeline />


</div>

<div className="total_scholarships">
<h1 className="total">Total Scholarships</h1>
<p className="totalp">blaha;lskdjf;lsakdfjl;sakdjfl;askdjfal;sdkfjals;dkfjl;asdkjfl;askdjfals;kdjfl;sakdjfals;kdjfalsdjfas;dklfjls;dkjflasdjfk;;alsdifjals;kdjfl;kejfr;wqoeulaskjdfhkas;jdfhlkasjdfhlksajdhflaskjdhflkasjdhflksajdhflkasjdhflksajdhflksajdhflkasjdhflksajdhflaskdjfhlsakdjhflaksjdhflaskjdhflaksjdhflkasjdhflkasjdhflkasdjhflaskdjfhlaskdjfhlaksjdhflaksjdhflaksjdhflaksjdhflaskdjhflaskdjhflsakdjfhlkasdjhflkasdjhflkasjdhf</p>

<img src='https://i.imgur.com/IkfwDDJ.jpg' width="100%" className="programming_languages" className="scholarshipImg"></img>
</div>


<div className="schedule_call">
<h1 className="skedgeAcall">Schedule a Call</h1>
<p className="skedgep">lkasjdfhklsajdfhsakldfh</p>
</div>

<div>
  <button onClick={handleClick}>Call Now</button>
</div>

</div>
  )
}
export default OptionsPage
