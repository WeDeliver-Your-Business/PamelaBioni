import styled from 'styled-components'

import InfoPage from './InfoPage'
import TopicsAreasToMobile from './TopicsAreasToMobile'

import IconImage from '../../utils/iconImage/IconImage'
import ContactPageToMobile from '../contactPage/ContactPageToMobile'
import InfoPageToMobile from './InfoPageToMobile'
import ProfessionalProfileToMobile from '../professionalProfile/ProfessionalProfileToMobile'
import CarePageToMobile from '../carePage/CarePageToMobile'
import FooterToMobile from '../footer/FooterToMobile'

import H6 from '../../typograph/H6'

const StyledFlex = styled.div`
  position: relative;
  z-index: -1;

  @media (max-width: 502px) {
    display: none;
  }
`
const StyledImage = styled.div`
  background-image: url('${(props) => props.image}');
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;
  height: 120vh;

  @media screen and (min-width: 1024px) {
    background-size: fill;
    height: 75vh;
  }

  @media screen and (min-width: 1430px) {
    background-size: cover;
    height: 100vh;
  }
`
const StyledContainer = styled.div`
  background-color: ${(props) => props.theme.white};

  display: flex;
  flex-direction: column;

  /* overflow-y: auto; */

  &:before,
  &:after {
    content: '';
    margin: auto;
  }
`

const InfoContainer = styled.div`
  background-color: white;
  border-radius: 20px 100px 20px 100px;

  @media (max-width: 502px) {
    display: none;
  }
`

const ToNotDisplayTitle = styled.div`
  display: none;

  @media (max-width: 502px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${(props) => props.theme.secondary};
    height: 95vh;
    color: ${(props) => props.theme.primary};
    z-index: -2;
    padding-top: 100px;

    h6 {
      padding: 10px;
      margin-top: 40px;
      display: flex;
      text-align: center;
      line-height: normal;
      font-family: 'Lato', sans-serif;
      font-style: italic;
    }
  }
`

const ImageContainer = styled.div`
  display: none;
  flex-direction: column;
  margin-top: 50px;
  margin-right: 50px;

  @media (max-width: 502px) {
    display: flex;
    width: 260px;
    margin-left: 45px;
    margin-top: 40px;
  }
`

const TopicsAreasContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.secondary};
  border: none;
  border-radius: 20px 100px 20px 100px;
  width: 100%;
  margin-top: 92px;
`

function FrontPageImage({ children, image }) {
  return (
    <>
      <StyledFlex>
        <StyledImage image={image} />
        <StyledContainer>{children}</StyledContainer>
      </StyledFlex>
      <ToNotDisplayTitle>
        <H6>
          Seja bem-vinda (o) ao meu site, aqui você conhecerá um pouco mais de mim e do meu
          trabalho.
        </H6>
        <ImageContainer>
          <IconImage imageName="FirstPhoto" type="png" />
        </ImageContainer>
        <TopicsAreasContainer>
          <TopicsAreasToMobile />
        </TopicsAreasContainer>
        <ContactPageToMobile />
        <InfoPageToMobile />
        <ProfessionalProfileToMobile />
        <CarePageToMobile />
        <FooterToMobile />
      </ToNotDisplayTitle>
      <InfoContainer>
        <InfoPage />
      </InfoContainer>
    </>
  )
}

FrontPageImage.defaultProps = {
  image: '/frontPageImage.png'
}

export default FrontPageImage
