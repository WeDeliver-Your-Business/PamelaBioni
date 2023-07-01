// import styled from 'styled-components'

import Navbar from '../src/layout/navbar/Navbar'
import FrontPageImage from '../src/layout/frontPageImage/FrontPageImage'
import ProfessionalProfile from '../src/layout/professionalProfile/ProfessionalProfile'
import TopicsAreas from '../src/layout/topicsAreas/TopicsAreas'

function MainPage() {
  return (
    <>
      <Navbar />
      <FrontPageImage />
      <ProfessionalProfile />
      <TopicsAreas />
    </>
  )
}

export default MainPage
