import { useTypewriter, Cursor } from 'react-simple-typewriter'

import styled from 'styled-components'

import IconImage from '../../utils/iconImage/IconImage'

const Container = styled.div`
  display: none;
  font-family: 'Lato', sans-serif;
  font-style: italic;

  @media (max-width: 502px) {
    width: 100%;
    height: 18vh;
    margin-top: 30px;
    background-color: ${(props) => props.theme.primary};

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: ${(props) => props.theme.secondary};

    border-radius: 20px 60px 20px 60px;
  }
`

const MainContainer = styled.div`
  padding: 0px 20px 0px 20px;
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px 0 2px 0;
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
  font-family: 'Lato', sans-serif;
  font-style: italic;
`

function TopicsAreasToMobile() {
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
      <Container>
        <ImageContainer>
          <IconImage imageName="TopicsAreas_image" type="png" size="45" />
        </ImageContainer>
        <MainContainer>
          <AnimatedText>{text}</AnimatedText>
          <StyledCursorSpan>
            <Cursor cursorBlinking="false" />
          </StyledCursorSpan>
        </MainContainer>
      </Container>
    </>
  )
}

export default TopicsAreasToMobile
