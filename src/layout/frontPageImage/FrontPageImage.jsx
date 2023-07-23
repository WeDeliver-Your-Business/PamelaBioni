import styled from 'styled-components'

import InfoPage from './InfoPage'

const StyledFlex = styled.div`
  position: relative;
  z-index: -1;

  /* @media screen and (min-width: 1024px) {
    width: 110%;
  } */
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

  /* @media screen and (min-width: 1024px) {
    width: 110%;
    border-radius: 20px 65px 20px 100px;
  } */
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
