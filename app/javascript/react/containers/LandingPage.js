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
    <div className = "image">
  <img src='' width="59%"></img>
<div className="transparent">
      <div>

        <p className="landing_page_paragraph">

         The addition of a pipeline track into a computer science bachelor's degree program, and continued support towards the degrees’ completion.

      A pipeline for low-income individuals to access a career path they would be excluded from.
        This is done by: </p>
        <ul className="landing_page_bullets">

          <li className="liLand1">Providing computer-science education via a curriculum structured for working adults who are changing careers</li>


          <li className="liLand2">Tailoring this curriculum to allow for direct access to an accelerated CS bachelor's degree via reciprocity with other colleges</li>
          <li className="liLand3">Eliminating the need for high-interest bootcamp loans by providing our summer program at low or no cost to attendees</li>

        </ul>
      </div>
      </div>

      <div className="btn">
      <button onClick={handleClick} className="apply_now_btn">Apply Now</button>
      </div>

      </div>
      <div className = "blue_form_background">
        {forms}
        </div>

      <div className="step-tiles-replacement">

      <svg xmlns="http://www.w3.org/2000/svg" width="1639.37" height="229.285" viewBox="0 0 1639.37 229.285" className="svg_test">
        <g id="Group_1984" data-name="Group 1984" transform="translate(-179 -1241.986)">
          <g id="Group_1958" data-name="Group 1958" transform="translate(70 70)">
            <line id="Line_3" data-name="Line 3" x2="1574" transform="translate(146.5 1369.5)" fill="none" stroke="#fff" stroke-width="10"/>
            <g id="Ellipse_19" data-name="Ellipse 19" transform="translate(696 1343.099)" fill="#fff" stroke="#fff" stroke-width="5">
              <circle cx="26.451" cy="26.451" r="26.451" stroke="none"/>
              <circle cx="26.451" cy="26.451" r="23.951" fill="none"/>
            </g>
            <g id="Ellipse_22" data-name="Ellipse 22" transform="translate(109 1343.099)" fill="#fff" stroke="#fff" stroke-width="5">
              <circle cx="26.451" cy="26.451" r="26.451" stroke="none"/>
              <circle cx="26.451" cy="26.451" r="23.951" fill="none"/>
            </g>
            <g id="Ellipse_20" data-name="Ellipse 20" transform="translate(1216 1343.099)" fill="#fff" stroke="#fff" stroke-width="5">
              <circle cx="26.451" cy="26.451" r="26.451" stroke="none"/>
              <circle cx="26.451" cy="26.451" r="23.951" fill="none"/>
            </g>
            <path id="Polygon_1" data-name="Polygon 1" d="M21.5,0,43,37H0Z" transform="translate(1729.87 1401.271) rotate(-150)" fill="#fff"/>
          </g>
          <g id="noun_workshop_1726228" transform="translate(774.618 1231.986)">
            <g id="Group_1959" data-name="Group 1959" transform="translate(1.382 11)">
              <path id="Path_5362" data-name="Path 5362" d="M30.9,72.077A14.177,14.177,0,1,0,45.077,57.9,14.28,14.28,0,0,0,30.9,72.077Zm23.439,0a9.262,9.262,0,1,1-9.262-9.262A9.277,9.277,0,0,1,54.339,72.077Z" transform="translate(25.617 30.751)" fill="#fff" stroke="#fff" stroke-width="2"/>
              <path id="Path_5363" data-name="Path 5363" d="M54,72.077A14.177,14.177,0,1,0,68.177,57.9,14.28,14.28,0,0,0,54,72.077Zm23.439,0a9.262,9.262,0,1,1-9.262-9.262A9.277,9.277,0,0,1,77.439,72.077Z" transform="translate(46.181 30.751)" fill="#fff" stroke="#fff" stroke-width="2"/>
              <path id="Path_5364" data-name="Path 5364" d="M91.277,86.253A14.177,14.177,0,1,0,77.1,72.077,14.28,14.28,0,0,0,91.277,86.253Zm0-23.439a9.262,9.262,0,1,1-9.262,9.262A9.277,9.277,0,0,1,91.277,62.815Z" transform="translate(66.745 30.751)" fill="#fff" stroke="#fff" stroke-width="2"/>
              <path id="Path_5365" data-name="Path 5365" d="M156.681,78.238a15.641,15.641,0,0,0-10.207-5.1,1.928,1.928,0,0,0-1.7.378,12.329,12.329,0,0,1-6.427,2.268h-1.7a13.667,13.667,0,0,1-6.8-2.268,5.519,5.519,0,0,0-1.7-.378,16.078,16.078,0,0,0-10.207,5.1,19.148,19.148,0,0,0-2.646,3.78,16,16,0,0,0-2.646-3.591,16.53,16.53,0,0,0-10.4-5.1,1.928,1.928,0,0,0-1.7.378,13.831,13.831,0,0,1-5.1,2.079H92.981a13.465,13.465,0,0,1-6.616-2.268,5.519,5.519,0,0,0-1.7-.378,16.087,16.087,0,0,0-10.4,5.1,25.147,25.147,0,0,0-2.646,3.591,38.334,38.334,0,0,0-2.457-3.4,16.531,16.531,0,0,0-10.4-5.1,1.928,1.928,0,0,0-1.7.378,12.317,12.317,0,0,1-5.293,2.079H50.64a13.492,13.492,0,0,1-8.317-2.268,5.519,5.519,0,0,0-1.7-.378,16.078,16.078,0,0,0-10.207,5.1A19.268,19.268,0,0,0,25.5,90.9V97.9a2.815,2.815,0,0,0,.756,1.7,2.052,2.052,0,0,0,1.7.756H159.138A2.593,2.593,0,0,0,161.6,97.9V90.9A17.7,17.7,0,0,0,156.681,78.238Zm0,17.2H30.415V90.9a13.5,13.5,0,0,1,3.591-9.262,10.575,10.575,0,0,1,6.427-3.591,17.177,17.177,0,0,0,6.8,2.457c.378.189.567.378.945.378h2.835a23.688,23.688,0,0,0,8.317-2.646,12.885,12.885,0,0,1,6.427,3.591,13.422,13.422,0,0,1,3.591,8.506,2.056,2.056,0,0,0,1.7,2.079c.189,0,.567.189.756.189a2.4,2.4,0,0,0,1.7-.756,1.905,1.905,0,0,0,.567-1.7,13.868,13.868,0,0,1,3.591-8.506A10.575,10.575,0,0,1,84.1,78.049a21.157,21.157,0,0,0,6.616,2.457c.378.189.567.378.945.378h2.835a23.688,23.688,0,0,0,8.317-2.646,12.885,12.885,0,0,1,6.427,3.591,13.868,13.868,0,0,1,3.591,8.506,2.416,2.416,0,0,0,2.079,2.268h.567a2.613,2.613,0,0,0,1.7-.945c.189-.189.189-.378.378-.567V90.9h0c0-.189.189-.567.189-.756a13.868,13.868,0,0,1,3.591-8.506,10.575,10.575,0,0,1,6.427-3.591,16.352,16.352,0,0,0,7.561,2.646h3.591a8.186,8.186,0,0,0,.945-.189,22.655,22.655,0,0,0,6.8-2.457,12.885,12.885,0,0,1,6.427,3.591,13.5,13.5,0,0,1,3.591,9.262v4.537Z" transform="translate(20.81 44.247)" fill="#fff" stroke="#fff" stroke-width="2"/>
              <path id="Path_5366" data-name="Path 5366" d="M49.956,122.333a3.964,3.964,0,0,0,.756-2.079v-7.372c0-11.152-.189-19.28-.378-25.329l9.64,3.213a1.7,1.7,0,0,0,.945.189,3.048,3.048,0,0,0,2.457-1.134l2.835-3.969a2.4,2.4,0,0,0,1.134.189h67.481a10.529,10.529,0,0,0,10.585-10.4V21.585A10.568,10.568,0,0,0,134.827,11H42.207A10.568,10.568,0,0,0,31.621,21.585V32.17a15.4,15.4,0,0,0-5.86-1.134A15.122,15.122,0,1,0,40.883,46.158,15.619,15.619,0,0,0,37.1,36.14a1.7,1.7,0,0,0,.189-.945V21.585a5,5,0,0,1,4.915-4.915h92.62a5,5,0,0,1,4.915,4.915V75.456a5,5,0,0,1-4.915,4.915H69.993L78.688,67.9a4.745,4.745,0,0,0,.751-1.718c.519-1.686.5-2.809-.915-4.795S75.688,59.167,73.4,59.2c-.189-.189-5.86.192-16.634,15.314l-9.64-4.537A8.393,8.393,0,0,0,45.609,67.9a16.149,16.149,0,0,0-10.585-5.482,3.81,3.81,0,0,0-2.079.567,12.329,12.329,0,0,1-6.427,2.268H25.006a12.329,12.329,0,0,1-6.427-2.268,3.81,3.81,0,0,0-2.079-.567A16.149,16.149,0,0,0,5.915,67.9,20.887,20.887,0,0,0,1,81.316v39.127a3.964,3.964,0,0,0,.756,2.079,3.964,3.964,0,0,0,2.079.756H47.877A2.708,2.708,0,0,0,49.956,122.333ZM25.762,55.42a9.451,9.451,0,1,1,0-18.9,9.244,9.244,0,0,1,9.451,9.451A9.479,9.479,0,0,1,25.762,55.42ZM56.383,80.56a2.9,2.9,0,0,0,3.591-.945l10.4-14.555a3.14,3.14,0,0,1,2.835-1.323H73.4a.585.585,0,0,0,.378.189,1.76,1.76,0,0,1,0,1.134L59.6,84.529l-9.829-3.213c-.189-1.512-.378-3.024-.567-4.158Zm-11.53,37.048H24.25a1.7,1.7,0,0,0-.945.189H6.86V81.5a14.105,14.105,0,0,1,3.591-9.64A10.665,10.665,0,0,1,16.5,68.273a27.341,27.341,0,0,0,6.616,2.457,1.136,1.136,0,0,0,.756.189H28.03c.189,0,.567-.189.756-.189A21.157,21.157,0,0,0,35.4,68.273a11.821,11.821,0,0,1,6.049,3.591l.378.378a2.6,2.6,0,0,0,.945,1.512c1.512,3.4,2.268,11.719,2.268,39.316v4.537Z" transform="translate(-1 -11)" fill="#fff" stroke="#fff" stroke-width="2"/>
              <path id="Path_5367" data-name="Path 5367" d="M95.523,22h-62a3.024,3.024,0,0,0,0,6.049h61.81a3.325,3.325,0,0,0,3.4-3.024A3.15,3.15,0,0,0,95.523,22Z" transform="translate(25.261 -1.208)" fill="#fff" stroke="#fff" stroke-width="2"/>
              <path id="Path_5368" data-name="Path 5368" d="M77.8,30H53.224a3.024,3.024,0,1,0,0,6.049H77.8A3.03,3.03,0,1,0,77.8,30Z" transform="translate(42.798 5.914)" fill="#fff" stroke="#fff" stroke-width="2"/>
              <path id="Path_5369" data-name="Path 5369" d="M77.8,37.3H53.224a3.024,3.024,0,1,0,0,6.049H77.8a3.03,3.03,0,1,0,0-6.049Z" transform="translate(42.798 12.413)" fill="#fff" stroke="#fff" stroke-width="2"/>
            </g>
          </g>
          <g id="noun_degree_1218712" transform="translate(1289 1255.207)">
            <g id="Group_1960" data-name="Group 1960" transform="translate(11.143)">
              <path id="Path_5370" data-name="Path 5370" d="M11.111,18.923H40.624a2.845,2.845,0,0,0,3.011-3.011A2.845,2.845,0,0,0,40.624,12.9H11.111A2.845,2.845,0,0,0,8.1,15.911,2.845,2.845,0,0,0,11.111,18.923Z" transform="translate(5.151 25.948)" fill="#fff"/>
              <path id="Path_5371" data-name="Path 5371" d="M11.111,25.523H74.654a2.845,2.845,0,0,0,3.011-3.011A2.845,2.845,0,0,0,74.654,19.5H11.111A2.845,2.845,0,0,0,8.1,22.511,3.018,3.018,0,0,0,11.111,25.523Z" transform="translate(5.151 39.224)" fill="#fff"/>
              <path id="Path_5372" data-name="Path 5372" d="M41.829,32.6H11.111a3.011,3.011,0,1,0,0,6.023H41.829a3.011,3.011,0,0,0,0-6.023Z" transform="translate(5.151 65.575)" fill="#fff"/>
              <path id="Path_5373" data-name="Path 5373" d="M118.438,113.533V104.5l6.625-6.625a2.911,2.911,0,0,0,0-4.216l-6.625-6.625V78a2.845,2.845,0,0,0-3.011-3.011h-9.034l-6.625-6.625a.3.3,0,0,1-.3-.3V33.428c.3,0-.6-2.108-.9-2.108L68.447.9A3.253,3.253,0,0,0,66.339,0H6.711A2.845,2.845,0,0,0,3.7,3.011V121.062a2.845,2.845,0,0,0,3.011,3.011H76.879l-4.517,9.637a2.749,2.749,0,0,0,.6,3.313,3.4,3.4,0,0,0,3.313.9l7.228-2.71,2.71,7.228a3.334,3.334,0,0,0,2.71,2.108h0a2.894,2.894,0,0,0,2.71-1.807l6.324-13.251,6.324,13.251a2.894,2.894,0,0,0,2.71,1.807h0a2.893,2.893,0,0,0,2.71-2.108l2.71-7.228,7.228,2.71c.3,0,.6.3.9.3h0a2.845,2.845,0,0,0,3.011-3.011,4.28,4.28,0,0,0-.6-1.807l-7.83-16.864h.6A2.971,2.971,0,0,0,118.438,113.533ZM69.351,10.239,89.528,30.416H69.351Zm10.54,107.811H9.723V6.023h53.6v27.4h0a2.845,2.845,0,0,0,3.011,3.011h27.4v34.03l-4.517,4.517H80.192A2.845,2.845,0,0,0,77.18,78v.3H19.962a3.011,3.011,0,1,0,0,6.023H76.879v2.71l-6.625,6.625a2.734,2.734,0,0,0-.9,2.108h0c0,.9.3,1.506,7.529,8.432v9.034C76.879,115.039,78.084,116.244,79.891,118.051Zm9.336,15.66-1.2-3.313a2.893,2.893,0,0,0-2.71-2.108l-4.216,1.2,5.018-10.754,8.533,3.225Zm22.285-5.12A3.133,3.133,0,0,0,107.6,130.4l-1.2,3.313-5.421-11.444.6-1.2,4.818-4.818H108.2l6.324,13.552Zm1.807-27.706a2.734,2.734,0,0,0-.9,2.108v7.529h-7.529a1.811,1.811,0,0,0-1.2.3c-.3,0-.6.3-.9.6l-5.12,5.12-5.12-5.12a2.734,2.734,0,0,0-2.108-.9H82.9v-7.529a2.734,2.734,0,0,0-.9-2.108l-3.614-3.614-1.506-1.506L82,90.646a2.734,2.734,0,0,0,.9-2.108V81.009h7.529a2.734,2.734,0,0,0,2.108-.9l5.12-5.12,5.12,5.12a2.734,2.734,0,0,0,2.108.9h7.529v7.529a2.734,2.734,0,0,0,.9,2.108l5.12,5.12Z" transform="translate(-3.7)" fill="#fff" stroke="#fff" stroke-width="2"/>
            </g>
          </g>
          <g id="noun_online_chat_2606430" data-name="noun_online chat_2606430" transform="translate(205 1248.756)">
            <g id="Group_1941" data-name="Group 1941" transform="translate(1 1.002)">
              <path id="Path_5349" data-name="Path 5349" d="M1,122.877a6.268,6.268,0,0,0,6.25,6.25h137.5a6.248,6.248,0,0,0,6.25-6.25V16.627a6.228,6.228,0,0,0-6.25-6.25H72.625v12.5h71.344a.774.774,0,0,1,.781.781V100.22a.774.774,0,0,1-.781.781H8.031a.774.774,0,0,1-.781-.781V23.658a.774.774,0,0,1,.781-.781h8.344v18.75A3.134,3.134,0,0,0,19.5,44.752H49.063l9.813,9.781A.782.782,0,0,0,60.219,54v-9.25H63.25a3.114,3.114,0,0,0,3.125-3.125V4.127A3.1,3.1,0,0,0,63.25,1H19.5a3.114,3.114,0,0,0-3.125,3.125v6.25H7.25A6.248,6.248,0,0,0,1,16.627Zm128.094-11.094h6.25a3.125,3.125,0,1,1,0,6.25h-6.25a3.125,3.125,0,1,1,0-6.25Zm-18.719,0h6.25a3.125,3.125,0,0,1,0,6.25h-6.25a3.125,3.125,0,1,1,0-6.25Z" transform="translate(-1 -1.002)" fill="#fff"/>
              <path id="Path_5350" data-name="Path 5350" d="M79.627,59.623A3.125,3.125,0,0,0,82.752,56.5V53.373a3.125,3.125,0,0,0-3.125-3.125H70.252V44.78A.781.781,0,0,0,69.471,44H27.283a.781.781,0,0,0-.781.781v5.469H17.127A3.125,3.125,0,0,0,14,53.373V56.5a3.125,3.125,0,0,0,3.125,3.125h62.5Z" transform="translate(26.629 90.366)" fill="#fff"/>
            </g>
          </g>
        </g>
      </svg>

      <div className = "textUnderSvgLanding">



<p className="box1">Online</p>
<h3 className="box1sm">Weeks 1 to 4</h3>



<p className="box2">Bootcamp</p>
<h3 className="box2sm">Weeks 5 to 9</h3>


<p className="box3">Bachelors Degree</p>
<h3 className="box3sm">One Year</h3>

      </div>


      <h1 className="test">hiiii</h1>
      </div>


      <div className= "bachelors_bubbles">
      <div className="bachelors_bubble1">
      <h1 className="bach_bubble_text"> I have a Bachelors degree</h1>
      <div className="btn">
      <a href="/options" className="select_btn_1">Select</a>
      </div>
    </div>
    <br></br>
      <div className="bachelors_bubble2">
      <h1 className="bach_bubble_text">I don't have a Bachelors degree</h1>
      <div className="btn">
      <a href="/options" className="select_btn_2">Select</a>
      </div>
      </div>

      </div>

   </div>
  )
}

export default LandingPage
