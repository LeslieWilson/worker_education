import React, { useState } from 'react'
import { Redirect } from "react-router-dom"
import _ from 'lodash'
import ErrorList from  "../ErrorList"

const ApplyForm = (props) =>{
  const [errors, setErrors] = useState({})
  const[shouldRedirect, setShouldRedirect] = useState(false)
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
    current_income:newApplicant.income,
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


return(
  <div className = "form" id="contact-form">
  <h2 id="contact-form-title">Whats your contact information?</h2>

  <form onSubmit={handleContactSubmit} className="contactform">
  <ErrorList errors={errors} />

  <label>
  <input
  name="first_name"
  onChange={handleFieldChange}
  value={newApplicant.first_name}
  className= "first_name_klass"
  placeholder="FIRST NAME"
  />
  </label>

  <label>
  <input
  name="last_name"
  onChange={handleFieldChange}
  value={newApplicant.last_name}
  className="last_name_klass"
  placeholder="LAST NAME"
  />
  </label>

  <label>
  <input
  name="email"
  onChange={handleFieldChange}
  value={newApplicant.email}
  className="email_klass"
  placeholder="EMAIL"
  />
  </label>

  <label>

  <input
  name="phone_number"
  onChange={handleFieldChange}
  value={newApplicant.phone_number}
  className="phone_klass"
  placeholder="PHONE NUMBER"
  />
  </label>

  <label>
  <input
  name="address"
  onChange={handleFieldChange}
  value={newApplicant.address}
  className= "address_klass"
  placeholder="ADDRESS"
  />
  </label>

  <label>
  <input
  name="city"
  onChange={handleFieldChange}
  value={newApplicant.city}
  className= "city_klass"
  placeholder="CITY"
  />
  </label>

  <label>
  <input
  name="state"
  onChange={handleFieldChange}
  value={newApplicant.state}
  className= "state_klass"
  placeholder="STATE"
  />
  </label>

  <label>
  <input
  name="country"
  onChange={handleFieldChange}
  value={newApplicant.country}
  className= "country_klass"
  placeholder="COUNTRY"
  />
  </label>

  <label>
  <input
  name="age"
  onChange={handleFieldChange}
  value={newApplicant.age}
  className= "age_klass"
  placeholder="AGE"
  />
  </label>

  <label>
  <input
  name="current_income"
  onChange={handleFieldChange}
  value={newApplicant.current_income}
  className= "current_income_klass"
  placeholder="CURRENT INCOME"
  />
  </label>

  <label>
  <input
  name="house_size"
  onChange={handleFieldChange}
  value={newApplicant.house_size}
  className= "house_size_klass"
  placeholder="HOUSE SIZE"
  />
  </label>


  <input className="button_submit_it" type="submit" value="Submit"/>

  </form>
  </div>
)

}

export default ApplyForm
