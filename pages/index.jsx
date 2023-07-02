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
      <Navbar />
      <FrontPageImage />
      <ProfessionalProfile />
      <TopicsAreas />
      <CarePage />
      <ContactPage />
    </>
  )
}

export default MainPage
