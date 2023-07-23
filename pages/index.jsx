// import styled from 'styled-components'

import Navbar from '../src/layout/navbar/Navbar'
import FrontPageImage from '../src/layout/frontPageImage/FrontPageImage'
import ProfessionalProfile from '../src/layout/professionalProfile/ProfessionalProfile'
import TopicsAreas from '../src/layout/topicsAreas/TopicsAreas'
import CarePage from '../src/layout/carePage/CarePage'
import ContactPage from '../src/layout/contactPage/ContactPage'

function MainPage() {
  return (
    <>
      <div id="navBar">
        <Navbar />
      </div>
      <div id="introText">
        <FrontPageImage />
      </div>
      <div id="professionalProfile">
        <ProfessionalProfile />
      </div>
      <div id="topicAreas">
        <TopicsAreas />
      </div>
      <div id="carePage">
        <CarePage />
      </div>
      <div id="contactPage">
        <ContactPage />
      </div>
    </>
  )
}

export default MainPage
