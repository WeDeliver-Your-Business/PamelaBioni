import styled from 'styled-components'

import Burguer from './Burguer'

const Container = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  height: 105px;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.NavBarBackground};

  @media screen and (max-width: 766px) {
    justify-content: space-between;
  }
  @media screen and (min-width: 767px) and (max-width: 1023px) {
    width: 110%;
    gap: 0;
  }
  @media screen and (min-width: 1024px) {
    width: 110%;
  }
`

export default function Navbar() {
  return (
    <Container>
      <Burguer />
    </Container>
  )
}
