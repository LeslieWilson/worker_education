import React, { useState, useEffect } from 'react'
import { Redirect } from "react-router-dom"


const Index = (props) => {
  const [option, setOption] = useState({})
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() =>{
    fetch(`/api/v1/options/${optionId}`)
  })





}
