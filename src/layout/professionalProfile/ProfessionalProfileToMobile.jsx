import styled from 'styled-components'

import IconImage from '../../utils/iconImage/IconImage'

import H3 from '../../typograph/H3'
import H6 from '../../typograph/H6'

const Container = styled.div`
  display: flex;
  border-radius: 20px 100px 0px 100px;
  margin-top: -90px;
  background-color: ${(props) => props.theme.ColorWhite};
  font-family: 'Lato', sans-serif;
  font-style: italic;

  @media screen and (max-width: 844px) {
    width: 100%;
    display: flex;
    flex-direction: column;

    h3 {
      padding-top: 40px;
      padding-bottom: 40px;
    }
  }
`

const TextHeaderContainer = styled.div`
  text-align: center;
  padding: 0px 0 30px 0;

  h3 {
    font-family: 'Lato', sans-serif;
    font-style: italic;
  }
`

const TextBody = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.secondary};

  h6 {
    padding: 25px 27px 5px 30px;
    line-height: normal;
    font-family: 'Lato', sans-serif;
    font-style: italic;
  }
`

const KnowMoreContainer = styled.div`
  text-align: center;
  padding: 40px 0 20px 0;
  display: flex;
  justify-content: center;
`

const KnowMore = styled.div`
  cursor: pointer;
  font-size: 18px;
  line-height: 30px;
  font-weight: bold;
  transition: all 0.3s;
  position: relative;
  width: 200px;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.secondary};
  }

  :after {
    content: '';
    position: absolute;
    background-color: ${(props) => props.theme.secondary};
    height: 2px;
    width: 0;
    left: 0;
    bottom: -10px;
    transition: 0.3s;
  }

  :hover:after {
    width: 50%;
    margin-left: 50px;
  }
`

export default function ProfessionalProfileToMobile() {
  return (
    <>
      <Container>
        <TextHeaderContainer>
          <H3>Perfil Profissional</H3>
          <IconImage imageName="ProfessionalProfilePhoto" type="png" size="220px" />
          <TextBody>
            <H6>Graduação em Medicina pela Universidade Estadual do Oeste do Paraná</H6>
          </TextBody>
          <TextBody>
            <H6>
              Residência médica em Ginecologia e Obstetrícia pelo hospital e maternidade Santa
              Brígida - Curitiba/PR
            </H6>
          </TextBody>
          <TextBody>
            <H6>
              Especialista em Ginecologia e Obstetrícia pela Associação Médica Brasileira e
              Federação Brasileira das Associações de Ginecologia e Obstetrícia
            </H6>
          </TextBody>
          <TextBody>
            <H6>
              Especialização em Mastologia pelo Hospital Nossa Senhora das Graças (Curitiba-PR)
            </H6>
          </TextBody>
          <TextBody>
            <H6>
              Especialista em Mastologia pela Associação Médica Brasileira e Sociedade Brasileira de
              Mastologia
            </H6>
          </TextBody>
          <KnowMoreContainer>
            <KnowMore>
              <a
                href="https://www.escavador.com/sobre/197413385/pamela-ogassawara-bioni"
                target="_blank"
                rel="noreferrer"
              >
                Saiba mais
              </a>
            </KnowMore>
          </KnowMoreContainer>
        </TextHeaderContainer>
      </Container>
    </>
  )
}
