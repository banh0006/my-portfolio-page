import React, { useState, useEffect } from "react"
import NavBar from "./components/common/NavBar"
import ParallaxImage from './components/ParallaxImage'
import AboutPage from './components/pages/AboutPage'
import WorkPage from './components/pages/WorkPage'
import ContactPage from './components/pages/ContactPage'
import { positions, Provider } from "react-alert"
import AlertTemplate from "react-alert-template-mui"

import MessengerCustomerChat from "react-messenger-customer-chat"
import { Scrollspy } from 'reactstrap-scrollspy'

function App() {
  const options = {
    timeout: 4000,
    position: positions.MIDDLE
  }
  const [showNav, setShowNav] = useState(true)

  const handleScroll = () => {
    const currentPosition = window.pageYOffset
    const navbar = document.getElementsByClassName("navbar")[0]
    const headerHeight = navbar.clientHeight

    if (currentPosition > headerHeight) {
      navbar.classList.add("scroll-bar")
    } else {
      navbar.classList.remove("scroll-bar")
    }

    // show/hide navbar when scroll
    // const [scrolledPosition, setSrolledPosition] = useState(0)
    // if (scrolledPosition > currentPosition) {
    //   setShowNav(true)
    // } else {
    //   setShowNav(false)
    // }

    // setSrolledPosition(currentPosition)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  return (
    <Provider template={AlertTemplate} {...options}>
      <Scrollspy
          names={['navbar', 'home', 'about', 'work', 'contact']}
          homeIndex={1}
      >
        <NavBar showNav={showNav} />
        <ParallaxImage />
        <AboutPage />
        <WorkPage />
        <ContactPage />
        <MessengerCustomerChat pageId="116543563511206" appId="667569657298462" minimized={false} shouldShowDialog={true}/>
      </Scrollspy>
    </Provider>
  )
}

export default App
