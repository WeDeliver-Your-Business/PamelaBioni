/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import { useState } from 'react'

import { MdMapsHomeWork } from 'react-icons/md'
import { FaHospital } from 'react-icons/fa'
import { PiInstagramLogoFill } from 'react-icons/pi'

import H5 from '../../typograph/H5'


const Container = styled.div`
  background-color: ${(props) => props.theme.ColorWhite};
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 100px;
  height: 150vh;
  width: 100%;
  margin-top: -90px;
  z-index: -10;
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 100px;
  margin-left: 120px;
  margin-bottom: 310px;
  width: 700px;
  
  @media screen and (max-width: 844px) {
    margin-left: 0;
    width: 100%;
  }
`

const CityContainer = styled.div`
  display: flex; 
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 844px) {
    width: 100%;
    display: flex;
    padding-left: 10px;
    font-family: 'Lato', sans-serif;
    font-style: italic;

    h5 {
      font-size: 18px;
      font-family: 'Lato', sans-serif;
      font-style: italic;
    }
}

`

const AppointmentPlaces = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  cursor: pointer;

  @media screen and (max-width: 844px) {
    width: 100%;
    display: flex;
    padding-left: 10px;
    font-family: 'Lato', sans-serif;
    font-style: italic;

    h5 {
      font-size: 18px;
      font-family: 'Lato', sans-serif;
      font-style: italic;
    }
}
`

const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: row;
  
  cursor: pointer;

  a { 
    text-decoration: none;
    color: ${(props) => props.theme.primary};
  }

  @media screen and (max-width: 844px) {
    width: 100%;
    display: flex;
    padding-left: 10px;

    h5 {
      font-size: 18px;
      font-family: 'Lato', sans-serif;
      font-style: italic;
    }
  }
`

const ModalContainer = styled.div`

  @media screen and (max-width: 844px) {
    width:  100%;
    display: flex;
    margin-top: -300px;
    margin-bottom: 280px;
  }
`

const ModalWithAdress = styled.div`
  display: flex;
  background-color: #f9f9f9;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 760px;
  margin-left: 200px;
  margin-top: 150px;
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 20px 80px 20px 80px;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 999;

  h5 {
      font-size: 21px;
      font-family: 'Lato', sans-serif;
      font-style: italic;
      margin-bottom: -40px;
      line-height: normal;
    }

  h6 {
    font-size: 16px;
    font-family: 'Lato', sans-serif;
    font-style: italic;
  }

  @media screen and (max-width: 844px) {
    width: 100%;
    display: flex;
    margin-left: 0px;
    margin-top: 0px;
  }
`

const MainInfoContainer = styled.div`
  display: flex;

  @media screen and (max-width: 844px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`

function ContactPageToMobile() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
        <Container>
          <MainInfoContainer>
          <InfoContainer>
            <CityContainer>
              <MdMapsHomeWork size="30px" color="#C39983"/>
              <H5>Brasília - DF</H5>
            </CityContainer>
            <AppointmentPlaces>
              <FaHospital size="30px" color="#C39983" />
              <H5>
                <a
                  onMouseEnter={() => setShowModal(true)}
                  onMouseLeave={() => setShowModal(false)}
                >Locais de atendimento</a>
              </H5>
            </AppointmentPlaces>
            <SocialMedia>
              <PiInstagramLogoFill size="30px" color="#C39983" />
              <H5>
                <a 
                  href="https://www.instagram.com/drapamelabioni/" 
                  target="_blank"
                  rel="noreferrer">
                    @drapamelabioni
                </a>
              </H5>
              &nbsp;
              <H5>                
                <a
                  href="https://www.instagram.com/ummasmulheres/" 
                  target="_blank"
                  rel="noreferrer">
                    @ummasmulheres
                </a></H5>
            </SocialMedia>
          </InfoContainer>
          <ModalContainer>
            {showModal && (
                <ModalWithAdress>
                  <H5>Hospital Sírio-Libanês - Brasília - DF</H5>
                  <h6>SGAS 613, s/n Lote 94, Asa Sul <br></br> (61) 99955-4558 / (61) 3044-8888 </h6>
                  <br></br>
                  <H5>Hospital Sírio-Libanês - Unidade Águas Claras</H5>
                  <h6>Rua Copaíba, 01, Shopping DF Century Plaza | Torre B 21º <br></br> (61) 3044-8888 </h6>
                  <br></br>
                  <H5>Clínica Unitá</H5>
                  <h6>Centro Clínico Sul, TORRE I Sala 222 e 224 <br></br> (61) 99267-0123 </h6>
                  <br></br>
                  <H5>Clínica Mama - Asa Norte</H5>
                  <h6>SEPN 516, Bloco E, Edifício Carlton Center 1º andar <br></br> (61) 3213-6625 </h6>
                </ModalWithAdress>
              )}
          </ModalContainer>
          </MainInfoContainer>
        </Container>
    </>
  )
}

export default ContactPageToMobile
