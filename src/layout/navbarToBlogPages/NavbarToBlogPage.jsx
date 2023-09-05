import styled from 'styled-components'

// import Burguer from './Burguer'
import BurguerToMobile from './BurguerToBlogPage'

const Container = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  height: 105px;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.NavBarBackground};

  position: fixed;
  z-index: 100;
`

export default function NavbarToBlogPage() {
  return (
    <Container>
      <BurguerToMobile />
    </Container>
  )
}
