import styled from 'styled-components'

import Burguer from './Burguer'

const Container = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  height: 105px;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.NavBarBackground};
`

export default function Navbar() {
  return (
    <Container>
      <Burguer />
    </Container>
  )
}
