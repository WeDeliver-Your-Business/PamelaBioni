import styled from 'styled-components'

const StyledFlex = styled.div`
  display: flex;
`
const StyledImage = styled.div`
  background-image: url('${(props) => props.image}');
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;
  height: 90vh;
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

function FrontPageImage({ children, image }) {
  return (
    <>
      <StyledFlex>
        <StyledImage image={image} />
        <StyledContainer>{children}</StyledContainer>
      </StyledFlex>
    </>
  )
}

FrontPageImage.defaultProps = {
  image: '/frontPageImage.png'
}

export default FrontPageImage
