import styled from 'styled-components'

import { AiFillHeart, AiOutlinePlusCircle } from 'react-icons/ai'
import { PiWhatsappLogoThin } from 'react-icons/pi'

import H4 from '../../typograph/H4'
import H5 from '../../typograph/H5'

import IconImage from '../../utils/iconImage/IconImage'

const ColouredContainer = styled.div`
  background-color: ${(props) => props.theme.ColorWhite};
  width: 100%;
  border-radius: 20px 0px 20px 0px;
`

const MainContainer = styled.div`
  padding-top: 80px;
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${(props) => props.theme.primary};
  border-radius: 0px 100px 20px 100px;
`
const Container = styled.div`
  padding-bottom: 100px;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 150px;
  margin: 40px 0 20px 0;
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 100;
`

const WhiteBackground = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.ColorWhite};
  width: ${(props) => props.width};
  height: 375px;
  border-radius: 20px 100px 20px 100px;
  position: absolute;
  z-index: -1;
  cursor: pointer;
  margin-top: 70px;
  transition: transform 1s;

  :hover {
    transform: translate(0px, 190px);
  }
`
const CardTitle = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 180px;
`
const CardIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
`
const CardHelpContainer = styled.div`
  margin-top: 250px;
  padding-top: 50px;
  margin-bottom: 300px;
  background-color: ${(props) => props.theme.ColorWhite};
  width: 790px;
  height: 335px;
  border-radius: 20px 100px 20px 100px;
`
const TextCardHelp = styled.div`
  display: flex;
  flex-direction: column;
`
const ImageCardHelp = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0 20px 0;
`
const StyledImageCard = styled.div`
  cursor: pointer;
`
const EmailLinkContainer = styled.div`
  text-align: center;

  a {
    cursor: pointer;
    font-size: 24px;
    font-weight: bold;
    line-height: 50px;
    transition: all 0.3s;
    position: relative;

    :after {
      content: '';
      position: absolute;
      background-color: ${(props) => props.theme.secondary};
      height: 2px;
      width: 0;
      left: 0;
      bottom: -10px;
      transition: 0.3s;
    }

    :hover:after {
      width: 100%;
    }
  }
`

function CarePage() {
  return (
    <>
      <ColouredContainer>
        <MainContainer>
          <Container>
            <H4>CUIDADOS</H4>
            <ImageContainer>
              <CardContainer>
                <IconImage imageName="Care1" type="png" />
                <WhiteBackground width="308px">
                  <CardTitle>
                    <H5>Quando procurar uma mastologista?</H5>
                  </CardTitle>
                  <CardIcon>
                    <AiFillHeart size="35px" />
                    <AiOutlinePlusCircle size="35px" />
                  </CardIcon>
                </WhiteBackground>
              </CardContainer>
              <CardContainer>
                <IconImage imageName="Care2" type="png" />
                <WhiteBackground width="305px">
                  <CardTitle>
                    <H5>Qual a diferença entre nódulo e cisto mamário?</H5>
                  </CardTitle>
                  <CardIcon>
                    <AiFillHeart size="35px" />
                    <AiOutlinePlusCircle size="35px" />
                  </CardIcon>
                </WhiteBackground>
              </CardContainer>
              <CardContainer>
                <IconImage imageName="Care3" type="png" />
                <WhiteBackground width="305px">
                  <CardTitle>
                    <H5>Quando devo fazer exames de mama?</H5>
                  </CardTitle>
                  <CardIcon>
                    <AiFillHeart size="35px" />
                    <AiOutlinePlusCircle size="35px" />
                  </CardIcon>
                </WhiteBackground>
              </CardContainer>
            </ImageContainer>
          </Container>
          <CardHelpContainer>
            <TextCardHelp>
              <H5>PRECISANDO DE AJUDA?</H5>
              <H5>Fale comigo!</H5>
              <ImageCardHelp>
                <StyledImageCard>
                  <PiWhatsappLogoThin size="70px" />
                </StyledImageCard>
              </ImageCardHelp>
              <EmailLinkContainer>
                <a>pamelabioni@gmail.com</a>
              </EmailLinkContainer>
            </TextCardHelp>
          </CardHelpContainer>
        </MainContainer>
      </ColouredContainer>
    </>
  )
}

export default CarePage
