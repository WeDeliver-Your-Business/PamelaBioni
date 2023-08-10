import styled from 'styled-components'

import H5 from '../../typograph/H5'

const Footer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;

  h5 {
    font-size: 12px;
    line-height: 30px;
  }
`

function FooterToMobile() {
  return (
    <>
      <Footer>
        <H5>
          © 2023 - Pâmela Ogassawara Bioni - Todos os direitos reservados <br></br>Proudly made by
          We Deliver Your Business
        </H5>
      </Footer>
    </>
  )
}

export default FooterToMobile
