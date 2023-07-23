/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import { Link } from 'react-scroll'
import { useState } from 'react'

import { MdMapsHomeWork } from 'react-icons/md'
import { FaHospital } from 'react-icons/fa'
import { PiInstagramLogoFill } from 'react-icons/pi'

import IconImage from '../../utils/iconImage/IconImage'
import H3 from '../../typograph/H3'
import H5 from '../../typograph/H5'

const ColouredContainer = styled.div`
  background-color: ${(props) => props.theme.primary};
  border-radius: 30px 0px 0px 0px;
`

const Container = styled.div`
  background-image: url('/contactPageImage.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 100px;
  height: 150vh;
`

const ContainerArrow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledArrow = styled.a`
  padding-bottom: 25px;
  cursor: pointer;
`

const LineColour = styled.div`
  background-color: ${(props) => props.theme.primary};
  box-sizing: border-box;
  padding: 0.5px 0;
`
const LogoContainer = styled.div`
  margin-top: 250px;
  margin-left: 120px;
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 100px;
  margin-left: 120px;
  margin-bottom: 310px;
  width: 700px;
`

const CityContainer = styled.div`
  display: flex; 
  align-items: center;
  gap: 20px;
`

const AppointmentPlaces = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  cursor: pointer;
`

const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-direction: row;
  
  cursor: pointer;

  a { 
    text-decoration: none;
    color: ${(props) => props.theme.secondary};
  }
`

const ModalWithAdress = styled.div`
  display: flex;
  background-color: #f9f9f9;
  flex-direction: column;
  align-items: center;
  width: 760px;
  margin-left: 200px;
  margin-top: 150px;
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 20px 100px 20px 100px;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 999;

  h6 {
    font-size: 16px;
  }
`

const Footer = styled.div`
  display: flex;
  width: 1200px;
  justify-content: center;
  text-align: center;
  margin-left: 400px;
  font-size: 14px;
`

const MainInfoContainer = styled.div`
  display: flex;
`

const ModalContainer = styled.div``

function ContactPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ColouredContainer>
        <Container>
          <ContainerArrow>
            <StyledArrow>
              <Link to="navBar" smooth={true} offset={5} duration={800}>
                <IconImage imageName="ArrowDown" type="png" size="40px" />
              </Link>
            </StyledArrow>
          </ContainerArrow>
          <LineColour />
            <LogoContainer>
              <img src="LogoLastPage.png" width="284" height="296"></img>
            </LogoContainer>
            <MainInfoContainer>
          <InfoContainer>
            <CityContainer>
              <MdMapsHomeWork size="35px" color="#C39983"/>
              <H3>Brasília - DF</H3>
            </CityContainer>
            <AppointmentPlaces>
              <FaHospital size="35px" color="#C39983" />
              <H3>
                <a
                  onMouseEnter={() => setShowModal(true)}
                  onMouseLeave={() => setShowModal(false)}
                >Locais de atendimento</a>
              </H3>
            </AppointmentPlaces>
            <SocialMedia>
              <PiInstagramLogoFill size="35px" color="#C39983" />
              <H3>
                <a 
                  href="https://www.instagram.com/drapamelabioni/" 
                  target="_blank"
                  rel="noreferrer">
                    @drapamelabioni
                </a>
              </H3>
              <H3>/</H3>
              <H3>
                <a
                  href="https://www.instagram.com/ummasmulheres/" 
                  target="_blank"
                  rel="noreferrer">
                    @ummasmulheres
                </a>
              </H3>
            </SocialMedia>
          </InfoContainer>
          <ModalContainer>
            {showModal && (
                <ModalWithAdress>
                  <H5>Hospital Sírio-Libanês - Brasília - DF</H5>
                  <h6>SGAS 613, s/n Lote 94, Asa Sul - (61) 99955-4558 / (61) 3044-8888 </h6>
                  <br></br>
                  <H5>Clínica Unitá</H5>
                  <h6>SHJB III E/Q 3/5, Avenida das Paineiras,  Bloco A, 1º andar - Edifício Jardim Imperial - (61) 99267-0123 </h6>
                  <br></br>
                  <H5>Clínica Mama - Asa Norte</H5>
                  <h6>SEPN 516, Bloco E, Edifício Carlton Center 1º andar - (61) 3213-6625 </h6>
                </ModalWithAdress>
              )}
          </ModalContainer>
          </MainInfoContainer>
          <LineColour />
          <Footer>
            <H5>
              © 2023 - Pâmlea Ogassawara Bioni - Todos os direitos reservados <br></br>Proudly made by We Deliver Your Business
            </H5>
          </Footer>
        </Container>
      </ColouredContainer>
    </>
  )
}

export default ContactPage
