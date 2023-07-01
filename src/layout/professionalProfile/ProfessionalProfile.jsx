import styled from 'styled-components'

import IconImage from '../../utils/iconImage/IconImage'

import H2 from '../../typograph/H2'
import H3 from '../../typograph/H3'
import H4 from '../../typograph/H4'

const MainContainer = styled.div`
  display: flex;
`

const TextHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: ${(props) => props.theme.secondary};
  background-color: ${(props) => props.theme.primary};
  display: flex;
  border-radius: 20px 100px 20px 100px;
  width: 100%;
  height: 872px;
`

const BulletInfosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export default function ProfessionalProfile() {
  return (
    <>
      <MainContainer>
        <IconImage imageName="ProfessionalProfilePhoto" type="png" />
        <TextHeaderContainer>
          <H2>Perfil Profissional</H2>
          <H3>Dra. Pâmela Ogassawara Bioni</H3>
          <BulletInfosContainer>
            <IconImage imageName="PamIcon" type="png" />
            <H4>Graduação em Medicina pela Universidade Estadual do Oeste do Paraná</H4>
          </BulletInfosContainer>
          <BulletInfosContainer>
            <IconImage imageName="PamIcon" type="png" />
            <H4>
              Residência média em Ginecologia e Obstetrícia pelo hospital e maternidade Santa
              Brígida - Curitiba/PR
            </H4>
          </BulletInfosContainer>
          <BulletInfosContainer>
            <IconImage imageName="PamIcon" type="png" />
            <H4>
              Especialista em Ginecologia e Obstetrícia pela Associação Médica Brasileira e
              Federação Brasileira das Associações de Ginecologia e Obstetrícia
            </H4>
          </BulletInfosContainer>
          <BulletInfosContainer>
            <IconImage imageName="PamIcon" type="png" />
            <H4>
              Especialização em Mastologia pelo Hospital Nossa Senhora das Graças (Curitiba-PR)
            </H4>
          </BulletInfosContainer>
          <BulletInfosContainer>
            <IconImage imageName="PamIcon" type="png" />
            <H4>
              Especialista em Mastologia pela Associação Médica Brasileira e Sociedade Brasileira de
              Mastologia
            </H4>
          </BulletInfosContainer>
        </TextHeaderContainer>
      </MainContainer>
    </>
  )
}
