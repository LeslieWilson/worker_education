// import React from 'react'
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import LandingPage from "../containers/LandingPage"
// import Navbar from "../components/landing_page/Navbar"
//
// export const App = (props) => {
//   return(
// <BrowserRouter>
// <Switch>
// <Route exact path="/" render={()=><NavBar>{LandingPage}</NavBar >}/>
// </Switch>
// </BrowserRouter>
//
//
//   )
// }

// export default App

import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from "../containers/LandingPage"
import OptionsPage from "../containers/OptionsPage"

export const App = (props) => {
  return(
<BrowserRouter>
<Switch>
<Route exact path="/" component={LandingPage} />
<Route exact path="/options" component={OptionsPage} />
</Switch>
</BrowserRouter>
  )
}

export default App
