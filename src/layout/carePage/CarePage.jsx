import styled from 'styled-components'

import { AiFillHeart, AiOutlinePlusCircle, AiOutlineHeart } from 'react-icons/ai'

import H4 from '../../typograph/H4'
import H5 from '../../typograph/H5'

import IconImage from '../../utils/iconImage/IconImage'

const ColouredContainer = styled.div`
  background-color: ${(props) => props.theme.ColorWhite};
  width: 100%;
  border-radius: 20px 0px 20px 0px;
`

const MainContainer = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${(props) => props.theme.primary};
  border-radius: 0px 100px 20px 100px;
  //Retirar esse height mais a frente
  height: 1000px;
`
const Container = styled.div`
  padding-top: 100px;
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
  width: 305px;
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
                <WhiteBackground>
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
                <WhiteBackground>
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
                <IconImage imageName="Care3" type="png" />
                <WhiteBackground>
                  <CardTitle>
                    <H5>Quando procurar uma mastologista?</H5>
                  </CardTitle>
                  <CardIcon>
                    <AiFillHeart size="35px" />
                    <AiOutlinePlusCircle size="35px" />
                  </CardIcon>
                </WhiteBackground>
              </CardContainer>
            </ImageContainer>
          </Container>
        </MainContainer>
      </ColouredContainer>
    </>
  )
}

export default CarePage
