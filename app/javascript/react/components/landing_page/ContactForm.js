import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import _ from 'lodash'
import ErrorList from "../ErrorList"

const ContactForm = (props) => {
  const [errors, setErrors] = useState({})
  const[shouldRedirect, setShouldRedirect] = useState(false)
  const [newContact, setNewContact] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: ""
  })
  const handleFieldChange = (event) => {
    setNewContact({
      ...newContact,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }
  const clearFields = (event) => {
    event.preventDefault()
    setNewContact({
      first_name: "",
      last_name: "",
      email: "",
      phone_number: ""
    })
    setErrors({})
  }
  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["email"]
    requiredFields.forEach(field => {
      if(newContact[field].trim() === ""){
        submitErrors = {
          ...submitErrors,
          [field]: "is blank"
        }
      }
    })
 setErrors(submitErrors)
  }

  const handleContactSubmit = (event) =>{
    event.preventDefault()
    let payload = {
      first_name:newContact.first_name,
      last_name:newContact.last_name,
      email:newContact.email,
      phone_number:newContact.phone_number,
    }
    console.log("hello")
    addDatapoint(payload)
    setNewContact({
      first_name: "",
      last_name: "",
      email: "",
      phone_number: ""
    })
  }

  const addDatapoint = payload => {
    console.log("hi there")
    fetch("/api/v1/personal_datapoints", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      }
    })

    .then(response => {
      if (response.ok){
        return response;
      }else{
        const errorMessage = `${response.status} (${response.statusText})`
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
    .catch((error)=> {console.error("error in fetch")
  })
  }

  // if(shouldRedirect){
  //   return <Redirect to="/DetailedLandingPage" />
  // }

  return(
  <div className = "form" id="contact-form">
    <h2 id="contact-form-title">Whats your contact information?</h2>
    <form onSubmit={handleContactSubmit} className="contactform">
      <ErrorList errors={errors} />
      <label>
        <input
        name="first_name"
        onChange={handleFieldChange}
        value={newContact.first_name}
        className= "first_name_class"
        placeholder="FIRST NAME"
        />
      </label>

      <label>
        <input
        name="last_name"
        onChange={handleFieldChange}
        value={newContact.last_name}
        className="last_name_class"
        placeholder="LAST NAME"
        />
      </label>

      <label>
        <input
        name="email"
        onChange={handleFieldChange}
        value={newContact.email}
        className="email_class"
        placeholder="EMAIL"
        />
      </label>

      <label>
        <input
        name="phone_number"
        onChange={handleFieldChange}
        value={newContact.phone_number}
        className="phone_class"
        placeholder="PHONE NUMBER"
        />
      </label>
    <input className="button_submit_it" type="submit" value="Submit"/>
  </form>
</div>
)}

export default ContactForm
