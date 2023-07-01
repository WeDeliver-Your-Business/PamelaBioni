import styled from 'styled-components'

import IconImage from '../../utils/iconImage/IconImage'

import H3 from '../../typograph/H3'
import H5 from '../../typograph/H5'

const Container = styled.div`
  display: flex;
`
const MainTextContainer = styled.div`
  color: ${(props) => props.theme.secondary};
  background-color: ${(props) => props.theme.primary};
  display: flex;
  flex-direction: column;
  border-radius: 20px 100px 0px 100px;
`
const TextHeaderContainer = styled.div`
  text-align: center;
  padding: 100px 0 30px 0;
`
const TextBody = styled.div`
  display: flex;
  align-items: center;

  h5 {
    padding: 25px 27px 5px 30px;
  }
`
const KnowMoreContainer = styled.div`
  text-align: center;
  padding: 40px 0 80px 0;
`
const KnowMore = styled.a`
  cursor: pointer;
  font-size: 36px;
  line-height: 77px;
  font-weight: bold;
  transition: all 0.3s;
  position: relative;

  :after {
    content: '';
    position: absolute;
    background-color: ${(props) => props.theme.ColorWhite};
    height: 2px;
    width: 0;
    left: 0;
    bottom: -10px;
    transition: 0.3s;
  }

  :hover:after {
    width: 100%;
  }
`

export default function ProfessionalProfile() {
  return (
    <>
      <Container>
        <IconImage imageName="ProfessionalProfilePhoto" type="png" />
        <MainTextContainer>
          <TextHeaderContainer>
            <H3>Perfil Profissional</H3>
            <H3>Dra. Pâmela Ogassawara Bioni</H3>
          </TextHeaderContainer>
          <TextBody>
            <IconImage imageName="PamIcon" type="png" />
            <H5>Graduação em Medicina pela Universidade Estadual do Oeste do Paraná</H5>
          </TextBody>
          <TextBody>
            <IconImage imageName="PamIcon" type="png" />
            <H5>
              Residência média em Ginecologia e Obstetrícia pelo hospital e maternidade Santa
              Brígida - Curitiba/PR
            </H5>
          </TextBody>
          <TextBody>
            <IconImage imageName="PamIcon" type="png" />
            <H5>
              Especialista em Ginecologia e Obstetrícia pela Associação Médica Brasileira e
              Federação Brasileira das Associações de Ginecologia e Obstetrícia
            </H5>
          </TextBody>
          <TextBody>
            <IconImage imageName="PamIcon" type="png" />
            <H5>
              Especialização em Mastologia pelo Hospital Nossa Senhora das Graças (Curitiba-PR)
            </H5>
          </TextBody>
          <TextBody>
            <IconImage imageName="PamIcon" type="png" />
            <H5>
              Especialista em Mastologia pela Associação Médica Brasileira e Sociedade Brasileira de
              Mastologia
            </H5>
          </TextBody>
          <KnowMoreContainer>
            <KnowMore>Saiba mais</KnowMore>
          </KnowMoreContainer>
        </MainTextContainer>
      </Container>
    </>
  )
}
