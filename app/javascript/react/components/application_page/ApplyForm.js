import React, { useState, useCallback } from 'react'
import { Redirect } from "react-router-dom"
import _ from 'lodash'
import ErrorList from  "../ErrorList"
import MyDropzone from "./MyDropzone"

const ApplyForm = (props) =>{
  const [errors, setErrors] = useState({})
  const[shouldRedirect, setShouldRedirect] = useState(false)
  const[banana, setHidden]= useState('applyFormFieldsLeft')
  const [newApplicant, setNewApplicant] = useState({
    first_name:"",
    last_name: "",
    email:"",
    phone_number:"",
    address:"",
    city:"",
    state:"",
    country:"",
    age:"",
    current_income:"",
    house_size:""
  })

  const handleFieldChange = (event) =>{
    setNewApplicant({
      ...newApplicant,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }


  const clearFields = (event) =>{
    event.preventDefault()
    setNewApplicant({
      first_name:"",
      last_name: "",
      email: "",
      phone_number: "",
      address: "",
      city: "",
      state: "",
      country:"",
      age:"",
      current_income:"",
      house_size:""
    })
setErrors({})
  }

const validForSubmission=()=>{
  let submitErrors = {}
  const requiredFields = ["email"]
  requiredFields.forEach(field => {
    if(newApplicant[field].trim()==""){
      submitErrors ={
        ...submitErrors,
        [field]:"is blank"
      }
    }
  })
  setErrors(submitErrors)
}

const handleContactSubmit = (event) =>{
  event.preventDefault()
  let payload = {
    first_name:newApplicant.first_name,
    last_name:newApplicant.last_name,
    email: newApplicant.email,
    phone_number:newApplicant.phone_number,
    address:newApplicant.address,
    city:newApplicant.city,
    state:newApplicant.state,
    country:newApplicant.country,
    age:newApplicant.age,
    current_income:newApplicant.current_income,
    house_size:newApplicant.house_size

  }

  console.log("holaaa")
  addApplicant(payload)
  setNewApplicant({
      first_name:"",
      last_name: "",
      email: "",
      phone_number: "",
      address: "",
      city: "",
      state: "",
      country:"",
      age:"",
      current_income:"",
      house_size:""
  })
}

const addApplicant = payload => {
  fetch("/api/v1/applicants", {
    method: "POST",
    body: JSON.stringify(payload),
    headers:{
      Accept :"applicantion/json",
      "Content-type": "application/json"
    }
  })

  .then(response => {
    if(response.ok){
      return response;
    } else{
      const errorMessage =
      `${response.status}
      (${response.statusText})`
      const error = new Error(errorMessage)
      throw(error);
    }
  })
  .then((response)=>{
    return response.json()
  })
  .then((persistedData)=>{
    setShouldRedirect(true)
  })
  .catch((error)=>{console.error("error in fetch")
})
}



const toggleHidden = () =>{
  if(hidden == "hidden"){setHidden('visible')}
}


return(

<>

<img src='https://i.imgur.com/U6cOHrP.jpg' className="menubar"></img>

  <div className="applicationheader">
  <h2 id="contact-form-title">Apply</h2>
  </div>


  <div className="generalinfo" onClick={toggleHidden}>
<img src='https://i.imgur.com/7Nxu3zD.jpg' className="ginfo"></img>
  </div>

<div className="applyFormFieldsLeft">

  <form onSubmit={handleContactSubmit} className="contactform">
  <ErrorList errors={errors} />


  <label>
  <input
  name="first_name"
  onChange={handleFieldChange}
  value={newApplicant.first_name}
  className= "applyFormFieldsLeft"
  placeholder="FIRST NAME"
  />
  </label>

  <label>
  <input
  name="last_name"
  onChange={handleFieldChange}
  value={newApplicant.last_name}
  className="applyFormFieldsLeft"
  placeholder="LAST NAME"
  />
  </label>

  <label>
  <input
  name="email"
  onChange={handleFieldChange}
  value={newApplicant.email}
  className="applyFormFieldsLeft"
  placeholder="EMAIL"
  />
  </label>

  <label>

  <input
  name="phone_number"
  onChange={handleFieldChange}
  value={newApplicant.phone_number}
  className="applyFormFieldsLeft"
  placeholder="PHONE NUMBER"
  />
  </label>

  <label>
  <input
  name="address"
  onChange={handleFieldChange}
  value={newApplicant.address}
  className= "applyFormFieldsLeft"
  placeholder="ADDRESS"
  />
  </label>


  </form>
  </div>

<div className="applyFormFieldsRight">

  <form onSubmit={handleContactSubmit} className="contactform2">
  <ErrorList errors={errors} />

  <label>
  <input
  name="city"
  onChange={handleFieldChange}
  value={newApplicant.city}
  className= "applyFormFieldsRight"
  placeholder="CITY"
  />
  </label>

  <label>
  <input
  name="state"
  onChange={handleFieldChange}
  value={newApplicant.state}
  className= "applyFormFieldsRight"
  placeholder="STATE"
  />
  </label>

  <label>
  <input
  name="country"
  onChange={handleFieldChange}
  value={newApplicant.country}
  className= "applyFormFieldsRight"
  placeholder="COUNTRY"
  />
  </label>

  <label>
  <input
  name="age"
  onChange={handleFieldChange}
  value={newApplicant.age}
  className= "applyFormFieldsRight"
  placeholder="AGE"
  />
  </label>

  <label>
  <input
  name="current_income"
  onChange={handleFieldChange}
  value={newApplicant.current_income}
  className= "applyFormFieldsRight"
  placeholder="CURRENT INCOME"
  />
  </label>

  </form>

  <div className="dropdowns">
  <img src='https://i.imgur.com/iyxLqN2.jpg' className="geninfo"></img>
  </div>

    <MyDropzone />
    <input className="button_submit_it_blue" type="submit" value="Submit"/>


  <div className="logojpg">
  <img src='https://i.imgur.com/9bMGjku.jpg' className="logojpg"></img>
  </div>

</div>

  </>



)




}

export default ApplyForm
