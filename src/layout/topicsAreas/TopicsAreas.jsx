import styled from 'styled-components'

import H4 from '../../typograph/H4'
import H5 from '../../typograph/H5'

import IconImage from '../../utils/iconImage/IconImage'

const ColouredContainer = styled.div`
  background-color: ${(props) => props.theme.primary};
  width: 100%;
  border-radius: 20px 0px 20px 0px;
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

function TopicsAreas() {
  return (
    <>
      <ColouredContainer>
        <Container>
          <MainContainer>
            <H4>ÁREAS DE ATUAÇÃO</H4>
            <ImageContainer>
              <IconImage imageName="TopicsAreas_image" type="png" size="75" />
            </ImageContainer>
            <H5>Câncer de mama</H5>
          </MainContainer>
        </Container>
      </ColouredContainer>
    </>
  )
}

export default TopicsAreas
