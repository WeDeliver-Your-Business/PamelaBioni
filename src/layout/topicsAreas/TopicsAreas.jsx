import { useTypewriter, Cursor } from 'react-simple-typewriter'

import styled from 'styled-components'

import H4 from '../../typograph/H4'

import IconImage from '../../utils/iconImage/IconImage'

const ColouredContainer = styled.div`
  background-color: ${(props) => props.theme.primary};
  width: 100%;
  border-radius: 20px 0px 20px 0px;

  @media screen and (max-width: 844px) {
    width: 100%;
    display: none;
  }
`

const Container = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.secondary};
  background-color: ${(props) => props.theme.ColorWhite};
  border-radius: 20px 100px 20px 100px;
`

const MainContainer = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0 20px 0;
`

const AnimatedText = styled.span`
  margin: auto;
  font-size: 24px;
  font-weight: bold;
  line-height: 50px;
`
const StyledCursorSpan = styled.span`
  font-family: 'Sans-serif', cursive;
  color: ${(props) => props.theme.primary};
  font-weight: bold;
  font-size: 20px;
`

function TopicsAreas() {
  const [text] = useTypewriter({
    words: [
      'Doença benigna da mama',
      'Cistos mamários',
      'Nódulos mamários',
      'Fibroadenoma',
      'Reconstrução mamária',
      'Síndrome de predisposição hereditária ao câncer de mama',
      'Ginecomastia',
      'Mastite'
    ],
    loop: 0,
    typeSpeed: 70,
    delaySpeed: 1000,
    deleteSpeed: 20
  })
  return (
    <>
      <ColouredContainer>
        <Container>
          <MainContainer>
            <H4>ÁREAS DE ATUAÇÃO</H4>
            <ImageContainer>
              <IconImage imageName="TopicsAreas_image" type="png" size="75" />
            </ImageContainer>
            <AnimatedText>{text}</AnimatedText>
            <StyledCursorSpan>
              <Cursor cursorBlinking="false" />
            </StyledCursorSpan>
          </MainContainer>
        </Container>
      </ColouredContainer>
    </>
  )
}

export default TopicsAreas
