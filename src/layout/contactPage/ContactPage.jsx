import styled from 'styled-components'

import IconImage from '../../utils/iconImage/IconImage'

const ColouredContainer = styled.div`
  background-color: ${(props) => props.theme.primary};
  width: 100%;
  border-radius: 30px 0px 0px 0px;
`

const Container = styled.div`
  background-color: ${(props) => props.theme.ColorWhite};
  border-radius: 20px 100px 0px 0px;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 100px;
`

const ContainerArrow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const StyledArrow = styled.div`
  padding-bottom: 25px;
`
const LineColour = styled.div`
  background-color: ${(props) => props.theme.primary};
  box-sizing: border-box;
  padding: 0.5px 0;
`

function ContactPage() {
  return (
    <>
      <ColouredContainer>
        <Container>
          <ContainerArrow>
            <StyledArrow>
              <IconImage imageName="ArrowDown" type="png" size="40px" />
            </StyledArrow>
          </ContainerArrow>
          <LineColour />
        </Container>
      </ColouredContainer>
    </>
  )
}

export default ContactPage
