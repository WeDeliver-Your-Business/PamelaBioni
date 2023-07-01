import styled from 'styled-components'

import InfoPage from '../infoPage/InfoPage'

const StyledFlex = styled.div`
  position: relative;
  z-index: -1;
`
const StyledImage = styled.div`
  background-image: url('${(props) => props.image}');
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;
  height: 120vh;
`
const StyledContainer = styled.div`
  background-color: ${(props) => props.theme.white};

  display: flex;
  flex-direction: column;

  /* height: calc(100vh - 60px); */
  overflow-y: auto;

  &:before,
  &:after {
    content: '';
    margin: auto;
  }
`

const InfoContainer = styled.div`
  background-color: white;
  border-radius: 20px 100px 20px 100px;
`

function FrontPageImage({ children, image }) {
  return (
    <>
      <StyledFlex>
        <StyledImage image={image} />
        <StyledContainer>{children}</StyledContainer>
      </StyledFlex>
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
